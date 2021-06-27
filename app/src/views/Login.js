import React, { useRef, useState } from "react";
import { Form, Button, FormGroup, Alert } from "react-bootstrap";
import "../assets/css/login.css";
import { useAuth } from "../contexts/Auth";
import { useHistory } from "react-router-dom";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const RememberMeRef = useRef();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const history = useHistory();
  const [type, setType] = useState("password");

  async function handleSubmit(e) {
    e.preventDefault();

    try {
      setError("");
      setLoading(true);
      await login(emailRef.current.value, passwordRef.current.value);
      history.push("/home");
    } catch {
      setError("Failed to Log in");
    }

    setLoading(false);
  }

  function showHide(e){
    e.preventDefault();
    e.stopPropagation();

    type === "password" ? setType("text") : setType("password");
  }

  return (
    <div className="col-sm-4 vertical-center">
      <div className="col">
        <div className="row">
          <div className="col mb-5">
            <div className="card">
              <div className="card-body">
                <div className="e-profile">
                  <h2 className="font-weight-bold">Login</h2>
                  {error && <Alert variant="danger">{error}</Alert>}
                  <Form onSubmit={handleSubmit}>
                    <FormGroup>
                      <Form.Label>Email</Form.Label>
                      <Form.Control
                        type="email"
                        className="form-control"
                        ref={emailRef}
                        placeholder="Enter email"
                        required
                      />
                    </FormGroup>

                    <div className="row">
                      <div className="col">
                        <div className="form-group password">
                          <label>Password</label>
                          <input
                            className="form-control"
                            type={type}
                            placeholder="••••••••••"
                            ref={passwordRef}
                            required
                          />
                          <i onClick={showHide} class={type === 'password' ? 'fa fa-eye-slash icon' : 'fa fa-eye icon'}></i>
                        </div>
                      </div>
                    </div>

                    <Form.Group controlId="formBasicCheckbox">
                      <input
                        type="checkbox"
                        ref={RememberMeRef}
                        id="checkbox"
                      />
                      <Form.Label className="checkbox" for="checkbox">
                        Remember me
                      </Form.Label>
                    </Form.Group>

                    <div className="otherProjects">
                      <Button
                        disabled={loading}
                        type="submit"
                        className="btn-block btn1 btn-outline btn-xl"
                      >
                        Log In
                      </Button>
                    </div>
                    <p className="text-right">
                      <span className="notReg"> Already have account,</span>{" "}
                      <a href="/register"> Sign up?</a>
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
