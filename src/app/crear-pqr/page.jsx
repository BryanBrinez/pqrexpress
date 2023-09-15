"use client";
import { useState, useEffect } from "react";
import Axios from "axios";
import swal from "sweetalert";

export default function Page() {
  const [fullnames, setFullNames] = useState(null);
  const [email, setEmail] = useState(null);
  const [cel, setCel] = useState(null);
  const [dep, setDep] = useState(null);
  const [city, setCity] = useState(null);
  const [subject, setSubject] = useState(null);
  const [description, setDescription] = useState(null);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(fullnames,email,cel,dep,city,subject,description,error)

    try {
      const res = await Axios.post("/api/pqr", {
        fullname: fullnames,
        email,
        number: cel,
        departament: dep,
        city,
        subject,
        description,
      });
      if(res.statusText == "OK"){swal({
        title: "Se ha enviado su PQR",
        text: "Su radicado con el cual puede revisar su PQR es: "+ res.data.radicado,
        icon: "success",
      })}  
      
    } catch (error) {
      setError(error.response?.data.message);
    }
  };
  return (
    <div>
      <h1>Registra tu solicitud</h1>
      <h2>
        Debe tener en cuenta que la informacion a suministrar debe ser clara y
        completa.
      </h2>

      <form onSubmit={handleSubmit}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h2>Información de contacto</h2>
        <div>Opcion para anonimo o no</div>

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Nombre y apellidos"
          name="nombres"
          onChange={(e) => setFullNames(e.target.value)}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="correo"
          name="correo"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="number"
          placeholder="celular"
          name="celular"
          onChange={(e) => setCel(e.target.value)}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="departamento"
          name="departamento"
          onChange={(e) => setDep(e.target.value)}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="ciudad"
          name="ciudad"
          onChange={(e) => setCity(e.target.value)}
        />

        <h2>Información de contacto</h2>

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Asunto"
          name="asunto"
          onChange={(e) => setSubject(e.target.value)}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Descripcion"
          name="descripcion"
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-indigo-500 px-4 py-2" type="submit">
          Subir pqr
        </button>
      </form>
    </div>
  );
}
