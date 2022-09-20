import { createUserWithEmailAndPassword } from "firebase/auth";
import { TextField, Button } from "@mui/material";
import React, { useState } from "react";
import {auth} from "../../firebase";
import { Container, Box } from "@mui/system";

import "./Login.css";
import Header from "../../Header";

function App() {
    <Header/>
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");

  const login = async () => {
    try {
      const user = await createUserWithEmailAndPassword(auth,Email, Password);
     alert(user);
    } catch (error) {
      alert(error);
    }
  };
  return (
    <div className="App">
      <Container maxWidth="xs">
        <h1>Login Page</h1>
        <Box mb={2}>
          <TextField
            varient="standard"
            label="email"
            fullWidth
            autoComplete="email"
            type="email"
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          ></TextField>
        </Box>
        <Box mb={2}>
          <TextField
            varient="standard"
            label="password"
            fullWidth
            autoComplete="password"
            type="password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          ></TextField>
        </Box>
        <Button onClick={login} variant="contained" color="primary" fullWidth>
          Login
        </Button>
      </Container>
    </div>
  );
}

export default App;
