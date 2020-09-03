import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from 'react-photo-gallery'
import Heading from './heading';

class CustomGallery extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            images: [],
            currentImage: 0,
            viewerIsOpen: false
        }
    }

    componentDidMount() {
        const data = this.props.data
        this.setState({
            images: this.buildImageList(data)
        })
    }

    handleOpenLightBox = (e, { photo, index }) => {
        this.setState(
            {
                currentImage: index,
                viewerIsOpen: true
            }
        )
    }

    handleCloseLightBox = () => {
        this.setState({
            currentImage: 0,
            viewerIsOpen: false
        })
    }

    buildImageList = (data) => {
        let images = []
        const image1 = {
            src: data.edges[1].node.childImageSharp.fixed.src,
            width: 4,
            height: 3
        }

        const image3 = {
            src: data.edges[2].node.childImageSharp.fixed.src,
            width: 4,
            height: 4
        }
        const image4 = {
            src: data.edges[4].node.childImageSharp.fixed.src,
            width: 4,
            height: 4
        }
        const image2 = {
            src: data.edges[5].node.childImageSharp.fixed.src,
            width: 3,
            height: 2
        }

        data.edges.forEach(edge => {
            let width = Math.floor(Math.random() * 4) + 1
            let height = Math.floor(Math.random() * 4) + 1
            images.push(
                {
                    src: edge.node.childImageSharp.fixed.src,
                    width: width,
                    height: height
                }
            )
        })
        return [image1, image2, image3, image4]
    }

    render() {
        const { images, currentImage, viewerIsOpen } = this.state
        return (
            <>
                <Container fluid className='mb-4 custom-gallery'>
                    <Row className='justify-content-center'>
                        <Heading text='Some of my Favourites' />
                        <Col md={10} className='mt-4'>
                            <Gallery photos={images} direction='row' onClick={this.handleOpenLightBox} />
                        </Col>
                    </Row>
                </Container>
                <ModalGateway>
                    {viewerIsOpen ? (
                        <Modal onClose={this.handleCloseLightBox}>
                            <Carousel
                                currentIndex={currentImage}
                                views={images.map(x => ({
                                    ...x,
                                    srcset: x.srcSet,
                                    caption: x.title
                                }))}
                            />
                        </Modal>
                    ) : null}
                </ModalGateway>
            </>
        )
    }
}

export default CustomGallery
