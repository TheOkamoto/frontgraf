import './App.css'
import { BrowserRouter, Routes } from 'react-router-dom'
import Router from './pages/router'

function App(){
  return (
    <BrowserRouter >
      <Router />
    </BrowserRouter>
  )
}
export default App