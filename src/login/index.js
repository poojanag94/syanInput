import React, { useState } from "react";
import TextField from "@material-ui/core/TextField";
import { Grid, Paper, Button } from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import Styles from "../styles/styles";
import { withRouter } from "react-router-dom";

import { login as loginService } from "./loginService";

const Login = ({ classes, history }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleChange = (name, event) => {
    const { value } = event.target;
    switch (name) {
      case "username":
        setUsername(value);
        return;
      case "password":
        setPassword(value);
        return;
      default:
        return;
    }
  };
  const login = () => {
    // history.push("/landing");

    loginService({ phone: username, password });
  };
  return (
    <Grid
      container
      direction="column"
      justify="space-evenly"
      alignItems="center"
    >
      <div>Login</div>
      <Paper elevation={3} direction="column">
        <Grid
          container
          direction="column"
          justify="space-evenly"
          alignItems="center"
        >
          <TextField
            id="username"
            label="Username"
            value={username}
            onChange={(evt) => handleChange("username", evt)}
            className={classes.customTextbox}
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            value={password}
            onChange={(evt) => handleChange("password", evt)}
            className={classes.customTextbox}
          />
          <Button
            variant="contained"
            color="primary"
            className={classes.customButton}
            onClick={login}
          >
            Login
          </Button>
        </Grid>
      </Paper>
    </Grid>
  );
};

export default withRouter(withStyles(Styles)(Login));
