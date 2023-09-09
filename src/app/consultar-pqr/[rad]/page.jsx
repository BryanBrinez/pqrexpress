"use client";
import { useState, useEffect } from "react";
import  Axios  from "axios";

export default function Page({ params }) {
  const [pqr, setPQR] = useState(null);

  const fetchPQR = async () => {
    try {
        const res = await Axios.get(`/api/pqr/${params.rad}`);
        setPQR(res.data)
      } catch (error) {
        console.log(error.response?.data.message); 
      }
  };

  useEffect(() => {
    fetchPQR();
  }, []);
  return <div className="flex">{JSON.stringify(pqr)}</div>;
}
