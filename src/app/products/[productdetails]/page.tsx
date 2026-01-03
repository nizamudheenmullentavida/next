import GotoCart from '@/app/components/goToCart/gotocart';
import { Services } from '@/app/services/productId-services';
import { title } from 'process';
import React from 'react'

  export async function generateMetadata(props:any){
    var paramstitle = await props.params
    var producttitles  = paramstitle.productdetails;
    var producttitle = await Services.getAllProductById(producttitles)
    return{
        title:producttitle.title
    }

  }

export default  async function productDetailspage(props:any) {
    // console.log('product details',props)
    
    var params = await props.params
    var prodid = params.productdetails;

     var product = await Services.getAllProductById(prodid)


     var pric = await props.searchParams;
     var price = pric.price
  return (
    <>
    <GotoCart/>
    <div>
      This details page
      {product.title}
    </div>
    <div>{price}</div>
    </>
  )
}
