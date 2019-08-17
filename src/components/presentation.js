import React from 'react';
import {
    Carousel,
    CarouselItem,
    CarouselControl,
    CarouselCaption,
    CarouselIndicators
} from 'reactstrap';

import Slide1 from '../images/slide1.jpg';
import Slide2 from '../images/slide2.jpg';
import Slide3 from '../images/slide3.jpg';
import styled from 'styled-components';
import '../styles/reacstrap.css';
import colors from './colors';

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

const StyledCarousel = styled(Carousel)`
  width: 100%;
  height: 50vh;
`;

class Presentation extends React.Component {
    constructor (props) {
        super(props);
        this.state = { activeIndex: 0 };
        this.next = this.next.bind(this);
        this.previous = this.previous.bind(this);
        this.goToIndex = this.goToIndex.bind(this);
        this.onExiting = this.onExiting.bind(this);
        this.onExited = this.onExited.bind(this);
    }

    onExiting () {
        this.animating = true;
    }

    onExited () {
        this.animating = false;
    }

    next () {
        if (this.animating) return;
        const nextIndex =
      this.state.activeIndex === items.length - 1
          ? 0
          : this.state.activeIndex + 1;
        this.setState({ activeIndex: nextIndex });
    }

    previous () {
        if (this.animating) return;
        const nextIndex =
      this.state.activeIndex === 0
          ? items.length - 1
          : this.state.activeIndex - 1;
        this.setState({ activeIndex: nextIndex });
    }

    goToIndex (newIndex) {
        if (this.animating) return;
        this.setState({ activeIndex: newIndex });
    }

  frontText = (
    <div
        style={{
            position: `absolute`,
            zIndex: `1000`,
            color: colors.primary,
            width: `100%`,
            height: `50vh`,
            fontSize: `7vmin`,
            fontFamily: 'Minion Pro',
            textAlign: `center`,
            verticalAlign: `middle`,
            lineHeight: `50vh`
        }}
    >
      Brevemente!
    </div>
  );

  render () {
      const { activeIndex } = this.state;

      const slides = items.map(item => {
          return (
              <CarouselItem
                  onExiting={this.onExiting}
                  onExited={this.onExited}
                  key={item.src}
              >
                  <img
                      src={item.src}
                      alt={item.altText}
                      style={{
                          width: `100%`,
                          height: `50vh`,
                          display: `block`,
                          marginRight: `auto`,
                          marginLeft: `auto`,
                          filter: `blur(5px)`,
                          WebkitFilter: `blur(5px)`
                      }}
                  />
              </CarouselItem>
          );
      });

      return (
          <div>
              {this.frontText}
              <StyledCarousel
                  activeIndex={activeIndex}
                  next={this.next}
                  previous={this.previous}
              >
                  <CarouselIndicators
                      items={items}
                      activeIndex={activeIndex}
                      onClickHandler={this.goToIndex}
                      cssModule={{
                          width: `50%`
                      }}
                  />

                  {slides}
                  <CarouselControl
                      direction="prev"
                      directionText="Previous"
                      onClickHandler={this.previous}
                  />
                  <CarouselControl
                      direction="next"
                      directionText="Next"
                      onClickHandler={this.next}
                  />
              </StyledCarousel>
          </div>
      );
  }
}

export default Presentation;
