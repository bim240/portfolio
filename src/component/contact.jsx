import React from "react";
import { Container } from "react-bootstrap";
import emailjs from "emailjs-com";

class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: null,
      name: null,
      message: "Write your messgae",
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
    let messageFormat = {
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    };
    console.log(messageFormat, "messgae fprmat");
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
            <div class="form-group">
              <label for="name" class="font-weight-bold">
                Your Name
              </label>
              <input
                onChange={(e) => this.handleInput({ name: e.target.value })}
                type="text"
                class="form-control font-weight-bold"
                id="name"
              />
            </div>
            <div class="form-group">
              <label for="email" class="font-weight-bold">
                Email address
              </label>
              <input
                onChange={(e) => this.handleInput({ email: e.target.value })}
                type="email"
                class="form-control font-weight-bold"
                id="email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div class="form-group">
              <label for="message">Write your message</label>
              <textarea
                value={this.state.message}
                onChange={(e) => this.handleInput({ message: e.target.value })}
                class="form-control"
                id="message"
              ></textarea>
            </div>
            <button
              onClick={this.handlesubmit}
              type="submit"
              class="btn btn-dark font-weight-bold "
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
