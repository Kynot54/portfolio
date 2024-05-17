import Navbar  from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Nav  from "react-bootstrap/Nav";
import "./index.css";

const Navigation = (props) => {
    const {tab1, tab2, tab3, tab4} = props
    // React Fragment that Creates the Navigation Bar of the Page
    return (
    <>
        <div id="home"></div>
         <Navbar collapseOnSelect fixed="top" variant="dark" expand="lg">
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

export default Navigation;
