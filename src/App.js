"use client"

import { useState } from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import Login from "./components/Login"
import Dashboard from "./components/Dashboard"

const theme = createTheme({
  palette: {
    primary: {
      main: "#1a237e",
    },
    secondary: {
      main: "#00bcd4",
    },
  },
})

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [userType, setUserType] = useState("")

  const handleLogin = (username) => {
    setIsLoggedIn(true)
    setUserType(username === "student" ? "student" : "lecturer")
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
    setUserType("")
  }

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      {isLoggedIn ? <Dashboard userType={userType} onLogout={handleLogout} /> : <Login onLogin={handleLogin} />}
    </ThemeProvider>
  )
}

export default App

