import { storiesOf } from '@storybook/html';
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs';
import { decorate } from '@storybook/addon-actions';
import '../components/button/_button.scss';
import { document, console } from 'global';

  storiesOf('Button', module)
    .add(
      'Default button',
      () => '<button class="cds-btn cds-btn--primary--lg">Primary button</button>', {
        'in-dsm': {
          id: '5d4d103e84c33a7873cf3606',
          docFilePath: '../components/button/button.docs.json'
        }
      }
    );
