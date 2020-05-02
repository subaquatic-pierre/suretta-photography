import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Img from 'gatsby-image'

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

            <div className="hero-image">
                <Img className='hero-image' fluid={image.pic.childImageSharp.fluid} />
            </div>
        </div>
    )
}

export default Hero