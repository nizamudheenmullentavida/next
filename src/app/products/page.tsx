

import React, { Suspense } from 'react'
import ProductList from "@/app/components/productList/productList"

export default async function productsListpage() {
  return (
    <div className='container'>
      <Suspense fallback = {<h2 style={{color:"red"}}>Loading Product</h2>}><ProductList/></Suspense>
    </div>
  )
}
