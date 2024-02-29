import React from "react";
import { $pokemonsStore } from "@/store/pokemonsStore";
import { useUnit } from "effector-react";

interface PokemonTypeI {
    number: number,
    pokemonId: number,
}

const PokemonType = ({number, pokemonId}: PokemonTypeI) => {

    const [pokemons] = useUnit([$pokemonsStore]);

    if (!(pokemonId in pokemons) || pokemons[pokemonId].id === 0) {
        return (
            <div><p>?</p></div>
        );
    } else if (pokemons[pokemonId].types.length <= number) {
        return <></>;
    } else {
        if (!("color" in pokemons[pokemonId].types[number].type)) {
            let type = Number(new URL(pokemons[pokemonId].types[number].type.url).pathname.split('/').findLast((element) => element));
            let colorR = type % 3;
            type = (type - colorR) / 3;
            let colorG = type % 3;
            type = (type - colorG) / 3;
            let colorB = type % 3;
            colorR = (colorR + 1) * (255 / 3);
            colorG = (colorG + 1) * (255 / 3);
            colorB = ((colorB + 2) % 3 + 1) * (255 / 3);
            pokemons[pokemonId].types[number].type.color = `rgba(${colorR}, ${colorG}, ${colorB}, 1)`;
        }
        return (
            <div><p style={{backgroundColor: pokemons[pokemonId].types[number].type.color}}>{pokemons[pokemonId].types[number].type.name}</p></div>
        );
    }
};

export default PokemonType;
