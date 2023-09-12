"use client"
import Link from "next/link";
import React from "react";
import { signOut } from "next-auth/react";

import { AiOutlineUserAdd } from "react-icons/ai";
import { BiMessageAltDetail, BiLogOut } from "react-icons/bi";

export default function Navbar() {

  const handleClick = () => {
    signOut()
  };

  
  return (
    <div className="w-screen h-14 p-3 fixed bottom-0 text-black bg-colorOne">
      <div className="flex items-center justify-around">
        <Link href={"/dashboard/register"}>
          <AiOutlineUserAdd size={32} />
        </Link>

        <Link href={"/dashboard/pqrs"}>
          <BiMessageAltDetail size={32} />
        </Link>
        <button  onClick={handleClick} >
        <BiLogOut size={32} />
        </button>
      </div>
    </div>
  );
}
