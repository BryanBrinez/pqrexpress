import Link from "next/link";
import { AiOutlineForm } from "react-icons/ai";
import { BiSearch } from "react-icons/bi";

export default function Home() {
  return (
    //{dark:bg-black dark:text-white}
    <main className="w-screen h-screen flex items-center text-black flex-col px-4 bg-white ">
      <div className="flex items-center justify-center w-screen h-14 bg-slate-500">
        logo
      </div>

      <div className="flex-1 flex flex-col items-center justify-center">
        <h1 className=" mb-4 text-4xl font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
          Le damos la bienvenida al portal
          <span className="text-blue-600 dark:text-blue-500"> PQREXPRESS</span>
        </h1>

        <p className="text-lg font-normal mt-4 text-colorTwo lg:text-xl ">
          Radique y haga seguimiento a las Peticiones, Quejas, Reclamos,
          Sugerencias, Felicitaciones y Denuncias (PQR).
        </p>
        <p className="text-lg mt-6 text-colorThree font-semibold lg:text-xl">
          ¿Qué desea realizar?
        </p>
        <div className="flex mt-4">
          <Link
            className="flex items-center mr-2 p-2 bg-colorOne text-white font-bold  rounded "
            href="/crear-pqr"
          >
            <AiOutlineForm size={25} />
            Crea tu PQR
          </Link>
          <Link
            className="flex items-center p-2 bg-colorOne text-white font-bold  rounded "
            href="/consultar-pqr"
          >
            <BiSearch size={25} />
            Consulta tu PQR
          </Link>
        </div>
      </div>
    </main>
  );
}
