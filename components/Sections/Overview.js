import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Overview = (props) => {
    return (
        <section id="overview" className={props.className}>
			
			{/* <!-- Container --> */}
			<Container>
				
				{/* <!-- Track time --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 offset-lg-1 order-lg-last res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Trade on the Go!</h3>
							<p>Our user-friendly interface can be used to practice market moves wherever you are! </p>
						</div>

						{/* <!-- Items --> */}
						<div className="overview-item">
							
							{/* <!-- Item 1 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-compass"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Easy to Use</h6>
									<p>Vestly has a straightforward and simple UI designed for ease of use for beginners and pros alike</p>
								</div>

							</div>

							{/* <!-- Item 2 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-helm"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Competitive Learning Playground</h6>
									<p>Utilize real-time stock information to practice your favorite trading strategies against your friends</p>
								</div>

							</div>

							{/* <!-- Item 3 --> */}
							<div className="overview-box d-flex flex-wrap">

								{/* <!-- Icon --> */}
								<div className="icon icon-basic-link"></div>

								{/* <!-- Content --> */}
								<div className="content">
									<h6 className="font-weight-bold mb-2 mt-0">Win Real Prizes</h6>
									<p>Performing well can grant you prizes ranging from Vestly Tokens to Apple AirPods & more!</p>
								</div>

							</div>

						</div>
							
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 order-lg-first text-sm-center">
						<img src="/images/overview/mockup2.png" alt="" className="img-responsive" />
					</Col>
					
				</Row>
				
				<div className="empty-100"></div>
				
				{/* <!-- Daily schedule --> */}
				<Row>
					
					{/* <!-- Content --> */}
					<Col className="col-12 col-lg-6 res-margin">
							
						{/* <!-- Section title --> */}
						<div className="section-title text-center text-lg-start">
							<h3>Key Features of Vestly</h3>
							<p>Check out some of the ideas that brought Vestly to life!</p>
						</div>

						{/* <!-- List --> */}
						<ul className="overview-list">

							<li>
								<p><i className="fa-li fas fa-check"></i> <b>Real Market Data:</b> Practice with actual stock market information updated in real-time for an authentic learning experience.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> <b>Risk-Free Learning:</b> Develop your trading skills without risking real money while still experiencing market dynamics</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> <b>Social Competition:</b> Challenge friends or join public competitions to test your strategies against other players.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> <b>Performance Analytics:</b> Track your trading performance with detailed statistics points system to identify strengths and areas for improvement.</p>
							</li>

							<li>
								<p><i className="fa-li fas fa-check"></i> <b>Educational Resources:</b> Access tutorials, strategy guides, and market insights to improve your trading knowledge.</p>
							</li>

						</ul>

						{/* <!-- Button --> */}
						<p className="text-center text-lg-start">
							<a href="#" className="btn">Learn More</a>
						</p>
					
					</Col>
					
					{/* <!-- Image --> */}
					<Col className="col-12 col-lg-5 offset-lg-1 text-sm-center">
						<img src="/images/overview/mockup21.png" alt="" className="img-responsive" />
					</Col>
					
				</Row>
				
			</Container>
			
		</section>
    );
}

export default Overview;