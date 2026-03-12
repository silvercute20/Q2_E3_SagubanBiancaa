import type { Pokemon } from '../types'
import PokemonBg from '../assets/pokebg.jpg'

interface PokemonCardProps {
  pokemon: Pokemon
}

export default function PokemonCard({ pokemon }: PokemonCardProps) {
  const japaneseNames: { [key: string]: string } = {
    gengar: 'ゲンガー',
    pikachu: 'ピカチュウ',
    charizard: 'リザードン',
    squirtle: 'ゼニガメ',
    mewtwo: 'ミュウツー',
  }

  return (
    <div
      className="pokemon-card"
      style={{
        backgroundImage: `url(${PokemonBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        position: 'relative',
        borderRadius: '16px',
        width: '250px',
        minHeight: '400px',
        overflow: 'hidden',
        color: '#000',
      }}
    >
      <div
        style={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'rgba(0,0,0,0.05)',
          zIndex: 0,
        }}
      />

      <div style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
        <img
          src={pokemon.imageUrl}
          alt={pokemon.name}
          style={{
            width: '150px',
            height: '150px',
            borderRadius: '50%',
            margin: '20px auto 10px auto',
            boxShadow: '0 4px 8px rgba(0,0,0,0.2), 0 8px 15px rgba(0,0,0,0.15)',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
          }}
        />

        <div
          style={{
            display: 'inline-block',
            margin: '0 15px 15px 15px',
            borderRadius: '12px',
            border: '1px solid #3A3B3C',
            padding: '10px 15px',
            background: 'rgba(255, 255, 255, 0.5)',
            backdropFilter: 'blur(1px)',
            width: 'calc(100% - 30px)',
            boxSizing: 'border-box',
          }}
        >
          <h2 style={{ marginBottom: '5px' }}>{pokemon.name}</h2>

          {japaneseNames[pokemon.name.toLowerCase()] && (
            <p style={{ fontSize: '1.2rem', marginTop: '-5px', fontWeight: '500' }}>
              {japaneseNames[pokemon.name.toLowerCase()]}
            </p>
          )}

          <p>ID: {pokemon.id}</p>
          <p>Height: {pokemon.height}</p>
          <p>Weight: {pokemon.weight}</p>
        </div>
      </div>
    </div>
  )
}