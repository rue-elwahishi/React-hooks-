import React from 'react'

export default function Pokemonlist({ pokemon }) {
  return (
    <div>
      {pokemon.map(p => (
          <div key={p}> {p} </div>
      ))}
    </div>
  )
}
