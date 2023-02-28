import React from 'react';
import PropTypes from 'prop-types';
import Pip from './Pip';

function Pips({
  color, pip, value, ...props
}) {
  const pipsArray = [];
  for (let i = 0; i < value; i += 1) {
    pipsArray.push(
      <React.Fragment key={`pip-${i}`}>
        <Pip pip={pip} sx={{ color }} {...props} />
      </React.Fragment>,
    );
  }
  return pipsArray;
}

Pips.defaultProps = {};

Pips.propTypes = {
  color: PropTypes.string.isRequired,
  pip: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export { Pips, Pips as default };
