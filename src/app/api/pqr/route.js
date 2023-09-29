import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import PQR from "@/models/pqr";

export async function POST(request) {
  const { fullname, email, number, departament, city, subject, description, type, mean } =
    await request.json();
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
     console.log(listPQR.length)
     console.log(rad)

    const newPQR = new PQR({
      radicado : rad,
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
      await connectDB()

      const repuesto = await PQR.find({}).sort({ createdAt: -1 })

      return new Response(JSON.stringify(repuesto), { status: 200 })
  } catch (error) {
      return new Response("Failed to fetch all prompts", { status: 500 })
  }
} 

export const PUT = async (request) => {
  try {
    await connectDB();
    const { radic, res, status} = await request.json();

    

    const filter = { radicado: radic };
    const update = { response: res, status: status };
   
    const pqrFound = await PQR.findOneAndUpdate(filter,update);


    return NextResponse.json(pqrFound);
  } catch (error) {
    return new Response("Failed to PUT all prompts", { status: 500 });
  }
};