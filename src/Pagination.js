import React from 'react'

export default function Pagination({ goToPrev, goToNext}) {
  return (
    <div>
      {goToPrev && <button onClick={goToPrev}> Previous</button>}
      {goToNext && <button onClick={goToNext}> Next </button>}
    </div>
  )
}
