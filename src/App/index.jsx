import Navigation from "./components/NavBar";
import Heading from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects"
import Contact from "./components/Contact"
import Footer from "./components/Footer"

import {text, icons, projects} from "./data.jsx"

import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"



function App() {
 // App Level React Component that Contains the Navigation, Header, About, Projects, Contact, and Footer Components 
  return (
    <div id="App">
        <Navigation tab1={text[0].tab1} tab2={text[0].tab2} tab3={text[0].tab3} tab4={text[0].tab4} className="viewport"/>
        <Heading title={text[1].title} className="viewport"/>
        <About image={text[2].image} aboutTitle={text[2].aboutTitle} intro={text[2].intro} aboutParagraph={text[2].aboutParagraph} interestTitle={text[2].interestTitle} interestsParagraph={text[2].interests} skillsTitle={text[2].skillsTitle} icons={icons} className="viewport" />
        <Projects title={text[3].title} projects={projects} className="viewport" />
        <Contact title={text[4].title} paragraph={text[4].paragraph} className="viewport" />
        <Footer className="viewport" />
    </div>
  );
}

export default App;
