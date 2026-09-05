import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.jpg';

export default function Header({ styles }) {
    const navigate = useNavigate();
    return (
        <header className={styles.header}>
            <div className={styles.brandBlock} >
                <div className={styles.brandStuff} onClick={() => navigate('/')}>         
                <img src={logo} alt="Panda Bear Academy Logo" className={styles.brandLogo} />
                <div>
                    <p className={styles.eyebrow}>Learning dashboard</p>
                    <h1>Panda Bear Academy</h1>
                </div>
                </div>
                <div className={styles.headerlinks}>
                <Link to="/home" className={styles.headerlink} ><p>🏠</p> Home</Link>
                <Link to="/courses" className={styles.courseLink}><p>📚</p> Courses</Link>
                </div>
            </div>
            <div className={styles.headerActions}>
                <div className={styles.starbits}>
                    <span>★</span> 5
                </div>
                <button className={styles.optionsBtn}>Donate</button>
            </div>
        </header>
    );
}