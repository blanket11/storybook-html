import { storiesOf } from '@storybook/html';
import copyCodeBlock from '@pickra/copy-code-block';
import pCard from './p-card.html';

storiesOf('p-card', module)
  .add('p-card', () => pCard + copyCodeBlock(pCard))