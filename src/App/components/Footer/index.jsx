import React from 'react'

import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./index.css"

// Footer Portion of the Page Where the Github and LinkedIn Icon Area
export default function MyFooter() {
    return (
        // React Fragment
        <>
            <footer id="footer">
                <Container>
                    <Row>
                        <Col></Col>
                        <Col>
                            <a href="https://github.com/Kynot54" target="_blank" rel="noreferrer"> <FaGithub id="githubIcon" /> </a>
                        </Col>
                        <Col>
                            <a href="https://www.linkedin.com/in/kyle-whynott/" target="_blank" rel="noreferrer"> <FaLinkedin id="linkedinIcon" /> </a>
                        </Col>
                        <Col></Col>
                    </Row>
                    <Row className="justify-content-md-center">
                        <Col lg="8"><hr id="hr-line" /></Col> {/*Horizontal Line*/}
                    </Row>
                </Container>
            </footer>
        </>       
    );
}