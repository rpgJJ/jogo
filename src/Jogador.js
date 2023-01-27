

   class Jogador {
    constructor(){
      this.url = 'public/img/personagens/garoto/'
      this.direcao = 'w/'
      this.sprite = 0
      this.formato = '.png'
      this.img = this.url+this.direcao+this.sprite+this.formato
      this.vel = 10
      this.elemento={el:0,img:0}
      this.px
      this.py

    }
    trocaImg(){
      this.sprite+=1
      if(this.sprite==4){
        this.sprite=0
      }
      this.img = this.url+this.direcao+this.sprite+this.formato
      this.elemento.img.setAttribute('src',this.img)
    }
    get pegaDirecao(){
      return this.direcao
    }
    set inseriDirecao(v){
      this.direcao = v
    }
    get pegaPx(){
      return this.px
    }
    set inseriPx(v){
      this.px=parseInt(this.elemento.el.style.top)+v;
      this.elemento.el.style.top=this.px+'px'
    }
    get pegaPy(){
      return this.py
    }
    set inseriPy(v){
      this.py=parseInt(this.elemento.el.style.left)+v;
      this.elemento.el.style.left=this.py+'px'
    }

    criar(){

      const cenario = document.querySelector('.cenario');

      this.elemento.el = document.createElement('span');
      this.elemento.img = document.createElement('img');
      this.elemento.el.setAttribute('class','jogador');
      this.elemento.el.style.top = '0px';
      this.elemento.el.style.left = '0px';
      this.elemento.img.setAttribute('class','sprite');
      this.elemento.img.setAttribute('src',this.img);
      this.elemento.el.appendChild(this.elemento.img)
      cenario.appendChild(this.elemento.el)

    }

    movimenta(key){
      if(key=='w'){
        this.inseriDirecao = 'w/'
        this.inseriPx = -this.vel
      }else if(key=='d'){
        this.inseriDirecao = 'd/'
        this.inseriPy = this.vel
      }else if(key=='s'){
        this.inseriDirecao = 's/'
        this.inseriPx = this.vel
      }else if(key=='a'){
        this.inseriDirecao = 'a/'
        this.inseriPy = -this.vel
      }
      this.trocaImg()
    }
  }
  export default Jogador

