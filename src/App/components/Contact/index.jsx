import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import {useRef, useEffect} from "react"

import {button} from "../../data.jsx"

import "./index.css"

const MyContact = (props) => {
    const {title, paragraph} = props

    // Use Reference and State Hooks to Provide User with Animation as they enter the Contact Section

    const contactRef = useRef(null);

    useEffect(() => {
        const contactSection = contactRef.current;
        const contactObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if(entry.isIntersecting){
                    entry.target.classList.add("animated");
                } else {
                    entry.target.classList.remove("animated");
                }
            });
        }, {
            threshold: 0.5
        });

        contactObserver.observe(contactSection);

        return () => contactObserver.disconnect();
    },[]);

    // React Fragement Creates and Contact Section with an Email Button where the user can send an email
    return (
    <>
        <section ref={contactRef} id="contact" className="viewport">
            <Container>
                <Row>
                    <Col> <h2 id="title" className="text">{title}</h2> </Col>
                </Row>
            <br />
                <Row>
                    <Col>
                        <p className="text">{paragraph}</p>
                    </Col>
                </Row>
                <Row id="email-container">
                <Col>
                    <Button id={`${button[3].id}`} variant={`${button[3].variantType}`} href={`${button[3].hLink}`} size={`${button[3].size}`}> {`${button[3].name}`} </Button>
                </Col>
            </Row>
            </Container>
        </section>
    </> 
    );
}

export default MyContact;