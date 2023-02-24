import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import Counter from './Component/Counter';
import Register from './Component/Register';
import UserList from './Component/UserList';
function App() {
  return (
    <div>
      <Navbar bg="dark" expand="sm" variant='dark'>
        <Container>
          <Navbar.Brand href='/' >Json Data</Navbar.Brand>
        </Container>
      </Navbar>
      {/* <Counter /> */}
      {/* <Register /> */}
      <UserList />
    </div>
  )
}

export default App