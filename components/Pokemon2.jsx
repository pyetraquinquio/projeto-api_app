import Image from "next/image";

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>

            <section className="caixa">

                <div className="grupo">
                    <p>Base experience: {pokemon.base_experience}</p>
                    <p>Game indices: {pokemon.game_indices[0].game_index}</p>
                </div>

                <div className="grupo">
                    <p>Move: {pokemon.moves[0].move.name}</p>
                    <p>Stats: {pokemon.stats[0].stat.name}</p>
                </div>


            </section>


            <Image src={pokemon.sprites.front_default} width="250" height="300" alt={pokemon.name} />
            <Image src={pokemon.sprites.back_default} width="250" height="300" alt={pokemon.name} />

        </div>
    )
}

export default Pokemon;