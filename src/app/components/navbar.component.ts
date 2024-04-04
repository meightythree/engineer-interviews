import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  template: `
    <div class="navbar bg-base-100 container m-auto">
      <a class="btn btn-ghost text-xl">EI :)</a>
    </div>
  `,
})
export class NavbarComponent {}
