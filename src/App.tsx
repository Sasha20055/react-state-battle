import './App.css'
import {Box} from "@mui/material";
import {useStore} from "./store/store.ts";


function App() {
    const { count, up } = useStore()

    return (
    <>
      <Box>
      </Box>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={up}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
