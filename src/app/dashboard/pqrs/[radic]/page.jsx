"use client";
import { useState, useEffect } from "react";
import Axios from "axios";
import { MdArrowBack } from "react-icons/md";
import swal from "sweetalert";
import Link from "next/link";

export default function Page({ params }) {
  const [pqr, setPQR] = useState({});
  const [response, setResponse] = useState("");
  const {radic} = params

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
        res: response
      });
      console.log(res)
      if (res.statusText == "OK") {
        swal({
          title: "La respuesta del PQR ha sido enviada",
          icon: "success",
        });
      }
    } catch (error) {
      //setError(error.response?.data.message);
    }
  };

  useEffect(() => {
    fetchPQR();
  }, []);

  return (
    <div className="text-black w-screen h-screen flex items-center flex-col px-4 bg-white">
      <div className="flex items-center justify-center w-screen h-14 bg-slate-500">
        logo
      </div>

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

            <p className="text-xs text-slate-600">{pqr?.createdAt}</p>
          </div>

          <div className="py-3 overflow-y-auto">
            <h1 className="font-bold">{pqr?.subject}</h1>
            <p className="text-s text-slate-600">{pqr?.fullname}</p>
            <p className=" py-2 text-slate-800 font-semibold">{pqr?.description}</p>
          </div>

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
                <button type="submit" className=" bg-colorOne w-3/4 text-white font-bold py-2 rounded ">
                  Responder
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center h-14 bg-slate-500">
        {/* Contenido del navbar */}
      </div>
    </div>
  );
}
