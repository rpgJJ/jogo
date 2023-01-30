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
  limite(px,py,key){
    const jogador = document.querySelector('.jogador')
    if(jogador.style.top== (-this.vel)+'px'){
      jogador.style.top = '0px'
      return
    }else if(jogador.style.left==(-this.vel)+'px'){
      jogador.style.left = '0px'
    }
    else if((this.tamanhoX-px==60)||(this.tamanhoX-px==50)){
      if((key=='d')&&(this.tamanhoY-py==60)){
        jogador.style.left = (py-10)+'px'
        return
      }
      jogador.style.top = (px-10)+'px'
      console.log('opaa')

    }else if((this.tamanhoY-py==60)||(this.tamanhoY-py==50)){
      console.log(py+'opaaaa')
      jogador.style.left = (py-10)+'px'
    }
}
  verifica(px,py,key){
    this.limite(px,py,key)
    this.colisaoObs(px,py)
  }
}
export default Cenario



