import { useState } from 'react'
import PokemonCard from './components/PokemonCard'
import PokemonSelector from './components/PokemonSelector'
import { Pokemon } from './types'

export default function App() {
  const [pokemon, setPokemon] = useState<Pokemon | null>(null)

  function handleSelect(name: string) {
    fetch(`http://localhost:5204/api/orders`)
      .then(res => res.json())
      .then(data => {
        console.log("Data from .NET API:", data)
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