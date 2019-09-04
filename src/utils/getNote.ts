import { chordNotes } from "../lib/chordNotes";
import { TSpatternEnum } from "../config/chordConfig";

export const getNote = (
  chordVariatioin: string,
  octave: number,
  pattern: TSpatternEnum
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
  let notesResult = [""];

  switch (pattern) {
    case TSpatternEnum.parallel:
      notesResult = notesTemp;
      break;
    case TSpatternEnum.asc:
      notesResult = notesTemp;
      for (let i = notesTemp.length - 2; i > 0; i--) {
        notesResult.push(notesTemp[i]);
      }
      break;
    case TSpatternEnum.des:
      notesResult = notesTemp.reverse();
      for (let i = notesTemp.length - 2; i > 0; i--) {
        notesResult.push(notesTemp[i]);
      }
      break;
  }
  return notesResult;
};
