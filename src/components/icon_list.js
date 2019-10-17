import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Facebook from '../images/facebook.png';
import Airbnb from '../images/airbnb.png';
import Booking from '../images/booking.png';
import IconCarousel from './icon-carousel';

const items = [
    {
        src: Booking,
        link: 'https://www.booking.com/hotel/pt/museu-casa-aleixo.en-gb.html'
    },
    {
        src: Airbnb,
        link:
      'https://www.airbnb.com/rooms/36630800?source_impression_id=p3_1563654703_vZUSh3tgERWjy05I'
    },
    {
        src: Facebook,
        link: 'https://www.facebook.com/Museu-Casa-Aleixo-341014406309882'
    }
];

export default class IconList extends React.Component {
    render () {
        const icons = items.map(item => {
            return (
                <Col key={item.link} style={{ paddingRight: 0, paddingLeft: 0 }}>
                    <a href={item.link} target="_blank" rel="noopener noreferrer">
                        <img src={item.src} style={{ maxWidth: `85%`, height: `auto`, maxHeight: `14vh` }} />
                    </a>
                </Col>
            );
        });
        return (
            <Container style={{ height: `14vh` }}>
                <span className="icon-row">
                    <Row style={{ height: `100%` }} >{icons}</Row>
                </span>
                <span className="icon-carousel">
                    <div><IconCarousel items={items} /></div>
                </span>
            </Container>
        );
    }
}
