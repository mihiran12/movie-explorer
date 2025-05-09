import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { fetchTrendingMovies, searchMovies } from '../services/api';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [searchedMovies, setSearchedMovies] = useState([]);

  useEffect(() => {
    const getTrendingMovies = async () => {
      const movies = await fetchTrendingMovies();
      setTrendingMovies(movies);
    };
    getTrendingMovies();
  }, []);

  const handleSearch = async (query) => {
    const movies = await searchMovies(query);
    setSearchedMovies(movies);
  };

  return (
    <div style={{ background: 'linear-gradient(to bottom, #E3F2FD, #FFFFFF)',   minHeight: '100vh', padding: '2rem 0' }}>
      <h2 style={{ textAlign: 'center', color: 'black', marginBottom: '1.5rem' }}>Trending Movies</h2>

      
      
      <div className="movie-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {trendingMovies.map((movie) => (
          <div key={movie.id} className="movie-card" style={{ margin: '1rem', width: '200px' }}>
            <Link to={`/movie/${movie.id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
              <img
                src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                alt={movie.title}
                style={{ width: '100%', borderRadius: '8px' }}
              />
              <h3 style={{
  textAlign: 'center',
  fontSize: '1.1rem',
  fontWeight: '600',
  margin: '0.5rem 0 0.25rem',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#003366'
}}>
  {movie.title}
</h3>

<p style={{
  textAlign: 'center',
  fontSize: '0.95rem',
  margin: '0.25rem 0',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#555'
}}>
  {movie.release_date}
</p>

<p style={{
  textAlign: 'center',
  fontSize: '0.95rem',
  margin: '0.25rem 0',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#555'
}}>
  Rating: <span style={{ fontWeight: '500', color: '#222' }}>{movie.vote_average}</span>
</p>

            </Link>
          </div>
        ))}
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', margin: '2rem 0' }}>
  <SearchBar onSearch={handleSearch} />
</div>

      {searchedMovies.length > 0 && (
        <div>
          <h3>Search Results</h3>
          <div className="movie-list">
            {searchedMovies.map((movie) => (
              <div key={movie.id} className="movie-card">
                <Link to={`/movie/${movie.id}`}>
                  <img
                    src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
                    alt={movie.title}
                  />
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                  <p>Rating: {movie.vote_average}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
