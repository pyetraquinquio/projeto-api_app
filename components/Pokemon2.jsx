import Image from "next/image";

const Pokemon = ({ pokemon }) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <br></br>
            <br></br>
            <section className="caixa">

                <div className="grupo">
                    <p><strong>Base experience:</strong> {pokemon.base_experience}</p>
                    <p><strong>Game indices:</strong> {pokemon.game_indices[0].game_index}</p>
                </div>

                <div className="grupo">
                    <p><strong>Move:</strong> {pokemon.moves[0].move.name}</p>
                    <p><strong>Stats:</strong> {pokemon.stats[0].stat.name}</p>
                </div>


            </section>


            <Image src={pokemon.sprites.front_default} width="250" height="300" alt={pokemon.name} />
            <Image src={pokemon.sprites.back_default} width="250" height="300" alt={pokemon.name} />

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