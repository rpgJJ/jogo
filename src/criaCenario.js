
export function criaCenario(valor){
  const body = document.querySelector('body');
  const cenario2 = document.createElement('div');
  cenario2.setAttribute('class','cenario');
  body.appendChild(cenario2);
  class Jogador {
    constructor(){
      this.valor = valor
      this.elemento={el:0,img:0}
      this.img = `../public/img/${this.valor}.png`
      this.px
      this.py


    }
    criar(){
      this.elemento.el = document.createElement('span');
      this.elemento.img = document.createElement('img');
      this.elemento.el.setAttribute('class','jogador');
      this.elemento.el.style.top = '20px';
      this.elemento.el.style.left = '20px';
      this.elemento.img.setAttribute('class','sprite');
      this.elemento.img.setAttribute('src',this.img);

      this.elemento.el.appendChild(this.elemento.img)
      cenario2.appendChild(this.elemento.el)
    }
    movimenta(key,cenario){
      let x =cenario.tamanhoX-60
      let y =cenario.tamanhoY-60
      console.log(document.documentElement.clientHeight)
      if(key=='w'){
        this.px=parseInt(this.elemento.el.style.top)-10;
        this.elemento.el.style.top=this.px+'px'
      }else if(key=='d'){
        this.py=parseInt(this.elemento.el.style.left)+10;
        this.elemento.el.style.left=this.py+'px'
      }else if(key=='s'){
        this.px=parseInt(this.elemento.el.style.top)+10;
        this.elemento.el.style.top=this.px+'px'
      }else if(key=='a'){
        this.py=parseInt(this.elemento.el.style.left)-10;
        this.elemento.el.style.left=this.py+'px'
      }
      this.px=parseInt(this.elemento.el.style.top)
      this.py=parseInt(this.elemento.el.style.left)
      if(this.px<=0){
        this.elemento.el.style.top='0px'
      }else if(this.py<=0){
        this.elemento.el.style.left='0px'
      }else if(this.py>=y){
        this.elemento.el.style.left=(y)+'px'
      }else if(this.px>=x){
        this.elemento.el.style.top=(x)+'px'
      }
    }
    sprite(key){
      if(key=='w'){
        if(this.valor=='f0'){
          this.valor='f1'
        }else if(this.valor=='f1'){
          this.valor='f2'
        }else if(this.valor=='e2'){
          this.valor='f0'
        }else{
          this.valor='f0'
        }
      }else if(key=='d'){
        if(this.valor=='d0'){
          this.valor='d1'
        }else if(this.valor=='d1'){
          this.valor='d2'
        }else if(this.valor=='d2'){
          this.valor='d0'
        }else{
          this.valor='d0'
        }
      }else if(key=='s'){
          if(this.valor=='b0'){
            this.valor='b1'
          }else if(this.valor=='b1'){
            this.valor='b2'
          }else if(this.valor=='b2'){
            this.valor='b0'
          }else{
            this.valor='b0'
          }
      }else if(key=='a'){
          if(this.valor=='i0'){
            this.valor='i1'
          }else if(this.valor=='i1'){
            this.valor='i2'
          }else if(this.valor=='i2'){
            this.valor='i0'
          }else{
            this.valor='i0'
          }
      }
      this.img=`../public/img/${this.valor}.png`
      this.elemento.img = document.querySelector('.sprite')
      this.elemento.img.setAttribute('src',this.img);
    }
  }
  class Cenario {
    constructor(){
      this.tamanhoX=document.documentElement.clientHeight
      this.tamanhoY=document.documentElement.clientWidth
      this.obs = []
      this.itens = []
      this.px,
      this.py
      this.img = '../public/img/arvore1.png'
    }
    criar(){

      for(let i=0;i<30;i++){
        this.obs[i] = document.createElement('span');
        this.obs[i].setAttribute('class','obs');
        this.itens[i] = document.createElement('img');
        this.itens[i].setAttribute('class','obstaculo');
        this.itens[i].setAttribute('src',this.img);
        this.px =(Math.floor(Math.random() * this.tamanhoX)-40)
        this.py = (Math.floor(Math.random() * this.tamanhoY)-40)
        this.obs[i].style.top = this.px+'px'
        this.obs[i].style.left = this.py+'px'
        this.obs[i].appendChild(this.itens[i])
        cenario2.appendChild(this.obs[i])
      }
    }
  }
  const cenario = new Cenario;
  cenario.criar()
  const jogador = new Jogador;
  jogador.criar()
  document.addEventListener('keydown',(e)=>{
    jogador.sprite(e.key)
    jogador.movimenta(e.key,cenario)

  });

}
