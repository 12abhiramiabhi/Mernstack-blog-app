import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignupPage from './Components/SignupPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="signupPage" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
