import React, {useEffect, useState} from 'react'
import { UserService } from './../Services/UserService';
import {Container, Row, Col, Table} from 'react-bootstrap'

function UserList() {

let [state, setState] = useState({
  
users : []

});

useEffect( () => {
  UserService.getAllUsers().then((response)=> {
setState({
  ...state,
  users: response.data
})
  }).catch((error)=> {
console.log(error); 
  });
},[])

  return (
    <div>
      <Container className='mt-3' >
        <Row>
          <Col>
          <h3 className='text-primary' >User List</h3>
          <p className='fst-italic' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Id voluptas, aliquid suscipit quidem eligendi qui deserunt? Neque, deleniti. Repellat nihil blanditiis earum odit harum ipsa vitae commodi tenetur architecto iure.</p>
          </Col>
        </Row>
        <Row>
          <Col>
          <Table striped bordered hover className='shadow-lg text-center' >
            <thead>
                <tr>
                  <th style={{fontSize:"2vw"}} >SNO</th>
                  <th style={{fontSize:"2vw"}} >Name</th>
                  <th style={{fontSize:"2vw"}} >Email</th>
                  <th style={{fontSize:"2vw"}} >Website</th>
                  <th style={{fontSize:"2vw"}} >Company</th>
                  <th style={{fontSize:"2vw"}} >Location</th>
                </tr>
                </thead>
                <tbody>
                  {
                    state.users.length > 0 && 
                    state.users.map(user => {
                      return (
                        <tr key={user.id} >
                          <td style={{fontSize:"1.2vw"}} >{user.id}</td>
                          <td style={{fontSize:"1.2vw"}} >{user.name}</td>
                          <td style={{fontSize:"1.2vw"}} >{user.email}</td>
                          <td style={{fontSize:"1.2vw"}} >{user.website}</td>
                          <td style={{fontSize:"1.2vw"}} >{user.company.name}</td>
                          <td style={{fontSize:"1.2vw"}} >{user.address.city}</td>
                        </tr>
                      )

                    })
                  }
                </tbody>
          </Table>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default UserList