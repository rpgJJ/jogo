

   class Jogador {
    constructor(personagem,keys,j){
      this.personagem = personagem
      this.url = `public/img/personagens/${this.personagem}/`
      this.direcao = 'w/'
      this.sprite = 0
      this.formato = '.png'
      this.img = this.url+this.direcao+this.sprite+this.formato
      this.vel = 10
      this.elemento={el:0,img:0}
      this.px
      this.py
      this.keys = keys
      this.j = j
      this.disparar = false
      this.mun = {
        el:0,
        img:0,
        src : 'public/img/armas/caveira.gif',
        q:20
      }

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
      this.elemento.el.setAttribute('id','jogador'+this.j);
      this.elemento.el.style.top = Math.floor(Math.random()*20)*20+'px';
      this.elemento.el.style.left =  Math.floor(Math.random()*20)*20+'px';
      this.elemento.img.setAttribute('class','sprite');
      this.elemento.img.setAttribute('src',this.img);
      this.elemento.el.appendChild(this.elemento.img)
      cenario.appendChild(this.elemento.el)

    }
    timer(){
      let time = 1000
      setTimeout(()=>{},time)
    }
    async movimentaMun(){
      this
    }
    dispara(){

      if(this.disparar==true&&this.mun.q>0){
        this.disparar=false
        this.mun.q-=1
        const cenario = document.querySelector('.cenario');
        this.mun.el = document.createElement('span');
        this.mun.img = document.createElement('img');
        this.mun.el.setAttribute('class','mun');
        this.mun.el.setAttribute('id','mun'+this.j);
        this.mun.el.style.top = this.px+'px'
        this.mun.el.style.left =  this.py+'px'
        this.mun.img.setAttribute('class','sprite');
        this.mun.img.setAttribute('src', this.mun.src );
        this.mun.el.appendChild( this.mun.img )
        cenario.appendChild(this.mun.el)
        movimentaMun()

      }

    }
    movimenta(key){
      if(key==this.keys.U){
        this.inseriDirecao = 'w/'
        this.inseriPx = -this.vel
      }else if(key==this.keys.R){
        this.inseriDirecao = 'd/'
        this.inseriPy = this.vel
      }else if(key==this.keys.D){
        this.inseriDirecao = 's/'
        this.inseriPx = this.vel
      }else if(key==this.keys.L){
        this.inseriDirecao = 'a/'
        this.inseriPy = -this.vel
      }
      this.trocaImg()
    }
  }
  export default Jogador

