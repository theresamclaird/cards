import React from 'react';
import PropTypes from 'prop-types';
import { Box, Flex } from '@theresamclaird/atomic';

function Corner({ sx, label, pip }) {
  return (
    <Flex sx={{
      position: 'absolute',
      flexDirection: 'column',
      justifyContent: 'flex-start',
      alignItems: 'center',
      fontSize: '0.7rem',
      lineHeight: '0.7rem',
      '&::after': { content: `"${pip}"` },
      ...sx,
    }}
    >
      <Box>{label}</Box>
    </Flex>
  );
}

Corner.defaultProps = {
  sx: {},
};

Corner.propTypes = {
  sx: PropTypes.objectOf(PropTypes.any),
  label: PropTypes.string.isRequired,
  pip: PropTypes.string.isRequired,
};

export default Corner;
