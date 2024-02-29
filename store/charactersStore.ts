import { getCharacterListFX } from "@/api/characterList";
import { createStore } from "effector";

export const $charactersStore = createStore([]);

$charactersStore.on(getCharacterListFX.doneData, (state, characters) => characters);
