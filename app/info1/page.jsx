'use client'

import React, {useState} from "react";
import Pokemon from "@/components/Pokemon";


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
    )
}

export default PaginaPokemon;