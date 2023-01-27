class Sprite{
  constructor(person, url){
    this.personEl = person;
    this._url = url;

    this.initSprite();
  }

  initSprite(){
    this.interval = setInterval(()=>{

      let value = JSON.parse( this.personEl.dataset.sprite).value;
      let url = this._url.replace('#', value)

      this.personEl.src = url;

      this.personEl.dataset.sprite = JSON.stringify({
        'value' : value >= 3? 0: value +1
      });

    },200);
  }

  set url(value){
    clearInterval(this.interval);
    this._url = value;
    this.initSprite();
  }

}

window.person1 = new Sprite(document.querySelector('#person1'), '../public/img/personagens/garoto/s/#.png');
window.person2 =new Sprite(document.querySelector('#person2'), '../public/img/personagens/garoto/s/#.png');
window.person3 =new Sprite(document.querySelector('#person3'), '../public/img/personagens/garoto/s/#.png');
