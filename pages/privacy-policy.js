import Layout from "../components/Sections/Layout";
import Loader from "../components/Sections/Loader";
import Header from "../components/Sections/Header";
import PageTitle from "../components/Contact/PageTitle";
import Services from "../components/Contact/Services";
import Clients from "../components/Contact/Clients";
import ContactForm from "../components/Contact/ContactForm";
import GoogleMaps from "../components/Contact/GoogleMaps";
import Footer from "../components/Sections/Footer";
import ToTop from "../components/Sections/ToTop";

const Contact = () => (

    <Layout 
        pageTitle="Vestly - Privacy Policy" 
        colorSchema="/assets/colors/blue.css"
    >
        <Loader />
        <Header nav="privacy-policy" />
        <PageTitle />
        <ContactForm />

        <ToTop />
    </Layout>

)

export default Contact;