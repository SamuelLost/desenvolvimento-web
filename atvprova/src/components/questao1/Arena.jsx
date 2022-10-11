import React from "react";
import { Hero } from "./Hero";
import { Enemy } from "./Enemy";
import Marada from "../../images/Madara.jpeg"
import Naruto from "../../images/Naruto.jpeg"
export const Arena = () => {
    return (
        <div>
            <Enemy name="Madara" img={Marada} />
            <Hero name="Naruto" img={Naruto} />
        </div>
    )
}