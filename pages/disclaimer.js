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
import PageTitle3 from "../components/Contact/PageTitle3";

const Contact = () => (

    <Layout 
        pageTitle="Vestly - Disclaimer" 
        colorSchema="/assets/colors/blue.css"
    >
        <Loader />
        <Header nav="disclaimer" />
        <PageTitle3 />
        <GoogleMaps />

        <ToTop />
    </Layout>

)

export default Contact;