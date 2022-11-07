
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from "../../assets/images/brand/logo.svg"
import { Navitem } from './navitems/navitems';
import UiModal from '../modal/modal';
import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
export default function NavigationBar() {
  const [show, setShow] = useState(false)
  const handleModal = () => {
    setShow(!show)
  }
  return (<>
    <UiModal
      show={show}
      title={<h3 className='my-3'>Contact</h3>}
      onClose={handleModal}
    >
      <div className="w-100 d-flex flex-column justify-content-center">
        <div className='modal-contact d-flex flex-column gap-3'>
        <Button href="tel:+14804950707" className='d-flex w-100 align-items-center h-100 m-auto'>
          <h6 className='d-flex w-100 align-items-center h-100 m-auto gap-2 justify-content-center'>
            <div className='material-icons'>
              phone
            </div>
            Call</h6>
        </Button>
        <Button href="mailto:larry.kohler@guardian1life.com?Subject=Guardian1WebsiteContact" className='d-flex w-100 align-items-center h-100 m-auto'>
          <h6 className='d-flex w-100 align-items-center h-100 m-auto gap-2 justify-content-center'>
            <div className='material-icons'>
              email
            </div>
            Email</h6>
        </Button>
        </div>
      </div>
    </UiModal>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container >
        <Navbar.Brand href="#home">
          <Navitem
            href="/"
            label={<Logo />}
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="responsive-nav" />
        <Navbar.Collapse id="responsive-nav">

          <Nav className='d-flex w-100 justify-content-end'>
            <Navitem
              onClick={handleModal}
              label="contact"
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
  </>
  );
};