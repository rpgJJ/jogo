import Jogador from './Jogador.js'
import Cenario from './Cenario.js'
import { movimenta } from './loop/movimenta.js';
import { acao } from './loop/acao.js';

const cenario= new Cenario(document.documentElement.clientWidth.toString(),document.documentElement.clientHeight.toString());
const keys = { U:'w',L:'a',D:'s',R:'d' }
const keys2 = { U:'i',L:'j',D:'k',R:'l' }
const jogador = new Jogador(location.search.replace('?person=',''),keys,1);
const jogador2 = new Jogador(location.search.replace('?person=',''),keys2,2);
cenario.cria(jogador.vel)
jogador.criar()
jogador2.criar()
document.addEventListener('keydown',(e)=>{

  if(e.key=='f'){
    jogador.disparar=true
  }else if(e.key=='p'){
    jogador2.disparar=true
  }

  if (e.key == keys.U || e.key == keys.L || e.key == keys.D || e.key == keys.R) {
    jogador.key = e.key
  }else if(e.key==keys2.U||e.key==keys2.D||e.key==keys2.L||e.key==keys2.R){
    jogador2.key = e.key
  }

});


setInterval(()=>{

  movimenta(jogador,jogador2,cenario)
  acao(jogador,jogador2,cenario)

},1000/15)




  // if (e.key == keys.U || e.key == keys.L || e.key == keys.D || e.key == keys.R) {
    //   jogador.movimenta(e.key);
    // }

    // if(e.key==keys2.U||e.key==keys2.D||e.key==keys2.L||e.key==keys2.R){
    //   jogador2.movimenta(e.key)
    // }
