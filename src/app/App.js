import React, { Suspense, lazy} from 'react';
import './App.css';
import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Frontpage from './components/Frontpage'

import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import ToDoProvider from './components/ToDoProvider';


const Todo = lazy(() => import("./components/ToDo"))
const ToDo_Done = lazy(() => import("./components/ToDo_Done"))

export default function App() {
  return (
    <div className="App">
      <ToDoProvider>
      <BrowserRouter>
        <Suspense fallback="Loading">
          <NavigationBar/>
            <Routes>
              <Route index element={<Frontpage/>} />
              <Route path="/ToDo" element={<Todo/>} />
              <Route path="/Done" element={<ToDo_Done/>} />
            </Routes>
        </Suspense>
      </BrowserRouter>
      </ToDoProvider>
      
    </div>
  );
}

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="/">TODO App!</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/ToDo">TODOs</Nav.Link>
            <Nav.Link href="/Done">Finished TODOs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}


