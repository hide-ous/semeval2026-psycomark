// src/app/features/task/annotation-instructions/annotation-instructions.component.ts
import { Component } from '@angular/core';
import { InstructionsService } from './instructions.service';
import { InstructionsPayload } from '../../../shared/models/annotation.models';
import { Observable } from 'rxjs';
import {AsyncPipe} from '@angular/common';
import {AnnotatedExampleComponent} from '../../../shared/annotated-example/annotated-example';

@Component({
  selector: 'app-annotation-instructions',
  standalone: true,
  imports: [
    AsyncPipe,
    AnnotatedExampleComponent
  ],
  templateUrl: './annotation-instructions.html',
  styleUrl: './annotation-instructions.css'
})
export class AnnotationInstructionsComponent {
  data$: Observable<InstructionsPayload>;
  constructor(private svc: InstructionsService) {
    this.data$ = this.svc.load();
  }
}
