import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from '@angular/router';

@Component({
  selector: 'app-nav',
  imports: [
    RouterLinkActive,
    RouterLink
  ],
  templateUrl: './nav.html',
  styleUrl: './nav.css'
})
export class Nav {

}
