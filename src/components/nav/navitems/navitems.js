import { Nav } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

export const Navitem = ({ label, href, onClick, as }) => {
  const navigate = useNavigate()
  const handleClick = () => {
    if (href) {
      if (href.startsWith("http")) {
        window.location.href = href
      }
      navigate(href)
    }
    if (onClick) {
      onClick()
    }
  }
  if (as === 'dropdown') {
    return <NavDropdown.Item className='text-capitalize' onClick={handleClick}>{label}</NavDropdown.Item>
  }
  return <Nav.Link className='text-capitalize' onClick={handleClick}>{label}</Nav.Link>
}

const Dropdown = ({ label, items }) => {
  const DropdownItems = () => {
    if (!items) {
      return;
    }
    return Object.entries(items).map(([k, v]) => {
      return <span key={k}>
        <Navitem
          label={v.label}
          as='dropdown'
          href={v.href}
          onClick={v.onClick}
        />
      </span>
    })
  }
  return <NavDropdown
    title={label}
    id="collasible-nav-dropdown"
    className='text-capitalize'
  >
    <DropdownItems />
    {/* <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
    <NavDropdown.Item href="#action/3.2">
      Another action
    </NavDropdown.Item>
    <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
    <NavDropdown.Divider />
    <NavDropdown.Item href="#action/3.4">
      Separated link
    </NavDropdown.Item> */}
  </NavDropdown>
}
export default Dropdown
