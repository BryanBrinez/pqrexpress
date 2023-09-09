"use client";

export default function Page() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Registra tu solicitud</h1>
      <h2>
        Debe tener en cuenta que la informacion a suministrar debe ser clara y
        completa.
      </h2>

      <form onSubmit={handleSubmit}>
        <h2>Información de contacto</h2>
        <div>Opcion para anonimo o no</div>

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Nombre y apellidos"
          name="nombres"
          onChange={() => console.log("sisi")}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="correo"
          name="correo"
          onChange={() => console.log("sisi")}
        />

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="celular"
          name="celular"
          onChange={() => console.log("sisi")}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="departamento"
          name="departamento"
          onChange={() => console.log("sisi")}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="ciudad"
          name="ciudad"
          onChange={() => console.log("sisi")}
        />

        <h2>Información de contacto</h2>

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Asunto"
          name="asunto"
          onChange={() => console.log("sisi")}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Descripcion"
          name="descripcion"
          onChange={() => console.log("sisi")}
        />

        <button className="bg-indigo-500 px-4 py-2" type="submit">
          {" "}
          Subir pqr
        </button>
      </form>
    </div>
  );
}
