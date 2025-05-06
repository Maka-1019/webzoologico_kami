import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NuevocomponenteComponent } from './components/nuevocomponente/nuevocomponente.component';
import { Componente2Component } from './components/componente2/componente2.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NuevocomponenteComponent, Componente2Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'PROYECTO ZOOLOGICO';
  titulo = 'NUEVO PROYECTO ZOOLOGICO';
}
