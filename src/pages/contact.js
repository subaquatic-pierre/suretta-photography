import React from 'react'
import ContactForm from '../components/contact-form';
import { graphql } from 'gatsby'

import SEO from "../components/seo"
import Layout from '../components/layout'
import Header from '../components/heading'
import { Container } from 'react-bootstrap';

const ContactPage = (props) => {
    const { data, location } = props
    return (
        <Layout location={location}>
            <SEO site={data.siteMetadata} title="Gallery" />
            <section className="contact-section">
                <Container >
                    {/* <Header text='Contact Me !' /> */}
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