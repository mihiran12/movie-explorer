import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieDetails } from '../services/api';

const MovieDetailPage = () => {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);

  useEffect(() => {
    const getMovieDetails = async () => {
      const details = await fetchMovieDetails(id);
      setMovieDetails(details);
    };

    getMovieDetails();
  }, [id]);

  if (!movieDetails) {
    return <div style={{ fontFamily: 'Segoe UI, sans-serif', padding: '2rem' }}>Loading...</div>;
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '2rem',
        background: '#ECEFF1',
        fontFamily: 'Segoe UI, sans-serif',
        color: '#333',
        lineHeight: '1.6',
      }}
    >
    
      <div
        style={{
          flex: 1,
          marginRight: '2rem',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <img
          src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
          alt={movieDetails.title}
          style={{
            width: '300px',
            borderRadius: '10px',
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          }}
        />
      </div>

      
      <div style={{ flex: 2 }}>
        <h2 style={{ color: '#003366', fontSize: '2rem', marginBottom: '1rem' }}>
          {movieDetails.title}
        </h2>

        <p style={{ marginBottom: '1.2rem' }}>
          <strong>Overview:</strong> <span style={{ color: '#444' }}>{movieDetails.overview}</span>
        </p>

        <p style={{ marginBottom: '0.8rem' }}>
          <strong>Release Date:</strong> <span>{movieDetails.release_date}</span>
        </p>

        <p style={{ marginBottom: '0.8rem' }}>
          <strong>Rating:</strong> <span>{movieDetails.vote_average}</span>
        </p>

        <p style={{ marginBottom: '0.8rem' }}>
          <strong>Genres:</strong>{' '}
          <span>{movieDetails.genres.map((genre) => genre.name).join(', ')}</span>
        </p>
      </div>
    </div>
  );
};

export default MovieDetailPage;
