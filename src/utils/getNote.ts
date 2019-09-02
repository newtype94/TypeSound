import { chordNotes } from "../lib/chordNotes";

export const getParallelNote = (
  chordVariatioin: string,
  octave: number
): string[] => {
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
  console.log(notesTemp);
  return notesTemp;
};

export const getAscNote = (
  chordVariatioin: string,
  octave: number
): string[] => {
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
  const notesResult = notesTemp;
  for (let i = notesTemp.length - 2; i > 0; i--) {
    notesResult.push(notesTemp[i]);
  }
  console.log(notesResult);
  return notesResult;
};

export const getDesNote = (
  chordVariatioin: string,
  octave: number
): string[] => {
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
  console.log(notesTemp);
  return notesTemp;
};
