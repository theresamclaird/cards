import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@theresamclaird/atomic';

function Pip({ symbol, sx, ...props }) {
  return (
    <Flex
      sx={{
        m: 0,
        p: 0,
        fontSize: '1.8rem',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
      {...props}
    >
      {symbol}
    </Flex>
  );
}

Pip.defaultProps = {
  sx: {},
};

Pip.propTypes = {
  symbol: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Pip, Pip as default };
