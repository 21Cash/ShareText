// Navbar.jsx

import React from 'react';
import {Link} from 'react-router-dom';



const Navbar = () => {
  return (
    <div style={styles.navbar}>
      <div style={styles.logo}>My Logo</div>
      <div style={styles.navLinks}>
          <Link to={'./Homepage'}>
          <a style={styles.link}>Home</a>
          </Link> 
          <a style={styles.link}> Test</a>
          <Link to={'./Login'}>
          <a  style={styles.link}>Login</a>
          </Link>
          <a style={styles.link}>Signup</a>
      </div>
    </div>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1rem',
    backgroundColor: '#333',
    color: '#fff',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
  },
  link: {
    margin: '0 1rem',
    textDecoration: 'none',
    color: '#fff',
  },
};

export default Navbar;
