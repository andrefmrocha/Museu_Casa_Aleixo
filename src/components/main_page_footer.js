import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import ContactInfo from './contact_info';
import GoogleMaps from './google_maps';

const styles = {
    column: {
        textAlign: `center`,
        fontFamily: `Minion Pro`
    },
    footerContainer: {
        marginTop: `3vh`,
        maxWidth: `100%`
    },
    textDiv: {
        fontWeight: `bold`,
        fontFamily: `Minion Pro`
    }
};

const Footer = () => (
    <Container style={styles.footerContainer}>
        <Row>
            <Col style={styles.column}>
                <ContactInfo />
            </Col>
            <Col style={styles.column}>
                <div style={styles.textDiv}>
          O Museu Casa Aleixo é um empreendimento de turismo, constituído por
          edifícios de arquitetura antiga e moderna, com a habitação resguardada
          da via pública e comunicante com a Quinta da Moca, onde pode desfrutar
          de grande variedade de culturas agrícolas, de uma piscina e jardins
          para o seu lazer.
                </div>
            </Col>
            <Col style={styles.column}>
                <GoogleMaps />
            </Col>
        </Row>
    </Container>
);

export default Footer;
