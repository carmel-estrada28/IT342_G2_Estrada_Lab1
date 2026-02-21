import { useState } from 'react';
import { registerUser } from '../api/api';
import '../styles/Register.css';

export default function Register({ onGoLogin }) {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isError, setIsError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage('');
        const res = await registerUser(username, email, password);
        if (res.ok) {
            setIsError(false);
            setMessage('Registered successfully! Redirecting to login...');
            setTimeout(() => onGoLogin(), 1500);
        } else {
            setIsError(true);
            setMessage('Registration failed. Username or email may already exist.');
        }
    };

    return (
        <div className="register-container">
            <div className="register-box">
                <h2>Register</h2>
                {message && (
                    <p className={`message ${isError ? 'error' : 'success'}`}>
                        {message}
                    </p>
                )}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="primary">Register</button>
                </form>
                <div className="switch">
                    Already have an account?{' '}
                    <button onClick={onGoLogin}>Login</button>
                </div>
            </div>
        </div>
    );
}