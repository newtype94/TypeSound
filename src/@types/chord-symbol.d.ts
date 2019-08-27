declare module "chord-symbol" {
  const { parseChord, chordRendererFactory } = require("chord-symbol");
  const renderChord = chordRendererFactory({ useShortNamings: true });

  const chordGet = (chord: string, variation: string): string => {
    const chord = parseChord(chord + variation);
    return renderChord(chord);
  };

  export { chordGet };
}
