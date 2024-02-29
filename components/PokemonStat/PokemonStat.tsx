import React from "react";
import { $pokemonsStore } from "@/store/pokemonsStore";
import { useUnit } from "effector-react";

interface PokemonStatI {
    statName: string,
    pokemonId: number,
}

const PokemonStat = ({statName, pokemonId}: PokemonStatI) => {

    const [pokemons] = useUnit([$pokemonsStore]);

    if (pokemonId in pokemons && pokemons[pokemonId].id === pokemonId) {
        for (const stat of pokemons[pokemonId].stats) {
            if (stat.stat.name === statName) {
                return <span>{stat.base_stat}</span>;
            }
        }
    }
    return <span>?</span>;
};

export default PokemonStat;