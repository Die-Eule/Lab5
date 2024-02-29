'use client'
import { useUnit } from "effector-react";
import { useEffect } from "react";
import { $charactersStore } from "@/store/charactersStore";
import { getCharacterListFX } from "@/api/characterList";
import SearchBox from "@/components/SearchBox/SearchBox";
import Card from "@/components/Card/Card";
import "./pokedex.css"
import TypeFilter from "@/components/TypeFilter/TypeFilter";
import ExpFilter from "@/components/ExpFilter/Expfilter";
import Footer from "@/components/Footer/Footer";


const Pokedex = () => {
    const characters = useUnit({
        characters: $charactersStore,
        getCharacterListFX: getCharacterListFX,
        });

    useEffect(() => {
        characters.getCharacterListFX({offset:20, limit:12});
    }, [characters.getCharacterListFX]);
  
    return (
        <div className="content-cards">
            <div className="sub-header">
                <p>800 Pokemons for you to choose your favorite</p>
                <SearchBox></SearchBox>
            </div>
            <div className="filters">
                <div>
                    <TypeFilter />
                </div>
                <div>
                    <ExpFilter name={"experience"} />
                </div>
                <div>
                    <ExpFilter name={"attack"} />
                </div>
            </div>
            <div className="card-rows">
                {characters.characters.map((item, index) => (
                    <Card key={index} {...item} />
                ))}
            </div>
            <div className="footer-buffer"></div>
            <Footer />
        </div>
    );
}

export default Pokedex;
