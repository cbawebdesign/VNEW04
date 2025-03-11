import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const PageTitle = () => {
    const parallax = useRef(null);

    useEffect(() => {
        if (parallax.current) {
            parallax.current.style.backgroundImage = `url(${parallax.current.getAttribute('data-image')})`;
        }
    }, [parallax]);

    return (
        <section className="page-title valign parallax" data-image="/images/parallax/banner.png" ref={parallax}>
			
			{/* <!-- Overlay --> */}
			<div className="overlay"></div>	
			
			{/* <!-- Container --> */}
			<Container>
				<Row>
					<Col className="col-12 text-center">
						
						{/* <!-- Title --> */}
						<h1 className="blog-title">Privacy Policy</h1>
						

					</Col>
				</Row>
			</Container>
			
		</section>
    );
};

export default PageTitle;
