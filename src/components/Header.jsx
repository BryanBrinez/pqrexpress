"use client";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineLogin } from "react-icons/ai";

export default function Header() {

  return (
    <div className="flex items-center justify-around w-screen h-14 bg-slate-400">
        <Link href="/">
          <Image src="/logo1.6.png" width="250" height="500" alt="Logo de la empresa" />
        </Link>
        </div>
  );
}