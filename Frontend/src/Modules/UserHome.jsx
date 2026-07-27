import React from 'react';
import styles from '../css/home.module.css';
import { Link, useNavigate } from 'react-router-dom';
export default function UserHome() {
  const navigate = useNavigate();
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.brandBlock} onClick={() => navigate('/')}>
            <div className={styles.brandBadge}>PB</div>
            <div>
              <p className={styles.eyebrow}>Learning dashboard</p>
              <h1>Panda Bear Academy</h1>
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
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <h2>Your Courses</h2>
              <p>Pick up where you left off and keep learning.</p>
            </div>
            <div className={styles.courseGrid}>
              {enrolledCourses.map((course) => (
                <article key={course.title} className={`${styles.courseCard} ${styles.featured}`}>
                  <div className={styles.courseIcon}>{course.icon}</div>
                  <div className={styles.courseMeta}>
                    <h3>{course.title}</h3>
                    <p>{course.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
        </main>
        </div>
    </div>
    );
}