/* eslint-disable no-param-reassign */
const shuffle = (cards = []) => {
  for (let index = cards.length - 1; index > 0; index -= 1) {
    const randomCardIndex = Math.floor(Math.random() * (index + 1));
    const temp = cards[randomCardIndex];
    cards[randomCardIndex] = cards[index];
    cards[index] = temp;
  }
  return cards;
};

export { shuffle, shuffle as default };
