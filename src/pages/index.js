import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Hero from '../components/hero';
import About from '../components/about';
import SplitSection from '../components/splitsection';
import Heading from '../components/heading';
import CustomGallery from '../components/custom-gallery';
import Banner from '../components/banner';
import ContactForm from '../components/contact-form';

import '../scss/main.scss'


const BlogIndex = ({ data }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title={siteTitle} />
      <Hero />
      <About />
      <SplitSection />
      <Heading text='Some of my Favourites' />
      <br />
      <CustomGallery data={data.allFile} />
      <br />
      <Banner />
      <Heading text='Contact Me' />
      <br />
      <ContactForm />
    </Layout>

  )
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allFile(limit:6, filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}sourceInstanceName: {eq: "images"}}) {
      edges {
        node {
        childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
