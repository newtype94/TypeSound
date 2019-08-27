enum codeEnum {
  C = "C",
  D = "D",
  E = "E",
  F = "F",
  G = "G",
  A = "A",
  B = "B",
  Db = "Db",
  Eb = "Eb",
  Ab = "Ab",
  Bb = "Bb"
}

enum variationEnum {
  plain = "plain",
  m = "m",
  seven = "seven",
  susfour = "susfour",
  sharp = "sharp",
  dim = "dim"
}
enum codeVariationEnum {
  null = "",
  Cplain = "Cplain",
  Cm = "Cm",
  Cseven = "Cseven",
  Csharp = "Csharp",
  Dplain = "Dplain",
  Dm = "Dm",
  Dseven = "Dseven",
  Dsharp = "Dsharp",
  Dmseven = "Dmseven",
  Eplain = "E",
  Em = "Em",
  Eseven = "Eseven",
  Fplain = "Fplain",
  Fm = "Fm",
  Fseven = "Fseven",
  Fsharp = "Fsharp",
  Fsusfour = "Fsusfour",
  Gplain = "Gplain",
  Gm = "Gm",
  Gseven = "Gseven",
  Gsharp = "Gsharp",
  Aplain = "Aplain",
  Am = "Am",
  Aseven = "Aseven",
  Asharp = "Asharp",
  Adim = "Adim",
  Bplain = "Bplain",
  Bm = "Bm",
  Bseven = "Bseven",
  Dbplain = "Dbplain",
  Ebm = "Ebm",
  Abplain = "Abplain",
  Bbplain = "Bbplain",
  Bbm = "Bbm",
  Bbseven = "Bbseven"
}

const getCodeVariation = {
  [codeEnum.C]: {
    [variationEnum.plain]: codeVariationEnum.Cplain,
    [variationEnum.m]: codeVariationEnum.Cm,
    [variationEnum.seven]: codeVariationEnum.Cseven,
    [variationEnum.susfour]: codeVariationEnum.null,
    [variationEnum.sharp]: codeVariationEnum.Csharp,
    [variationEnum.dim]: codeVariationEnum.null
  },
  [codeEnum.D]: {
    [variationEnum.plain]: codeVariationEnum.Dplain,
    [variationEnum.m]: codeVariationEnum.Dm,
    [variationEnum.seven]: codeVariationEnum.Dseven,
    [variationEnum.susfour]: codeVariationEnum.null,
    [variationEnum.sharp]: codeVariationEnum.Csharp,
    [variationEnum.dim]: codeVariationEnum.null
  },
  [codeEnum.E]: {
    [variationEnum.plain]: codeVariationEnum.Cplain,
    [variationEnum.m]: codeVariationEnum.Cm,
    [variationEnum.seven]: codeVariationEnum.Cseven,
    [variationEnum.susfour]: codeVariationEnum.null,
    [variationEnum.sharp]: codeVariationEnum.Csharp,
    [variationEnum.dim]: codeVariationEnum.null
  }
};

const codeVariationToPiano = {
  [codeVariationEnum.Cplain]: [["C", "E", "G"]],
  [codeVariationEnum.Cm]: [["C", "Fb", "G"]],
  [codeVariationEnum.Cseven]: [["C", "E", "G", "Bb"]],
  [codeVariationEnum.Csharp]: [["Db", "Fb", "Ab"]],
  [codeVariationEnum.Dplain]: [["D", "Gb", "A"]],
  [codeVariationEnum.Dm]: [["D", "F", "A"]],
  [codeVariationEnum.Dseven]: [["D", "Gb", "A"], ["C"]],
  [codeVariationEnum.Dsharp]: ["Eb", "G", "Bb"],
  [codeVariationEnum.Dmseven]: [["D", "F", "A"], ["C"]],
  [codeVariationEnum.Eplain]: ["E", "Ab", "B"],
  [codeVariationEnum.Em]: ["E", "G", "B"],
  [codeVariationEnum.Eseven]: [["E", "Ab", "B"], ["D"]],
  [codeVariationEnum.Fplain]: [["F", "A"], ["C"]],
  [codeVariationEnum.Fm]: [["F", "Ab"], ["C"]],
  [codeVariationEnum.Fseven]: [["F", "A"], ["C", "Eb"]],
  [codeVariationEnum.Fsharp]: [["Gb", "Bb"], ["Db"]],
  [codeVariationEnum.Fsusfour]: [["F", "Bb"], ["C"]],
  [codeVariationEnum.Gplain]: [["G", "B"], ["D"]],
  [codeVariationEnum.Gm]: [["G", "Bb"], ["D"]],
  [codeVariationEnum.Gseven]: [["G", "B"], ["D", "F"]],
  [codeVariationEnum.Gsharp]: [["Ab"], ["C", "Eb"]],
  [codeVariationEnum.Aplain]: [["A"], ["Db", "E"]],
  [codeVariationEnum.Am]: [["A"], ["C", "E"]],
  [codeVariationEnum.Aseven]: [["A"], ["Db", "E", "G"]],
  [codeVariationEnum.Asharp]: [["Bb"], ["D", "F"]],
  [codeVariationEnum.Adim]: [["A"], ["C", "Eb"]],
  [codeVariationEnum.Bplain]: [["B"], ["Eb", "Gb"]],
  [codeVariationEnum.Bm]: [["B"], ["D", "Gb"]],
  [codeVariationEnum.Bseven]: [["B"], ["Eb", "Gb", "A"]],
  [codeVariationEnum.Dbplain]: ["Db", "F", "Ab"],
  [codeVariationEnum.Ebm]: ["Eb", "G", "Bb"],
  [codeVariationEnum.Abplain]: [["Ab"], ["C", "Eb"]],
  [codeVariationEnum.Bbplain]: [["Bb"], ["D", "F"]],
  [codeVariationEnum.Bbm]: [["Bb"], ["Db", "F"]],
  [codeVariationEnum.Bbseven]: [["Bb"], ["D", "F", "Ab"]]
};

const codeArray = [codeEnum.C, codeEnum.D, codeEnum.E];

const variationArray = [
  variationEnum.plain,
  variationEnum.m,
  variationEnum.seven,
  variationEnum.susfour,
  variationEnum.sharp,
  variationEnum.dim
];

export {
  codeEnum,
  variationEnum,
  codeVariationEnum,
  codeArray,
  variationArray,
  getCodeVariation,
  codeVariationToPiano
};
