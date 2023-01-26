const carousel =document.querySelector('.carousel');
const next = document.querySelector('#next');
const back = document.querySelector('#back');

next.addEventListener('click', e=>{

  let img1 = person3._url;
  let img2 = person1._url;
  let img3 = person2._url;

  person1.url = img3;
  person2.url = img1;
  person3.url = img2;
});

back.addEventListener('click', e=>{

  let img1 = person1._url;
  let img2 = person2._url;
  let img3 = person3._url;

  person1.url = img3;
  person2.url = img1;
  person3.url = img2;
});
