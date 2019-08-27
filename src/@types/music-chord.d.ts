declare module "music-chord" {
  const chord = require("music-chord");
  const chordMake = (variation: string, chord: string): string[] => {
    return chord(variation, chord);
  };

  export { chordMake };
}
