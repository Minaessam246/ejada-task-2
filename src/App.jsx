import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './components/Home'
import Parent from './components/Parent'
import Child from './components/Child'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import Layout from './components/Layout'
import Gallery from './components/Gallery'
import Web from './components/Web'
import Mobile from './components/Mobile'
import Ui from './components/Ui'
import Landing from './components/Landing'


function App() {
  const [count, setCount] = useState(0)
const router= createBrowserRouter([{
  path:"",element:<Layout/>,children:[
    {index:true,element:<Home/>},
    {path:"parent",element:<Parent/>},
    {path:"home",element:<Home/>},
    {path:"landing",element:<Landing/>},
    {path:"gallery",element:<Gallery/>,children:[
      {path:"web",element:<Web/>},
      {path:"ui",element:<Ui/>},
      {path:"mobile",element:<Mobile/>},
    ]},


]
}])

  return (
  <>
<RouterProvider router={router}></RouterProvider>

  </>
  )
}

export default App
