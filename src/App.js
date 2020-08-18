import React, {useState, useEffect} from 'react';
import Pokemonlist from './Pokemonlist'
import Pagination from './Pagination'
import axios from 'axios'

function App() {
  const [pokemon, setPokemon] = useState([])
  const [currentPageUrl, setCurrentPageUrl] = useState('https://pokeapi.co/api/v2/pokemon')
  const [nextPageUrl, setNextPageUrl] = useState()
  const [prevPageUrl, setPrevPageUrl] = useState()
  const  [loading, setLoading] = useState(true)

  useEffect(() => {
    setLoading(true);
    let cancel;
    axios.get(currentPageUrl, {
      cancelToken: axios.CancelToken( c => cancel = c)
    }).then(res => {
      setLoading(false)
      setNextPageUrl(res.data.next)
      setPrevPageUrl(res.data.previous)
     setPokemon(res.data.results.map(p => p.name)) 
    })

    return () => cancel()
  }, [currentPageUrl])
  function goToPrev(){
    setCurrentPageUrl(prevPageUrl)
  }
  function goToNext(){
    setCurrentPageUrl(nextPageUrl)
  }
  if (loading) return 'Loading...'
  return (
    <div className="App">
    <Pokemonlist pokemon={pokemon}> </Pokemonlist>
    <Pagination goToNext={nextPageUrl ? goToNext : null}
     goToPrev={prevPageUrl ? goToPrev : null}
    ></Pagination>
    </div>
  );
}

export default App;
