import React from 'react'
import { Container, Col, Row } from 'react-bootstrap';

const Footer = ({ author, title }) => (
  <footer className="footer row text-white">
    <Container>
      <Row>
        <Col md={3} xs={12} className='col'>
          <div className='text-center mb-4'>&copy; {new Date().getFullYear()}
            <p><a rel="noopener noreferrer" target="_blank" href="https://www.subaquatic-pierre.com">Designed by: subaquatic-pierre</a></p>
          </div>
        </Col>
        <Col md={6} xs={12} >
        </Col>
        <Col md={3} xs={12} className='col'>
          <ul >
            <li>
              <a href="https://www.facebook.com/SurettaVenterPhotography" target="_blank" rel="noopener noreferrer" title="Join us on Facebook" className="shr-btn-facebook">
                <i className="fa fa-2x text-white fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/surettaventerphotography/" target="_blank" rel="noopener noreferrer" title="Join us on Instagram" className="shr-btn-instagram">
                <i className="fa fa-2x text-white fa-instagram"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>

  </footer>
)

export default Footer
