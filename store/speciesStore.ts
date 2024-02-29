import { getSpeciesFX } from "@/api/species";
import { createEvent, createStore } from "effector";

export const $speciesStore = createStore({});
export const setPendingSpec = createEvent();

$speciesStore.on(getSpeciesFX.doneData, (state, species) => {state[species.id] = species; return state});
$speciesStore.on(setPendingSpec, (state, speciesId) => {state[speciesId] = {id: 0}; return state});
