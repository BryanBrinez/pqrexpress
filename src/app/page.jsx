import Link from "next/link";
import { AiOutlineForm } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";
import Header from "@/components/Header";

export default function Home() {
  return (
    //{dark:bg-black dark:text-white}
    <div className="w-screen h-screen flex items-center text-black flex-col px-4 bg-white ">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="flex flex-col justify-center items-center mb-4">
          <h1 className="text-3xl font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
            Bienvenido al portal
          </h1>
          <span className="text-blue-600 leading-none tracking-tight text-4xl font-extrabold  dark:text-blue-500 ">
            PQREXPRESS
          </span>
        </div>

        <div className="flex flex-col w-5/6 items-center justify-center">
          <p className="text-lg font-normal mt-4  text-colorTwo lg:text-xl ">
            Radique y haga seguimiento a las Peticiones, Quejas, Reclamos (PQR).
          </p>
          <p className="text-lg mt-6 text-colorThree font-semibold lg:text-xl">
            ¿Qué desea realizar?
          </p>
          
        </div>
        <div className="flex mt-4  w-full justify-around md:justify-around lg:justify-center lg:gap-4">
            <Link
              className="flex items-center p-2 bg-colorOne text-white font-bold rounded "
              href="/crear-pqr"
            >
              <AiOutlineForm size={25} />
              Crea tu PQR
            </Link>
            <Link
              className="flex items-center p-2 bg-colorOne text-white font-semibold rounded "
              href="/consultar-pqr"
            >
              <BiSearch size={25} />
              Consulta tu PQR
            </Link>
          </div>
      </div>
      <p >¿Eres administrador? 
        <Link  className="font-semibold text-colorOne" href={"/login"}>
        &nbsp;Inicia sesión
        </Link>
      </p>
    </div>
  );
}
