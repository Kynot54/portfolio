import Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Nav  from "react-bootstrap/Nav";
import "./index.css";

const MyNavBar = (props) => {
    const {tab1, tab2, tab3, tab4} = props
    return (
    <>
        <div id="home"></div>
         <Navbar collapseOnSelect sticky="top" expand="lg">
            <Container fluid>
                <Col></Col>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end" >
                    <Nav>
                        <Nav.Link href="#home">{tab1}</Nav.Link>
                        <Nav.Link href="#about">{tab2}</Nav.Link>
                        <Nav.Link href="#project">{tab3}</Nav.Link>
                        <Nav.Link href="#contact">{tab4}</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </>
 );
}

export default MyNavBar;
