"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";
import { MdArrowBack } from "react-icons/md";
import Link from "next/link";
import Header from "@/components/Header";

export default function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      email: email,
      password: password,
      redirect: false,
    });
    if (res?.error) return setError(res.error);
    if (res?.ok) return router.push("/dashboard/pqrs");
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
          Inicia sesión
        </h1>

        <form onSubmit={handleSubmit}>
          <h2 className="mb-5">Bienvenido</h2>

          {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

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
                type="password"
                name="password"
                autoComplete="off"
                id="password"
                className=" block py-2.5 px-0 w-full text-2xl text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <label
                htmlFor="password"
                className="peer-focus:font-medium absolute text-xl text-colorThree dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Contraseña
              </label>
            </div>

          <button className="bg-indigo-500 px-4 py-2 text-white mt-5" type="submit">
            Iniciar sesion
          </button>
        </form>
      </div>
    </div>
  );
}
