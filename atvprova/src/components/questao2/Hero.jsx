import React from "react";

export const Hero = ({ name, img }) => {
    return (
        <div>
            <h1>Meu nome é {name}</h1>
            <img src={img} alt={name} width="250" />
        </div>
    )
}