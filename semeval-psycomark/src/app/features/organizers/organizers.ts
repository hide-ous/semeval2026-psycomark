import { Component } from '@angular/core';

@Component({
  selector: 'app-organizers',
  imports: [],
  templateUrl: './organizers.html',
  styleUrl: './organizers.css'
})
export class Organizers {
  private at = '@';
  private dot = '.';

  organizerEmail = `semeval2026-task10-organizers${this.at}googlegroups${this.dot}com`;

}
