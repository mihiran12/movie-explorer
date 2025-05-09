import React from 'react';

const Footer = () => {
  return (
    <footer style={{
      width: '100%',
      backgroundColor: '#003366', 
      color: '#E1E8EB',           
      padding: '1rem 0',          
      marginTop: 'auto',  
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif' 
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
      <p>&copy; {new Date().getFullYear()} Movie Explorer. All rights reserved.</p>
        
      </div>
    </footer>
  );
};

export default Footer;
