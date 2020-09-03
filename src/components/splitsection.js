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
                                <h2>LifeStyle</h2>
                                <p>The best lifestyle photography person in the world. I can take the best photos of your lifestyle. Packages include
                                location scouting as well as 10 pictures fully edited. Package prices start from 1 million dollar and more.
                                </p>
                            </div>
                        </Col>
                    </Row>
                    <Row noGutters={true}>
                        <Col xs={{ span: 12, order: 2 }} md={{ span: 6, order: 1 }}>
                            <div className='split'>
                                <h2>Weddings</h2>
                                <p>I do full wedding shoots. Packages include full time shooting and editing. I have been doing wedding photos
                                forever and I am the best. The price range is from 1million Dollar to much more.
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