import React, { useState } from "react";
import "./card.css";
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { $pokemonsStore, setPending } from "@/store/pokemonsStore";
import { getPokemonFX } from "@/api/pokemon";
import PokemonStat from "../PokemonStat/PokemonStat";
import PokemonType from "../PokemonType/PokemonType";
import PokemonAva from "../PokemonAva/PokemonAva";

const Card = (item: any) => {
    const cardUnit = useUnit({
        pokemons: $pokemonsStore,
        getPokemonsListFX: getPokemonFX,
        loading: getPokemonFX.pending,
    });


    const [pokemonId] = useState(Number(new URL(item.url).pathname.split('/').findLast((element) => element)));

    useEffect(() => {
        if (!(pokemonId in cardUnit.pokemons)) {
            setPending(pokemonId);
            cardUnit.getPokemonsListFX(pokemonId);
        }
    }, [cardUnit.getPokemonsListFX, pokemonId]);

    return (
        <div className="hero-card">
            <div className="info">
                <p>{item.name}</p>
                <div className="stats">
                    <div className="stat-col">
                        <PokemonStat statName={"attack"} pokemonId={pokemonId} />
                        <h3>Attack</h3>
                    </div>
                    <div className="stat-col">
                        <PokemonStat statName={"defense"} pokemonId={pokemonId} />
                        <h3>Defense</h3>
                    </div>
                </div>
                <div className="types">
                    <PokemonType number={0} pokemonId={pokemonId} />
                    <PokemonType number={1} pokemonId={pokemonId} />
                </div>
            </div>
            <PokemonAva pokemonId={pokemonId} />
        </div>
    );
}

export default Card;
