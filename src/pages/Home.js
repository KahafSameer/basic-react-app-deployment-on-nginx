import React from 'react';

const Home = () => {
    const envMessage = process.env.REACT_APP_WELCOME_MESSAGE || 'Environment variable not set';

    return (
        <div className="page">
            <h1>Home Page</h1>
            <p>Welcome to the Home page of our simple React application.</p>
            <div style={{
                marginTop: '2rem',
                padding: '1rem',
                backgroundColor: '#e1f5fe',
                borderRadius: '8px',
                border: '1px solid #b3e5fc'
            }}>
                <h3>Environment Variable Test:</h3>
                <p style={{ fontWeight: 'bold', color: '#0277bd' }}>{envMessage}</p>
            </div>
        </div>
    );
};

export default Home;
