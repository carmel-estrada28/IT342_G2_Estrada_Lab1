import { useState } from 'react';
import { loginUser } from '../api/api';
import '../styles/Login.css';

export default function Login({ onLogin, onGoRegister }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        const res = await loginUser(username, password);
        if (res.ok) {
            onLogin();
        } else {
            setError('Invalid username or password');
        }
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2>Login</h2>
                {error && <p className="error">{error}</p>}
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className="primary">Login</button>
                </form>
                <div className="switch">
                    Don't have an account?{' '}
                    <button onClick={onGoRegister}>Register</button>
                </div>
            </div>
        </div>
    );
}