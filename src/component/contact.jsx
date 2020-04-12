import React from "react";
import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "Write your message",
    };
    this.serviceID = "default_service";
    this.templateID = "template_cXg54dbe";
    this.clientID = process.env.REACT_APP_USERID;
  }

  handleInput = (value) => {
    // console.log(value);
    this.setState(value);
    // console.log(this.state, "state log");
  };

  handlesubmit = (e) => {
    e.preventDefault();
    if (
      this.state.name == "" &&
      this.state.email == "" &&
      this.state.message == "Write your message"
    ) {
      alert("Fileds can't be empty");
    } else {
      let messageFormat = {
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      };
      this.setState({
        email: "",
        name: "",
        message: "Write your message",
      });
      console.log(messageFormat, "message fprmat");
      emailjs
        .send(this.serviceID, this.templateID, messageFormat, this.clientID)
        .then(
          (response) => {
            console.log("SUCCESS!", response.status, response.text);
          },
          (err) => {
            console.log("FAILED...", err);
          }
        );
    }
  };
  render() {
    // console.log(process.env.REACT_APP_USERID, "env varible");
    return (
      <>
        <Container className="mt-5 mb-5 " id="contacts">
          <h2 className=" font-weight-bold text-center">Get in touch</h2>
          {/* <p className="font-weight-bold">To write is to reveal oneself.</p> */}
          <form
            className="mx-auto"
            style={{
              width: "400px",
            }}
          >
            <div className="form-group">
              <label for="name" className="font-weight-bold">
                Your Name
              </label>
              <input
                onChange={(e) => this.handleInput({ name: e.target.value })}
                value={this.state.name}
                type="text"
                className="form-control "
                id="name"
              />
            </div>
            <div className="form-group">
              <label for="email" className="font-weight-bold">
                Email address
              </label>
              <input
                onChange={(e) => this.handleInput({ email: e.target.value })}
                value={this.state.email}
                type="email"
                className="form-control "
                id="email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label className="font-weight-bold" for="message">
                Write your message
              </label>
              <textarea
                value={this.state.message}
                onChange={(e) => this.handleInput({ message: e.target.value })}
                className="form-control"
                id="message"
                placeholder="Write your message"
              ></textarea>
            </div>
            <button
              onClick={this.handlesubmit}
              type="submit"
              className="btn btn-dark font-weight-bold "
              style={{ padding: "8px 30px" }}
            >
              Send
            </button>
          </form>
        </Container>
      </>
    );
  }
}

export default Contact;
