import { FSchordEnum, FSchordVariationEnum } from "../config/chordConfig";

export const chordNotes: { [x: string]: FSchordEnum[][] } = {
  // C
  [FSchordVariationEnum.CMajor]: [
    [FSchordEnum.C, FSchordEnum.E, FSchordEnum.G],
    [],
    []
  ],
  [FSchordVariationEnum.Cm]: [
    [FSchordEnum.C, FSchordEnum.Eb, FSchordEnum.G, FSchordEnum.Bb],
    [],
    []
  ],
  [FSchordVariationEnum.Cm6]: [
    [FSchordEnum.C, FSchordEnum.Eb, FSchordEnum.G, FSchordEnum.A],
    [],
    []
  ],
  [FSchordVariationEnum.Cm7]: [
    [FSchordEnum.C, FSchordEnum.Eb, FSchordEnum.G, FSchordEnum.Bb],
    [],
    []
  ],
  [FSchordVariationEnum.Caug]: [
    [FSchordEnum.C, FSchordEnum.E, FSchordEnum.Ab],
    [],
    []
  ],
  [FSchordVariationEnum.Cdim]: [
    [FSchordEnum.C, FSchordEnum.Eb, FSchordEnum.Gb],
    [],
    []
  ],
  [FSchordVariationEnum.C2]: [[], [], []],
  [FSchordVariationEnum.C6]: [[], [], []],
  [FSchordVariationEnum.C7]: [[], [], []],
  [FSchordVariationEnum.Csus2]: [[], [], []],
  [FSchordVariationEnum.Csus4]: [[], [], []],
  // Db
  [FSchordVariationEnum.DbMajor]: [[], [], []],
  [FSchordVariationEnum.Dbm]: [[], [], []],
  [FSchordVariationEnum.Db6]: [[], [], []],
  [FSchordVariationEnum.Dbm7]: [[], [], []],
  [FSchordVariationEnum.Dbaug]: [[], [], []],
  [FSchordVariationEnum.Dbdim]: [[], [], []],
  [FSchordVariationEnum.Db2]: [[], [], []],
  [FSchordVariationEnum.Db6]: [[], [], []],
  [FSchordVariationEnum.Db7]: [[], [], []],
  [FSchordVariationEnum.Dbsus2]: [[], [], []],
  [FSchordVariationEnum.Dbsus4]: [[], [], []],
  // D
  [FSchordVariationEnum.DMajor]: [[], [], []],
  [FSchordVariationEnum.Dm]: [[], [], []],
  [FSchordVariationEnum.Dm6]: [[], [], []],
  [FSchordVariationEnum.Dm7]: [[], [], []],
  [FSchordVariationEnum.Daug]: [[], [], []],
  [FSchordVariationEnum.Ddim]: [[], [], []],
  [FSchordVariationEnum.D2]: [[], [], []],
  [FSchordVariationEnum.D6]: [[], [], []],
  [FSchordVariationEnum.D7]: [[], [], []],
  [FSchordVariationEnum.Dsus2]: [[], [], []],
  [FSchordVariationEnum.Dsus4]: [[], [], []],
  // Eb
  [FSchordVariationEnum.EbMajor]: [[], [], []],
  [FSchordVariationEnum.Ebm]: [[], [], []],
  [FSchordVariationEnum.Ebm6]: [[], [], []],
  [FSchordVariationEnum.Ebm7]: [[], [], []],
  [FSchordVariationEnum.Ebaug]: [[], [], []],
  [FSchordVariationEnum.Ebdim]: [[], [], []],
  [FSchordVariationEnum.Eb2]: [[], [], []],
  [FSchordVariationEnum.Eb6]: [[], [], []],
  [FSchordVariationEnum.Eb7]: [[], [], []],
  [FSchordVariationEnum.Ebsus2]: [[], [], []],
  [FSchordVariationEnum.Ebsus4]: [[], [], []],
  // E
  [FSchordVariationEnum.EMajor]: [[], [], []],
  [FSchordVariationEnum.Em]: [[], [], []],
  [FSchordVariationEnum.Em6]: [[], [], []],
  [FSchordVariationEnum.Em7]: [[], [], []],
  [FSchordVariationEnum.Eaug]: [[], [], []],
  [FSchordVariationEnum.Edim]: [[], [], []],
  [FSchordVariationEnum.E2]: [[], [], []],
  [FSchordVariationEnum.E6]: [[], [], []],
  [FSchordVariationEnum.E7]: [[], [], []],
  [FSchordVariationEnum.Esus2]: [[], [], []],
  [FSchordVariationEnum.Esus4]: [[], [], []],
  // F
  [FSchordVariationEnum.FMajor]: [
    [FSchordEnum.F, FSchordEnum.A],
    [FSchordEnum.C],
    []
  ],
  [FSchordVariationEnum.Fm]: [[], [], []],
  [FSchordVariationEnum.Fm6]: [[], [], []],
  [FSchordVariationEnum.Fm7]: [[], [], []],
  [FSchordVariationEnum.Faug]: [[], [], []],
  [FSchordVariationEnum.Fdim]: [[], [], []],
  [FSchordVariationEnum.F2]: [[], [], []],
  [FSchordVariationEnum.F6]: [[], [], []],
  [FSchordVariationEnum.F7]: [[], [], []],
  [FSchordVariationEnum.Fsus2]: [[], [], []],
  [FSchordVariationEnum.Fsus4]: [[], [], []],
  // Gb
  [FSchordVariationEnum.GbMajor]: [[], [], []],
  [FSchordVariationEnum.Gbm]: [[], [], []],
  [FSchordVariationEnum.Gbm6]: [[], [], []],
  [FSchordVariationEnum.Gbm7]: [[], [], []],
  [FSchordVariationEnum.Gbaug]: [[], [], []],
  [FSchordVariationEnum.Gbdim]: [[], [], []],
  [FSchordVariationEnum.Gb2]: [[], [], []],
  [FSchordVariationEnum.Gb6]: [[], [], []],
  [FSchordVariationEnum.Gb7]: [[], [], []],
  [FSchordVariationEnum.Gbsus2]: [[], [], []],
  [FSchordVariationEnum.Gbsus4]: [[], [], []],
  // G
  [FSchordVariationEnum.GMajor]: [[], [], []],
  [FSchordVariationEnum.Gm]: [[], [], []],
  [FSchordVariationEnum.Gm6]: [[], [], []],
  [FSchordVariationEnum.Gm7]: [[], [], []],
  [FSchordVariationEnum.Gaug]: [[], [], []],
  [FSchordVariationEnum.Gdim]: [[], [], []],
  [FSchordVariationEnum.G2]: [[], [], []],
  [FSchordVariationEnum.G6]: [[], [], []],
  [FSchordVariationEnum.G7]: [[], [], []],
  [FSchordVariationEnum.Gsus2]: [[], [], []],
  [FSchordVariationEnum.Gsus4]: [[], [], []],
  // Ab
  [FSchordVariationEnum.AbMajor]: [[], [], []],
  [FSchordVariationEnum.Abm]: [[], [], []],
  [FSchordVariationEnum.Abm6]: [[], [], []],
  [FSchordVariationEnum.Abm7]: [[], [], []],
  [FSchordVariationEnum.Abaug]: [[], [], []],
  [FSchordVariationEnum.Abdim]: [[], [], []],
  [FSchordVariationEnum.Ab2]: [[], [], []],
  [FSchordVariationEnum.Ab6]: [[], [], []],
  [FSchordVariationEnum.Ab7]: [[], [], []],
  [FSchordVariationEnum.Absus2]: [[], [], []],
  [FSchordVariationEnum.Absus4]: [[], [], []],
  // A
  [FSchordVariationEnum.AMajor]: [[], [], []],
  [FSchordVariationEnum.Am]: [[], [], []],
  [FSchordVariationEnum.Am6]: [[], [], []],
  [FSchordVariationEnum.Am7]: [[], [], []],
  [FSchordVariationEnum.Aaug]: [[], [], []],
  [FSchordVariationEnum.Adim]: [[], [], []],
  [FSchordVariationEnum.A2]: [[], [], []],
  [FSchordVariationEnum.A6]: [[], [], []],
  [FSchordVariationEnum.A7]: [[], [], []],
  [FSchordVariationEnum.Asus2]: [[], [], []],
  [FSchordVariationEnum.Asus4]: [[], [], []],
  // Bb
  [FSchordVariationEnum.BbMajor]: [[], [], []],
  [FSchordVariationEnum.Bbm]: [[], [], []],
  [FSchordVariationEnum.Bbm6]: [[], [], []],
  [FSchordVariationEnum.Bbm7]: [[], [], []],
  [FSchordVariationEnum.Bbaug]: [[], [], []],
  [FSchordVariationEnum.Bbdim]: [[], [], []],
  [FSchordVariationEnum.Bb2]: [[], [], []],
  [FSchordVariationEnum.Bb6]: [[], [], []],
  [FSchordVariationEnum.Bb7]: [[], [], []],
  [FSchordVariationEnum.Bbsus2]: [[], [], []],
  [FSchordVariationEnum.Bbsus4]: [[], [], []],
  // B
  [FSchordVariationEnum.BMajor]: [[], [], []],
  [FSchordVariationEnum.Bm]: [[], [], []],
  [FSchordVariationEnum.Bm6]: [[], [], []],
  [FSchordVariationEnum.Bm7]: [[], [], []],
  [FSchordVariationEnum.Baug]: [[], [], []],
  [FSchordVariationEnum.Bdim]: [[], [], []],
  [FSchordVariationEnum.B2]: [[], [], []],
  [FSchordVariationEnum.B6]: [[], [], []],
  [FSchordVariationEnum.B7]: [[], [], []],
  [FSchordVariationEnum.Bsus2]: [[], [], []],
  [FSchordVariationEnum.Bsus4]: [[], [], []]
};
