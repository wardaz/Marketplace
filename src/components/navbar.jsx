import './navbar.css'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Form from 'react-bootstrap/Form';

import logo from '../assets/logo/logo.png'


function Navbar1(){
    // var sidemenu = document.getElementById("sidemenu");
   
    // function openmenu(){
    // sidemenu.style.right='0';
    // }
    // function closemenu(){
    //     sidemenu.style.right='-768px';
    // }
 
    return(
        <>
        
        <Navbar bg="light" expand="lg" className='Nav1'>
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /> </Navbar.Brand>
       
        <Form className="d-flex navsearch">
                  <Form.Control
                    type="search"
                    placeholder="Search item here..."
                    className="me-2 search_btn"
                    aria-label="Search"
                  />
                   <Button variant="primary" size="sm">
                   <i class="fa-solid fa-magnifying-glass"></i>
        </Button>
                </Form>
              
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {/* Home */}
            <NavDropdown title="Home" id="basic-nav-dropdown" className='px-3'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* Explore */}
            <NavDropdown title="Explore" id="basic-nav-dropdown" className='px-3'>
              <NavDropdown.Item href="#action/3.1">Explore</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* Pages */}
            <NavDropdown title="Pages" id="basic-nav-dropdown" className='px-3'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* Stats */}
            <NavDropdown title="Stats" id="basic-nav-dropdown" className='px-3'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
            {/* Elements */}
            <NavDropdown title="Elements" id="basic-nav-dropdown" className='px-3'>
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>

            <Button variant="primary" className=' connect_btn'>Connect Wallet</Button>{' '}

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>



</>

);

}

export default Navbar1;