import 'zone.js/dist/zone';
import { Component, importProvidersFrom } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  bootstrapApplication,
} from '@angular/platform-browser';
import { provideRouter, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {routersConfig} from './routers';

@Component({
  selector: 'my-app',
  standalone: true,
  imports: [CommonModule, RouterModule],
  providers:[],
  template: `
    <header></header>
    <div class="content">
      <aside>
      <router-outlet></router-outlet>
      </aside>
      <main>
      <router-outlet name='post'></router-outlet>
      </main>
      <aside>
      <router-outlet name='comment'></router-outlet>
      </aside>
    </div>
    <div>
    </div>
    
  `,
})
export class App {
  name = 'Angular';
}

bootstrapApplication(App, {
  providers: [
    provideRouter(routersConfig),
    importProvidersFrom(HttpClientModule),
  ],
});
