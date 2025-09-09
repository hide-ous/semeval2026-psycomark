import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  imports: [],
  templateUrl: './contact.html',
  styleUrl: './contact.css'
})
export class Contact {
  private at = '@';
  private dot = '.';

  participantEmail = `semeval2026-task10-participants${this.at}googlegroups${this.dot}com`;
  organizerEmail = `semeval2026-task10-organizers${this.at}googlegroups${this.dot}com`;

}
