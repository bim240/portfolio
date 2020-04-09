import React from "react";
import { Container } from "react-bootstrap";
class Contact extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <>
        <Container className="mt-5 mb-5 ">
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
                type="email"
                class="form-control font-weight-bold"
                id="email"
                aria-describedby="emailHelp"
              />
              <small id="emailHelp" class="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>

            <button
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
