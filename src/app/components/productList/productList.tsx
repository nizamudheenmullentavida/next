

import ProductCard from '@/app/components/productCard/productCard'
import React from 'react'
import {Services} from "@/app/services/product-services"

export default async function productsList() {

  var products = await Services.getAllProducts()

  return (
    <div className='container'>
      <h2> This is productList page</h2>
      {products.map((p:any)=>{return <ProductCard pro ={p} />})}
    </div>
  )
}
