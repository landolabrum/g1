
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {ReactComponent as Logo} from "../../assets/images/brand/logo.svg"
import Dropdown, {Navitem} from './navitems/navitems';

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
      <Navbar.Brand href="#home">
      <Navitem 
              href="/"
              label={<Logo/>}
            />
      </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-nav" />
        <Navbar.Collapse id="responsive-nav">
   
          <Nav className='d-flex w-100 justify-content-end'>
            <Navitem 
              href="/"
              label="home"
            />
            <Navitem 
              href="/about"
              label="about us"
            />
            <Navitem 
              href="/products"
              label="products & services"
            />
            {/* <Dropdown
              label="account"
              items={[
                {label: 'one', href: '/games'},
                {label: 'two', onClick: ()=>alert('hi')},
              ]}
            />
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};