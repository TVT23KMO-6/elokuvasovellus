import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './styles.css';

const MovieList = ({ searchQuery }) => {
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [filteredPersons, setFilteredPersons] = useState([]);
  const [popularMovies, setPopularMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [moviesByGenre, setMoviesByGenre] = useState([]);

  useEffect(() => {
    const fetchFilteredMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/movie?api_key=f5b7cd328c7cfd5e2126239495fd712d&query=${searchQuery}`
        );
        setFilteredMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching filtered movies:', error);
      }
    };
  
    fetchFilteredMovies();
  }, [searchQuery]);

  useEffect(() => {
    const fetchFilteredPersons = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/search/person?api_key=f5b7cd328c7cfd5e2126239495fd712d&query=${searchQuery}`
        );
        setFilteredPersons(response.data.results);
      } catch (error) {
        console.error('Error fetching filtered persons:', error);
      }
    };
  
    fetchFilteredPersons();
  }, [searchQuery]);

  useEffect(() => {
    const fetchPopularMovies = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/discover/movie?api_key=f5b7cd328c7cfd5e2126239495fd712d&sort_by=popularity.desc`
        );
        setPopularMovies(response.data.results);
      } catch (error) {
        console.error('Error fetching popular movies:', error);
      }
    };
  
    fetchPopularMovies();
  }, []);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        const response = await axios.get(
          'https://api.themoviedb.org/3/genre/movie/list?api_key=f5b7cd328c7cfd5e2126239495fd712d'
        );
        setGenres(response.data.genres);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };
  
    fetchGenres();
  }, []);

  const handleGenreSelection = async (genreId) => {
    try {
      const response = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=f5b7cd328c7cfd5e2126239495fd712d&with_genres=${genreId}`
      );
      setMoviesByGenre(response.data.results);
      setSelectedGenre(genreId);
    } catch (error) {
      console.error('Error fetching movies by genre:', error);
    }
  };

  return (
    <div className="container">
      <h2>Elokuvahaku</h2>
      <ul>
        {filteredMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <h2>Henkilöhaku</h2>
      <ul>
        {filteredPersons.map(person => (
          <li key={person.id}>{person.name}</li>
        ))}
      </ul>

      <h2>Suosittuja hakuja</h2>
      <ul>
        {popularMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>

      <h2>Genret</h2>
      <ul>
        {genres.map(genre => (
          <li key={genre.id} onClick={() => handleGenreSelection(genre.id)}>{genre.name}</li>
        ))}
      </ul>

      {selectedGenre && (
        <div>
          <h2>Elokuvat valitussa genressä</h2>
          <ul>
            {moviesByGenre.map(movie => (
              <li key={movie.id}>{movie.title}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default MovieList;
