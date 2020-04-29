import React from 'react'
import { Container } from 'react-bootstrap'
import { Link } from "gatsby"

const Banner = () => {
    return (
        <section>
            <div className='banner'>
                <Container className='banner-container'>
                    <h1>Amazing stuff</h1>
                    <p>Check out my awesome gallery</p>
                    <Link to='/gallery'>
                        <button className='gallery-button'><h4>Gallery</h4></button>
                    </Link>

                </Container>
            </div>
        </section>
    )
}

export default Banner