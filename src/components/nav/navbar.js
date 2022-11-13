
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { ReactComponent as Logo } from "../../assets/images/brand/logo.svg"
import { Navitem } from './navitems/navitems';
import UiModal from '../modal/modal'
import { useState } from 'react';
import { Button, Col, Row, Stack } from 'react-bootstrap';
import { FaPhone, FaEnvelope } from 'react-icons/fa'

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
      title="Contact"
    >
      <Row className='w-100'>
        <Col xs={12} >
       
            <div className='d-flex w-100 justify-content-center flex-column'>
              <Button
                className='d-flex w-100 justify-content-center align-items-center gap-2 py-3 my-3'
                variant="primary"
                href="tel:+14804950707"
              >
                Call <FaPhone />
              </Button>
              <Button
                className='d-flex w-100 justify-content-center align-items-center gap-2 py-3 my-3'
                variant="primary"
                href="mailto:larry.kohler@guardian1life.com?Subject=Guardian1WebsiteContact"
              >
                Email <FaEnvelope />
              </Button>
            </div>
        </Col>
      </Row>
    </UiModal>
  </>
  );
};