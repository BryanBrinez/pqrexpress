import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import PQR from "@/models/pqr";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    console.log(params._id);
    const pqrFound = await PQR.findOne({ radicado: params._id });

    return NextResponse.json(pqrFound);
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  try {
    await connectDB();
    const { radic,res} = await request.json();

    const filter = { radicado: radic };
    const update = { response: res };
   
    const pqrFound = await PQR.findOneAndUpdate(filter,update);

    return NextResponse.json(pqrFound);
  } catch (error) {
    return new Response("Failed to PUT all prompts", { status: 500 });
  }
};
