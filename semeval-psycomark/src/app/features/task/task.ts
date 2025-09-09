import { Component } from '@angular/core';
import {AnnotationInstructionsComponent} from './annotation-instructions/annotation-instructions';

@Component({
  selector: 'app-task',
  imports: [
    AnnotationInstructionsComponent
  ],
  templateUrl: './task.html',
  styleUrl: './task.css'
})
export class Task {

}
