import Landing from "../Landing/Landing";
import Services from "../Services/Services";
// import About from "../About/About";
// import Specialities from "../Specialities/Specialities";
import Departments from "../Departments/Departments";
import KnowFounder from "../KnowFounder/KnowFounder";
// import Trust from "../Trust/Trust";
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
      {/* <About /> */}
      {/* <Specialities /> */}
      <Departments />
      {/* <Trust /> */}
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
