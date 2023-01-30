import Jogador from './Jogador.js'
import Cenario from './Cenario.js'
const cenario= new Cenario(document.documentElement.clientWidth.toString(),document.documentElement.clientHeight.toString());

const jogador = new Jogador(location.search.replace('?person=',''));
cenario.cria(jogador.vel)
jogador.criar()
document.addEventListener('keydown',(e)=>{
    jogador.movimenta(e.key)
    cenario.verifica(jogador.px,jogador.py,e.key)
    console.log(jogador.px,jogador.py)
});
