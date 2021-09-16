import React, { Component } from "react";
import axios from "axios";
import {
  Button,
  FormControl,
  TextareaAutosize,
  TextField,
} from "@material-ui/core";
import { withStyles } from "@material-ui/core/styles";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = (theme) => ({
  textarea: {
    backgroundColor: "#0b0c10",
    color: "#D6CBC7",
    width: "60vh",
  },
  textfields: {
    color: "#f57c00",
  },
});

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FC4445",
    },
    secondary: {
      main: "#FC4445",
    },
  },
  props: {
    // Name of the component ⚛️
    MuiInputBase: {
      // The default props to change
      placeholder: "yes",
      multiline: "true",
    },
  },
});

class MailMe extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      message: "",
    };
  }

  onNameChange(e) {
    this.setState({ name: e.target.value });
  }

  onEmailChange(e) {
    this.setState({ email: e.target.value });
  }

  onMessageChange(e) {
    this.setState({ message: e.target.value });
  }

  handleSubmit(e) {
    console.log(e);
    e.preventDefault();
    axios({
      method: "POST",
      url: "http://localhost:3002/send",
      data: this.state,
    }).then((response) => {
      if (response.data.status === "success") {
        alert("message envoyé");
      } else if (response.data.status === "fail") {
        alert("le message n'a pu être envoyé");
      }
    });
  }

  render() {
    const { classes } = this.props;
    return (
      <>
        <form onSubmit={this.handleSubmit.bind(this)} method="POST">
          <FormControl>
            <ThemeProvider theme={theme}>
              <TextField
                id="nameInput"
                color={"secondary"}
                label="Name"
                type="text"
                name="name"
                value={this.state.name}
                onChange={this.onNameChange.bind(this)}
              />
            </ThemeProvider>
          </FormControl>
          <br></br>
          <FormControl>
            <ThemeProvider theme={theme}>
              <TextField
                id="emailInput"
                color={"secondary"}
                label="Email"
                type="email"
                name="email"
                value={this.state.email}
                onChange={this.onEmailChange.bind(this)}
              />
            </ThemeProvider>
          </FormControl>
          <br></br>
          <br></br>
          <FormControl>
            <TextareaAutosize
              rowsMin={20}
              className={classes.textarea}
              id="message-input"
              type="text"
              name="message"
              value={this.state.message}
              onChange={this.onMessageChange.bind(this)}
            />
          </FormControl>
          <br></br>
          <br></br>
          <FormControl>
            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </>
    );
  }
}

export default withStyles(useStyles)(MailMe);
