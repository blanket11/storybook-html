import { storiesOf } from '@storybook/html';
import copyCodeBlock from '@pickra/copy-code-block';
import lHeader from './l-header.html';

storiesOf('l-eader', module)
  .add('l-header', () => lHeader + copyCodeBlock(lHeader))