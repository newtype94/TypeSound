import { Howl } from "howler";
import { TSfullKeyArray } from "../config/pianoConfig";

//Create Sound Model
export const leftSoundMaker = (src: string) => {
  const leftSound: { [key: string]: Howl } = {};

  for (let k of TSfullKeyArray) {
    leftSound[k] = new Howl({ src: [src + k + ".mp3"] });
  }

  return leftSound;
};
