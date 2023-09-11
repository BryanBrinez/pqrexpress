"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { Router } from "next/router";
import { useRouter } from "next/navigation";
import { AxiosError } from "axios";

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
    <div>
      <h1>Inicie sesion</h1>

      <form onSubmit={handleSubmit}>
        <h2>Bienvenido</h2>
        {error && <div className="bg-red-500 text-white p-2 mb-2">{error}</div>}

        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="text"
          placeholder="Email"
          name="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="bg-zinc-800 px-4 py-2 block mb-2"
          type="password"
          placeholder="******"
          name="password"
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="bg-indigo-500 px-4 py-2" type="submit">
          Iniciar sesion
        </button>
      </form>
    </div>
  );
}
