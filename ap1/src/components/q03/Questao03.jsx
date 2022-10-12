import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from 'axios';

export function Questao03() {
    const [pokemons, setPokemons] = useState([]);
    const [offset, setOffset] = useState(0);
    const baseURI = `https://pokeapi.co/api/v2/pokemon?limit=25&offset=${offset}`;
    useEffect(
        () => {
            axios.get(baseURI)
            .then(
                (response) => {
                    setPokemons(response.data.results);
                }
            )
            .catch(
                (error) => {
                    console.log(error);
                }
            )
        },
        [offset, baseURI]
    )

    function hanldeOffeset() {
        setOffset(prev => prev+10);
    }

    return (
        <div className="container-sm" style={{width:250}}>
            <ul>
                {pokemons.map(pokemon => <h5><li className="text-sm-center">{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</li></h5>)}
            </ul>
            <button type="button" style={{width:"100%"}} className="mt-4 btn btn-primary" onClick={hanldeOffeset}>Exibir mais</button>
        </div>
    )
}