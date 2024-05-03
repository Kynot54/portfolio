// Import Images for Sections in Data
import profile from "./Images/profile.webp"
import doblin from "./Images/Doblin.webp"
import resume from "./Images/Resume.pdf"
import solar from "./Images/solar.webp"
import ai from "./Images/ai_companion.webp"


//Import Font Styles for Data
import "./Fonts/fonts.css";


export const text = [
    {
        tab1: "Home",
        tab2: "About",
        tab3: "Projects",
        tab4: "Contact"
    },
    {
        //Header
        title: "Kyle Whynott",
    },
    {
        //About
        image: profile,
        title: "About Me",
        intro: "Hello! I am Kyle Whynott.",
        paragraph: "Currently, I am a free-lance software engineer and in the upcoming fall a graduate student in the Masters of Software Engineering at California State University, Fullerton. At this time I am tackling new projects, engaging in open source software development, and undertaking a range of Software Engineering Related Jobs. I am open to full-time and internship/co-op opportunities, and am always looking to expand my network.",
    },
    {
        //Project
        title: "Projects"
    },
    {
        //Contact
        title: "Contact Me",
        paragraph: "Get in Contact with Me. Click on this Button to Send an Email to Me, or reach out to me on the listed platforms below."
    },
    {
        //Footer
    }
]

export const projects = [
    {
        title: "AI Mind Companion",
        paragraph: "For our team's senior capstone project we developed an iOS/Android (native) AI Companaion application centered around the health and well-being of the elderly 65 years of age and older.",
        image: ai,
        sourceCode: "https://github.com/Kynot54/AI-Mind-Companion"
    },
    {
        title: "Fully Hack 2024: Solar Insulation",
        paragraph: "For Fully Hack's 2024 I teamed up with some collegaues I've made friends with while attending California State University, Fullerton. For our project in the annual hack-a-thon held on our campus we utilized the Wolfram API to create a web application that provides the best areas to install solar panels based on Solar Insulation data. To accomplish this we utilized a seperate maps API in combination with the ability to set a marker and radius around that area to collect data on a specific area selected by the end-user",
        image: solar,
        sourceCode: "https://github.com/Kynot54/SustainableEnergy",

    },
    {
        title: "Fully Hacks 2022: Doblin Dimension",
        paragraph: "This is a recent project that my cohorts and I did to showcase for our school's Hack-A-Thon, Tuffy Hacks 2022. Although, admittedly not a fairly advanced or large scale project I still felt that it deserved a spot on the site to showcase our ability to work together as a team and create something for fun!",
        image: doblin,
        sourceCode: "https://github.com/Kynot54/Doblin-Dimension-Tuffy-Hacks2022",
    }
]

export const button = [
    {
        //Know More Button
        id: "know-more-btn",
        variantType: "outline-primary",
        hLink: "#about",
        name: "Know More",
        size: ""
    },
    {
        //Resume Button
        id: "resume",
        variantType: "outline-light",
        hLink: resume,
        name: "Resume",
        size: "lg"
        
    },
    {
        //Source Code
        id: "project-button",
        variantType: "outline-primary",
        hLink: "",
        name: "Source Code",
        size: "lg",

    },
    {
        //Contact
        id: "email",
        variantType: "outline-light",
        hLink: "mailto:kyle.whynott@gmail.com",
        name: "Email",
        size: "lg",
    }
]

// TODO: Update Project List with Recent Projects and Improved Resume