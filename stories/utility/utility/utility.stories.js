import { storiesOf } from '@storybook/html';
import copyCodeBlock from '@pickra/copy-code-block';
import utility from './utility.html';

storiesOf('Utility', module)
  .add('Utility', () => utility + copyCodeBlock(utility))