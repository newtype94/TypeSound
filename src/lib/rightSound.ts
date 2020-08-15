import { Howl } from "howler";
import { TSfullKeyArray } from "../config/pianoConfig";

//Create Sound Model
export const rightSoundMaker = (src: string) => {
  const rightSound: { [key: string]: Howl } = {};

  for (let k of TSfullKeyArray) {
    rightSound[k] = new Howl({ src: [src + k + ".mp3"] });
  }

  return rightSound;
};
