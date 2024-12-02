import Landing from "../Landing/Landing";
import Services from "../Services/Services";
import Departments from "../Departments/Departments";
import KnowFounder from "../KnowFounder/KnowFounder";
import TrustSection from "../TrustSection/TrustSection";
import Testimonials from "../Testimonials/Testimonials";
import KnowDoctors from "../KnowDoctors/KnowDoctors";
import Contact from "../Contact/Contact";
import Certificates from "../Certificates/Certificates";
import Footer from "../Footer/Footer";


function App() {

  return (
    <div className="App">
      <Landing />
      <Services />
      <Departments />
      <TrustSection />
      <Testimonials />
      <KnowDoctors />
      <KnowFounder />
      <Contact />
      <Certificates />
      <Footer />
    </div>
  )
}

export default App
