import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCardComponent';

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/character?page=${page}`)
      .then((response) => {
        setCharacters(response.data.results);
      })
      .catch((error) => {
        console.error('Error fetching data: ', error);
      });
  }, [page]);

  return (
    <div className="characters-container">
      <h1>Rick and Morty</h1>
      <div className="characters-grid">
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
      <div className="pagination">
        <button onClick={() => setPage(page - 1)} disabled={page === 1}> Previous </button>
        <button onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </div>
  );
};

export default Characters;
