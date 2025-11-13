import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Home } from './home/home';
import { SobreMim } from './sobre-mim/sobre-mim';

@Component({
  selector: 'app-root',
  standalone: true,
//  imports: [RouterOutlet, Home, SobreMim],
  imports: [RouterOutlet, SobreMim],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('mentioria-angular');
}
