import Container from "react-bootstrap/Container";
import Project from "./project.jsx"

import {projects} from "../../data.jsx"

import "./index.css"

export default function ProjectList(props) {
    const {title} = props
    const projectsComponent = projects.map((project, id) => {
        return <Project
        key={project.id}
        title={project.title}
        paragraph={project.paragraph}
        seeMore={project.seeMore}
        sourceCode={project.sourceCode}
        image={project.image}
/>
    })
    return(
        <section id="project" className="viewport">
            <Container fluid className="text-center">
                <br />
                <h2 id="project-title">{title}</h2>
                    {projectsComponent}     
            </Container>
        </section>
        );
}