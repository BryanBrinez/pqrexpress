"use client";
import { useState, useEffect } from "react";
import Axios from "axios";
import swal from "sweetalert";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import Header from "@/components/Header";

export default function Page() {
  const [fullnames, setFullNames] = useState("Anonimo");
  const [email, setEmail] = useState("Anonimo");
  const [cel, setCel] = useState("Anonimo");
  const [dep, setDep] = useState("Anonimo");
  const [city, setCity] = useState("Anonimo");
  const [subject, setSubject] = useState(null);
  const [description, setDescription] = useState(null);
  const [type, setType] = useState(null);
  const [mean, setMean] = useState(null);
  const [error, setError] = useState(null);
  const [showInfo, setShowInfo] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    //console.log(fullnames,email,cel,dep,city,subject,description,error)

    try {
      const res = await Axios.post("/api/pqr", {
        fullname: fullnames,
        email,
        number: cel,
        departament: dep,
        city,
        subject,
        description,
        type,
        mean,
      });

      swal({
        title: "Se ha enviado su PQR",
        text:
          "Su radicado con el cual puede revisar su PQR es: " +
          res.data.radicado,
        icon: "success",
      });
    } catch (error) {
      setError(error.response?.data.message);
    }
  };
  return (
    <div className="w-screen h-fit flex items-center text-black flex-col px-4 bg-white ">
      <Header />

      <div className="flex-1 h-screen px-4 py-3 flex flex-col justify-center ">
        <div className="flex w-full justify-start items-center">
          <Link href={"/"}>
            <MdArrowBack size={25} />
          </Link>
        </div>

        <h1 className="py-3 text-3xl font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
          Registra tu solicitud
        </h1>

        <p className="text-lg w-5/6 font-semibold leading-none  tracking-tight text-colorThree md:text-5xl lg:text-6xl">
          Debe tener en cuenta que la informacion a suministrar debe ser clara y
          completa.
        </p>
        <div className="flex gap-2 py-2 mt-2 ">
          <span className="mr-2 text-lg font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl  ">
            ¿PQR Anonimo?
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input onChange={() => setShowInfo(!showInfo)} type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
          </label>
        </div>

        <form
          className="flex flex-col justify-start items-start"
          onSubmit={handleSubmit}
        >
          {error && (
            <div className="bg-red-500 text-white p-2 mb-2">{error}</div>
          )}

          {!showInfo && (
            <>
            <h2 className="my-3 text-lg font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
            Información de contacto
          </h2>

          <div className="relative z-0 w-full mb-6 group ">
              <input
                style={{ borderColor: error ? "red" : "" }}
                type="text"
                name="fullName"
                autoComplete="off"
                id="fullName"
                className=" block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setFullNames(e.target.value)}
                required
              />
              <label
                htmlFor="fullName"
                className="peer-focus:font-medium absolute text-xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Nombre Completo
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group ">
              <input
                style={{ borderColor: error ? "red" : "" }}
                type="email"
                name="email"
                autoComplete="off"
                id="email"
                className=" block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label
                htmlFor="email"
                className="peer-focus:font-medium absolute text-xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Correo electronico
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group ">
              <input
                style={{ borderColor: error ? "red" : "" }}
                type="number"
                name="cel"
                autoComplete="off"
                id="cel"
                className=" block py-2.5 px-0 w-full text-xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setCel(e.target.value)}
                required
              />
              <label
                htmlFor="cel"
                className="peer-focus:font-medium absolute text-xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Celular
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group ">
              <input
                style={{ borderColor: error ? "red" : "" }}
                type="text"
                name="dep"
                autoComplete="off"
                id="dep"
                className=" block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setDep(e.target.value)}
                required
              />
              <label
                htmlFor="dep"
                className="peer-focus:font-medium absolute text-xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Departamento
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group ">
              <input
                style={{ borderColor: error ? "red" : "" }}
                type="text"
                name="city"
                autoComplete="off"
                id="city"
                className=" block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setCity(e.target.value)}
                required
              />
              <label
                htmlFor="city"
                className="peer-focus:font-medium absolute text-xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Ciudad
              </label>
            </div>
            </>
          )}


          <div className="w-5/6 pt-4">

            <h2 className=" mb-3 text-lg font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
              PQR
            </h2>

            <div className="relative z-0 w-full mb-6 mt-10 group">
              <select
                name="type"
                id="type"
                className="block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300  dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                onChange={(e) => setType(e.target.value)}
                required
              >
                <option value=""></option>
                <option value="Petición">Petición</option>
                <option value="Queja">Queja</option>
              </select>
              <label
                htmlFor="type"
                className="peer-focus:font-medium absolute text-2xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-8 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-8"
              >
                Tipo de PQR
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 mt-10 group">
              <p className="text-xl text-colorThree dark:text-gray-400 mb-2">
                Selecciona el medio de respuesta:
              </p>
              <label className="flex items-center text-colorThree dark:text-gray-400">
                <input
                  type="radio"
                  name="mean"
                  value="Teléfono"
                  className="mr-2"
                  checked={mean === "Teléfono"}
                  onChange={(e) => setMean(e.target.value)}
                />
                Teléfono
              </label>
              <label className="flex items-center text-colorThree dark:text-gray-400">
                <input
                  type="radio"
                  name="mean"
                  value="Correo electrónico"
                  className="mr-2"
                  checked={mean === "Correo electrónico"}
                  onChange={(e) => setMean(e.target.value)}
                />
                Correo Electrónico
              </label>
              <label className="flex items-center text-colorThree dark:text-gray-400">
                <input
                  type="radio"
                  name="mean"
                  value="Escrito"
                  className="mr-2"
                  checked={mean === "Escrito"}
                  onChange={(e) => setMean(e.target.value)}
                  required
                />
                Escrito
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group ">
              <input
                style={{ borderColor: error ? "red" : "" }}
                type="text"
                name="subject"
                autoComplete="off"
                id="subject"
                className=" block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setSubject(e.target.value)}
                required
              />
              <label
                htmlFor="subject"
                className="peer-focus:font-medium absolute text-xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Asunto
              </label>
            </div>

            <div className="relative z-0 w-full mb-6 group ">
              <input
                style={{ borderColor: error ? "red" : "" }}
                type="text"
                name="description"
                autoComplete="off"
                id="description"
                className=" block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setDescription(e.target.value)}
                required
              />
              <label
                htmlFor="description"
                className="peer-focus:font-medium absolute text-xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Descripción
              </label>
            </div>
          </div>
          <button className=" bg-colorOne w-2/5 text-white font-bold py-2 rounded " type="submit">
            Subir pqr
          </button>
        </form>
      </div>
    </div>
  );
}
