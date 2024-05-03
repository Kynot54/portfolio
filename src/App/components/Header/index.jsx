import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"

import {button} from "../../data.jsx"
import "./index.css"

const MyHeader = (props) => {
    const {title} = props
    return (
    <>
        <header id="header" className="viewport">
            <Container>
                <Row>
                    <Col><h1 id="title">{title}</h1></Col>
                </Row>
            <br />  
                <Button id={`${button[0].id}`} variant={`${button[0].variantType}`} href={`${button[0].hLink}`} size={`${button[0].size}`}> {`${button[0].name}`} </Button>
            </Container>
        </header>
    </> 
    );
}

export default MyHeader;