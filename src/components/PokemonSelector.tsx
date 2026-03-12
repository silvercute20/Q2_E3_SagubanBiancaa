import React from 'react'

interface PokemonSelectorProps {
  onSelect: (name: string) => void
}

const options = ['pikachu', 'charizard', 'gengar', 'squirtle', 'mewtwo']

export default function PokemonSelector({ onSelect }: PokemonSelectorProps) {
  return (
    <div>
      <label htmlFor="pokemon-select">
        <strong>Pick a Pokémon: </strong>
      </label>

      <select
        id="pokemon-select"
        className="select-pokemon"
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => onSelect(e.target.value)}
        defaultValue=""
      >
        <option value="" disabled>
          -- Select --
        </option>
        {options.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  )
}