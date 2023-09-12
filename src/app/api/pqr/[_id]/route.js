import { NextResponse } from "next/server";
import { connectDB } from "@/libs/mongodb";
import PQR from "@/models/pqr";

export const GET = async (request, { params }) => {
  try {
    await connectDB();

    const pqrFound = await PQR.findOne({ radicado: params._id });

    return NextResponse.json(pqrFound);
  } catch (error) {
    return new Response("Failed to fetch all prompts", { status: 500 });
  }
};


