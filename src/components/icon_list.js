import React from "react";
import {Container, Row, Col} from "reactstrap";
import Facebook from "../images/facebook.png"
import Airbnb from "../images/airbnb.png"
import Booking from "../images/booking.png"

const items = [
  {
    src: Booking,
    link: "https://www.booking.com/hotel/pt/museu-casa-aleixo.en-gb.html"
  },
  {
    src: Airbnb,
    link:
      "https://www.airbnb.com/rooms/36630800?source_impression_id=p3_1563654703_vZUSh3tgERWjy05I"
  },
  {
    src: Facebook,
    link: "https://www.facebook.com/Museu-Casa-Aleixo-341014406309882"
  }
];

export default class IconList extends React.Component{
    render(){
        const size = "auto"
        const icons = items.map(item => {
            return (
                <a href={item.link} style={{paddingBottom: `10px`}}>
                    <img src={item.src} style={{width: size, height: size}}/>
                </a>
            );
        });
        return (
            <Container style={{maxHeight:`100%`, paddingBottom: `10px`}}>
                <Row style={{height: `40%`, flexWrap: `unset`, WebkitFlexWrap: `unset`, marginBottom: `10px`}}>
                    {icons}
                </Row>
            </Container>
        );
    }
}