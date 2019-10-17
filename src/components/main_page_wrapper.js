import Presentation from '../components/presentation';
import React from 'react';
import Colors from './colors';
import IconList from './icon_list';
import { Container, Row, Col } from 'reactstrap';
import { Textfit } from 'react-textfit';
import Title from './title';
const styles = {
    header: {
        backgroundColor: `#E2C285`
    },
    headerInfo: {
        height: `14vh`,
        display: `block`,
        maxWidth: `100%`
    },
    headerTitle: {
        color: Colors.primary
    }
};

const Wrapper = () => (
    <div style={styles.header}>
        <Container style={styles.headerInfo}>
            <Row style={{ height: `100%` }}>
                <Col xs="4" sm="4" />
                <Col
                    xs="4"
                    sm="4"
                    style={{
                        verticalAlign: `center`,
                        textAlign: `center`,
                        height: `100%`
                    }}
                >
                    {' '}
                    <div
                        style={{
                            width: `100%`,
                            maxWidth: `100%`,
                            maxHeight: `100%`,
                            height: `100%`
                        }}
                    >
                        <Textfit
                            mode="single"
                            forceSingleModeWidth={false}
                            style={{
                                ...styles.headerTitle,
                                ...{
                                    marginBottom: `0px`,
                                    height: `40%`,
                                    fontFamily: `Minion Pro`,
                                    fontSize: `1.8em`
                                }
                            }}
                        >
                            Museu Casa
                        </Textfit>
                        <Title headerTitle={styles.headerTitle} />
                    </div>
                </Col>
                <Col xs="4" sm="4" style={{ maxHeight: `100%` }}>
                    <IconList />
                </Col>
            </Row>
        </Container>
        <div>
            <Presentation />
        </div>
    </div>
);

export default Wrapper;
