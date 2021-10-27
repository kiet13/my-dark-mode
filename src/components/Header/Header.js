import React from 'react'
import styles from './Header.module.scss';
import { useThemeContext } from '../../context';

export default function Header() {
  const { dispatch } = useThemeContext();
  return (
    <div className={styles.Header}>
      <h1 className={styles.HeadingText}>Overreacted</h1>
      <button
        className={styles.ToggleButton}
        onClick={() => dispatch({type: "TOGGLE"})}
      >
        Toggle
      </button>
    </div>
  )
}
