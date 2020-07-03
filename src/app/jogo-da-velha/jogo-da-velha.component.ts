import { Component, OnInit } from '@angular/core';
import { JogoDaVelhaService } from './shared';

@Component({
  selector: 'app-jogo-da-velha',
  templateUrl: './jogo-da-velha.component.html',
  styleUrls: ['./jogo-da-velha.component.css']
})
export class JogoDaVelhaComponent implements OnInit {

  constructor(private jogoDaVelhaService: JogoDaVelhaService) { }

  ngOnInit(): void {
    this.jogoDaVelhaService.inicializar();
  }

  /**
   * Retorna se a tela de início deve ser exibida
   *
   * @return boolean
   */
  get showInicio(): boolean {
    return this.jogoDaVelhaService.getShowInicio;
  }

  /**
   * Retorna se a tabuleiro de início deve ser exibida
   *
   * @return boolean
   */
  get showTabuleiro(): boolean {
    return this.jogoDaVelhaService.getShowTabuleiro;
  }

  /**
   * Retorna se a  tela fim do jogo a ser exibida
   *
   * @return boolean
   */
  get showFinal(): boolean {
    return this.jogoDaVelhaService.getShowFinal;
  }

  /**
   * Inicializa os dados de um jogo
   *
   * @return void
   */
  iniciarJogo(): void {
    this.jogoDaVelhaService.iniciarJogo();
  }

  /**
   *  Realizar uma jogada ao clicar em um local no tabuleiro
   *
   * @param number posX
   * @param number posY
   * @return void
   */
  jogar(posX: number, posY: number): void {
    this.jogoDaVelhaService.jogar(posX, posY);
  }

  /**
   * Retorna se a peça X deve ser exibida para a coordenada informada
   *
   *  @param number posX
   *  @param number posY
   *  @return boolean
   */
  exibirX(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirX(posX, posY);
  }

  /**
   * Retorna se a peça O deve ser exibida para a coordenada informada
   *
   *  @param number posX
   *  @param number posY
   *  @return boolean
   */
  exibirO(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirO(posX, posY);
  }

  /**
   * Retorna a marcação de vitória deve ser exiida para coordenada infromada
   *
   *  @param number posX
   *  @param number posY
   *  @return boolean
   */
  exibirVitoria(posX: number, posY: number): boolean {
    return this.jogoDaVelhaService.exibirVitoria(posX, posY);
  }

  /**
   * Retorna o número do jogador a jogar
   *
   * @return number
   *
   */
  get jogador(): number {
    return this.jogoDaVelhaService.getJogador;
  }

  /**
   * Inicia um novo jogo
   *
   * @return void
   */
  novoJogo(): void {
    this.jogoDaVelhaService.novoJogo();
  }
}
