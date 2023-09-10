"use client"

import { useSession } from 'next-auth/react'
import React from 'react'

export default function Page() {

    const {data: session, status} = useSession()

    console.log(session, status)
  return (
    <div>P</div>
  )
}
