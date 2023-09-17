"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Message({ data }) {

  // Función para formatear la fecha y hora
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };

  return (
    <>
      {data?.map((item, index) => (
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          className="flex  h-20  bg-tarjeta p-1 px-4 flex-col rounded-lg shadow-xl"
          key={index}
        >
          <Link key={index} href={`/dashboard/pqrs/${item.radicado}`}>
            <div className="flex w-full justify-between items-center">
              <h1 className="font-bold text-slate-950">{item.subject}</h1>
              <p className="text-xs text-slate-600"> {formatDateTime(item.createdAt)}</p>
            </div>

            <p className=" text-xs text-slate-500">{item.fullname}</p>
            <p className="text-xs text-slate-500">{item.radicado}</p>
          </Link>
        </div>
      ))}
    </>
  );
}
