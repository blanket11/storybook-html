import { storiesOf } from '@storybook/html';
import copyCodeBlock from '@pickra/copy-code-block';
import cButton from './c-button.html';

storiesOf('c-button', module)
  .add('c-button', () => cButton + copyCodeBlock(cButton))