// import GotoCart from '@/app/components/goToCart/gotocart';
// import { Services } from '@/app/services/productId-services';
// import { title } from 'process';
// import React from 'react'

//   export async function generateMetadata(props:any){
//     var paramstitle = await props.params
//     var producttitles  = paramstitle.productdetails;
//     var producttitle = await Services.getAllProductById(producttitles)
//     return{
//         title:producttitle.title
//     }

//   }

// export default  async function productDetailspage(props:any) {
//     // console.log('product details',props)
    
//     var params = await props.params
//     var prodid = params.productdetails;

//      var product = await Services.getAllProductById(prodid)


//      var pric = await props.searchParams;
//      var price = pric.price
//   return (
//     <>
//     <GotoCart/>
//     <div>
//       This details page
//       {product.title}
//     </div>
//     <div>{price}</div>
//     </>
//   )
// }

import { Services } from '@/app/services/productId-services';
import GotoCart from '@/app/components/goToCart/gotocart';

export async function generateMetadata({ params }: any) {
    const { productdetails } = await params;
    try {
        const product = await Services.getAllProductById(productdetails);
        return { title: product?.title || "Product Not Found" };
    } catch (e) {
        return { title: "Error" };
    }
}

export default async function ProductDetailsPage({ params, searchParams }: any) {
    const { productdetails } = await params;
    const { price } = await searchParams;

    const product = await Services.getAllProductById(productdetails);

    if (!product) {
        return <div>Product not found</div>;
    }

    return (
        <>
            <GotoCart />
            <div>
                <h1>{product.title}</h1>
                <p>Price from URL: {price}</p>
            </div>
        </>
    );
}
