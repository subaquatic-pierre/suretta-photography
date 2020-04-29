import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'
import Divider from './divider'
// import logo from '/img/logo.png'

const Hero = () => {
    const image = useStaticQuery(graphql`
        query backImage {
            pic: file(name: {eq: "amanda-phung-1w2xsyc2wwI-unsplash"}) {
                childImageSharp {
                    fluid (quality: 100){
                        ...GatsbyImageSharpFluid
                    }
                }
            }
    }`)

    return (
        <div className="hero">
            <div className="hero-overlay">
                <div className="hero-overlay-inner">
                    <h1 className='hero-overlay-inner__heading'>Suretta Venter</h1>
                    <Divider />
                    <p className='hero-overlay-inner__sub-heading'>Awesome photography</p>
                    <img className='hero-overlay-inner__image' alt="awesome pic" src='/img/logo.png' />
                </div>
            </div>
            <div className="hero-image">
                <Img className='image' fluid={image.pic.childImageSharp.fluid} />
            </div>
        </div>
    )
}

export default Hero