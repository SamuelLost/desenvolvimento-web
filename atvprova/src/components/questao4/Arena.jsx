import React from "react";
// import { Hero } from "./Hero";
// import { Enemy } from "./Enemy";
// import Marada from "../../images/Madara.jpeg"
// import Naruto from "../../images/Naruto.jpeg"
// import { mapImg } from "./imgs"

export const Arena = ({ name, children }) => {
    return (
        <div>
            <h1>Arena: {name}</h1>
            {
                React.Children.map(children, (elemento) => {
                    return React.cloneElement(elemento, {arena:name})
                }) 
            }
        </div>
    )
}