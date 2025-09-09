// src/app/shared/annotated-example/annotated-example.component.ts
import { Component, Input, OnChanges } from '@angular/core';
import { Span } from '../models/annotation.models';
import {NgClass} from '@angular/common';

interface Token {
  text: string;
  label?: string;
  note?: string;
}

@Component({
  selector: 'app-annotated-example',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './annotated-example.html',
  styleUrl: './annotated-example.css'
})
export class AnnotatedExampleComponent implements OnChanges {
  @Input() text = '';
  @Input() spans: Span[] = [];

  tokens: Token[] = [];

  ngOnChanges(): void {
    this.tokens = this.buildTokenHighlights(this.text, this.spans);
  }

  private buildTokenHighlights(text: string, spans: Span[]): Token[] {
    if (!text) return [];
    const words = text.split(/\s+/).filter(w => w.length > 0); // filter blanks
    const tokens: Token[] = words.map((w, i) => ({ text: w }));

    for (const s of spans) {
      for (let i = s.start; i <= s.end && i < tokens.length; i++) {
        tokens[i].label = s.label;
        tokens[i].note = s.note;
      }
    }
    return tokens;
  }

}
