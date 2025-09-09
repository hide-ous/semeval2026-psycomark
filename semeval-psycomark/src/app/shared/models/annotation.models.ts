// src/app/shared/models/annotation.models.ts
export type Aspect = 'Actor' | 'Action' | 'Effect' | 'Victim' | 'Evidence';

export interface Span {
  start: number;   // inclusive char index
  end: number;     // exclusive char index
  label: Aspect;
  note?: string;
}

export interface AnnotatedExample {
  text: string;
  spans: Span[];
}

export interface AspectInstruction {
  label: Aspect;
  title: string;        // e.g., "Actor"
  description: string;  // short guideline
  examples: AnnotatedExample[];
}

export interface InstructionsPayload {
  intro?: string;
  aspects: AspectInstruction[];
}
