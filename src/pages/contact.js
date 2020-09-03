import React from 'react'
import ContactForm from '../components/contact-form';
import { graphql } from 'gatsby'

import SEO from "../components/seo"
import Layout from '../components/layout'
import Heading from '../components/heading'
import { Container } from 'react-bootstrap';

const ContactPage = (props) => {
    const { data, location } = props
    return (
        <Layout location={location}>
            <SEO title={`Contact - ${data.site.siteMetadata.title}`} />
            <section className="contact-section">
                <Container >
                    <Heading text='Contact Me' />
                    <div className='d-flex mt-3'>
                        <p className='mx-auto text-center d-inline'>Get in touch with me for you next photoshoot!</p>
                    </div>
                    <br />
                    <ContactForm />
                </Container>
            </section>
        </Layout>
    )
}

export default ContactPage

export const SiteQuery = graphql`
    query SiteMeta {
        site {
            siteMetadata {
                title
            }
        }
    }


    `