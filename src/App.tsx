import './App.css'
import MainComponent from "./MainComponent.tsx";
import {useRef} from "react";


type AppProps = {
    store: any
}

const App =  ({store} : AppProps) => {
    const renders = useRef(0);
    renders.current++;

    return (
        <>
            <div>renders: {renders.current}</div>
            <MainComponent store={store}/>
        </>
  )
}

export default App
