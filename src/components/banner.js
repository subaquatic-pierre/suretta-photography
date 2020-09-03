import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"
import Divider from './divider'

const Banner = () => {
    return (
        <section>
            <div className='banner'>
                <Container className='banner-container'>
                    <h1 className='banner-header'>Gallery</h1>
                    <Divider />
                    <p className='banner-text'>Check out my awesome gallery</p>
                    <Link to='/gallery'>
                        <button className='gallery-button'><h4>More ...</h4></button>
                    </Link>

                </Container>
            </div>
        </section>
    )
}

export default Banner