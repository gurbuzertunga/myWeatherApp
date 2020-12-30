import * as el from "./dom-elements";

export default function converter() {
  el.toggle.addEventListener("click", (e) => {
    if (el.defUnit === 'celcius') {
      el.defValue = (el.defValue * 9.0/5.0) + 32.0;
      el.degree.textContent = el.defValue + "°";
      el.defUnit = 'fahrenheit'
      el.degreeType.textContent = 'Celcius';
    } else {
     el.defValue =  (el.defValue - 32.0) * 5.0/9.0;  
     el.degree.textContent = el.defValue + "°";
     el.defUnit = 'celcius'
     el.degreeType.textContent = 'Fahrenheit';
    }
  });
};


