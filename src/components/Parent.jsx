import React, { useState } from 'react'
import Child from './Child'
import Pass from './Pass'

export default function Parent() {
   const [products, setProducts] = useState([
    {
      "id": 1,
      "title": "iPhone 15 Pro",
      "description": "Apple iPhone 15 Pro with A17 Pro chip and 256GB storage.",
      "price": 999,
      "discount": 10,
      "stock": 25,
      "category": "Smartphones",
      "brand": "Apple",
      "rating": 4.9,
      "thumbnail": "https://picsum.photos/300/300?random=1",
      "images": [
        "https://picsum.photos/600/600?random=11",
        "https://picsum.photos/600/600?random=12"
      ]
    },
    {
      "id": 2,
      "title": "Samsung Galaxy S24",
      "description": "Flagship Android smartphone with AMOLED display.",
      "price": 899,
      "discount": 12,
      "stock": 40,
      "category": "Smartphones",
      "brand": "Samsung",
      "rating": 4.8,
      "thumbnail": "https://picsum.photos/300/300?random=2",
      "images": [
        "https://picsum.photos/600/600?random=21",
        "https://picsum.photos/600/600?random=22"
      ]
    },
    {
      "id": 3,
      "title": "MacBook Air M3",
      "description": "Lightweight laptop with Apple's M3 chip.",
      "price": 1299,
      "discount": 8,
      "stock": 15,
      "category": "Laptops",
      "brand": "Apple",
      "rating": 4.9,
      "thumbnail": "https://picsum.photos/300/300?random=3",
      "images": [
        "https://picsum.photos/600/600?random=31"
      ]
    },
    {
      "id": 4,
      "title": "Sony WH-1000XM5",
      "description": "Wireless noise-canceling headphones.",
      "price": 349,
      "discount": 15,
      "stock": 60,
      "category": "Headphones",
      "brand": "Sony",
      "rating": 4.7,
      "thumbnail": "https://picsum.photos/300/300?random=4",
      "images": [
        "https://picsum.photos/600/600?random=41"
      ]
    },
    {
      "id": 5,
      "title": "Gaming Mouse RGB",
      "description": "Ergonomic gaming mouse with programmable buttons.",
      "price": 49,
      "discount": 20,
      "stock": 120,
      "category": "Accessories",
      "brand": "Logitech",
      "rating": 4.6,
      "thumbnail": "https://picsum.photos/300/300?random=5",
      "images": [
        "https://picsum.photos/600/600?random=51"
      ]
    },
    {
      "id": 6,
      "title": "Mechanical Keyboard",
      "description": "RGB mechanical keyboard with blue switches.",
      "price": 89,
      "discount": 5,
      "stock": 70,
      "category": "Accessories",
      "brand": "Keychron",
      "rating": 4.8,
      "thumbnail": "https://picsum.photos/300/300?random=6",
      "images": [
        "https://picsum.photos/600/600?random=61"
      ]
    },
    {
      "id": 7,
      "title": "Dell UltraSharp 27",
      "description": "27-inch 4K IPS monitor for professionals.",
      "price": 499,
      "discount": 18,
      "stock": 30,
      "category": "Monitors",
      "brand": "Dell",
      "rating": 4.7,
      "thumbnail": "https://picsum.photos/300/300?random=7",
      "images": [
        "https://picsum.photos/600/600?random=71"
      ]
    },
    {
      "id": 8,
      "title": "Apple Watch Series 9",
      "description": "Smartwatch with fitness tracking and GPS.",
      "price": 399,
      "discount": 10,
      "stock": 50,
      "category": "Wearables",
      "brand": "Apple",
      "rating": 4.9,
      "thumbnail": "https://picsum.photos/300/300?random=8",
      "images": [
        "https://picsum.photos/600/600?random=81"
      ]
    }
  ])
  function deleteProduct(productId){
setProducts(products.filter((product)=>(product.id!=productId)))
  }
  function updateProduct(productId){

  }
  return (


    <>
    <h1>parent</h1>
    <div className="container">
        <div className="d-flex flex-wrap ">
{
 products.map((product)=>

    <Child key={product.id} product={product} deleteProduct={deleteProduct}/>
     
 )
}
</div>
</div>

    </>

  )
}
