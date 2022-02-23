import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
// Styles
import { Image } from './Thumb.styles';


const Thumb = ( { image, moviedId, clickable } ) => (
    <div>
        {clickable ? (
            <Link to={`/${moviedId}`}>
                <Image src={ image } alt="movie-thumb" />
            </Link>
        ) : (
            <Image src={ image } alt="movie-thumb" />
        )}
    </div>
);

Thumb.prototype = {
    image: PropTypes.string,
    moviedId: PropTypes.number,
    clickable: PropTypes.bool
};


export default Thumb;