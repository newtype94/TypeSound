enum chordEnum {
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

enum variationEnum {
  Major = "Major",
  m = "m",
  susfour = "susfour",
  major = "major",
  two = "two",
  dim = "dim",
  seven = "seven",
  six = "six"
}
enum chordVariationEnum {
  null = "",
  // +++C+++
  CMajor = "CMajor",
  Cm = "Cm",
  Csusfour = "Csusfour",
  Cmajor = "Cmajor",
  Ctwo = "Ctwo",
  Cdim = "Cdim",
  Cseven = "Cseven",
  Csix = "Csix",
  // +++D+++
  DMajor = "DMajor",
  Dm = "Dm",
  Dsusfour = "Dsusfour",
  Dmajor = "Dmajor",
  Dtwo = "Dtwo",
  Ddim = "Ddim",
  Dseven = "Dseven",
  Dsix = "Dsix",
  // +++E+++
  EMajor = "EMajor",
  Em = "Em",
  Esusfour = "Esusfour",
  Emajor = "Emajor",
  Etwo = "Etwo",
  Edim = "Edim",
  Eseven = "Eseven",
  Esix = "Esix",
  // +++F+++
  FMajor = "FMajor",
  Fm = "Fm",
  Fsusfour = "Fsusfour",
  Fmajor = "Fmajor",
  Ftwo = "Ftwo",
  Fdim = "Fdim",
  Fseven = "Fseven",
  Fsix = "Fsix",
  // +++G+++
  GMajor = "GMajor",
  Gm = "Gm",
  Gsusfour = "Gsusfour",
  Gmajor = "Gmajor",
  Gtwo = "Gtwo",
  Gdim = "Gdim",
  Gseven = "Gseven",
  Gsix = "Gsix",
  // +++A+++
  AMajor = "AMajor",
  Am = "Am",
  Asusfour = "Asusfour",
  Amajor = "Amajor",
  Atwo = "Atwo",
  Adim = "Adim",
  Aseven = "Aseven",
  Asix = "Asix",
  // +++B+++
  BMajor = "BMajor",
  Bm = "Bm",
  Bsusfour = "Bsusfour",
  Bmajor = "Bmajor",
  Btwo = "Btwo",
  Bdim = "Bdim",
  Bseven = "Bseven",
  Bsix = "Bsix",
  // +++Db+++
  DbMajor = "DbMajor",
  Dbm = "Dbm",
  Dbsusfour = "Dbsusfour",
  Dbmajor = "Dbmajor", // = Dbmajor7
  Dbtwo = "Dbtwo",
  Dbdim = "Dbdim",
  Dbseven = "Dbseven",
  Dbsix = "Dbsix",
  Dbaug = "Dbaug",
  // +++Eb+++
  EbMajor = "EbMajor",
  Ebm = "Ebm",
  Ebsusfour = "Ebsusfour",
  Ebmajor = "Ebmajor", // = Ebmajor7
  Ebtwo = "Ebtwo",
  Ebdim = "Ebdim",
  Ebseven = "Ebseven",
  Ebsix = "Ebsix",
  Ebaug = "Ebaug"
}

const chordArray = [chordEnum.C, chordEnum.D, chordEnum.E];
const variationArray = [variationEnum.Major, variationEnum.dim];

export {
  chordEnum,
  variationEnum,
  chordVariationEnum,
  chordArray,
  variationArray
};
