'use client'

import React, {useState} from "react";
import Pokemon from "@/components/Pokemon2";
import Link from "next/link";
import styles from "@/app/equipe/equipe.module.css";

const PaginaPokemon = () => {
    const [pokemonId, setPokemonId] = useState(1);
    const [pokemon, setPokemon]= useState(null);
    const [error, setError] = useState(null);

    const getPokemon = async () => {
        try {
            const resposta1 = await fetch (`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const data1 = await resposta1.json();
            setPokemon(data1);
[]
            setError(null);

        }catch (error) {

            console.error ("Erro fetching Pokemon:", error);
            setError("Falha na busca Pokemon, tente novamente");

        }
    };

    return (

        <section>

            <header className={styles.header}>
                <h1 className={styles.h1}>PokeDex</h1>
                <nav>
                    <ul>
                        <li>
                            <Link href="/inicio">Início</Link>
                        </li>
                        <li>
                            <Link href="/info1">Informações 1</Link>
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

        <div className="nome">

           <br></br>

            <h2 className="title"> Digite o id do seu Pokemon e veja algumas de suas características:</h2>
            <br></br>

            <input className="input"
            type="number"
            value={pokemonId}
            onChange={(event) => setPokemonId(event.target.value)}
            />

            <br></br>
            <br></br>
            <button className="input" onClick={getPokemon}>Pegue Pokemon</button>
            <br></br>
            <br></br>
            <br></br>

            {error && <p style={{color:"red"}}>{error}</p>}
            {pokemon && <Pokemon pokemon={pokemon} />}

        </div>
        <br></br>
        <br></br>
        <footer>
            <p>Grupo 05</p>
            <p>SESI/SENAI</p>
            <p>2023</p>
        </footer>

        </section>
    )
}

export default PaginaPokemon;