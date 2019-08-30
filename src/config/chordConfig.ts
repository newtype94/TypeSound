export enum FSchordEnum {
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  A = "A",
  B = "B",
  Db = "Db",
  Eb = "Eb",
  Gb = "Gb",
  Ab = "Ab",
  Bb = "Bb"
}

export const FSchordArray = [
  FSchordEnum.C,
  FSchordEnum.Db,
  FSchordEnum.D,
  FSchordEnum.Eb,
  FSchordEnum.E,
  FSchordEnum.F,
  FSchordEnum.Gb,
  FSchordEnum.G,
  FSchordEnum.Ab,
  FSchordEnum.A,
  FSchordEnum.Bb,
  FSchordEnum.B
];

export enum FSvariationEnum {
  Major = "Major",
  m = "m",
  susfour = "sus4",
  dim = "dim",
  aug = "aug",
  two = "2",
  six = "6",
  seven = "7",
  msix = "m6", //m + six
  mseven = "m7", //m + seven
  sustwo = "sus2" //susfour + two1
}

export const FSvariationArray = [
  FSvariationEnum.Major,
  FSvariationEnum.m,
  FSvariationEnum.sustwo,
  FSvariationEnum.susfour,
  FSvariationEnum.dim,
  FSvariationEnum.aug,
  FSvariationEnum.two,
  FSvariationEnum.six,
  FSvariationEnum.seven,
  FSvariationEnum.msix,
  FSvariationEnum.mseven
];
