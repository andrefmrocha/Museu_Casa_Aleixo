import React from 'react';
import { Container, Row } from 'reactstrap';
import FooterImage from '../images/casa mãe.jpg';
import ImageWrapper from './image_wrapper';

const contactInfo = {
    fontWeight: `bold`,
    fontSize: `medium`,
    textDecoration: `underline`
};

const ContactInfo = () => (
    <Container>
        <Row>
            <ImageWrapper image={FooterImage} />
        </Row>
        <Row>
            <div style={contactInfo}>museucasaaleixo@gmail.com</div>
        </Row>
        <Row>
            <div style={contactInfo}>+351 919843208</div>
        </Row>
    </Container>
);

export default ContactInfo;
