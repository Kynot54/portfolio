import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import {button} from "../../data.jsx"
import "./index.css"

const Heading = (props) => {
    const {title} = props
    // React Fragment Creates the Header Section of the Page with Bootstrap Components and Props
    return (
    <>
        <header id="header" className="viewport">
            <Container className="text-center">
                <Row className="align-items-center">
                    <Col><h1 id="title">{title}</h1></Col>
                </Row>
            <br />  
                <Button id={`${button[0].id}`} variant={`${button[0].variantType}`} href={`${button[0].hLink}`} size={`${button[0].size}`}> {`${button[0].name}`} </Button>
            </Container>
        </header>
    </> 
    );
}

export default Heading;