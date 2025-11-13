import { Component } from '@angular/core';

@Component({
  selector: 'app-sobre-mim',
  standalone: true,
  imports: [],
  templateUrl: './sobre-mim.html',
  styleUrl: './sobre-mim.scss',
})

export class SobreMim {
  name = 'Gabriel Henrique Martins';
  frase = 'Aprendendo Angular';
  preferencia = 'Jogar Truco';
  preferencia2 = 'Jogar Poker';
  preferencia3 = 'Jogar Xadrez';
}

