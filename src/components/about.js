import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Img from 'gatsby-image'
import { StaticQuery } from 'gatsby';
import Divider from './divider'

const About = () => {
    return (
        <StaticQuery query={graphql`
        query AboutPic {
            user: file(name: {eq:"user"}) {
                childImageSharp {
                    sizes(quality: 100) {
                        ...GatsbyImageSharpSizes_withWebp
                    }
                }
            } 
        }    
        `}
            render={data => (
                <section>
                    <Container fluid className='about-section animate__animated animate__bounce animate__delay-2s'>
                        <Row className='justify-content-center '>
                            <Col md={3} className='d-flex flex-column mx-md-3 justify-content-center'>
                                <h1 className="text-center about-heading">About me</h1>
                                <Divider />
                                <p className="my-4">A fully awesome lifestyle and wedding photographer. I have been shooting lifestyle photography
                                for 10 years and I am the best. I can make you look like a king or queen in the best locations in the world. I am
                                excellent at wedding photography, we go to the best places and take the best photos. I have the most awesome artistic
                                eye for photgraphy. You will ove your photos garanteed!
                            </p>
                            </Col>
                            <Col md={3} className='mx-md-3'>
                                <Img fadeIn={true} className="image" fluid={data.user.childImageSharp.sizes} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        />)
}


export default About