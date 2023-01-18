import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignupPage from './Components/SignupPage'
import LoginPage from './Components/LoginPage'
import HomePage from './Components/HomePage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path="signupPage" element={<SignupPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
        <Route path="HomePage" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
