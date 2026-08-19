import { useState } from "react"

export default function Home() {
  const [board, setBoard] = useState(Array(9).fill(""))
  const [isX, setIsX] = useState(true )

  const lines = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
  let winner = ""
  let winLine = []
 for (let line of lines) {
  const [a,b,c] = line
  if (board[a] && board[a] === board[b] && board[a] === board[c]) {
    winner = board[a]
    winLine = line
    break
  }
}
  const isDraw = !winner && board.every(cell => cell !== "")

  function play(i) {
    if (board[i] || winner) return
    const newBoard = [...board]
    newBoard[i] = isX ? "X" : "O"
    setBoard(newBoard)
    setIsX(!isX)
  }

  function restart() {
    setBoard(Array(9).fill(""))
    setIsX(true)
  }

  return (
    <div>
  

    
      <div className=" bg-dark text-white text-center py-4 fs-1 fw-bold">
  {winner ? winner + " is the winner!" : isDraw ? "It's a draw!" : "Next: " + (isX ? "X" : "O")}
</div>

<div className="container">
        <div className="row row-cols-3">
        {board.map((cell, i) => (
          <button
            key={i}
            onClick={() => play(i)}
            className={`  fw-bold border-1 ${winLine.includes(i)?"bg-secondary":"bg-dark"} ${isDraw ? "text-warning" : winLine.includes(i) ? "text-success" : "text-white"}  border`}
            style={{
              height: "180px",
              fontSize:"100px",
            }}
          >
            {cell}
          </button>
        ))}
      </div>
</div>

      <div className="text-center">
        <button onClick={restart} className="btn btn-danger my-3">Restart</button>
      </div>
    </div>
  )
}
