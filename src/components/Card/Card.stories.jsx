import React, { Fragment } from 'react';
import { Flex } from '@theresamclaird/atomic';
import { Card } from './Card';
import { getDeck } from '../../utils/deck';

export default {
  title: 'Fronts',
  component: Card,
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
          <Card {...card} />
        </Fragment>
      ))}
    </Flex>
  );
}
export const Cards = DeckTemplate.bind({});
Cards.args = {};
