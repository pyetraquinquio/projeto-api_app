import Image from "next/image";

const Pokemon = ({pokemon}) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>
            <br></br>
            <br></br>
            <Image src={pokemon.sprites.front_default} width="250" height="300" alt={pokemon.name} />
            <Image src={pokemon.sprites.back_default} width="250" height="300" alt={pokemon.name} />

            <section className="caixa">

            <div className="grupo">
            <p><strong>Height:</strong> {pokemon.height}</p>
            <p><strong>Weight:</strong> {pokemon.weight}</p>
            </div>

            <div className="grupo">
            <p><strong>Level:</strong> {pokemon.base_experience}</p>
            <p><strong>Ability:</strong> {pokemon.abilities[0].ability.name}</p>
            </div>

            </section>

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