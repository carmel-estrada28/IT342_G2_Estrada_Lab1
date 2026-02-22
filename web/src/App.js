import { useState } from 'react';
import Login from './pages/Login';
import Register from './pages/Register';
import Dashboard from './pages/Dashboard';

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
                <Dashboard
                    onLogout={() => setPage('login')}
                />
            )}
        </div>
    );
}