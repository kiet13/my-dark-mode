import React from 'react';
import { useThemeContext } from '../context';
import styles from './Blog.module.scss';
import Header from '../components/Header/Header';

export default function Blog() {
  const { theme } = useThemeContext();
  const styleList = [styles.Blog];
  
  if (theme.darkMode) {
    styleList.push("dark-theme");
  }
  return (
    <div className={styleList.join(' ')}>
      <Header />
    </div>
  )
}
