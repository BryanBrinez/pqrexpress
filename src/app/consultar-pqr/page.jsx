"use client";
import { useRouter } from "next/navigation";
import Axios from "axios";
import { useState, useEffect } from "react";

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
      <div className="flex items-center justify-center w-screen h-14 bg-slate-500">
        logo
      </div>

      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="py-4 text-3xl font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
          Consultar solicitud
        </h1>
        <h2 className="text-lg font-semibold leading-none  tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
          Ingrese el numero de su radicado del PQR
        </h2>

        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

        <form className="py-6" onSubmit={handleSubmit}>
          <div className="relative z-0 w-full mb-6 group ">
            <input
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
