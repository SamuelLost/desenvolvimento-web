import React from "react";
import { useState, useEffect } from "react";
import axios from "axios"
export function Questao04() {
    const baseURI = `https://restcountries.com/v2/region/africa?fields=name,population`
    const [paises, setPaises] = useState([]);
    
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
        [baseURI]
    )
    function paisMaisPopuloso(){
        return paises?.reduce((acumulador, pais) => {
          if(pais.population > acumulador.population){
            return pais
          }
          return acumulador
        }, {
            name: '',
            population: ''
        })
    }

    return (
        <div className="container-sm mt-4" style={{width:500}}>
            <h4>País com maior população: {paisMaisPopuloso()?.name}</h4>
            <h4>População: {paisMaisPopuloso()?.population}</h4>
            {/* <ul>
                {paises.map(pais => <h5><li>{pais.name.charAt(0).toUpperCase() + pais.name.slice(1)}</li></h5>)}
            </ul> */}
        </div>
    )
}