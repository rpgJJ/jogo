import {criaCenario} from './criaCenario.js';
const select = document.querySelector('#confirm');
select.addEventListener('click', e=>{
  const p =  document.querySelector('#person2');
  const body =  document.querySelector('body');
  let text = person2._url
  const myArray = text.split("/");
  let valor = myArray[3]
  valor = valor.replace('#.png','')
  const section = document.querySelector('section')
  body.removeChild(section)
  criaCenario(valor);
});
