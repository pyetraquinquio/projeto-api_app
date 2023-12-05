"use client"

import Cabecalho from "@/components/Cabecalho";
import styles from "../pagina2/teste1.module.css";
import Rodape from "@/components/Rodape";

function Pokemon() {
    return (
        <div>
            <Cabecalho></Cabecalho>
            <div className={styles.clteste}>
                <div className={styles.lado1}>
                    <h1>Pokedex</h1>
                    <br></br>
                    <h3>Anime Pokémon</h3>
                    <br></br>
                    <h4>Com o sucesso dos jogos Pokémon Red e Pokémon Green, no Japão, não demorou muito para que sua versão animada fosse lançada.
A série de anime Pocket Monsters(1997), conta com mais de mil episódios divididos em 23 temporadas e 7 séries principais: Pokémon, Geração Avançada, Diamante e Pérola, Preto e Branco, XY, Sol e Lua, e Jornadas. Durante todos esses anos a história segue o garoto de 10 anos, Ash Ketchum, e seu parceiro Pikachu na sua jornada para se tornar um Mestre Pokémon.</h4>
                </div>
            </div>
            <div>
                <Rodape></Rodape>
            </div>
        </div>
    )
}



export default Pokemon;