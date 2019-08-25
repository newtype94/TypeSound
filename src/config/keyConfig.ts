export enum pianoToKey {
  OctaveUp = "Enter",
  OctaveDown = "Backspace",
  C = "y",
  Db = "7",
  D = "u",
  Eb = "8",
  E = "i",
  F = "o",
  Gb = "0",
  G = "p"
}

export enum codeToKey {
  OctaveUp = "Tab",
  OctaveDown = "Leftshift",
  C = "q",
  D = "w",
  E = "e",
  F = "a",
  G = "s",
  A = "d",
  B = "f",
  Db = "z",
  Eb = "x",
  Ab = "c",
  Bb = "v"
}

export enum variationTokey {
  plain = "1",
  m = "2",
  seven = "3",
  susFour = "4",
  sharp = "5",
  dim = "6"
}

export interface codeType {
  plain: boolean;
  m: boolean;
  seven: boolean;
  susFour: boolean;
  sharp: boolean;
  dim: boolean;
}
