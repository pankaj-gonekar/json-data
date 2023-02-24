import React from 'react'
import { Container, Row, Col, Card, Form } from 'react-bootstrap'
import { Button } from 'react-bootstrap';
import { useState } from 'react';


function Register() {

  let [state, setState] = useState({
    user : {
      username: '',
      email: '',
      password: ''
    }
  });

  let updateInput = (e) => {
    setState({
    ...state,
    user : {
      ...state.user,
      [e.target.name] : e.target.value  
    }
    })
  };

  let register = (e) => {
     e.preventDefault();
     console.log(state.user);
  };

  return (
    <>
    <Container>
      <Row>
           <Col md={3} >
            <Card className='mt-3' >
              <Card.Header className='p-3' style = {{backgroundColor: '#ffc107',color: 'white' }}>
                <h4>Register</h4>
              </Card.Header>
              <Card.Body className='shadow-lg' style={{backgroundColor: '#e9e5eb'}} >
                <Form>
                  <Form.Group className='mb-3'>
                    <Form.Control
                    name = 'username'
                    onChange={updateInput}
                     type='text' placeholder='Username' />
                    </Form.Group>
                    <Form.Group className='mb-3' >
                    <Form.Control
                    name = 'email'
                    onChange={updateInput}
                    type='email' placeholder='Email' />       
                    </Form.Group>  
                    <Form.Group
                    name = 'password'
                    onChange={updateInput}
                    className='mb-3'>           
                    <Form.Control type='password' placeholder='Password' />
                    </Form.Group>
                    <Form.Group className='mb-3'>
                    <Button onClick={register} variant = "warning" type='submit' style = {{color: 'white'}} >Register</Button>
                    </Form.Group>
                  
                </Form>

              </Card.Body>
            </Card>
          </Col>
      </Row>
    </Container>
    </>
  )
}

export default Register