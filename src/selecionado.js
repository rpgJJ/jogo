const select = document.querySelector('#confirm');
select.addEventListener('click', e=>{
  const p =  document.querySelector('#person2');
  let text = person2._url
  const myArray = text.split("/");
  let valor = myArray[3]
  valor = valor.replace('#.png','')
  alert(`o personagem selecionado foi : ${valor}`)

});
