"use client";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";

export default function Header() {

  return (
    <div className="flex items-center justify-around w-screen h-14 bg-slate-500">
        <a href="/">
          <img src="/logo.png" width="250" alt="Logo de la empresa" />
        </a>

        <div>
            <Link
            className="flex items-center p-2 text-white font-bold rounded "
            href="/login"
            >
            <AiOutlineLogin size={25} />
            &nbsp;Iniciar sesión
            </Link>
        </div>
        </div>
  );
}