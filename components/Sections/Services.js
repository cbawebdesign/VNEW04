import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Services = (props) => {
    return (
        <section id="services" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>How It Works</h3>
							<p>How do I get started with Vestly?</p>
						</div>
						
					</Col>
				</Row>
			
				<Row>
					
					{/* <!-- Service 1 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-lightbulb"></div>
							
							<h5>Create A Game</h5>
							<p>After signing up for an account, create a Game within the app.</p>
							
						</div>
					</Col>

					{/* <!-- Service 2 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.3s">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-basic-headset"></div>
							
							<h5>Invite Your Friends</h5>
							<p> Invite your friends via iMessage to compete with you in your game.</p>
						
						</div>
					</Col>

					{/* <!-- Service 3 --> */}
					<Col className="col-12 col-lg-4 res-margin wow fadeInUp" data-wow-offset="10" data-wow-duration="1s" data-wow-delay="0.6s">
						<div className={props.serviceClassName}>
							
							<div className="icon icon-arrows-diagonal"></div>
							
							<h5>Start Trading!</h5>
							<p>Use your favorite daytrading techniques to outperform your competition!</p>
						
						</div>
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Services;