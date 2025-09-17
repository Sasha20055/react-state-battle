import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {MobxStore} from "./store/mobxStore.tsx";

const store = new MobxStore()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App store={store}/>
  </StrictMode>,
)
