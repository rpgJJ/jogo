class Cenario{
  constructor(tamanhoY,tamanhoX){
    this.tamanhoY=tamanhoY
    this.tamanhoX=tamanhoX
  }
  cria(){
    const body = document.querySelector('body');
    const cenario = document.createElement('div');
    cenario.setAttribute('class','cenario');
    cenario.style.height = this.tamanhoX+'px'
    cenario.style.width = this.tamanhoY+'px'
    body.appendChild(cenario);
  }
  colisaoObs(px,py){
  }
  limite(px,py){
    const jogador = document.querySelector('.jogador')
    if(jogador.style.top=='-10px'){
      jogador.style.top = '0px'
      return
    }else if(jogador.style.left=='-10px'){
      jogador.style.left = '0px'
    }
    if((this.tamanhoX-px<60)){
      jogador.style.top = (px-5)+'px'
    }else if((this.tamanhoY-py<60)){
      jogador.style.left = (py-5)+'px'
    }else if(px<0){
      jogador.style.top = '0px'
    }else if(py<0){
      jogador.style.left = '0px'
    }
}
  verifica(px,py){
    this.limite(px,py)
    this.colisaoObs(px,py)
  }
}
export default Cenario



