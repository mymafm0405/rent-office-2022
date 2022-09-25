import { Nav } from "react-bootstrap";
import { NavLink } from 'react-router-dom';

const Navigation = () => {
    return <Nav variant="tabs">
        <Nav.Item>
            <Nav.Link><NavLink to='/'>Home</NavLink></Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link><NavLink to="/new-car">Add new car</NavLink></Nav.Link>
        </Nav.Item>
    </Nav>
}

export default Navigation;