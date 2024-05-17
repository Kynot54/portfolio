// Import Images for Sections in Data
import profile from "./Images/profile.webp"
import doblin from "./Images/Doblin.webp"
import resume from "./Images/Resume.pdf"
import solar from "./Images/solar.webp"
import ai from "./Images/ai_companion.webp"

import { DiHtml5, DiCss3, DiJavascript1, DiBootstrap, DiPython, DiRedis, DiGit, DiGithub } from "react-icons/di"
import { FaRust, FaGolang, FaPhp, FaWordpress, FaReact, FaAndroid, FaDocker } from "react-icons/fa6"
import { SiKotlin, SiWebpack, SiVite, SiFastapi, SiAmazondynamodb, SiTensorflow, SiScikitlearn, SiRabbitmq, SiMysql, SiSqlite, SiGraphql, SiKalilinux} from "react-icons/si"
import { RiSvelteLine } from "react-icons/ri"


//Import Font Styles for Data
import "./Fonts/fonts.css";


export const text = [
    {
        //Navigation
        tab1: "Home",
        tab2: "About",
        tab3: "Projects",
        tab4:"Contact"
    },
    {
        //Header
        title: "Kyle Whynott",
    },
    {
        //About
        image: profile,
        aboutTitle: "About Me",
        intro: "Hello! I am Kyle Whynott.",
        aboutParagraph: "Currently, I am a free-lance software engineer and in the upcoming fall a graduate student in the Masters of Software Engineering Program at California State University, Fullerton. At this time I am tackling new projects, engaging in open source software development, and undertaking a range of Software Engineering Related Jobs. I am open to full-time and internship/co-op opportunities, and am always looking to expand my network.",
        interestTitle: "Interests",
        interests: "I am interested in a wide range of topics, including but not limited to: Artificial Intelligence, Machine Learning, Data Science, Web Development, Mobile Development, Cyber Security, and Software Engineering. I am always looking to learn new things and expand my knowledge in these areas.",
        skillsTitle: "Skills"
    },
    {
        //Projects
        title: "Projects"
    },
    {
        //Contact
        title: "Contact Me",
        paragraph: "Get in Contact with Me. Click on this Button to Send an Email to Me, or reach out to me on the listed platforms below."
    }
]

export const projects = [
   {
        id: 1,
        title: "AI Mind Companion",
        paragraph: "For our team's senior capstone project we developed an iOS/Android (native) AI Companaion application centered around the health and well-being of the elderly 65 years of age and older.",
        image: ai,
        sourceCode: "https://github.com/Kynot54/AI-Mind-Companion"
    },
    {
        id: 2,
        title: "Fully Hacks 2024: Solar Insulation",
        paragraph: "For Fully Hack's 2024 I teamed up with some collegaues I've made friends with while attending California State University, Fullerton. For our project in the annual hack-a-thon held on our campus we utilized the Wolfram API to create a web application that provides the best areas to install solar panels based on Solar Insulation data. To accomplish this we utilized a seperate maps API in combination with the ability to set a marker and radius around that area to collect data on a specific area selected by the end-user",
        image: solar,
        sourceCode: "https://github.com/Kynot54/SustainableEnergy",

    },
    {
        id: 3,
        title: "Fully Hacks 2022: Doblin Dimension",
        paragraph: "This is a recent project that my cohorts and I did to showcase for our school's Hack-A-Thon, Tuffy Hacks 2022. Although, admittedly not a fairly advanced or large scale project I still felt that it deserved a spot on the site to showcase our ability to work together as a team and create something for fun!",
        image: doblin,
        sourceCode: "https://github.com/Kynot54/Doblin-Dimension-Tuffy-Hacks2022",
    }
]

export const icons = [
    // Icons for Skill Section
    {
        id: "html5", 
        component: DiHtml5
    },
    {
        id: "css3",
        component: DiCss3
    },
    {
        id: "javascript",
        component: DiJavascript1
    },
    {
        id: "bootstrap",
        component: DiBootstrap
    },
    {
        id: "python",
        component: DiPython
    },
    {
        id: "php",
        component: FaPhp
    },
    {
        id: "wordpress",
        component: FaWordpress
    },
    {
        id: "redis",
        component: DiRedis
    },
    {
        id: "kali-linux",
        component: SiKalilinux
    },
    {
        id: "git",
        component: DiGit
    },
    {
        id: "github",
        component: DiGithub
    },
    {
        id: "rust",
        component: FaRust
    },
    {
        id: "golang",
        component: FaGolang
    },
    {
        id: "react",
        component: FaReact
    },
    {
        id: "android",
        component: FaAndroid
    },
    {
        id: "docker",
        component: FaDocker
    },
    {
        id: "kotlin",
        component: SiKotlin
    },
    {
        id: "webpack",
        component: SiWebpack
    },
    {
        id: "vite",
        component: SiVite
    },
    {
        id: "fastapi",
        component: SiFastapi
    },
    {
        id: "dynamodb",
        component: SiAmazondynamodb
    },
    {
        id: "tensorflow",
        component: SiTensorflow
    },
    {
        id: "scikitlearn",
        component: SiScikitlearn
    },
    {
        id: "rabbitmq",
        component: SiRabbitmq
    },
    {
        id: "mysql",
        component: SiMysql
    },
    {
        id: "sqlite",
        component: SiSqlite
    },
    {
        id: "graphql",
        component: SiGraphql
    },
    {
        id: "svelte",
        component: RiSvelteLine
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