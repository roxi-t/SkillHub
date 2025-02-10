import ContactForm from "components/contact/ContactForm";
import Header from "components/mainLayout/Header";
import Footer from "layout/Footer";

function Contact() {
  return (
    <div className="bg-[#EDF2F6] text-[#494953]">
      <Header />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default Contact;
