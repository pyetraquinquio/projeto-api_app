"use client"

import styles from "../pokemon/pokemon.module.css";
import Image from "next/image";

function Pokemon() {
    return (
        <div className={styles.all}>

                <div className={styles.header}>
                    <h1>PokeDex</h1>
                </div>

                <br></br>

                    <div className={styles.texto1}>
                    <h3>Anime Pokémon</h3>
                    <br></br>
                    <h4>Com o sucesso dos jogos Pokémon Red e Pokémon Green, no Japão, não demorou muito para que sua versão animada fosse lançada.
A série de anime Pocket Monsters(1997), conta com mais de mil episódios divididos em 23 temporadas e 7 séries principais: Pokémon, Geração Avançada, Diamante e Pérola, Preto e Branco, XY, Sol e Lua, e Jornadas. Durante todos esses anos a história segue o garoto de 10 anos, Ash Ketchum, e seu parceiro Pikachu na sua jornada para se tornar um Mestre Pokémon.</h4>
</div>

<br></br>

<div className={styles.texto2}>
                    <h3>Personagens mais conhecidos do anime</h3>
                    <br></br>
                    <ul>PIKACHU SATOSHI KOJIROU SERENA</ul>
                    <ul>MEWTWO NYARTH GRENINJA EEVEE</ul>
                    <ul>ROWLET BULBASAUR GARDEVOUIR UMBREON</ul>
</div>

        
        </div>
    )
}



export default Pokemon;