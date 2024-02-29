import { getPokemonFX } from "@/api/pokemon";
import { createEvent, createStore } from "effector";

export const $pokemonsStore = createStore({});
export const setPending = createEvent();

$pokemonsStore.on(getPokemonFX.doneData, (state, pokemon) => {state[pokemon.id] = pokemon; return state});
$pokemonsStore.on(setPending, (state, pokemonId) => {state[pokemonId] = {id: 0}; return state});
