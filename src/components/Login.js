"use client"

import { useState } from "react"
import { Box, Button, TextField, Typography, Container, Paper } from "@mui/material"

function Login({ onLogin }) {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()
    if ((username === "student" && password === "student") || (username === "lecturer" && password === "lec12345")) {
      onLogin(username)
    } else {
      setError("Invalid username or password")
    }
  }

  return (
    <Container component="main" maxWidth="xs">
      <Paper
        elevation={3}
        sx={{ marginTop: 8, padding: 4, display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <Box
          component="img"
          src="/CAHM-CRM-Logo.png"
          alt="Logo"
          sx={{ width: "100%", maxWidth: 200, marginBottom: 2 }}
        />
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            autoFocus
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
            Sign In
          </Button>
          {error && (
            <Typography color="error" align="center">
              {error}
            </Typography>
          )}
        </Box>
      </Paper>
    </Container>
  )
}

export default Login

