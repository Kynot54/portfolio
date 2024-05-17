import Container from "react-bootstrap/Container";
import Project from "./project.jsx"

import "./index.css"

export default function ProjectList(props) {
    const {title, projects} = props
    // React Fragment that Maps the Projects to the Project Component
    const projectsComponent = projects.map((project) => {
        return <Project
        key={project.id}
        title={project.title}
        paragraph={project.paragraph}
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