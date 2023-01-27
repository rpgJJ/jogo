import Jogador from './Jogador.js'
import Cenario from './Cenario.js'
const cenario= new Cenario(document.documentElement.clientWidth,document.documentElement.clientHeight);
const jogador = new Jogador;
cenario.cria()
jogador.criar()
document.addEventListener('keydown',(e)=>{
    jogador.movimenta(e.key)
    cenario.verifica(jogador.px,jogador.py)
    console.log(jogador.px,jogador.py)
});
