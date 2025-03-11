import React from 'react';
import { Container, Row, Col, Accordion } from 'react-bootstrap';

const Support = (props) => {
    return (
        <section id="support" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Section title --> */}
				<Row className="justify-content-center">
					<Col className="col-12 col-md-10 col-lg-6">
						
						<div className="section-title text-center">
							<h3>Frequently Asked Questions</h3>
							<p>Have a question about Vestly? Check here first!</p>
						</div>
						
					</Col>
				</Row>
				
				<Row>					
					<Col className="col-12 col-lg-10 offset-lg-1">
						
						{/* <!-- FAQ accordion --> */}
						<Accordion defaultActiveKey="0" flush>
							
							{/* <!-- Question 1 --> */}
							<Accordion.Item eventKey="0">

								<Accordion.Header as="h5">
									Is Vestly free to use? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Yes, Vestly is completely free to download and play, and is available on both the App Store and Google Play store.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
								
							{/* <!-- Question 2 --> */}
							<Accordion.Item eventKey="1">

								<Accordion.Header as="h5">
									How does trading work on Vestly? 			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Vestly simulates real-world stock trading using live market data, allowing you to buy and sell stocks just like in a real brokerage account.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>

							{/* <!-- Question 3 --> */}
							<Accordion.Item eventKey="2">

								<Accordion.Header as="h5">
									Do I need prior stock market experience to play?			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										No, Vestly is designed for both beginners and experienced traders, and offers a risk-free way to learn about trading and investing while giving you the motivation of friendly competition.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 4 --> */}
							<Accordion.Item eventKey="3">

								<Accordion.Header as="h5">
									What can I win?		        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Prizes vary by competition. For user-hosted games you can win amounts of Vestly Tokens which
										can be redeemed for various prizes such as VTFs, supplemental videos, subscriptions, etc.
										 Sponsored games will have their special prizes listed in the game description.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
							{/* <!-- Question 5 --> */}
							<Accordion.Item eventKey="4">

								<Accordion.Header as="h5">
									Is Vestly available outside the U.S.?  			        	
								</Accordion.Header>

								<Accordion.Body>
									<p>
										Availability may vary by country. Check the App Store or Google Play store to see if 
										Vestly is available in your region.
									</p>
								</Accordion.Body>
								
							</Accordion.Item>
							
						</Accordion>
						
					</Col>					
				</Row>
				
				<div className="empty-30"></div>
				
				<Row>					
					<Col className="col-12">
						<p className="text-center mb-0">Still have a question? <a href="#contact"><strong>Ask your question here</strong></a></p>
					</Col>
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Support;