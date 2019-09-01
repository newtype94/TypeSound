import { chordNotes } from "../lib/chordNotes";

export const getNote = (chordVariatioin: string, octave: number): string[] => {
  let notesTemp: string[] = [];
  chordNotes[chordVariatioin][0].map(value => {
    notesTemp.push(value + String(octave));
  });
  chordNotes[chordVariatioin][1].map(value => {
    notesTemp.push(value + String(octave + 1));
  });
  chordNotes[chordVariatioin][2].map(value => {
    notesTemp.push(value + String(octave + 2));
  });
  return notesTemp;
};
