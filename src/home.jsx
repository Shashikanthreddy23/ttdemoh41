import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
    return (
        <div className="home-container" style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Home Page</h1>
            <p>Welcome to the Home Page of our application.</p>
            <nav style={{ marginTop: '20px' }}>
                <Link to="/register" style={{ color: '#61dafb', textDecoration: 'none', fontSize: '1.2rem' }}>
                    Go to Registration
                </Link>
            </nav>
        </div>
    );
}

export default Home;