import React from 'react';

const Header = () => {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#003366', 
      color: '#E1E8EB',           
      padding: '0.5rem 0',          
      marginTop: 'auto',  
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h1 style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>Movie Explorer</h1>
        <p style={{ fontSize: '1rem', fontWeight: '300' }}>Your go-to platform for discovering amazing movies!</p>
        
      </div>
    </footer>
  );
};

export default Header;
