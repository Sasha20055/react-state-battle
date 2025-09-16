import './App.css'
import {useStore} from "./store/store.ts";
import {useEffect} from "react";

type Mark = 'X' | 'O' | 'null'

type SquareProps = {
    square?: Mark[];
    setSquare: (squareId: number) => void
    squareId: number
};

function calculateWinner(squares: string[]) {
    const lines: [number, number, number][] = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6],
    ];

    for (const [a, b, c] of lines) {
        const v = squares[a];
        if (v !== 'null' && v === squares[b] && v === squares[c]) {
            return v;
        }
    }

    return null;
}

function App() {
    const {squares, setSquare, clean, queue} = useStore()
    const winner: string | null = calculateWinner(squares)
    const player = queue === 0 ? 'X' : 'O'

    useEffect(() => {
        winner !== null && clean()
    }, [squares])

    return (
    <>
      <h1 className={`player ${player}`}>
          Player {player}
      </h1>
      <div className="rootBox">
          {squares.map((square: Mark, index: number) => <Square squareId={index} setSquare={setSquare} square={square}/>)}
      </div>
        <button onClick={clean}>Retry</button>
    </>
  )
}

function Square({square, setSquare, squareId}: SquareProps) {
    return <button className={`${square} square`} onClick={() => setSquare(squareId)}/>
}

export default App
