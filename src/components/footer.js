import { Link } from 'gatsby'
import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

const Footer = ({ author, title }) => (
  <footer className="footer row text-white">
    <Container>
      <Row>
        <Col md={3} xs={12} className='col'>
          <p className='text-center mb-4'>&copy; {new Date().getFullYear()}
            <Link to="/profile/">
              <br />
              <strong>{title}</strong>
            </Link>
          </p>
        </Col>
        <Col md={6} xs={12} >
        </Col>
        <Col md={3} xs={12} className='col'>
          <ul >
            <li>
              <a href="https://www.facebook.com/blackpizza?fref=ts" target="_blank" rel="noopener noreferrer" title="Join us on Facebook" className="shr-btn-facebook">
                <i className="fa fa-2x text-white fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="http://instagram.com/blackpizzastudio" target="_blank" rel="noopener noreferrer" title="Join us on Instagram" className="shr-btn-instagram">
                <i className="fa fa-2x text-white fa-instagram"></i>
              </a>
            </li>
            <li>
              <a href="https://www.behance.net/blackpizza" target="_blank" rel="noopener noreferrer" title="Join us on Behance" className="shr-btn-behance">
                <i className="fa fa-2x text-white fa-behance"></i>
              </a>
            </li>
            <li>
              <a href="https://soundcloud.com/dailydose-sound" target="_blank" rel="noopener noreferrer" title="Join us on Soundcloud" className="shr-btn-soundcloud">
                <i className="fa fa-2x text-white fa-soundcloud"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>

  </footer>
)

export default Footer
