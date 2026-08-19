import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import landing from "./Landing";

export default function Navbar() {
  return (
<>
<div className="d-flex justify-content-between bg-danger">
<h2 className='text-white my-2 mx-3'>Ejada Tasks</h2>

<ul className=' d-flex'>
    <li className='list-unstyled' > <NavLink className='text-white m-2  text-decoration-none' to="landing">task-1</NavLink> </li>
    <li className='list-unstyled'> <NavLink className='text-white m-2  text-decoration-none' to="home">task-2</NavLink> </li>
    <li className='list-unstyled' > <NavLink className='text-white m-2  text-decoration-none' to="parent">Parent</NavLink> </li>
    <li className='list-unstyled' > <NavLink className='text-white m-2  text-decoration-none' to="gallery">Gallery</NavLink> </li>
  
  
  
</ul>


</div>

</>
  )
}
