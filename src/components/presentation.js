import React from "react";
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselIndicators,
    CarouselCaption
} from 'reactstrap';

import Slide1 from '../images/slide1.jpg'
import Slide2 from '../images/slide2.jpg'
import Slide3 from '../images/slide3.jpg'
import styled from 'styled-components'


const items = [
    {
        src: Slide1,
        header: 'Slide 1 Header'
    },
    {
        src: Slide2,
        header: 'Slide 2 Header'
    },
    {
        src: Slide3,
        header: 'Slide 3 Header'
    }
];


const styles ={
    carousel: {
              position: `fixed`,
              width: `100%`,
              height: `100%`,
              zIndex: -99
        }
};

const StyledCarousel = styled(Carousel)`
              position: fixed !important;
              width: 100%;
              height: 100%;
              z-index: -99;
`;


class Presentation extends React.Component {
    constructor(props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting() {
        this.animating = true;
    }

    onExited() {
        this.animating = false;
    }

    next() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === items.length - 1 ? 0 : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous() {
        if (this.animating) return;
        const nextIndex = this.state.activeIndex === 0 ? items.length - 1 : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex(newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }


    render() {
        const { activeIndex } = this.state;

        const slides = items.map((item) => {
            return (
                <CarouselItem
                    onExiting={this.onExiting}
                    onExited={this.onExited}
                    key={item.src}
                >
                    <img src={item.src} alt={item.altText}  style={{width: `100%`, height: `70vh`}}/>
                    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
                </CarouselItem>
            );
        });

        return (
          <StyledCarousel
            activeIndex={activeIndex}
            next={this.next}
            previous={this.previous}
          >
            {/* <CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={this.goToIndex} /> */}
            {slides}
            <CarouselControl direction="prev" directionText="Previous" onClickHandler={this.previous} />
            <CarouselControl
              direction="next"
              directionText="Next"
              onClickHandler={this.next}
            />
          </StyledCarousel>
        );
    }
}


export default Presentation;