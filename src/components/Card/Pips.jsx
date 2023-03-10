import React from 'react';
import PropTypes from 'prop-types';
import Pip from './Pip';

function Pips({
  color, count, pip, sx, ...props
}) {
  const pipsArray = [];
  for (let i = 0; i < count; i += 1) {
    pipsArray.push(
      <React.Fragment key={`pip-${i}`}>
        <Pip symbol={pip} sx={{ color, ...sx }} {...props} />
      </React.Fragment>,
    );
  }
  return pipsArray;
}

Pips.defaultProps = {
  sx: {},
};

Pips.propTypes = {
  color: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
  pip: PropTypes.string.isRequired,
  sx: PropTypes.objectOf(PropTypes.any),
};

export { Pips, Pips as default };
