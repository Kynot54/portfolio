import Container from "react-bootstrap/Container"
import Row from "react-bootstrap/Row"
import Col from "react-bootstrap/Col"
import Button from "react-bootstrap/Button"
import Image from "react-bootstrap/Image"
import {useRef, useEffect} from "react"
import {button} from "../../data.jsx" 

import "./index.css"

const About = (props) => {
    const {aboutTitle, image, intro, aboutParagraph, interestTitle, interestsParagraph, skillsTitle, icons} = props

    // Using Reference and Effect Hooks to Create an Animation as the User Enters the About Section of the Page
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
            threshold: 0.25
        });

        aboutObserver.observe(aboutSection);

        return () => aboutObserver.disconnect();
    }, []);

    const iconComponents = icons.map((icon) => {
        const SkillIcon = icon.component;
        return (
        <Col md={3} sm={6} xs={6} key={icon.id} className="icon-col">
            <SkillIcon className="icon-images" iconimage={icon.iconimage} size={100}/>
        </Col>

        );
    });

    // React Fragment Creates the About Section of the Page with Bootstrap Components and Props
    return(
        <>
        <section ref={aboutRef} id="about" className="viewport">
            <Container className="text-center" fluid>
                <h2 id="about-title">{aboutTitle}</h2> 
                <Row className="align-items-center">
                    <Col sm={6} xs={12}>
                        <Image id="pro-pic" alt="" src={image} rounded fluid></Image>
                    </Col>
                    <Col sm={6} xs={12}>
                        <p className="about-text about-paragraph">
                            {intro}
                        <br />
                        <br />
                            {aboutParagraph}
                        </p>
                        <br />
                    </Col>
                </Row>
                <Row className="justify-content-center-md-center">
                    <Col>
                        <Button id={`${button[1].id}`} variant={`${button[1].variantType}`} href={`${button[1].hLink}`} size={`${button[1].size}`}> {`${button[1].name}`} </Button>
                    </Col>
                </Row>
                <Row>
                    <h3 className="sub-title">{interestTitle}</h3>
                    <p className="about-text">{interestsParagraph}</p>
                </Row>
                <Row>
                    <h3 className="sub-title">{skillsTitle}</h3>
                    {iconComponents}
                </Row>
            </Container>
        </section>
        </>
        );
}

export default About;