"use client";
import { useState, useEffect } from "react";
import Axios from "axios";
import { MdArrowBack } from "react-icons/md";
import swal from "sweetalert";
import Link from "next/link";
import Header from "@/components/Header";

export default function Page({ params }) {
  const [pqr, setPQR] = useState({});
  const [response, setResponse] = useState("");
  const { radic } = params;

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
      const res = await Axios.get(`/api/pqr/${params.radic}`);
      setPQR(res.data);
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios.put("/api/pqr", {
        radic,
        res: response,
        status: "Finalizado",
      });
      console.log(res);

      swal({
        title: "La respuesta del PQR ha sido enviada",
        icon: "success",
      });
    } catch (error) {
      //setError(error.response?.data.message);
    }
  };

  useEffect(() => {
    fetchPQR();
  }, []);

  return (
    <div className="text-black w-screen h-screen flex items-center flex-col px-4 bg-white">
      <Header />

      <div className="flex-1 w-11/12 flex  overflow-y-auto justify-center py-3">
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          className="flex-1 flex   flex-col bg-tarjeta p-4 px-4  rounded-lg "
        >
          <div className="flex w-full justify-between items-center">
            <Link href={"/dashboard/pqrs"}>
              <MdArrowBack size={25} />
            </Link>

            <p className="text-xs text-slate-600">{formatDateTime(pqr?.createdAt)}</p>
          </div>

          <div className="py-3 overflow-y-auto">
            <h1 className="font-bold">
              {pqr?.subject}
              {pqr?.response !== "" && (
                <span className="px-2 py-1 ml-5 text-white text-xs rounded-full bg-green-500">{pqr?.type} Finalizada</span>
              )}
              {pqr?.response === "" && (
                <span className="px-2 py-1 ml-5 text-white text-xs rounded-full bg-red-500">{pqr?.type} Pendiente</span>
              )}
              </h1>
            <p className="text-s text-slate-600">{pqr?.fullname}</p>
            <p className=" py-2 text-slate-800 font-semibold">
              {pqr?.description}
            </p>

            {pqr?.mean != null && (
              <p>Medio de respuesta: <span className="text-s text-slate-600">{pqr?.mean}</span></p>
            )}
          </div>

        {pqr?.response !== "" && (
          <div className="py-3 overflow-y-auto">
            <p className="text-s text-slate-600">Respuesta</p>
            <p className=" py-2 text-slate-800 font-semibold">
              {pqr?.response}
            </p>
          </div>
        )}

        {pqr?.response === "" && (

          <div className="mt-auto flex flex-col">
            <form onSubmit={handleSubmit}>
              <div className="flex justify-center ">
                <input
                  className="mb-2 h-14 border w-11/12 border-gray-400 px-4"
                  type="text"
                  placeholder="Tu respuesta"
                  onChange={(e) => setResponse(e.target.value)}
                />
              </div>

              <div className="flex justify-center items-start">
                <button
                  type="submit"
                  className=" bg-colorOne w-3/4 text-white font-bold py-2 rounded "
                >
                  Responder
                </button>
              </div>
            </form>
          </div>
        )}
        </div>
      </div>

      <div className="flex items-center justify-center h-14 bg-slate-500">
        {/* Contenido del navbar */}
      </div>
    </div>
  );
}
