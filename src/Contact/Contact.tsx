import ContactCard from "./ContactSections/ContactCard";
import ContactDescription from "./ContactSections/ContactDescription";
import ContactWays from "./ContactSections/ContactWays";
import './contact.css';


function Contact() {
    return (
        <div className="contact min-h-[500px] max-h-[fit-content] bg-[#fafdff] my-[50px] content-center" id="contact">
            <div className="contact-info container mx-auto flex justify-between">
                <ContactCard />
                <ContactDescription />
                <ContactWays />
            </div>
        </div>
    );
}




export default Contact;