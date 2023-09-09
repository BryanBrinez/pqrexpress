"use client"
export default function Page() {
  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  return (
    <div>
      <h1>Inicie sesion</h1>

      <form onSubmit={handleSubmit}>
        <h2>Bienvenido</h2>

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Correo"
          name="correo"
          onChange={() => console.log("sisi")}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="******"
          name="contraseña"
          onChange={() => console.log("sisi")}
        />

        <button className="bg-indigo-500 px-4 py-2" type="submit">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}
