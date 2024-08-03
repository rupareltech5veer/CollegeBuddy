import React from 'react';

const Register = () => {
    return (
        <div className="auth-container">
            <h2>Register</h2>
            <form>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" placeholder="Enter your email" required />
                </div>
                <div className="form-group">
                    <label>Password:</label>
                    <input type="password" placeholder="Enter your password" required />
                </div>
                <div className="form-group">
                    <label>Confirm Password:</label>
                    <input type="password" placeholder="Confirm your password" required />
                </div>
                <button type="submit" className="auth-button">Register</button>
            </form>
        </div>
    );
};

export default Register; 