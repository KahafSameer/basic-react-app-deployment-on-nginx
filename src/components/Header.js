import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const headerStyle = {
        backgroundColor: '#282c34',
        padding: '20px',
        color: 'white',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    };

    const navStyle = {
        display: 'flex',
        gap: '20px'
    };

    const linkStyle = {
        color: '#61dafb',
        fontWeight: 'bold',
        fontSize: '1.1rem'
    };

    return (
        <header style={headerStyle}>
            <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>My React App</div>
            <nav style={navStyle}>
                <Link to="/" style={linkStyle}>Home</Link>
                <Link to="/about" style={linkStyle}>About</Link>
            </nav>
        </header>
    );
};

export default Header;
