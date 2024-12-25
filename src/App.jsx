import  { useRef , useState} from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import About from "./pages/About";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";

function App() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // References for each section
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const servicesRef = useRef(null);
  const contactRef = useRef(null);

  // Function to scroll to a section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <Router>
      {/* Header */}
      <Header
        onNavigate={(section) => {
          switch (section) {
            case "home":
              scrollToSection(homeRef);
              break;
            case "about":
              scrollToSection(aboutRef);
              break;
            case "services":
              scrollToSection(servicesRef);
              break;
            case "contact":
              scrollToSection(contactRef);
              break;
            default:
              break;
          }
        }}


        isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}
      />

      {/* Main Content */}
      <div>
        {/* Render all sections */}
        <div ref={homeRef}>
          <Home
          onNavigate={(section) => {
            switch (section) {
           
          case "contact":
                scrollToSection(contactRef);
                break;
             
            }
          }}
          />
       
        </div>
        <div ref={aboutRef}>
          <About />
        </div>
        <div ref={servicesRef}>
          <Services
          onNavigate={(section) => {
            switch (section) {
              case "contact":
                scrollToSection(contactRef);
                break;
              }}}
          />
        </div>
        <div ref={contactRef}>
          <Contact />
        </div>
        <Footer
        
        onNavigate={(section) => {
          switch (section) {
            case "home":
              scrollToSection(homeRef);
              break;
            case "about":
              scrollToSection(aboutRef);
              break;
            case "services":
              scrollToSection(servicesRef);
              break;
            case "contact":
              scrollToSection(contactRef);
              break;
            default:
              break;
          }
        }}/>
      </div>
    </Router>
  );
}

export default App;
