import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import {useRef, useEffect} from "react"
import {button} from "../../data.jsx" 

import "./index.css"

const MyAbout = (props) => {
    const {title, image, intro, paragraph} = props

    // Using Reference and State Hooks to Create an Animation as the User Enters the About Section of the Page
    const aboutRef = useRef(null);

    useEffect(() => {
        const aboutSection = aboutRef.current;
        const aboutObserver = new IntersectionObserver((entries) => {
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

        aboutObserver.observe(aboutSection);

        return () => aboutObserver.disconnect();
    }, []);


    return(
        <>
        <section ref={aboutRef} id="about" className="viewport">
            <Container className="text-center" fluid>
                <h2 id="about-title">{title}</h2> 
                <Row className="align-items-start">
                    <Col sm={6} xs={12}>
                        <Image id="pro-pic" alt="" src={image} rounded fluid></Image>
                    </Col>
                    <Col sm={6} xs={12}>
                        <p className="about-text about-paragraph">
                            {intro}
                        <br />
                        <br />
                            {paragraph}
                        </p>
                        <br />
                        <Button id={`${button[1].id}`} variant={`${button[1].variantType}`} href={`${button[1].hLink}`} size={`${button[1].size}`}> {`${button[1].name}`} </Button>
                    </Col>
                </Row>
            </Container>
        </section>
        </>
        );
}

export default MyAbout;