import React, { useEffect, useState } from "react";
import { $pokemonsStore } from "@/store/pokemonsStore";
import { useUnit } from "effector-react";
import { $speciesStore, setPendingSpec } from "@/store/speciesStore";
import { getSpeciesFX } from "@/api/species";

interface PokemonAvaI {
    pokemonId: number,
}

const PokemonAva = ({pokemonId}: PokemonAvaI) => {

    const [pokemons, species, loading] = useUnit([$pokemonsStore, $speciesStore, getSpeciesFX.pending]);

    const [imgRef, setImgRef] = useState("");
    const [bgColor, setBGColor] = useState("#FFFFFF");
    const [speciesId, setSpeciesId] = useState(0);

    useEffect(() => {
        if (speciesId > 0 && !(speciesId in species)) {
            setPendingSpec(speciesId);
            getSpeciesFX(speciesId);
        }
    }, [getSpeciesFX, speciesId]);

    if (pokemonId in pokemons && pokemons[pokemonId].id === pokemonId) {

        if (speciesId === 0) {
            setSpeciesId(Number(new URL(pokemons[pokemonId].species.url).pathname.split('/').findLast((element) => element)));
        }

        if ("sprites" in pokemons[pokemonId] && "other" in pokemons[pokemonId].sprites
                && "home" in pokemons[pokemonId].sprites.other
                && "front_default" in pokemons[pokemonId].sprites.other.home && imgRef === "") {
            setImgRef(pokemons[pokemonId].sprites.other.home.front_default);
        }

        if (speciesId in species && species[speciesId].id === speciesId && bgColor === "#FFFFFF") {
            setBGColor(species[speciesId].color.name);
        }
    }

    return (
        <div className="avatar" style={{backgroundColor: bgColor}}>
            <img src={imgRef} alt="Pokemon image" />
        </div>
    );
};

export default PokemonAva;
