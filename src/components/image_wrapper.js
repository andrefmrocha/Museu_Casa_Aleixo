import React from 'react';
import Colors from './colors';

const styles = {
    image: {
        height: `16vh`,
        border: `${ Colors.contrast } 8px solid`,
    }
};

const ImageWrapper = ({ image }) => (
    <img src={image} style={styles.image}/>
);

export default ImageWrapper;
