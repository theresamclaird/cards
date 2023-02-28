import React from 'react';
import PropTypes from 'prop-types';
import { Box, Image } from '@theresamclaird/atomic';
import Pip from './Pip';

import jackHearts from './images/jack-hearts.svg';
import queenHearts from './images/queen-hearts.svg';
import kingHearts from './images/king-hearts.svg';
import jackSpades from './images/jack-spades.svg';
import queenSpades from './images/queen-spades.svg';
import kingSpades from './images/king-spades.svg';
import jackDiamonds from './images/jack-diamonds.svg';
import queenDiamonds from './images/queen-diamonds.svg';
import kingDiamonds from './images/king-diamonds.svg';
import jackClubs from './images/jack-clubs.svg';
import queenClubs from './images/queen-clubs.svg';
import kingClubs from './images/king-clubs.svg';

function Face({
  color, pip, rank, suit, sx, ...props
}) {
  const imageSrc = {
    jack: {
      hearts: jackHearts, spades: jackSpades, diamonds: jackDiamonds, clubs: jackClubs,
    },
    queen: {
      hearts: queenHearts, spades: queenSpades, diamonds: queenDiamonds, clubs: queenClubs,
    },
    king: {
      hearts: kingHearts, spades: kingSpades, diamonds: kingDiamonds, clubs: kingClubs,
    },
  }[rank][suit];

  const pipVerticalDistance = '0.7rem';
  const pipHorizontalDistance = '1.05rem';

  const topPipStyle = {
    jack: {
      hearts: {
        top: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
      spades: {
        top: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      diamonds: {
        top: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
      clubs: {
        top: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
    },
    queen: {
      hearts: {
        top: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      spades: {
        top: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
      diamonds: {
        top: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
      clubs: {
        top: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
    },
    king: {
      hearts: {
        top: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      spades: {
        top: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      diamonds: {
        top: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      clubs: {
        top: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
    },
  }[rank][suit];

  const bottomPipStyle = {
    jack: {
      hearts: {
        bottom: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      spades: {
        bottom: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
      diamonds: {
        bottom: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      clubs: {
        bottom: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
    },
    queen: {
      hearts: {
        bottom: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
      spades: {
        bottom: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      diamonds: {
        bottom: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
      clubs: {
        bottom: pipVerticalDistance,
        left: pipHorizontalDistance,
      },
    },
    king: {
      hearts: {
        bottom: pipVerticalDistance,
        right: '1rem',
      },
      spades: {
        bottom: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
      diamonds: {
        bottom: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
      clubs: {
        bottom: pipVerticalDistance,
        right: pipHorizontalDistance,
      },
    },
  }[rank][suit];

  return (
    <>
      <Box
        sx={{
          gridRowStart: 2,
          gridRowEnd: 'span 14',
          gridColumnStart: 1,
          gridColumnEnd: 'span 6',
          p: 0,
          m: 0,
          ...sx,
        }}
        {...props}
      >
        <Image
          sx={{
            m: 0,
            p: 0,
            border: 'solid 1px #00f',
            borderRadius: '0.15rem',
            height: '100%',
          }}
          src={imageSrc}
          alt={`${rank} of ${suit}`}
        />
      </Box>
      <Pip
        pip={pip}
        sx={{
          fontSize: '1.3rem', position: 'absolute', color, ...topPipStyle,
        }}
      />
      <Pip
        pip={pip}
        sx={{
          fontSize: '1.3rem', position: 'absolute', color, transform: 'rotate(180deg)', ...bottomPipStyle,
        }}
      />
    </>
  );
}

Face.defaultProps = {
  sx: {},
};

Face.propTypes = {
  color: PropTypes.string.isRequired,
  pip: PropTypes.string.isRequired,
  rank: PropTypes.string.isRequired,
  suit: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Face, Face as default };
