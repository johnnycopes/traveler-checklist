import { Helpers } from './modules/Helpers';
import { App } from './modules/App';
import { UI } from './modules/UI';

const app = new App();
const ui = new UI(app);

app.init();
ui.init();
