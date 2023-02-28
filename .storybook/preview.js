import React from 'react';

export const decorators = [
  Story => <Story />,
];

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'felt green',
    values: [
      {
        name: 'felt green',
        value: '#030',
      },
      {
        name: 'white',
        value: '#fff',
      },
      {
        name: 'black',
        value: '#000',
      }
    ],
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}