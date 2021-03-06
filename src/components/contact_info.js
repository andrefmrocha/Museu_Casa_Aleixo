import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import FooterImage from '../images/casa mãe.jpg';
import ImageWrapper from './image_wrapper';
import { FaRegEnvelope, FaPhone } from 'react-icons/fa';
import '../styles/reacstrap.css';

const styles = {
    contactInfo: {
        fontWeight: `bold`,
        fontSize: `large`,
        textDecoration: `underline`,
    },
    icons: {
        paddingRight: `0.5em`
    },
    contentRow: {
        justifyContent: `center`
    }
};

const ContactInfo = () => (
    <Container style={{
        maxWidth: `100%`
    }}>
        <Col>
            <Row style={styles.contentRow}>
                <ImageWrapper image={FooterImage} />
            </Row>
            <Row style={styles.contentRow}>
                <div style={styles.icons}>
                    <FaRegEnvelope />
                </div>
                <div style={styles.contactInfo}>museucasaaleixo@gmail.com</div>
            </Row>
            <Row style={styles.contentRow}>
                <div style={styles.icons}>
                    <FaPhone />
                </div>
                <div style={styles.contactInfo}>+351 919843208</div>
            </Row>
        </Col>
    </Container>
);

export default ContactInfo;
