"use client";
import { useEffect, useState } from "react";


export default function Message({children}) {

  return (
    <>
      {children?.map((item, index) => (
        <div
        style={{
          boxShadow:
            "rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px",
        }}
          className="flex  h-20  bg-tarjeta p-1 px-4 flex-col rounded-lg shadow-xl"
          key={index}
        >
          <div className="flex w-full justify-between items-center">
            <h1 className="font-bold text-slate-950">{item.subject}</h1>
            <p className="text-xs text-slate-600"> {item.createdAt}</p>
          </div>

          <p className=" text-xs text-slate-500">{item.fullname}</p>
          <p className="text-xs text-slate-500">{item.radicado}</p>
        </div>
      ))}
    </>
  );
}
