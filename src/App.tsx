import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import PokemonSelector from './components/PokemonSelector'
import { Pokemon } from './types'

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  function handleSelect(name: string) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then(res => res.json())
      .then(data => {
        const clean: Pokemon = {
          id: data.id,
          name: data.name,
          height: data.height,
          weight: data.weight,
          imageUrl: data.sprites.front_default
        }
        setPokemon(clean)
      })
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '40px'
      }}
    >
      <h1>Pokémon Explorer</h1>
      <PokemonSelector onSelect={handleSelect} />
      {pokemon && <PokemonCard pokemon={pokemon} />}
    </div>
  )
}