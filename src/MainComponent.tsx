import './App.css'
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

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

const MainComponent = observer(({store} : any) => {
    const {squares, setSquare, clean, queue} = store;
    const winner: string | null = calculateWinner(squares)
    const player = queue === 0 ? 'X' : 'O'

    useEffect(() => {
        if(winner !== null) clean()
    }, [winner])

    return (
        <>
            <h1 className={`player ${player}`}>
                Player {player}
            </h1>
            <div className="rootBox">
                {squares.map((_square: Mark, index: number) => <Square squareId={index} setSquare={setSquare} square={squares[index]}/>)}
            </div>
            <button onClick={clean}>Retry</button>
        </>
    )
})


const Square = observer(({square, setSquare, squareId}: SquareProps) => {
    return <button className={`${square} square`} onClick={() => setSquare(squareId)}/>
})

export default MainComponent