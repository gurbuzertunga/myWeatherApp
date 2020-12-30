import * as el from './utils/dom-elements';
import populateDom from './utils/populate-dom';
import converter from './utils/converter';

el.button.addEventListener('click', () => {
  while (el.weatherOutput.firstChild) {
    el.weatherOutput.removeChild(el.weatherOutput.firstChild);
  }
  populateDom();
});
converter();
