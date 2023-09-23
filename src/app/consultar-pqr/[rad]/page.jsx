"use client";
import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "@/components/Header";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function Page({ params }) {
  const [pqr, setPQR] = useState(null);

  const fetchPQR = async () => {
    try {
      const res = await Axios.get(`/api/pqr/${params.rad}`);
      setPQR(res.data);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  useEffect(() => {
    fetchPQR();
  }, []);
  return (
    <div className="w-screen h-fit flex items-center text-black flex-col px-4 bg-white ">
      <Header />

      <div className="flex-1 h-screen px-4 py-3 flex flex-col justify-center ">
        <div className="flex w-full justify-start items-center">
          <Link href={"/"}>
            <MdArrowBack size={25} />
          </Link>
        </div>

        <div className="bg-gray-100 p-4 rounded-lg shadow-md my-4">
          <div className="bg-colorOne text-white p-2 rounded-t-lg">
            <h2 className="text-xl font-bold">Radicado #{pqr?.radicado}</h2>
            <p className="italic">Fecha de Creación: {pqr?.createdAt}</p>
            <p className="font-semibold">
              Ubicación: {pqr?.departament}, {pqr?.city}
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Asunto: {pqr?.subject}
            </h3>
            <p>{pqr?.description}</p>
            <h3 className="text-lg font-semibold mt-4">Respuesta:</h3>
            <p>{pqr?.response}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
