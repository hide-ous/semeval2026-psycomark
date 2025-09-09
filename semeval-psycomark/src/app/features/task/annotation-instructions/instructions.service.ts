// src/app/features/task/annotation-instructions/instructions.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InstructionsPayload } from '../../../shared/models/annotation.models';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class InstructionsService {
  constructor(private http: HttpClient) {}
  load(): Observable<InstructionsPayload> {
    return this.http.get<InstructionsPayload>('instructions.json');
  }
}
