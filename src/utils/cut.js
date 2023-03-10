const cut = (cards = [], percent = 50) => {
  const location = Math.floor((cards.length * percent) / 100);
  return [...cards.slice(location), ...cards.slice(0, location)];
};

export { cut, cut as default };
