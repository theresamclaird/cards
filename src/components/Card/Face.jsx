/* eslint-disable react/prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@theresamclaird/atomic';
import Pip from './Pip';

function Face({
  suit, color, image, label, pip,
}) {
  const top = '0.6rem';
  const bottom = '0.6rem';
  const left = '1.1rem';
  const right = '1.1rem';

  const topPipStyle = {
    J: {
      heart: { top, right },
      spade: { top, left },
      diamond: { top, right },
      club: { top, right },
    },
    Q: {
      heart: { top, left },
      spade: { top, right },
      diamond: { top, right },
      club: { top, right },
    },
    K: {
      heart: { top, left },
      spade: { top, left },
      diamond: { top, left },
      club: { top, left },
    },
  }[label][suit];

  const bottomPipStyle = {
    J: {
      heart: { bottom, left },
      spade: { bottom, right },
      diamond: { bottom, left },
      club: { bottom, left },
    },
    Q: {
      heart: { bottom, right },
      spade: { bottom, left },
      diamond: { bottom, left },
      club: { bottom, left },
    },
    K: {
      heart: { bottom, right },
      spade: { bottom, right },
      diamond: { bottom, right },
      club: { bottom, right },
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
          fontSize: '1.3rem', position: 'absolute', color, ...topPipStyle,
        }}
      />
      <Pip
        symbol={pip}
        sx={{
          fontSize: '1.3rem', position: 'absolute', color, transform: 'rotate(180deg)', ...bottomPipStyle,
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
