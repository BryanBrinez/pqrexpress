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
    const { radic, res, status, contact, mean } = await request.json();

    if (mean == "Correo electrónico") {
    

      const correoHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Respuesta a tu PQR</title>
</head>
<body>
    <div style="text-align: center;">
        
    </div>
    <div style="font-family: Arial, sans-serif; padding: 20px;">
        <h1>Respuesta a tu PQR</h1>
        <p>Hola ${contact},</p>
        <p>Queremos informarte que hemos procesado tu PQR con radicado #${radic}. A continuación, encontrarás nuestra respuesta:</p>
        <hr>
        <p>${res}</p>
        <hr>
        <p>Si tienes alguna pregunta adicional o necesitas más ayuda, no dudes en contactarnos.</p>
        <p>Gracias por utilizar nuestro servicio.</p>
        <p>Atentamente,</p>
        <p>PQRExpress</p>
    </div>
</body>
</html>
`;

      try {
        const transporter = createTransport({
          service: "hotmail", // El servicio de correo que estás utilizando (puedes cambiarlo)
          auth: {
            user: "pqrexpress@hotmail.com", // Tu dirección de correo electrónico
            pass: "express123", // Tu contraseña
          },
        });

        const mailOptions = {
          from: "pqrexpress@hotmail.com", // Tu dirección de correo electrónico
          to: contact, // El destinatario
          subject: "Su PQR con con radicado #" + radic + " Ha sido respondido",
          html: correoHTML, // Texto del correo
        };

        const info = await transporter.sendMail(mailOptions);
        console.log("Correo enviado con éxito:", info.response);
      } catch (error) {
        console.error("Error al enviar el correo:", error);
      }
    }

    if (mean == "Teléfono") {
      //aquí va el envio por sms o por whatsapp
      console.log("telefono");
      console.log(contact);

      const accountSid = "AC0f69b1cf7a3fb658bbc7ab519654050b";
      const authToken = "3acdeb9a8a347cccec7861da15ae2926";
      const client = require("twilio")(accountSid, authToken);

      client.messages
        .create({
          body: "Su PQR con radicado #" + radic + " ha sido respondido: " + res,
          from: "+15415260353", // Twilio free number
          to: "+57" + contact,
        })
        .then((message) => console.log(message.sid));
    }

    const filter = { radicado: radic };
    const update = { response: res, status: status };

    const pqrFound = await PQR.findOneAndUpdate(filter, update);

    return NextResponse.json(pqrFound);
  } catch (error) {
    return new Response("Failed to PUT all prompts", { status: 500 });
  }
};
