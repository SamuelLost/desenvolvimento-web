import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
export function Questao05() {
    const [paises, setPaises] = useState([]);
    const [searchContry, setSearchContry] = useState("africa")
    const baseURI = `https://restcountries.com/v2/region/${searchContry}?fields=name,population`

    useEffect(
        () => {
            axios.get(baseURI)
                .then(
                    (response) => {
                        setPaises(response.data);
                    }
                )
                .catch(
                    (error) => {
                        console.log(error);
                    }
                )
        },
        [baseURI, searchContry]
    )
    function paisMaisPopuloso() {
        return paises?.reduce((acumulador, pais) => {
            if (pais.population > acumulador.population) {
                return pais
            }
            return acumulador
        }, {
            name: '',
            population: 0
        })
    }

    function paisMenosPopuloso() {
        return paises?.reduce((acumulador, pais) => {
            if (pais.population < acumulador.population) {
                return pais
            }
            return acumulador
        })
    }

    return (
        <div className="container-sm mt-4" >
            {(searchContry === 'africa' || searchContry === 'americas') ?
                (
                    <h4>País com maior população: {paisMaisPopuloso()?.name}
                        <br />
                        População: {paisMaisPopuloso()?.population}
                    </h4>
                ) :
                (
                    <h4>País com menor população: {paisMenosPopuloso()?.name}
                        <br /> População: {paisMenosPopuloso()?.population}
                    </h4>

                )
            }


            {/* <ul>
                {paises.map(pais => <h5><li>{pais.name.charAt(0).toUpperCase() + pais.name.slice(1)}</li></h5>)}
            </ul> */}
            <button type="button" style={{ width: 400 }} className="mt-4 btn btn-primary" onClick={() => { setSearchContry('asia') }}>Mudar para Ásia</button>
            <button type="button" style={{ width: 400 }} className="ms-4 mt-4 btn btn-primary" onClick={() => { setSearchContry('americas') }}>Mudar para América</button>
        </div>
    )
}