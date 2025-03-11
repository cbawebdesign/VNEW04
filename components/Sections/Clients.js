import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

const Clients = (props) => {
    return (
        <section id="clients" className={props.className}>
            <Container>
                <Row className="justify-content-md-left">
                    <Col md={8}>
                        <h2>How to deactivate your account</h2>
                        <p>
                            Our app allows you to delete your account. Once your account is deleted, your account is no longer available in our systems. 
                            You won’t be able to reactivate your previous account and you won’t have access to any old posts. 
                            Once your account is deleted, your username will be available for registration by other Vestly accounts.
                        </p>
                    </Col>
                </Row>
                <Row className="mt-4">
                    <Col md={6}>
                        <h3>Top things to know before deactivating your account</h3>
                        <p>Here are a few things to keep in mind if you’ve decided to deactivate or delete your Vestly account:</p>
                        <ul>
                            <li>When you deactivate your Vestly account, mentions of your account’s username in other’s posts will still exist. However it will no longer link to your profile as your profile will no longer be available.</li>
                            <li>Vestly may retain some information on your deactivated account to ensure the safety and security of its platform and people using Vestly. More information can be found here.</li>
                            <li>If you want to download your Vestly data, you’ll need to request it before you deactivate your account. Deactivating your account does not remove data from Vestly systems.</li>
                            <li>If you want to delete data from your account without deleting your account completely, please email us at developer.vestly@gmail.com.</li>
                        </ul>
                    </Col>
                    <Col md={6}>
                        <h3>How to deactivate your account</h3>
                        <p>Follow these steps:</p>
                        <ol>
                            <li>Press on the User Icon button on the top left of the home page.</li>
                            <li>Press the Delete Account button.</li>
                            <li>Read the Delete Account information and then press Delete.</li>
                        </ol>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Clients;
