enum codeEnum {
  C = "C",
  D = "D",
  E = "E"
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
  Csharp = "Csharp"
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
    [variationEnum.plain]: codeVariationEnum.Cplain,
    [variationEnum.m]: codeVariationEnum.Cm,
    [variationEnum.seven]: codeVariationEnum.Cseven,
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

const synCodeList = {
  Cplain: ["C", "E", "G"],
  Cm: ["C", "Fb", "G"],
  Dseven: [["D", "Gb", "A"], ["C"]]
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
  synCodeList,
  codeEnum,
  variationEnum,
  codeVariationEnum,
  codeArray,
  variationArray,
  getCodeVariation
};
