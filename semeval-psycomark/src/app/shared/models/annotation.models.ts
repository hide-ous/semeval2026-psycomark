export type Aspect = 'Actor' | 'Action' | 'Effect' | 'Victim' | 'Evidence';

export interface Span {
  start: number;   // token start index
  end: number;     // token end index
  label: Aspect;
  note?: string;
}

export interface AnnotatedExample {
  text: string;
  spans: Span[];
}

export interface AspectInstruction {
  label: Aspect;
  title: string;
  description: string;
  color?: string;
  numButton?: number;
  example: AnnotatedExample;
  details: string[];
  controlQuestions: string[];
}

export interface InstructionsPayload {
  intro?: string;
  aspects: AspectInstruction[];
}
