import React, {useState} from 'react'
import {Navbar, Container, Nav, NavDropdown, Button} from 'react-bootstrap'

import logo from './logo.svg'
import './App.css'
import data from './Data.js'

function App() {
  const [shoes, setShoes] = useState(data)
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">ShoeShop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <div className="my-background" id="bg">
        <div className="title">20% Season Off</div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat, adipisci voluptatem? Est hic quod, voluptatum dignissimos vel illo repellat cumque magni veniam atque esse vero in
          excepturi, quisquam sequi? Suscipit molestiae accusantium provident cum quod beatae sit iste expedita perspiciatis, voluptate id omnis! Dignissimos repellat laudantium unde, deleniti magnam
          cumque quae esse doloribus tenetur aut dolore magni quaerat quo quia, sed ut ipsum totam facilis fugiat enim nisi aliquam? Doloribus, natus. Distinctio ullam praesentium veniam ducimus, ex
          eum voluptate molestias earum a fugit quis porro fuga quasi expedita! Veritatis quidem molestias itaque amet, provident incidunt quaerat dolore voluptates aspernatur maxime?
        </p>
      </div>
      <div className="container">
        {shoes.map((e, i) => {
          return <ShoeList shoe={e} key={i}></ShoeList>
        })}
      </div>
    </div>
  )
}

function ShoeList(props) {
  let num = props.shoe.id + 1
  return (
    <div className="row">
      <div className="col-md-4">
        <img src={`https://codingapple1.github.io/shop/shoes${num}.jpg`} alt={`fig${num}`} width="100%" />
        <h4>{props.shoe.title}</h4>
        <p>{props.shoe.content}</p>
      </div>
    </div>
  )
}

export default App
