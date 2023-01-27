const select = document.querySelector('#confirm');
select.addEventListener('click', e=>{
  const p =  document.querySelector('#person2');
  const body =  document.querySelector('body');
  let text = p.getAttribute('src')

  const myArray = text.split("/");
  let valor = myArray[myArray.length-3]
  valor = valor.replace('#.png','')
  const section = document.querySelector('section')
  body.removeChild(section)
  window.location.href = '/salaTeste.html?person='+valor
});
