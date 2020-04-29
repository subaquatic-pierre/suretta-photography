import React from 'react'
import { Container } from 'react-bootstrap';
import Carousel, { Modal, ModalGateway } from "react-images";
import Gallery from 'react-photo-gallery'

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
        data.edges.forEach(edge => {
            let width = Math.floor(Math.random() * 4) + 1
            let height = Math.floor(Math.random() * 4) + 1
            images.push(
                {
                    src: edge.node.childImageSharp.fluid.src,
                    width: width,
                    height: height
                }
            )
        })
        return images
    }

    render() {
        const { images, currentImage, viewerIsOpen } = this.state
        return (
            <>
                <Container>
                    <Gallery photos={images} onClick={this.handleOpenLightBox} />
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
