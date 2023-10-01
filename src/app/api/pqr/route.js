import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import { createTransport, sendMail } from "nodemailer";
import PQR from "@/models/pqr";

export async function POST(request) {
  const {
    fullname,
    email,
    number,
    departament,
    city,
    subject,
    description,
    type,
    mean,
  } = await request.json();
  console.log(fullname, email, number, departament, city, subject, description);

  function generarValorAleatorio() {
    const min = 100000;
    const max = 999999;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  try {
    await connectDB();

    const listPQR = await PQR.find({});
    const rad = `${listPQR.length + 1}${generarValorAleatorio()}`;
    console.log(listPQR.length);
    console.log(rad);

    const newPQR = new PQR({
      radicado: rad,
      fullname,
      email,
      number,
      departament,
      city,
      subject,
      description,
      response: "",
      mean,
      type,
      status: "Pendiente",
    });

    const savedPQR = await newPQR.save();

    console.log(savedPQR);

    return NextResponse.json(savedPQR);
  } catch (error) {
    if (error instanceof Error) {
      return NextResponse.json(
        {
          message: error.message,
        },
        { status: 400 }
      );
    }
  }
}

export const GET = async (request) => {
  try {
    await connectDB();

    const repuesto = await PQR.find({}).sort({ createdAt: -1 });

    return new Response(JSON.stringify(repuesto), { status: 200 });
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PUT = async (request) => {
  try {
    await connectDB();
    const { radic, res, status, email, mean } = await request.json();

   

    if (mean == "Correo electrónico") {
      console.log("entro al correo")
      const transporter = createTransport({
        service: "hotmail", // El servicio de correo que estás utilizando (puedes cambiarlo)
        auth: {
          user: process.env.EMAIL_USER, // Tu dirección de correo electrónico
          pass: process.env.EMAIL_PASS, // Tu contraseña
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER, // Tu dirección de correo electrónico
        to: email, // El destinatario
        subject: "Su PQR con con radicado #" + radic + " Ha sido respondido",
        text: res, // Texto del correo
        // Puedes usar "html" en lugar de "text" para enviar correo en formato HTML
      };

      // Envío del correo electrónico
      transporter
        .sendMail(mailOptions)
        .then((info) => {
          console.log("Correo enviado con éxito:", info.response);
        })
        .catch((error) => {
          console.error("Error al enviar el correo:", error);
        });
    }
    if(mean == "Teléfono"){
      //aquí va el envio por sms o por whatsapp
      console.log("telefono")
    }

    const filter = { radicado: radic };
    const update = { response: res, status: status };

    const pqrFound = await PQR.findOneAndUpdate(filter, update);

    return NextResponse.json(pqrFound);
  } catch (error) {
    return new Response("Failed to PUT all prompts", { status: 500 });
  }
};
