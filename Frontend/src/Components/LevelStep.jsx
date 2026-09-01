import React from 'react';
import styles from '../css/levelStep.module.css';

export default function LevelStep({ level, isActive, isCompleted, onClick }) {
  const handleClick = () => {
    if (isActive || isCompleted) {
      onClick(level);
    }
  };

  return (
    <div
      className={`${styles.levelStep} ${isActive ? styles.active : ''} ${isCompleted ? styles.completed : ''}`}
      onClick={handleClick}
    >
      
    </div>
  );
}