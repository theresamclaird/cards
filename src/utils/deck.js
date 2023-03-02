const jackSpades = require('../images/jack-spades.svg');
const queenSpades = require('../images/queen-spades.svg');
const kingSpades = require('../images/king-spades.svg');

const jackHearts = require('../images/jack-hearts.svg');
const queenHearts = require('../images/queen-hearts.svg');
const kingHearts = require('../images/king-hearts.svg');

const jackClubs = require('../images/jack-clubs.svg');
const queenClubs = require('../images/queen-clubs.svg');
const kingClubs = require('../images/king-clubs.svg');

const jackDiamonds = require('../images/jack-diamonds.svg');
const queenDiamonds = require('../images/queen-diamonds.svg');
const kingDiamonds = require('../images/king-diamonds.svg');

const getDeck = (
  suits = [
    {
      color: '#000',
      faces: {
        J: jackSpades,
        Q: queenSpades,
        K: kingSpades,
      },
      name: 'spade',
      pip: '♠',
    },
    {
      color: '#f00',
      faces: {
        J: jackHearts,
        Q: queenHearts,
        K: kingHearts,
      },
      name: 'heart',
      pip: '♥',
    },
    {
      color: '#000',
      faces: {
        J: jackClubs,
        Q: queenClubs,
        K: kingClubs,
      },
      name: 'club',
      pip: '♣️',
    },
    {
      color: '#f00',
      faces: {
        J: jackDiamonds,
        Q: queenDiamonds,
        K: kingDiamonds,
      },
      name: 'diamond',
      pip: '♦️',
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
