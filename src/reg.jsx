import React from 'react';
import { Link } from 'react-router-dom';

function Reg() {
    return (
        <div className="registration-container" style={{ padding: '20px', textAlign: 'center' }}>
            <h1>Registration Page</h1>
            <p>Welcome to the registration page. Please fill in your details.</p>
            <Link to="/" style={{ color: '#61dafb', textDecoration: 'none', fontSize: '1.2rem' }}>
                Go back to Home
            </Link>
        </div>
    );
}

export default Reg;