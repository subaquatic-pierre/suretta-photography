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
      <SEO title={`Home - ${siteTitle}`} />
      <Hero />
      <About />
      <SplitSection />
      <CustomGallery data={data.allFile} />
      <br />
      <Banner />
      <div className='contact-container'>
        <Heading text='Contact Me' />

        <div className='d-flex mt-3'>
          <p className='mx-auto d-inline text-center'>Get in touch with me for you next photoshoot!</p>
        </div>
        <br />
        <ContactForm />
      </div>
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
        fixed {
        ...GatsbyImageSharpFixed
      }
          }
        }
      }
    }
  }
`
