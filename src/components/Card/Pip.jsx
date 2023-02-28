import React from 'react';
import PropTypes from 'prop-types';
import { Flex } from '@theresamclaird/atomic';

function Pip({ pip, sx, ...props }) {
  return (
    <Flex
      sx={{
        fontSize: '1.5rem',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
      {...props}
    >
      {pip}
    </Flex>
  );
}

Pip.defaultProps = {
  sx: {},
};

Pip.propTypes = {
  pip: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Pip, Pip as default };
