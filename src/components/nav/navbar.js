
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from "../../assets/images/brand/logo.svg"
import { Navitem } from './navitems/navitems';
import UiModal from '../modal/modal'
import { useState } from 'react';
import { Button, Stack } from 'react-bootstrap';
import {FaPhone, FaEnvelope} from 'react-icons/fa'

export default function NavigationBar() {
  const [show, setShow] = useState(false)
  return (<>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Navitem
            href="/"
            label={<Logo width="290px" />}
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
              onClick={() => setShow(!show)}
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
    <UiModal
      show={show}
    >
      <div className='d-flex flex-column align-items-center gap-3 w-100'>

        <div className='mb-4 display-6 fw-500 d-flex w-100 rounded justify-content-center'>Contact</div>
        <Stack gap={4} >
          <Button
            className='d-flex w-100 justify-content-center align-items-center gap-2'
            variant="primary"
            href="tel:+14804950707"
          >
            Call <FaPhone/>
          </Button>
          <Button
            className='d-flex w-100 justify-content-center align-items-center gap-2' 
            variant="primary"
            href="mailto:larry.kohler@guardian1life.com?Subject=Guardian1WebsiteContact"
          >
            Email <FaEnvelope/>
          </Button>
        </Stack>
      </div>
    </UiModal>
  </>
  );
};