import React from "react";
import { Hero } from "./Hero";
import { Enemy } from "./Enemy";
// import Marada from "../../images/Madara.jpeg"
// import Naruto from "../../images/Naruto.jpeg"
import { mapImg } from "./imgs"
export const Arena = () => {
    return (
        <div>
            { }
            <Enemy name="Madara" img={mapImg.Madara} />
            <Hero name="Naruto" img={mapImg.Naruto} />
        </div>
    )
}