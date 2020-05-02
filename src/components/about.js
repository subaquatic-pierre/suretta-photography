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
                    <Container className='about-section'>
                        <Row >
                            <Col md={{ span: 6, order: 2 }} className='d-flex flex-column justify-content-center'>
                                <h1 className="text-center about-heading">About me</h1>
                                <Divider />
                                <p className="my-4">Et pariatur consequat consequat elit veniam occaecat.
                                Adipisicing et id nulla deserunt cupidatat ipsum sint.
                                Sunt Lorem proident ipsum ut.
                                Dolore anim veniam in elit dolore laboris.
                                Aliquip dolore cillum consequat exercitation ipsum sit occaecat do eiusmod ea.
                                Duis cupidatat nulla ullamco esse consequat incididunt eiusmod irure.
                            </p>
                            </Col>
                            <Col md={6}>
                                <Img fadeIn={true} className="image" fluid={data.user.childImageSharp.sizes} />
                            </Col>
                        </Row>
                    </Container>
                </section>
            )}
        />)
}


export default About