import Image from "next/image";

const Pokemon = ({pokemon}) => {
    return (
        <div>
            <h2>{pokemon.name}</h2>

            <Image src={pokemon.sprites.front_default} width="250" height="300" alt={pokemon.name} />
            <Image src={pokemon.sprites.back_default} width="250" height="300" alt={pokemon.name} />

            <section className="caixa">

            <div className="grupo">
            <p>Height: {pokemon.height}</p>
            <p>Weight: {pokemon.weight}</p>
            </div>

            <div className="grupo">
            <p>Level: {pokemon.base_experience}</p>
            <p>Ability: {pokemon.abilities[0].ability.name}</p>
            </div>



            </section>
        
        </div>
    )
}

export default Pokemon;