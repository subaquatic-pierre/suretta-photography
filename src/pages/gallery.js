import { graphql } from 'gatsby'
import React from 'react'
import ImageGallery from 'react-image-gallery';

import SEO from "../components/seo"

import Layout from '../components/layout'
import Divider from '../components/divider'
import { Container, Nav, Row } from 'react-bootstrap';

class MyGallery extends React.Component {
    constructor(props) {
        super(props)
        const { data } = this.props
        this.state = {
            images: this.buildImageList('wedding', data, true)
        }
    }

    updateImages(state) {
        const { data } = this.props
        state.images = this.buildImageList('wedding', data)
    }


    getThumbnail(edge) {
        const imageSet = edge.node.childImageSharp.fluid.srcSetWebp.split("\n/")
        const thumbnail = imageSet[0].split(" ")[0]
        return thumbnail
    }

    filterData(category, data) {
        const categoryData = []
        data.allFile.edges.forEach(edge => {
            if (edge.node.relativeDirectory === category) {
                categoryData.push(edge)
            }
        })
        return categoryData
    }

    buildImageList(category, data, initial = false) {
        const categoryData = this.filterData(category, data)
        const images = []
        categoryData.forEach(edge => {
            images.push(
                {
                    original: edge.node.childImageSharp.fluid.srcWebp,
                    thumbnail: this.getThumbnail(edge)
                }
            )
        })
        if (initial) {
            return images
        }
        else {
            this.setState({
                images: images
            })
        }
    }

    render() {
        const { location, data } = this.props
        const { images } = this.state
        return (
            <Layout location={location}>
                <SEO title={`Gallery - ${data.site.siteMetadata.title}`} />
                <section className='gallery-section'>
                    <Container fluid className="gallery-container">
                        <h1 className='text-center'>Gallery</h1>
                        <Divider />
                        <br />
                        <Row className='image-nav-row px-4' >
                            <Nav variant="pills" defaultActiveKey="wedding">
                                <Nav.Item>
                                    <Nav.Link onClick={() => { this.buildImageList('wedding', data) }} eventKey='wedding' >Wedding</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => { this.buildImageList('lifestyle', data) }} eventKey="lifestyle">Lifestyle</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link onClick={() => { this.buildImageList('nature', data) }} eventKey="nature">Nature</Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Row>
                        <br />
                        {images &&
                            <ImageGallery
                                showPlayButton={false}
                                items={images} />
                        }

                    </Container>
                </section>
            </Layout>
        )
    }
}

export default MyGallery

export const allImages = graphql`
    query Site {
        site {
            siteMetadata {
                title
            }
        }
        allFile(filter: {extension: {regex: "/(jpg)|(jpeg)|(png)/"}, sourceInstanceName: {eq: "images"}}) {
            edges {
                node {
                childImageSharp {
                    fluid(quality: 100) {
                    srcWebp
                    originalImg
                    originalName
                    presentationHeight
                    presentationWidth
                    srcSetWebp
                    }
                }
                relativeDirectory
                }
            }
        }
    }
    `