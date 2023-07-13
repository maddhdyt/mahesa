import React from "react";
import { HeaderComponent } from "../components/headerComponent";
import { HeroComponent } from "../components/content/heroComponent";
import { SkillBarComponent } from "../components/content/skillbarComponent";
import { OtherComponent } from "../components/content/otherComponent";

export function Home(){

    return(
        <>
        <HeaderComponent/>
        <HeroComponent/>
        <SkillBarComponent/>
        <br/>
        <br/>
        <br/>
        <OtherComponent/>
        </>
    )
}