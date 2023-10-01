"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Message({ data }) {
  // Función para formatear la fecha y hora
  const formatDateTime = (dateTime) => {
    const date = new Date(dateTime);
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, "0");
    const minutes = date.getMinutes().toString().padStart(2, "0");

    return `${day}/${month}/${year} ${hours}:${minutes}`;
  };
  //Función para mostrar el subject
  const truncateString = (str, num) => {
    if (str.length <= num) {
      return str;
    }
    return str.slice(0, num) + "...";
  };

  return (
    <>
      {data?.map((item, index) => (
        <div
          style={{
            boxShadow:
              "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
          }}
          className="relative flex h-20 bg-tarjeta p-1 px-4 flex-col rounded-lg shadow-xl"
          key={index}
        >
          <Link key={index} href={`/dashboard/pqrs/${item.radicado}`}>
            <div className="flex flex-col w-full justify-between h-full">
              <div>
                <h1 className="font-bold text-sm text-slate-950">
                  {truncateString(item.subject, 27)}
                </h1>
              </div>
              <div className="absolute top-0 right-0 mt-2 mr-2">
                <p className="text-xs text-slate-600">
                  {formatDateTime(item.createdAt)}
                </p>
              </div>
            </div>
          </Link>
          <div className="absolute bottom-0 right-0 mb-2 mr-2">
            {item?.response !== "" && (
              <span className="px-2 py-1 text-white text-xs rounded-full bg-green-500">
                {item?.type} Finalizada
              </span>
            )}
            {item?.response === "" && (
              <span className="px-2 py-1 text-white text-xs rounded-full bg-red-500">
                {item?.type} Pendiente
              </span>
            )}
          </div>
          <div className="text-xs text-slate-500">{item.fullname}</div>
          <div className="text-xs text-slate-500">{item.radicado}</div>
        </div>
      ))}
    </>
  );
}
