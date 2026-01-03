"use client"

import { useRouter } from 'next/navigation'
import React from 'react'

export default function gotocart() {

    var root = useRouter()
  return (
    <div>
      <button onClick={()=>{root.push('/cart')}}>go to cart</button>
    </div>
  )
}
