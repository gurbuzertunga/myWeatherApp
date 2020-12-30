
import * as el from './dom-elements';

const converter = () => {
  el.toggle.addEventListener('click', () => {
    if (el.defUnit === 'celcius') {
      el.defValue = parseInt((el.defValue * 9.0 / 5.0) + 32.0); // eslint-disable-line
      el.degree.textContent = `${el.defValue}°`;
      el.defUnit = 'fahrenheit';
      el.degreeType.textContent = 'Fahrenheit';
    } else {
      el.defValue = parseInt((el.defValue - 32.0) * 5.0 / 9.0); // eslint-disable-line
      el.degree.textContent = `${el.defValue}°`;
      el.defUnit = 'celcius';
      el.degreeType.textContent = 'Celcius';
    }
  });
};

export { converter }; // eslint-disable-line
