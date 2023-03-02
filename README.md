# Cards

A React library of Card components and basic functionality.

## Installation

```bash
npm install --save @theresamclaird/cards
```

## Usage

```js
import { Card, Back } from '@theresamclaird/cards';
```

# Render a card

```js
<Card color="#000" suit="spades" label="A" pip="♠" value={1} />;
```

# Render a card back

```js
<Back />;
```

# Generate a (default) deck of cards

```js
import { getDeck } from '@theresamclaird/cards';

const deck = getDeck();
```

# Generate a Shoe

```js
import { getShoe } from '@theresamclaird/cards';

const shoe = getShoe(6); // Pass the number of decks needed for the shoe.
```

# Shuffle & Cut

```js
import { getDeck, shuffle } from '@theresamclaird/cards';

const deck = getDeck();
const shuffledCards = shuffle(deck);
const cutCards = cut(shuffledCards);
```

## Component Playback

To run Storybook and see rendered Card components, run:

### `npm run storybook`

This runs Storybook.\
Open [http://localhost:6006](http//localhost:6006) to view it in your browser.

