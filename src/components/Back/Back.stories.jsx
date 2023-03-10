import React, { Fragment } from 'react';
import { Flex } from '@theresamclaird/atomic';
import { Back } from './Back';
import { getDeck } from '../../utils/deck';

export default {
  title: 'Backs',
  component: Back,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

const deck = getDeck();

function DeckTemplate() {
  return (
    <Flex
      sx={{
        flexWrap: 'wrap',
        gap: '1rem',
      }}
    >
      {deck.map((card) => (
        <Fragment key={`${card.label} of ${card.suit}}`}>
          <Back />
        </Fragment>
      ))}
    </Flex>
  );
}

export const Cards = DeckTemplate.bind({});
Cards.args = {};
