import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";

import {button} from "../../data.jsx";

const MyProject = (props) => {
    const {title, paragraph, sourceCode, image} = props
        return (
        <>
            <Row className="project-containers align-items-center">
                <Col sm={6} xs={12}>
                        <h3 className="project-titles">{title}</h3>
                        <br />
                        <p><span className="tab"></span> {paragraph} </p>
                        <br />
                        <Row>
                            <br />
                            <Col>
                                <Button id={`${button[2].id}`} variant={`${button[2].variantType}`} href={`${sourceCode}`} size={`${button[2].size}`}> {`${button[2].name}`} </Button>
                            </Col>
                        </Row>
                </Col>
        
                <Col sm={6} xs={12}>
                    <Image className="project-images" alt="project image" src={image} fluid></Image>
                </Col>
            </Row>
            <br />
            </>
        )
}

export default MyProject;