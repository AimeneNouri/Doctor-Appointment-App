import React, { useRef, useState } from 'react'
import { Form, Button, FormGroup, Alert } from "react-bootstrap";
import "../assets/css/login.css";
import { useAuth } from '../contexts/Auth'
import { useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const RememberMeRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { login } = useAuth()
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        try{  
            setError("")
            setLoading(true)     
            await login(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to Log in")
        }

        setLoading(false)
    }

    return (
        <div className="col-sm-4 vertical-center">
            <h2 className="font-weight-bold">Login</h2>
            {error && <Alert variant="danger">{error}</Alert>}
            <Form onSubmit={handleSubmit}>
                <FormGroup>
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" className="form-control" ref={emailRef} placeholder="Enter email" required/>
                </FormGroup>

                <FormGroup>
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" className="form-control" ref={passwordRef} placeholder="Enter password" required/>
                </FormGroup>

                <Form.Group controlId="formBasicCheckbox">
                    <input type="checkbox" ref={RememberMeRef} id="checkbox"/><Form.Label className="checkbox" for="checkbox">Remember me</Form.Label>
                </Form.Group>
                
                <div className="otherProjects">
                    <Button disabled={loading} type="submit" className="btn-block btn1 btn-outline btn-xl">Log In</Button>
                </div>
                <p className="text-right">
                    <span className="notReg"> Already have account,</span> <a href="/login"> Sign in?</a>
                </p>
            </Form>
        </div>
    )
}
