"use client"

import style from "../pokemon/pokemon.module.css";
import Image from "next/image";
import Link from "next/link";
import styles from "../equipe/equipe.module.css";

function Pokemon() {
    return (

        <div>
            <header className={styles.header}>
                <h1 className={styles.h1}>PokeDex</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/info1">Informações 1</Link>
                        </li>
                        <li>
                            <Link href="/info2">Informações 2</Link>
                        </li>
                        <li>
                            <Link href="/equipe">Equipe</Link>
                        </li>
                        <li>
                            <Link href="/pokemon">Pokemon</Link>
                        </li>
                    </ul>
                </nav>
            </header>
            
            <br></br>
            <br></br>
            <div className={style.img1}>
                <Image src="/pokemonlogo.png" width={700} height={250}></Image>
            </div>

            <br></br>
            <br></br>

            <div className={style.anime}>
            <div className={style.title1}>
                <h3>Anime Pokémon</h3>
            </div>
            <br></br>
            <div className={style.texto1}>
                <h4>Com o sucesso dos jogos Pokémon Red e Pokémon Green, no Japão, não demorou muito para que sua versão animada fosse lançada.
                    A série de anime Pocket Monsters(1997), conta com mais de mil episódios divididos em 23 temporadas e 7 séries principais: Pokémon, Geração Avançada, Diamante e Pérola, Preto e Branco, XY, Sol e Lua, e Jornadas. Durante todos esses anos a história segue o garoto de 10 anos, Ash Ketchum, e seu parceiro Pikachu na sua jornada para se tornar um Mestre Pokémon.</h4>
            </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
            <br></br>

            <div className={style.img}>
                <Image src="/po.avif" width={1300} height={600}></Image>
            </div>

            <br></br>
            <br></br>
            <br></br>

            <div className={style.tudo}>
                <div className={style.title2}>
                    <h3>Personagens mais famosos</h3>
                </div>
                <br></br>
                <br></br>
                <div className={style.divv}>
                    <div>
                        <p>◾ PIKACHU</p>
                        <br></br>
                        <p>◾ SATOSHI</p>
                        <br></br>
                        <p>◾ KOJIROU</p>
                        <br></br>
                        <p>◾ SERENA</p>
                    </div>
                    <div>
                        <p>◾ MEWTWO</p>
                        <br></br> 
                        <p>◾ NYARTH</p> 
                        <br></br>
                        <p>◾ GRENINJA</p>
                        <br></br>
                        <p>◾ EEVEE</p>
                    </div>
                    <div>
                        <p>◾ ROWLET</p>
                        <br></br>
                        <p>◾ BULBASAUR</p>
                        <br></br>
                        <p>◾ GARDEVOUIR</p>
                        <br></br>
                        <p>◾ UMBREON</p>
                    </div>
                </div>
            </div>

            <br></br>
            <br></br>

            <div className={style.iframee}>
            <iframe width="560" height="315" 
            src="https://www.youtube.com/embed/MaWGGLyA7Hc?si=47nTAtlBR8OWNKxz" 
            title="YouTube video player" frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; 
            gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </div>

            <br></br>
            <br></br>
            
        <footer>
            <p>Grupo 05</p>
            <p>SESI/SENAI</p>
            <p>2023</p>
        </footer>

        </div>
    )
}



export default Pokemon;