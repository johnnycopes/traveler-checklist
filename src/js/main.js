// TODO: make triangles on categories
// TODO: scroll to top of category when clicked
// TODO: add drag and drop rearrangement
// TODO: let header height be auto and adjust height in javascript
// TODO: extract all height adjustment logic into a separate module

import { setUpUI } from './modules/UI';
import { setUpApp } from './modules/App';

var helpers = {
  generateUniqueID: function uuidv4() {
    return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
      (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
  }
};

var UI = setUpUI();
UI.init();

var App = setUpApp(UI);
App.init();