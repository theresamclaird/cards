import {
  jackSpades,
  queenSpades,
  kingSpades,
  jackHearts,
  queenHearts,
  kingHearts,
  jackClubs,
  queenClubs,
  kingClubs,
  jackDiamonds,
  queenDiamonds,
  kingDiamonds,
} from '../images';

const getDeck = (
  suits = [
    {
      color: '#000',
      faces: {
        J: jackSpades,
        Q: queenSpades,
        K: kingSpades,
      },
      name: 'spades',
      pip: '♠',
    },
    {
      color: '#f00',
      faces: {
        J: jackHearts,
        Q: queenHearts,
        K: kingHearts,
      },
      name: 'hearts',
      pip: '♥',
    },
    {
      color: '#000',
      faces: {
        J: jackClubs,
        Q: queenClubs,
        K: kingClubs,
      },
      name: 'clubs',
      pip: '♣',
    },
    {
      color: '#f00',
      faces: {
        J: jackDiamonds,
        Q: queenDiamonds,
        K: kingDiamonds,
      },
      name: 'diamonds',
      pip: '♦',
    },
  ],
  ranks = [
    { label: 'A', value: 1 },
    { label: '2', value: 2 },
    { label: '3', value: 3 },
    { label: '4', value: 4 },
    { label: '5', value: 5 },
    { label: '6', value: 6 },
    { label: '7', value: 7 },
    { label: '8', value: 8 },
    { label: '9', value: 9 },
    { label: '10', value: 10 },
    { label: 'J', value: 10 },
    { label: 'Q', value: 10 },
    { label: 'K', value: 10 },
  ],
) => {
  const cards = [];
  suits.forEach(({
    color, faces, name: suit, pip,
  }) => (
    ranks.forEach(({ label, value }) => cards.push({
      color,
      suit,
      face: faces?.[label] || null,
      label,
      pip,
      value,
    }))
  ));

  return cards;
};

export { getDeck, getDeck as default };
