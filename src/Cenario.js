class Cenario{
  constructor(tamanhoY,tamanhoX){
    this.vel
    this.tamanhoY=tamanhoY.split('')
    this.tamanhoX=tamanhoX.split('')
    this.ajustaTela()
  }
  ajustaTela(){
    this.tamanhoX[2] = '0';
    this.tamanhoX=this.tamanhoX.toString();
    this.tamanhoX=this.tamanhoX.replace(',','');
    this.tamanhoX=this.tamanhoX.replace(',','');
    this.tamanhoY[this.tamanhoY.length-1] = '0';
    this.tamanhoY=this.tamanhoY.toString();
    this.tamanhoY=this.tamanhoY.replace(',','');
    this.tamanhoY=this.tamanhoY.replace(',','');
    this.tamanhoY=this.tamanhoY.replace(',','');


  }
  cria(vel){
    const body = document.querySelector('body');
    const cenario = document.createElement('div');
    cenario.setAttribute('class','cenario');
    cenario.style.height = this.tamanhoX+'px'
    cenario.style.width = this.tamanhoY+'px'
    body.appendChild(cenario);
    this.vel =vel
  }
  colisaoObs(px,py){
  }
  limite(px,py,key,jogador){
    if(jogador.style.top== (-this.vel)+'px'){
      jogador.style.top = '0px'
      return
    }else if(jogador.style.left==(-this.vel)+'px'){
      jogador.style.left = '0px'

    }
    else if((this.tamanhoX-px==60)||(this.tamanhoX-px==50)){

      if((key=='d')||(key=='l')&&(this.tamanhoY-(py)==60)){

        if((jogador.id=='jogador1')&&(this.tamanhoY-(py)>=60)){

          if(this.tamanhoY-(py)==60){

            jogador.style.left = (py-10)+'px'
            return

          }

          jogador.style.left = (py)+'px'
          return

        }

        jogador.style.left = (py-10)+'px'
        return

      }else{
        
        jogador.style.top = (px-10)+'px'
      }


    }else if((this.tamanhoY-py==60)||(this.tamanhoY-py==50)){
      jogador.style.left = (py-10)+'px'
    }
}
  verifica(px,py,key,jogador){
    this.limite(px,py,key,jogador)
    this.colisaoObs(px,py)
  }
}
export default Cenario



