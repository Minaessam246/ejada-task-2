import { useState } from "react"

 
 
 export default function Home() {
    const [x, setX] = useState(10)

    function changeX(){

  setX(Math.ceil(Math.random()*10))
       
    }
    return<>
    <h2 className={x>5?"bg-dark text-white":"bg-success text-dark"}>Home {x}</h2>
    <button onClick={  changeX }className=" btn btn-danger my-3 "> Random</button>

    </>
}
