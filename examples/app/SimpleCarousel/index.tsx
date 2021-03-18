import React from 'react';
import { Item } from './components';
import Carousel from './Carousel';
// CREDITS for Carousel:
// https://medium.com/@incubation.ff/build-your-own-css-carousel-in-react-part-one-86f71f6670ca

function SimpleCarousel() {
  return (
    <div>
      <h5 style={{ marginBottom: '20px' }}>
        <strong>Carousel uses the useSwipeable hook to track touch/swipe.</strong>
      </h5>

      <Carousel>
        <Item img="https://unsplash.it/475/205" />
        <Item img="https://unsplash.it/476/205" />
        <Item img="https://unsplash.it/477/205" />
        <Item img="https://unsplash.it/478/205" />
        <Item img="https://unsplash.it/479/205" />
      </Carousel>
    </div>
  );
}

export default SimpleCarousel;
