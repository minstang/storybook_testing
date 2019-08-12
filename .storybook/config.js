import {configure, addDecorator, addParameters } from '@storybook/html';
import centered from '@storybook/addon-centered/html';
import { initDsm } from '@invisionapp/dsm-storybook';

// (testing)add from InVision
//function loadStories() {
//  require('../src/stories');
//}
// automatically import all files ending in *.stories.js
const req = require.context('../src/stories', true, /\.stories\.js$/);
function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addParameters({
  backgrounds: [{ name: 'DS background', value: '#f8f8fa', default: true }, { name: 'dark', value: '#333' }]
});

addDecorator(centered);

//Invision DSM
initDsm({
  addDecorator,
  addParameters,
  callback: () => configure(loadStories, module)
});




//configure(loadStories, module);
