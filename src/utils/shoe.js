import { getDeck } from './deck';

const getShoe = (numberOfDecks) => {
  const shoe = []; // Generate a new shoe.
  for (let i = 0; i < numberOfDecks; i += 1) {
    shoe.push(...getDeck());
  }
  return shoe;
};

export { getShoe, getShoe as default };
