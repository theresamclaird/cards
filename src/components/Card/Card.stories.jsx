import React from 'react';
import { Flex } from '@theresamclaird/atomic';
import { Card } from './Card';
import { getDeck } from '../../utils/deck';

export default {
  title: 'Cards/Card',
  component: Card,
  argTypes: {
    sx: { table: { disable: true } },
  },
};

function CardTemplate(args) {
  return <Card {...args} />;
}
export const AceOfSpades = CardTemplate.bind({});
AceOfSpades.args = {
  rank: 1,
  suit: 'spades',
  value: 1,
};

export const SixOfHearts = CardTemplate.bind({});
SixOfHearts.args = {
  rank: 6,
  suit: 'hearts',
  value: 6,
};

export const TenOfClubs = CardTemplate.bind({});
TenOfClubs.args = {
  rank: 10,
  suit: 'clubs',
  value: 10,
};

export const QueenOfDiamonds = CardTemplate.bind({});
QueenOfDiamonds.args = {
  rank: 'queen',
  suit: 'diamonds',
  value: 10,
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
      {deck.map((card) => <Card key={`${card.rank} of ${card.suit}}`} {...card} />)}
    </Flex>
  );
}

export const Deck = DeckTemplate.bind({});
Deck.args = {};
