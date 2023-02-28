import React from 'react';
import { Box } from '@theresamclaird/atomic';

function CardBack({ ...props }) {
  return (
    <Box
      sx={{
        width: '4rem',
        height: `${4 * 1.4}rem`,
        border: 'solid 2px',
        borderColor: '#6666ff',
        borderRadius: '0.25em',
        backgroundColor: '#e5e5f7',
        opacity: '0.8',
        backgroundImage: 'linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(30deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(150deg, #444cf7 12%, transparent 12.5%, transparent 87%, #444cf7 87.5%, #444cf7), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777), linear-gradient(60deg, #444cf777 25%, transparent 25.5%, transparent 75%, #444cf777 75%, #444cf777)',
        backgroundSize: '8px 14px',
        backgroundPosition: '0 0, 0 0, 4px 7px, 4px 7px, 0 0, 4px 7px',
      }}
      {...props}
    />
  );
}

export { CardBack, CardBack as default };
