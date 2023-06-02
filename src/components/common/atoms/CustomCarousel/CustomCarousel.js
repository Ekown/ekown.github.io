import React from 'react';
import styles from './CustomCarousel.module.scss';
import Carousel from 'react-bootstrap/Carousel';

const CustomCarousel = (props) => {
  return (
    <Carousel 
      fade
      controls={ props.images.length > 1 }
      indicators={false} 
      className={styles.CustomCarousel} 
      data-testid="custom-carousel">
      {
        props.images.map((image, index) => (
          <Carousel.Item key={'carousel-image-' + index} style={{
            background: `url(${image}) center center/cover`
          }}></Carousel.Item>
        ))
      }
    </Carousel>
  );
}

CustomCarousel.propTypes = {};

CustomCarousel.defaultProps = {};

export default CustomCarousel;
