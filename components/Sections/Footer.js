import React, { Component } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

export default class Footer extends Component {

	componentDidMount() {
		if(typeof window !== 'undefined') {
			window.WOW = require('wowjs/dist/wow.js');	
		}
	
		new WOW.WOW().init();
	}

	render() {
		return (
			<footer>
				
				{/* <!-- Widgets --> */}
				<div className="footer-widgets">
					<Container>
						
						<Row>
							
							{/* <!-- Footer logo --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									<p className="footer-logo">
										<img src="/images/logo-white.png" alt="Naxos" data-rjs="2" />
									</p>
									
									{/* <!-- Social links --> */}
									<div className="footer-social">
										<a href="https://x.com/TheVestlyApp" title="Twitter"><i className="fab fa-twitter fa-fw"></i></a>
										<a href="https://www.facebook.com/Vestlygame" title="Facebook"><i className="fab fa-facebook-f fa-fw"></i></a>
										<a href="https://www.tiktok.com/@thevestlyapp?_t=ZP-8ubFRdHCYdK&_r=1" title="TikTok"><i className="fab fa-tiktok"></i></a>
										
									</div>
								</div>
							</Col>
							
							{/* <!-- Useful links --> */}
							<Col className="col-12 col-md-6 col-lg-2 offset-lg-1 res-margin">
								<div className="widget">
									
									<h6>Useful Links</h6>
									
									<ul className="footer-menu">
										<li><a href="/user">User Account</a></li>
										<li><a href="/privacy-policy">Privacy Policy</a></li>
										
									</ul>
									
								</div>
							</Col>
							
							{/* <!-- Product help --> */}
							<Col className="col-12 col-md-6 col-lg-3 res-margin">
								<div className="widget">
									
								</div>
							</Col>
							
							{/* <!-- Download --> */}
							<Col className="col-12 col-md-6 col-lg-3">
								<div className="widget">
									
									<h6>Download</h6>
									
									<div className="button-store">
										<a href="https://play.google.com/store/apps/details?id=com.T3.Vestly&utm_source=na_Med" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0 mb-sm-3"><i className="fab fa-google-play"></i><p>Available on<span>Google Play</span></p></a>
										<a href="https://apps.apple.com/us/app/vestly-invest-learn-win/id998405251" className="custom-btn d-inline-flex align-items-center m-2 m-sm-0"><i className="fab fa-apple"></i><p>Download on<span>App Store</span></p></a>
									</div>
									
								</div>
							</Col>
							
						</Row>
						
					</Container>
				</div>
				
				{/* <!-- Copyright --> */}
				<div className="footer-copyright">				
					<Container>
						
						<Row>						
							<Col className="col-12">
								
								{/* <!-- Text --> */}
								<p className="copyright text-center">
									Copyright © 2025 <a href="#" target="_blank">Vestly</a>. All Rights Reserved.
								</p>
								
							</Col>
						</Row>
						
					</Container>				
				</div>
				
			</footer>
		);
	}

}