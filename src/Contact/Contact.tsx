import ContactCard from "./ContactSections/ContactCard";
import ContactDescription from "./ContactSections/ContactDescription";
import ContactWays from "./ContactSections/ContactWays";

function Contact() {
    return (
        <div className="contact bg-primary-bgColor grid grid-cols-[repeat(auto-fit,_minmax(350px,_1fr))] gap-[10px] relative" id="contact">
            <div className="contact-info container mx-auto flex flex-col lg:justify-between lg:flex-row flex-wrap">
                <ContactCard />
                <ContactDescription />
                <ContactWays />
            </div>
        </div>
    );
}

export default Contact;