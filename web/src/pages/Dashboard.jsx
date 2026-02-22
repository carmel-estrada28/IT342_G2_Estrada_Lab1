import { useState, useEffect } from 'react';
import { getProfile, logoutUser } from '../api/api';
import '../styles/Dashboard.css';

const ACTIVITY_LOG = [
    { id: 1, action: 'Logged in', time: 'Just now' },
    { id: 2, action: 'Profile viewed', time: '2 minutes ago' },
    { id: 3, action: 'Account created', time: '7 days ago' },
];

export default function Dashboard({ onLogout }) {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchProfile = async () => {
            const res = await getProfile();
            if (res.ok) {
                const data = await res.json();
                setUser(data);
            } else {
                onLogout();
            }
        };
        fetchProfile();
    }, []);

    const handleLogout = async () => {
        await logoutUser();
        onLogout();
    };

    if (!user) return <p style={{ textAlign: 'center', marginTop: '3rem' }}>Loading...</p>;

    return (
        <div className="dashboard-container">
            <div className="navbar">
                <h2>MyApp</h2>
                <button onClick={handleLogout}>Logout</button>
            </div>

            <div className="dashboard-content">
                <div className="welcome-card">
                    <h1>Welcome back, {user.username}! 👋</h1>
                    <p>Here's your account overview.</p>
                </div>

                <p className="section-title">Profile Info</p>
                <div className="card">
                    <div className="info-row">
                        <span className="label">Username</span>
                        <span className="value">{user.username}</span>
                    </div>
                    <div className="info-row">
                        <span className="label">Email</span>
                        <span className="value">{user.email}</span>
                    </div>
                </div>

                <p className="section-title">Recent Activity</p>
                <div className="card">
                    {ACTIVITY_LOG.map((log) => (
                        <div className="activity-row" key={log.id}>
                            <div className="dot" />
                            <div>
                                <p className="activity-action">{log.action}</p>
                                <p className="activity-time">{log.time}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}