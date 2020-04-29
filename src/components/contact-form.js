import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';

class ContactForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            email: 'E',
            message: ''
        }
    }

    handleClick = (e) => {
        e.preventDefault()
        const { email, message } = this.state
        console.log(email)
        console.log(message)
    }

    handleEmail = value => {
        this.setState({ email: value.target.value })
    }

    handleMessage = value => {
        this.setState({ message: value.target.value })
    }


    render() {
        return (
            <Container>
                <Form className='contact-form'>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label hidden >Email address</Form.Label>
                        <Form.Control placeholder='Email Address' onChange={this.handleEmail} type="email" />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Group controlId="exampleForm.ControlTextarea1">
                            <Form.Label hidden >Your Message</Form.Label>
                            <Form.Control placeholder='Enter a message here' onChange={this.handleMessage} as="textarea" rows="5" />
                        </Form.Group>
                    </Form.Group>
                    <Form.Group className='justify-content-center'>
                        <Button block size="lg" variant="primary" onClick={this.handleClick} type="submit">
                            Submit
                            </Button>
                    </Form.Group>
                </Form>
            </Container>
        )

    }
}

export default ContactForm