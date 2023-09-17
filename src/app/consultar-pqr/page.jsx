"use client";
import { useRouter } from "next/navigation";
import Axios from "axios";
import { useState, useEffect } from "react";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import Header from "@/components/Header";

export default function Page() {
  const [radicado, setRadicado] = useState(null);
  const router = useRouter();
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await Axios.get(`/api/pqr/${radicado}`);
      console.log(res);

      res.data == null
        ? setError("No se ha encontrado ningún PQR con ese radicado")
        : router.push(`/consultar-pqr/${radicado}`);

      //
    } catch (error) {
      setError(error.response?.data);
    }
  };
  return (
    <div className="w-screen h-screen flex items-center text-black flex-col px-4 bg-white ">
      <Header />

      <div className="flex-1 flex flex-col justify-center items-center">
        <div className="flex w-full justify-start items-center">
          <Link href={"/"}>
            <MdArrowBack size={25} />
          </Link>
        </div>

        <h1 className="py-4 text-3xl font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
          Consultar solicitud
        </h1>

        {error && (
          <div
            id="alert-2"
            className="flex items-center p-4 mb-4 text-red-800 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400"
            role="alert"
          >
            <svg
              className="flex-shrink-0 w-4 h-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="ml-3 text-sm font-medium">{error}</div>
            <button
              type="button"
              onClick={() => setError("")}
              className="ml-auto -mx-1.5 -my-1.5 bg-red-50 text-red-500 rounded-lg focus:ring-2 focus:ring-red-400 p-1.5 hover:bg-red-200 inline-flex items-center justify-center h-8 w-8 dark:bg-gray-800 dark:text-red-400 dark:hover:bg-gray-700"
              data-dismiss-target="#alert-2"
              aria-label="Close"
            >
              <span className="sr-only">Close</span>
              <svg
                className="w-3 h-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
            </button>
          </div>
        )}
        <h2 className="text-lg font-semibold leading-none  tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
          Ingrese el numero de su radicado del PQR
        </h2>

        <form className="py-6" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6 group ">
            <input
              style={{ borderColor: error ? "red" : "" }}
              type="number"
              name="radicado"
              autoComplete="off"
              id="floating_email"
              className=" block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
              placeholder=" "
              onChange={(e) => setRadicado(e.target.value)}
              required
            />
            <label
              htmlFor="radicado"
              className="peer-focus:font-medium absolute text-2xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
            >
              Radicado
            </label>
          </div>

          
          <div className="flex justify-center">
            <button className=" bg-colorOne w-3/4 text-white font-bold py-2 rounded ">
              Buscar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
