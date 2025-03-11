import React, { useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useForm } from '@formspree/react';

const Contact = (props) => {
    const [state, handleSubmit] = useForm("FORMSPREE_FORM_ID");
    const frm = useRef(null);
    const result = useRef(null);

    if (state.succeeded) {
        frm.current.style.display = "none";
        result.current.style.display = "block";
    }

    return (
        <section id="contact" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<div className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Get In Touch</h3>
							<p>We value our user feedback.</p>
                        </div>
						
					</div>
				</Row>

				<Row>
					
					{/* <!-- Contact info --> */}
					<Col className="contact-info col-12 col-lg-4 res-margin">
						   
                        <h5>
                            <span className="icon icon-basic-mail"></span> 
                            Email Address
                        </h5>
                        <p>
                            <a href="mailto:developer.vestly@gmail.com">developer.vestly@gmail.com</a>
                        </p>
                        
                        <h5>
                            <span className="icon icon-basic-clock"></span> 
                            Working Hours
                        </h5>
                        <p>
                            09:00AM to 06:00PM
                        </p>
                        
					</Col>
					
					{/* <!-- Contact form --> */}
					<Col className="col-12 col-lg-8">
						
                        <form id="contact-form" onSubmit={handleSubmit} ref={frm}>                             
                            
                            <Row>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="text" name="name" className="form-control field-name" placeholder="Name" />
                                    </div>
                                </Col>
                                <Col className="col-12 col-lg-6">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="email" name="email" className="form-control field-email" placeholder="Email" />
                                    </div>
                                </Col>                                
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <input type="text" name="subject" className="form-control field-subject" placeholder="Subject" />
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12">
                                    <div className="form-group mt-2 mb-3">
                                        <textarea name="message" rows="4" className="form-control field-message" placeholder="Message"></textarea>
                                    </div>
                                </Col>
                            </Row>
                            
                            <Row>
                                <Col className="col-12 col-lg-12 mt-2">
                                    <button type="submit" id="contact-submit" name="send" className="btn" disabled={state.submitting}>Send Message</button>
                                </Col>
                            </Row>
                            
                        </form>
                        
                        {/* <!-- Submit Results --> */}
                        <div className="contact-form-result" ref={result}>
                            <h4>Thank you for the e-mail!</h4>
                            <p>Your message has already arrived! We'll contact you shortly.</p>
                        </div>
                        
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Contact;