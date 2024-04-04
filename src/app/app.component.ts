import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  template: `
    <app-navbar></app-navbar>
    <main class="container m-auto p-5">
      <router-outlet></router-outlet>
    </main>
  `,
  imports: [RouterOutlet, AppComponent, NavbarComponent],
})
export class AppComponent {}
