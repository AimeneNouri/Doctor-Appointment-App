import React, { useRef, useState } from 'react'
import { Form, Button, FormGroup, Alert } from "react-bootstrap";
import "../assets/css/login.css";
import { useAuth } from '../contexts/Auth'
import { useHistory } from 'react-router-dom'

export default function Register() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()
    const [error, setError] = useState("")
    const [loading, setLoading] = useState(false)
    const { signup } = useAuth()
    const history = useHistory()

    async function handleSubmit(e){
        e.preventDefault()

        if(passwordRef.current.value !== passwordConfirmRef.current.value){
            return setError('Password does not match the confirm password')
        }

        try{  
            setError("")
            setLoading(true)     
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push("/")
        } catch {
            setError("Failed to create an account")
        }

        setLoading(false)
    }

    return (
        <div className="col-sm-4 vertical-center">
            <h2 className="font-weight-bold">Register</h2>
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

                <FormGroup>
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" className="form-control" ref={passwordConfirmRef} placeholder="Enter confirm password" required/>
                </FormGroup>
                
                <div className="otherProjects">
                    <Button disabled={loading} type="submit" className="btn-block btn1 btn-outline btn-xl">Sign up</Button>
                </div>
                <p className="text-right">
                    <span className="notReg"> Already have account,</span> <a href="/login"> Sign in?</a>
                </p>
            </Form>
        </div>
    )
}

