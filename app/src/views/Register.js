import React, { useRef, useState } from "react";
import { Form, Button, Alert } from "react-bootstrap";
import "../assets/css/register.css";
import { useAuth } from "../contexts/Auth";
import { useHistory } from "react-router-dom";

export default function Register() {
  const nomRef = useRef();
  const prenomRef = useRef();
  const adresseRef = useRef();
  const telRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { signup } = useAuth();
  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Password does not match the confirm password");
    }

    try {
      setError("");
      setLoading(true);
      await signup(
        emailRef.current.value,
        passwordRef.current.value,
        nomRef.current.value,
        prenomRef.current.value,
        adresseRef.current.value,
        telRef.current.value
      );
      alert("Account Created Successfuly !!!");
      history.push("/login");
    } catch {
      setError("Failed to create an account");
    }

    setLoading(false);
  }

  return (
    <div className="col-sm-5 vertical-center">
      <div className="col">
        <div className="row">
          <div className="col mb-3">
            <div className="card">
              <div className="card-body">
                <div className="e-profile">
                  <h2 className="font-weight-bold">Register</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Email</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="user@example.com"
                            ref={emailRef}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Password</label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder="••••••••••"
                            ref={passwordRef}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Confirm Password</label>
                          <input
                            className="form-control"
                            type="password"
                            placeholder="••••••••••"
                            ref={passwordConfirmRef}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>First Name</label>
                          <input
                            className="form-control"
                            type="text"
                            ref={prenomRef}
                            placeholder="John"
                            required
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label>Last Name</label>
                          <input
                            className="form-control"
                            type="text"
                            ref={nomRef}
                            placeholder="Smith"
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col">
                        <div className="form-group">
                          <label>Address</label>
                          <input
                            className="form-control"
                            type="text"
                            ref={adresseRef}
                            placeholder="Ain Chock, Casa"
                            required
                          />
                        </div>
                      </div>
                      <div className="col">
                        <div className="form-group">
                          <label>Phone Number</label>
                          <input
                            className="form-control"
                            type="text"
                            placeholder="+1-202-555-0155"
                            ref={telRef}
                            required
                          />
                        </div>
                      </div>
                    </div>
                    <div className="otherProjects">
                      <Button
                        disabled={loading}
                        type="submit"
                        className="btn-block btn1 btn-outline btn-xl"
                      >
                        Sign up
                      </Button>
                    </div>
                    <p className="text-right">
                      <span className="notReg"> Already have account,</span>{" "}
                      <a href="/login"> Sign in?</a>
                    </p>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
