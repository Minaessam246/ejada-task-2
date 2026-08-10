    import React from 'react'
import { Link, Outlet } from 'react-router-dom'
    
    export default function Gallery() {
      return (<>
<ul className='d-flex '>

    <li className='list-unstyled m-2'><Link className='text-decoration-none' to="web">Web</Link></li>

    <li className='list-unstyled m-2'><Link className='text-decoration-none' to="ui">UI</Link></li>

    <li className='list-unstyled m-2'><Link className='text-decoration-none' to="mobile">Mobile</Link></li>
</ul>
<Outlet/></>    
      )
    }
    