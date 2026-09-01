import styles from '../css/course.module.css';
import { Link, useNavigate } from 'react-router-dom';
import React from 'react';
import LevelStep from '../Components/LevelStep';


export default function Course() {
    return(
        <div className={styles.page}>
            <div className={styles.shell}>
                <header className={styles.header}>
                    <div className={styles.brandBlock} >
                        <div className={styles.brandStuff} onClick={() => navigate('/')}>
                        <div className={styles.brandBadge}>PB</div>
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
                        <button className={styles.optionsBtn}>Options</button>
                    </div>
                </header>
                <main className={styles.content}>
                    <section className={styles.descriptionSection}>
                        <div className={styles.description}>
                            <h1 className={styles.courseTitle}>Course Title</h1>
                            <p className={styles.courseDescription}>This is a brief description of the course</p>
                        </div>
                    </section>
                    <section className={styles.lessonsSection}>
                        <button className={styles.unitButton}>
                            Unit 1
                        </button>
                        <div className={styles.levelSteps}>
                            <LevelStep level={1} isActive={false} isCompleted={true} />
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}