import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';

export default function App() {
    const [page, setPage] = useState('login');

    return (
        <div>
            {page === 'login' && (
                <Login
                    onLogin={() => setPage('dashboard')}
                    onGoRegister={() => setPage('register')}
                />
            )}
            {page === 'register' && (
                <Register
                    onGoLogin={() => setPage('login')}
                />
            )}
            {page === 'dashboard' && (
                <div style={{ padding: '2rem' }}>
                    <h2>Dashboard coming soon...</h2>
                    <button onClick={() => setPage('login')}>Logout</button>
                </div>
            )}
        </div>
    );
}