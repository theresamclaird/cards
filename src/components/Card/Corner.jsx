import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@theresamclaird/atomic';

function Corner({
  pip, rank, sx, ...props
}) {
  const symbol = {
    1: 'A',
    2: '2',
    3: '3',
    4: '4',
    5: '5',
    6: '6',
    7: '7',
    8: '8',
    9: '9',
    10: '10',
    jack: 'J',
    queen: 'Q',
    king: 'K',
  }[rank];

  return (
    <Flex
      sx={{
        position: 'absolute',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
        fontSize: '0.7rem',
        lineHeight: '0.7rem',
        '&::after': { content: `"${pip}"` },
        ...sx,
      }}
      {...props}
    >
      <Box>{symbol}</Box>
    </Flex>
  );
}

Corner.defaultProps = {
  sx: {},
};

Corner.propTypes = {
  pip: PropTypes.string.isRequired,
  rank: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

export default Corner;
