import React from 'react'

export default function Child({product,deleteProduct}) {

    
  return (
 
<div className=" w-25 m-3 bg-warning flex-wrap">
    { product.rating>4.7?<div className="  bg-danger"> high rating </div>:<div className=" text-warning bg-warning"> high rating </div>}
<h3 className='text-center'>{product.id}</h3>
<div className="d-flex justify-content-center align-content-center"><button onClick={()=>(deleteProduct(product.id))} className=' btn btn-danger'>Delete</button></div>

    </div>
  )
}
