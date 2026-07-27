import React from 'react';
import styles from '../css/home.module.css';
import { Link, useNavigate } from 'react-router-dom';
export default function UserHome() {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
        <header>
            <div className={styles.brandBlock} onClick={() => navigate('/')}>
                <div className={styles.brandBadge}>PB</div>
                <div>
                    <p className={styles.eyebrow}>Learning dashboard</p>
                    <h1>Panda Bear Academy</h1>
                </div>

                <div className={styles.headerlinks}>
                    <Link to="/home">Home</Link>
                    <Link to="/courses">Courses</Link>
                </div>
            </div>
        </header>
        <main className={styles.content}>
            <section className={styles.section}>
                <div className={styles.searchBar}>
                    <input type="text" placeholder="What do you want to learn?" />
                    <button>Search</button>
                </div>
                <div className={styles.streak}>
                    
                </div>
            </section>
        </main>
    </div>
    );
}