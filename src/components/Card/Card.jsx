import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@theresamclaird/atomic';
import Corner from './Corner';
import Face from './Face';
import Pips from './Pips';

function Card({
  rank, suit, value, sx, ...props
}) {
  const pip = {
    hearts: '♥', diamonds: '♦️', clubs: '♣️', spades: '♠',
  }[suit];
  const color = suit === 'hearts' || suit === 'diamonds' ? 'red' : 'black';
  const pipStyle = {
    1: {
      '& > :first-of-type': {
        gridRowStart: 5,
        gridRowEnd: 'span 8',
        gridColumnStart: 2,
        gridColumnEnd: 'span 4',
        fontSize: '3em',
      },
    },
    2: {
      '& > :first-of-type': {
        gridRowStart: 2,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 12,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    3: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    4: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    5: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnEnd: 'span 2',
        gridColumnStart: 1,
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnEnd: 'span 2',
        gridColumnStart: 5,
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
    },
    6: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    7: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(7)': {
        gridRowStart: 4,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
    },
    8: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(7)': {
        gridRowStart: 4,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(8)': {
        gridRowStart: 10,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
    9: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 5,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 5,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 9,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 9,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(7)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(8)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(9)': {
        gridRowStart: 7,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
    },
    10: {
      '& > :first-of-type': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(2)': {
        gridRowStart: 1,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(3)': {
        gridRowStart: 5,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(4)': {
        gridRowStart: 5,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(5)': {
        gridRowStart: 9,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(6)': {
        gridRowStart: 9,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(7)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 1,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(8)': {
        gridRowStart: 13,
        gridRowEnd: 'span 4',
        gridColumnStart: 5,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
      '& > :nth-of-type(9)': {
        gridRowStart: 3,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
      },
      '& > :nth-of-type(10)': {
        gridRowStart: 11,
        gridRowEnd: 'span 4',
        gridColumnStart: 3,
        gridColumnEnd: 'span 2',
        transform: 'rotate(180deg)',
      },
    },
  }[value];

  const isFace = rank === 'jack' || rank === 'queen' || rank === 'king';
  const containerStyle = isFace ? {} : pipStyle;

  return (
    <Box
      sx={{
        display: 'inline-block',
        boxShadow: '0 0 2px #666',
        position: 'relative',
        backgroundColor: 'white',
        border: 'solid 1px',
        borderColor: 'black',
        borderRadius: '0.25rem',
        p: '0.5rem',
        ...sx,
      }}
      {...props}
    >
      <Box sx={{
        px: '0.5rem',
        width: '4rem',
        height: `${4 * 1.4}rem`,
        display: 'grid',
        gridTemplateColumns: 'repeat(6, 1fr)',
        gridTemplateRows: 'repeat(16, 1fr)',
        overflow: 'hidden',
        ...containerStyle,
      }}
      >
        {isFace
          ? <Face color={color} pip={pip} rank={rank} suit={suit} />
          : <Pips color={color} pip={pip} value={value} />}
        <Corner
          rank={rank}
          pip={pip}
          sx={{ top: '0.25rem', left: '0.25rem', color }}
        />
        <Corner
          rank={rank}
          pip={pip}
          sx={{
            bottom: '0.25rem', right: '0.25rem', transform: 'rotate(180deg)', color,
          }}
        />
      </Box>
    </Box>
  );
}

Card.defaultProps = {
  rank: 1,
  suit: 'spades',
  value: 1,
  sx: {},
};

Card.propTypes = {
  rank: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  suit: PropTypes.string,
  value: PropTypes.number,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Card, Card as default };
