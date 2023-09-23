"use client";
import { useState, useEffect } from "react";
import Axios from "axios";
import Header from "@/components/Header";
import Link from "next/link";
import { MdArrowBack } from "react-icons/md";

export default function Page({ params }) {
  const [pqr, setPQR] = useState(null);

  const fetchPQR = async () => {
    try {
      const res = await Axios.get(`/api/pqr/${params.rad}`);
      setPQR(res.data);

      
    } catch (error) {
      console.log(error.response?.data.message);
    }
  };

  useEffect(() => {
    fetchPQR();
  }, []);
  return (
    <div className="w-screen h-fit flex items-center text-black flex-col px-4 bg-white ">
      <Header />

      <div className="flex-1 h-screen px-4 py-3 flex flex-col justify-center ">
        <div className="flex w-full justify-start items-center">
          <Link href={"/"}>
            <MdArrowBack size={25} />
          </Link>
        </div>

        <h1 className="py-3 text-3xl font-extrabold  leading-none tracking-tight text-colorThree md:text-5xl lg:text-6xl ">
          Registra tu solicitud
        </h1>

        <p className="text-lg w-5/6 font-semibold leading-none  tracking-tight text-colorThree md:text-5xl lg:text-6xl">
          Debe tener en cuenta que la informacion a suministrar debe ser clara y
          completa.
        </p>
        
      </div>
    </div>
  );
}
