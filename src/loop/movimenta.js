export async function movimenta(jogador,jogador2,cenario){
  jogador.movimenta(jogador.key);
  jogador2.movimenta(jogador2.key);
  cenario.verifica(jogador.px,jogador.py,jogador.key,jogador.elemento.el)
  cenario.verifica(jogador2.px,jogador2.py,jogador2.key,jogador2.elemento.el)
}
