// TODO: scroll to top of category when clicked
// TODO: add drag and drop rearrangement
// TODO: let header height be auto and adjust height in javascript
// TODO: extract all height adjustment logic into a separate module

import { Helpers } from './modules/Helpers';
import { App } from './modules/App';
import { UI } from './modules/UI';

const app = new App();
const ui = new UI(app);

ui.init();
