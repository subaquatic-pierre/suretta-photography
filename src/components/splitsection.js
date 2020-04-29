import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { StaticQuery, graphql } from "gatsby";

const SplitSection = () => {
    return (
        <StaticQuery query={graphql`
            query SplitImages {
                pic1: file(name: {eq: "split1"}) {
                    childImageSharp {
                        sizes (quality: 100){
                        ...GatsbyImageSharpSizes_withWebp
                        }
                    }
                }
                pic2: file(name: {eq: "split2"}) {
                    childImageSharp {
                        sizes (quality: 100){
                        ...GatsbyImageSharpSizes_withWebp
                        }
                    }
                }
            }
    `}
            render={data => (
                <section >
                    <Row noGutters={true}>
                        <Col xs={12} md={6}>
                            <img className='split-image' src={data.pic1.childImageSharp.sizes.src} alt="" />
                        </Col>
                        <Col xs={12} md={6}>
                            <div className='split'>
                                <h2>Awesome info</h2>
                                <p>Minim dolore excepteur aliqua incididunt aliqua magna do mollit ullamco minim tempor.
                                Sint anim eiusmod eu magna.
                                Commodo aliquip sunt officia id ullamco nulla cupidatat sunt irure Lorem proident nisi nostrud.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                            <div className='split'>
                                <h2>Awesome info</h2>
                                <p>Minim dolore excepteur aliqua incididunt aliqua magna do mollit ullamco minim tempor.
                                Sint anim eiusmod eu magna.
                                Commodo aliquip sunt officia id ullamco nulla cupidatat sunt irure Lorem proident nisi nostrud.
                                </p>
                            </div>
                        </Col>
                        <Col xs={{ span: 12, order: 1 }} md={{ span: 6, order: 2 }}>
                            <img className='split-image' src={data.pic2.childImageSharp.sizes.src} alt="" />
                        </Col>
                    </Row>
                </section>
            )}
        />)
}

export default SplitSection