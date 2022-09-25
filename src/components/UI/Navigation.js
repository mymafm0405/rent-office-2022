import { Nav } from "react-bootstrap";

const Navigation = () => {
    return <Nav variant="tabs">
        <Nav.Item>
            <Nav.Link>Home</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link>Add new car</Nav.Link>
        </Nav.Item>
    </Nav>
}

export default Navigation;