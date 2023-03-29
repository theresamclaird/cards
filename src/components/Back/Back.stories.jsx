import React, { Fragment } from 'react';
import { Flex } from '@theresamclaird/atomic';
import { Back } from './Back';

export default {
  title: 'Backs',
  component: Back,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function DeckTemplate() {
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      <Back />
    </Flex>
  );
}

export const Cards = DeckTemplate.bind({});
Cards.args = {};
