

"use client"

import Link from 'next/link'
import React from 'react'

export default function ProductCard(props:any) {

   var prod =props.pro
  return (
    <div>
      {<img src={prod.image}width={100}/>}
      <Link href={"/products/"+ prod.id}>{prod.title} </Link>
      
    </div>
  )
}