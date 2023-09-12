"use client";
import { useState } from "react";
import swal from "sweetalert";
import Axios from "axios";

export default function Page () {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullname, setFullName] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(password);
    try {
      const res = await Axios.post("/api/auth/signup", {
        email,
        password,
        fullname,
      });

      if(res.statusText == "OK"){swal({
        title: "Se ha creado un nuevo administrador",
        icon: "success",
      })} 
    } catch (error) {
      setError(error.response?.data.message); 
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}
        <h1>Registrate</h1>
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="John Doe"
          name="fullname"
          onChange={(e) => setFullName(e.target.value)}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="email"
          placeholder="John@email.com"
          name="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="password"
          placeholder="********"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="bg-indigo-500 px-4 py-2" type="submit">
          {" "}
          Registrar
        </button>
      </form>
    </div>
  );
}
