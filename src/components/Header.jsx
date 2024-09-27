import React from 'react'
import { useContextHelper } from "../context/votes"

export default function Header() {
    const {total} = useContextHelper();
    
  return (
    <div>
        <h2>Class Moniter Vote</h2>
        <p>Total Votes:</p>
        <h1>{total}</h1>
    </div>
  )
}
