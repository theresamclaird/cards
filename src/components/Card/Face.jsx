/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@theresamclaird/atomic';
import Pip from './Pip';

function Face({
  suit, color, image, label, pip,
}) {
  const top = '0.9rem';
  const bottom = '0.9rem';
  const left = '1.2rem';
  const right = '1.2rem';

  const topPipStyle = {
    J: {
      hearts: { top, right },
      spades: { top, left },
      diamonds: { top, right },
      clubs: { top, right },
    },
    Q: {
      hearts: { top, left },
      spades: { top, right },
      diamonds: { top, right },
      clubs: { top, right },
    },
    K: {
      hearts: { top, left },
      spades: { top, left },
      diamonds: { top, left },
      clubs: { top, left },
    },
  }[label][suit];

  const bottomPipStyle = {
    J: {
      hearts: { bottom, left },
      spades: { bottom, right },
      diamonds: { bottom, left },
      clubs: { bottom, left },
    },
    Q: {
      hearts: { bottom, right },
      spades: { bottom, left },
      diamonds: { bottom, left },
      clubs: { bottom, left },
    },
    K: {
      hearts: { bottom, right },
      spades: { bottom, right },
      diamonds: { bottom, right },
      clubs: { bottom, right },
    },
  }[label][suit];

  return (
    <>
      <Flex sx={{
        gridRowStart: 1,
        gridRowEnd: 'span 16',
        gridColumnStart: 1,
        gridColumnEnd: 'span 6',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      >
        <Box
          sx={{
            border: 'solid 1px #00f',
            borderRadius: '0.15rem',
            height: '100%',
          }}
          as="img"
          src={image}
          alt="card"
        />
      </Flex>
      <Pip
        symbol={pip}
        sx={{
          fontSize: '1rem', position: 'absolute', color, ...topPipStyle,
        }}
      />
      <Pip
        symbol={pip}
        sx={{
          fontSize: '1rem', position: 'absolute', color, transform: 'rotate(180deg)', ...bottomPipStyle,
        }}
      />
    </>
  );
}

Face.defaultProps = {
  image: null,
};

Face.propTypes = {
  suit: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  image: PropTypes.node,
  label: PropTypes.string.isRequired,
  pip: PropTypes.string.isRequired,
};

export default Face;
