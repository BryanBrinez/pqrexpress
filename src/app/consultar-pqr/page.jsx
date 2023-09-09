"use client";
import { useRouter } from "next/navigation";


import { useState, useEffect } from "react";


export default function Page() {
  const [radicado, setRadicado] = useState(null);
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    router.push(`/consultar-pqr/${radicado}`);
  };
  return (
    <div>
      <h1>Consultar solicitud</h1>
      <h2>Ingrese el numero de su radicado del PQR</h2>

      <form onSubmit={handleSubmit}>
        <h2>Numeor de radicado:</h2>

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="1231313"
          name="radicado"
          onChange={(e) => setRadicado(e.target.value)}
        />

        <button className="bg-indigo-500 px-4 py-2" type="submit">
          Buscar
        </button>
      </form>
    </div>
  );
}
