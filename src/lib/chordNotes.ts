import { TSchordEnum, TSchordVariationEnum } from "../config/chordConfig";

export const chordNotes: { [x: string]: TSchordEnum[][] } = {
  // C
  [TSchordVariationEnum.CMajor]: [
    [TSchordEnum.C, TSchordEnum.E, TSchordEnum.G],
    [],
    []
  ],
  [TSchordVariationEnum.Cm]: [
    [TSchordEnum.C, TSchordEnum.Eb, TSchordEnum.G],
    [],
    []
  ],
  [TSchordVariationEnum.Cm6]: [
    [TSchordEnum.C, TSchordEnum.Eb, TSchordEnum.G, TSchordEnum.A],
    [],
    []
  ],
  [TSchordVariationEnum.Cm7]: [
    [TSchordEnum.C, TSchordEnum.Eb, TSchordEnum.G, TSchordEnum.Bb],
    [],
    []
  ],
  [TSchordVariationEnum.Caug]: [
    [TSchordEnum.C, TSchordEnum.E, TSchordEnum.Ab],
    [],
    []
  ],
  [TSchordVariationEnum.Cdim]: [
    [TSchordEnum.C, TSchordEnum.Eb, TSchordEnum.Gb],
    [],
    []
  ],
  [TSchordVariationEnum.C2]: [
    [TSchordEnum.C, TSchordEnum.E, TSchordEnum.G, TSchordEnum.Bb],
    [TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.C6]: [
    [TSchordEnum.C, TSchordEnum.E, TSchordEnum.G, TSchordEnum.A],
    [],
    []
  ],
  [TSchordVariationEnum.C7]: [
    [TSchordEnum.C, TSchordEnum.E, TSchordEnum.G, TSchordEnum.Bb],
    [],
    []
  ],
  [TSchordVariationEnum.Csus2]: [
    [TSchordEnum.C, TSchordEnum.D, TSchordEnum.G],
    [],
    []
  ],
  [TSchordVariationEnum.Csus4]: [
    [TSchordEnum.C, TSchordEnum.F, TSchordEnum.G],
    [],
    []
  ],

  // Db
  [TSchordVariationEnum.DbMajor]: [
    [TSchordEnum.Db, TSchordEnum.F, TSchordEnum.Ab],
    [],
    []
  ],
  [TSchordVariationEnum.Dbm]: [
    [TSchordEnum.Db, TSchordEnum.E, TSchordEnum.Ab],
    [],
    []
  ],
  [TSchordVariationEnum.Db6]: [
    [TSchordEnum.Db, TSchordEnum.F, TSchordEnum.Ab, TSchordEnum.Bb],
    [],
    []
  ],
  [TSchordVariationEnum.Dbm7]: [
    [TSchordEnum.Db, TSchordEnum.E, TSchordEnum.Ab, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.Dbaug]: [
    [TSchordEnum.Db, TSchordEnum.F, TSchordEnum.A],
    [],
    []
  ],
  [TSchordVariationEnum.Dbdim]: [
    [TSchordEnum.Db, TSchordEnum.E, TSchordEnum.G],
    [],
    []
  ],
  [TSchordVariationEnum.Db2]: [
    [TSchordEnum.Db, TSchordEnum.F, TSchordEnum.Ab, TSchordEnum.B],
    [TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Db6]: [
    [TSchordEnum.Db, TSchordEnum.F, TSchordEnum.Ab, TSchordEnum.Bb],
    [TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Db7]: [
    [TSchordEnum.Db, TSchordEnum.F, TSchordEnum.Ab, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.Dbsus2]: [
    [TSchordEnum.Db, TSchordEnum.Eb, TSchordEnum.Ab],
    [],
    []
  ],
  [TSchordVariationEnum.Dbsus4]: [
    [TSchordEnum.Db, TSchordEnum.Gb, TSchordEnum.Ab],
    [],
    []
  ],

  // D
  [TSchordVariationEnum.DMajor]: [
    [TSchordEnum.D, TSchordEnum.Gb, TSchordEnum.A],
    [],
    []
  ],
  [TSchordVariationEnum.Dm]: [
    [TSchordEnum.D, TSchordEnum.F, TSchordEnum.A],
    [],
    []
  ],
  [TSchordVariationEnum.Dm6]: [
    [TSchordEnum.D, TSchordEnum.Gb, TSchordEnum.A, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.Dm7]: [
    [TSchordEnum.D, TSchordEnum.F, TSchordEnum.A],
    [TSchordEnum.C],
    []
  ],
  [TSchordVariationEnum.Daug]: [
    [TSchordEnum.D, TSchordEnum.Gb, TSchordEnum.Bb],
    [],
    []
  ],
  [TSchordVariationEnum.Ddim]: [
    [TSchordEnum.D, TSchordEnum.F, TSchordEnum.Ab],
    [],
    []
  ],
  [TSchordVariationEnum.D2]: [
    [TSchordEnum.D, TSchordEnum.Gb, TSchordEnum.A],
    [TSchordEnum.C, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.D6]: [
    [TSchordEnum.D, TSchordEnum.Gb, TSchordEnum.A, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.D7]: [
    [TSchordEnum.D, TSchordEnum.Gb, TSchordEnum.A],
    [TSchordEnum.C],
    []
  ],
  [TSchordVariationEnum.Dsus2]: [
    [TSchordEnum.D, TSchordEnum.E, TSchordEnum.A],
    [],
    []
  ],
  [TSchordVariationEnum.Dsus4]: [
    [TSchordEnum.D, TSchordEnum.G, TSchordEnum.A],
    [],
    []
  ],

  // Eb
  [TSchordVariationEnum.EbMajor]: [
    [TSchordEnum.Eb, TSchordEnum.G, TSchordEnum.Bb],
    [],
    []
  ],
  [TSchordVariationEnum.Ebm]: [
    [TSchordEnum.Eb, TSchordEnum.Gb, TSchordEnum.Bb],
    [],
    []
  ],
  [TSchordVariationEnum.Ebm6]: [
    [TSchordEnum.Eb, TSchordEnum.Gb, TSchordEnum.Bb],
    [TSchordEnum.C],
    []
  ],
  [TSchordVariationEnum.Ebm7]: [
    [TSchordEnum.Eb, TSchordEnum.Gb, TSchordEnum.Bb],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.Ebaug]: [
    [TSchordEnum.Eb, TSchordEnum.G, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.Ebdim]: [
    [TSchordEnum.Eb, TSchordEnum.Gb, TSchordEnum.A],
    [],
    []
  ],
  [TSchordVariationEnum.Eb2]: [
    [TSchordEnum.Eb, TSchordEnum.G, TSchordEnum.Bb],
    [TSchordEnum.Db, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Eb6]: [
    [TSchordEnum.Eb, TSchordEnum.G, TSchordEnum.Bb],
    [TSchordEnum.C],
    []
  ],
  [TSchordVariationEnum.Eb7]: [
    [TSchordEnum.Eb, TSchordEnum.G, TSchordEnum.Bb],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.Ebsus2]: [
    [TSchordEnum.Eb, TSchordEnum.F, TSchordEnum.Bb],
    [],
    []
  ],
  [TSchordVariationEnum.Ebsus4]: [
    [TSchordEnum.Eb, TSchordEnum.Ab, TSchordEnum.Bb],
    [],
    []
  ],

  // E
  [TSchordVariationEnum.EMajor]: [
    [TSchordEnum.E, TSchordEnum.Ab, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.Em]: [
    [TSchordEnum.E, TSchordEnum.G, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.Em6]: [
    [TSchordEnum.E, TSchordEnum.G, TSchordEnum.B],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.Em7]: [
    [TSchordEnum.E, TSchordEnum.G, TSchordEnum.B],
    [TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.Eaug]: [
    [TSchordEnum.E, TSchordEnum.Ab, TSchordEnum.C],
    [],
    []
  ],
  [TSchordVariationEnum.Edim]: [
    [TSchordEnum.E, TSchordEnum.G, TSchordEnum.Bb],
    [],
    []
  ],
  [TSchordVariationEnum.E2]: [
    [TSchordEnum.E, TSchordEnum.Ab, TSchordEnum.B],
    [TSchordEnum.D, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.E6]: [
    [TSchordEnum.E, TSchordEnum.Ab, TSchordEnum.B],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.E7]: [
    [TSchordEnum.E, TSchordEnum.Ab, TSchordEnum.B],
    [TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.Esus2]: [
    [TSchordEnum.E, TSchordEnum.Gb, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.Esus4]: [
    [TSchordEnum.E, TSchordEnum.A, TSchordEnum.B],
    [],
    []
  ],

  // F
  [TSchordVariationEnum.FMajor]: [
    [TSchordEnum.F, TSchordEnum.A],
    [TSchordEnum.C],
    []
  ],
  [TSchordVariationEnum.Fm]: [
    [TSchordEnum.F, TSchordEnum.Ab],
    [TSchordEnum.C],
    []
  ],
  [TSchordVariationEnum.Fm6]: [
    [TSchordEnum.F, TSchordEnum.Ab],
    [TSchordEnum.C, TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.Fm7]: [
    [TSchordEnum.F, TSchordEnum.Ab],
    [TSchordEnum.C, TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Faug]: [
    [TSchordEnum.F, TSchordEnum.A],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.Fdim]: [
    [TSchordEnum.F, TSchordEnum.Ab, TSchordEnum.B],
    [],
    []
  ],
  [TSchordVariationEnum.F2]: [
    [TSchordEnum.F, TSchordEnum.A],
    [TSchordEnum.C, TSchordEnum.Eb, TSchordEnum.G],
    []
  ],
  [TSchordVariationEnum.F6]: [
    [TSchordEnum.F, TSchordEnum.A],
    [TSchordEnum.C, TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.F7]: [
    [TSchordEnum.F, TSchordEnum.A],
    [TSchordEnum.C, TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.TSus2]: [
    [TSchordEnum.F, TSchordEnum.G],
    [TSchordEnum.C],
    []
  ],
  [TSchordVariationEnum.TSus4]: [
    [TSchordEnum.F, TSchordEnum.Bb],
    [TSchordEnum.C],
    []
  ],

  // Gb
  [TSchordVariationEnum.GbMajor]: [
    [TSchordEnum.Gb, TSchordEnum.Bb],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.Gbm]: [
    [TSchordEnum.Gb, TSchordEnum.A],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.Gbm6]: [
    [TSchordEnum.Gb, TSchordEnum.A],
    [TSchordEnum.Db, TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Gbm7]: [
    [TSchordEnum.Gb, TSchordEnum.A],
    [TSchordEnum.Db, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.Gbaug]: [
    [TSchordEnum.Gb, TSchordEnum.Bb],
    [TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.Gbdim]: [
    [TSchordEnum.Gb, TSchordEnum.A],
    [TSchordEnum.C],
    []
  ],
  [TSchordVariationEnum.Gb2]: [
    [TSchordEnum.Gb, TSchordEnum.Bb],
    [TSchordEnum.Db, TSchordEnum.E, TSchordEnum.Ab],
    []
  ],
  [TSchordVariationEnum.Gb6]: [
    [TSchordEnum.Gb, TSchordEnum.Bb],
    [TSchordEnum.Db, TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Gb7]: [
    [TSchordEnum.Gb, TSchordEnum.Bb],
    [TSchordEnum.Db, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.Gbsus2]: [
    [TSchordEnum.Gb, TSchordEnum.Ab],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.Gbsus4]: [
    [TSchordEnum.Gb, TSchordEnum.B],
    [TSchordEnum.Db],
    []
  ],

  // G
  [TSchordVariationEnum.GMajor]: [
    [TSchordEnum.G, TSchordEnum.B],
    [TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.Gm]: [
    [TSchordEnum.G, TSchordEnum.Bb],
    [TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.Gm6]: [
    [TSchordEnum.G, TSchordEnum.Bb],
    [TSchordEnum.D, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.Gm7]: [
    [TSchordEnum.G, TSchordEnum.Bb],
    [TSchordEnum.D, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Gaug]: [
    [TSchordEnum.G, TSchordEnum.B],
    [TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Gdim]: [
    [TSchordEnum.G, TSchordEnum.Bb],
    [TSchordEnum.Db],
    []
  ],
  [TSchordVariationEnum.G2]: [
    [TSchordEnum.G, TSchordEnum.B],
    [TSchordEnum.D, TSchordEnum.F, TSchordEnum.A],
    []
  ],
  [TSchordVariationEnum.G6]: [
    [TSchordEnum.G, TSchordEnum.B],
    [TSchordEnum.D, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.G7]: [
    [TSchordEnum.G, TSchordEnum.B],
    [TSchordEnum.D, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Gsus2]: [
    [TSchordEnum.G, TSchordEnum.A],
    [TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.Gsus4]: [
    [TSchordEnum.G, TSchordEnum.C],
    [TSchordEnum.D],
    []
  ],

  // Ab
  [TSchordVariationEnum.AbMajor]: [
    [TSchordEnum.Ab],
    [TSchordEnum.C, TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Abm]: [
    [TSchordEnum.Ab, TSchordEnum.B],
    [TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Abm6]: [
    [TSchordEnum.Ab, TSchordEnum.B],
    [TSchordEnum.Eb, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Abm7]: [
    [TSchordEnum.Ab, TSchordEnum.B],
    [TSchordEnum.Eb, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.Abaug]: [
    [TSchordEnum.Ab],
    [TSchordEnum.C, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.Abdim]: [
    [TSchordEnum.Ab, TSchordEnum.B],
    [TSchordEnum.D],
    []
  ],
  [TSchordVariationEnum.Ab2]: [
    [TSchordEnum.Ab],
    [TSchordEnum.C, TSchordEnum.Eb, TSchordEnum.Gb, TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Ab6]: [
    [TSchordEnum.Ab],
    [TSchordEnum.C, TSchordEnum.Eb, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Ab7]: [
    [TSchordEnum.Ab],
    [TSchordEnum.C, TSchordEnum.Eb, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.Absus2]: [
    [TSchordEnum.Ab, TSchordEnum.Bb],
    [TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.Absus4]: [
    [TSchordEnum.Ab],
    [TSchordEnum.Db, TSchordEnum.Eb],
    []
  ],

  // A
  [TSchordVariationEnum.AMajor]: [
    [TSchordEnum.A],
    [TSchordEnum.Db, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.Am]: [
    [TSchordEnum.A],
    [TSchordEnum.C, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.Am6]: [
    [TSchordEnum.A],
    [TSchordEnum.C, TSchordEnum.E, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.Am7]: [
    [TSchordEnum.A],
    [TSchordEnum.C, TSchordEnum.E, TSchordEnum.G],
    []
  ],
  [TSchordVariationEnum.Aaug]: [
    [TSchordEnum.A],
    [TSchordEnum.Db, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Adim]: [
    [TSchordEnum.A],
    [TSchordEnum.C, TSchordEnum.Eb],
    []
  ],
  [TSchordVariationEnum.A2]: [
    [TSchordEnum.A],
    [TSchordEnum.Db, TSchordEnum.E, TSchordEnum.G, TSchordEnum.B],
    []
  ],
  [TSchordVariationEnum.A6]: [
    [TSchordEnum.A],
    [TSchordEnum.Db, TSchordEnum.E, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.A7]: [
    [TSchordEnum.A],
    [TSchordEnum.Db, TSchordEnum.E, TSchordEnum.G],
    []
  ],
  [TSchordVariationEnum.Asus2]: [
    [TSchordEnum.A, TSchordEnum.B],
    [TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.Asus4]: [
    [TSchordEnum.A],
    [TSchordEnum.D, TSchordEnum.E],
    []
  ],

  // Bb
  [TSchordVariationEnum.BbMajor]: [
    [TSchordEnum.Bb],
    [TSchordEnum.D, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Bbm]: [
    [TSchordEnum.Bb],
    [TSchordEnum.Db, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Bbm6]: [
    [TSchordEnum.Bb],
    [TSchordEnum.Db, TSchordEnum.F, TSchordEnum.G],
    []
  ],
  [TSchordVariationEnum.Bbm7]: [
    [TSchordEnum.Bb],
    [TSchordEnum.Db, TSchordEnum.F, TSchordEnum.Ab],
    []
  ],
  [TSchordVariationEnum.Bbaug]: [
    [TSchordEnum.Bb],
    [TSchordEnum.D, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.Bbdim]: [
    [TSchordEnum.Bb],
    [TSchordEnum.Db, TSchordEnum.E],
    []
  ],
  [TSchordVariationEnum.Bb2]: [
    [TSchordEnum.Bb],
    [TSchordEnum.D, TSchordEnum.F, TSchordEnum.Ab],
    [TSchordEnum.C]
  ],
  [TSchordVariationEnum.Bb6]: [
    [TSchordEnum.Bb],
    [TSchordEnum.D, TSchordEnum.F, TSchordEnum.G],
    []
  ],
  [TSchordVariationEnum.Bb7]: [
    [TSchordEnum.Bb],
    [TSchordEnum.D, TSchordEnum.F, TSchordEnum.Ab],
    []
  ],
  [TSchordVariationEnum.Bbsus2]: [
    [TSchordEnum.Bb],
    [TSchordEnum.C, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.Bbsus4]: [
    [TSchordEnum.Bb],
    [TSchordEnum.Eb, TSchordEnum.F],
    []
  ],

  // B
  [TSchordVariationEnum.BMajor]: [
    [TSchordEnum.B],
    [TSchordEnum.Eb, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.Bm]: [
    [TSchordEnum.B],
    [TSchordEnum.D, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.Bm6]: [
    [TSchordEnum.B],
    [TSchordEnum.D, TSchordEnum.Gb, TSchordEnum.Ab],
    []
  ],
  [TSchordVariationEnum.Bm7]: [
    [TSchordEnum.B],
    [TSchordEnum.D, TSchordEnum.Gb, TSchordEnum.A],
    []
  ],
  [TSchordVariationEnum.Baug]: [
    [TSchordEnum.B],
    [TSchordEnum.Eb, TSchordEnum.G],
    []
  ],
  [TSchordVariationEnum.Bdim]: [
    [TSchordEnum.B],
    [TSchordEnum.D, TSchordEnum.F],
    []
  ],
  [TSchordVariationEnum.B2]: [
    [TSchordEnum.B],
    [TSchordEnum.Eb, TSchordEnum.Gb, TSchordEnum.A],
    [TSchordEnum.Db]
  ],
  [TSchordVariationEnum.B6]: [
    [TSchordEnum.B],
    [TSchordEnum.Eb, TSchordEnum.Gb, TSchordEnum.Ab],
    []
  ],
  [TSchordVariationEnum.B7]: [
    [TSchordEnum.B],
    [TSchordEnum.Eb, TSchordEnum.Gb, TSchordEnum.A],
    []
  ],
  [TSchordVariationEnum.Bsus2]: [
    [TSchordEnum.B],
    [TSchordEnum.Db, TSchordEnum.Gb],
    []
  ],
  [TSchordVariationEnum.Bsus4]: [
    [TSchordEnum.B],
    [TSchordEnum.E, TSchordEnum.Gb],
    []
  ]
};
