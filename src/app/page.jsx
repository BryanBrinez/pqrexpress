import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <h1>Le damos la bienvenida al portal PQREXPRESS</h1>
      <h2>
        Radique y haga seguimiento a las Peticiones, Quejas, Reclamos,
        Sugerencias, Felicitaciones y Denuncias (PQR).
      </h2>
      <h2>¿Qué desea realizar?</h2>
      <div className="flex">
        <Link className="bg-indigo-500 px-4 py-2 mr-2" href="/crear-pqr">
          Crea tu PQR
        </Link>
        <Link className="bg-indigo-500 px-4 py-2" href="/consultar-pqr">
          Consulta tu PQR
        </Link>
      </div>
    </main>
  );
}
