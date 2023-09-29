"use client";
import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "@/components/Header";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function Page({ params }) {
  const [pqr, setPQR] = useState(null);

  // Función para formatear la fecha y hora
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

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
            <p className="italic">Fecha de Creación: {formatDateTime(pqr?.createdAt)}</p>
            <p className="font-semibold">
              Ubicación: {pqr?.departament}, {pqr?.city}
            </p>
          </div>
          <div className="p-4">
            <h3 className="text-lg font-semibold mb-2">
              Asunto: {pqr?.subject}
            </h3>
            <p>{pqr?.description}</p>
            <h3 className="text-lg font-semibold mt-4">Respuesta: <span className={`px-2 py-1 text-white text-sm rounded-full ${pqr?.status === "Pendiente" ? "bg-red-500" : "bg-green-500"}`}>{pqr?.status}</span></h3>
            <p>{pqr?.response}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
