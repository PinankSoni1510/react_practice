import React, { useEffect, useState } from 'react'
import { Container, Row, Col, Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom';


export const Login = () => {

    let [userName, setUserName] = useState('');
    let [password, setPassword] = useState('');

    let navigate = useNavigate();

    const login = ()=>{
        console.log(userName)
        let obj = {
            userName: userName,
            password: password
          };
        localStorage.setItem('userData', JSON.stringify([obj]));
        navigate('/');
    }

    return (
        <Container>
            <Row >
                <Col md="6">
                    <h2>REACT DATA</h2>
                    <p>Welcome to login page</p>
                    <Row >
                        <Col  >
                            <Form.Label >User name</Form.Label>
                            <Form.Control value={userName} onChange={(e) => setUserName(e.target.value)}></Form.Control>
                        </Col>
                    </Row>

                    <Row >
                        <Col  >
                            <Form.Label>password</Form.Label>
                            <Form.Control value={password} onChange={(e) => setPassword(e.target.value)}></Form.Control>
                        </Col>
                    </Row>

                    <Row className='mt-3'>
                        <Col  >
                            <Button onClick={login}>Save</Button>
                        </Col>
                    </Row>

                </Col>
                
            </Row>
        </Container>
    )
}

export default Login
