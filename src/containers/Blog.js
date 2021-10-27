import React, { useState } from 'react';
import { useThemeContext } from '../context';
import styles from './Blog.module.scss';
import Header from '../components/Header/Header';
import PostList from '../components/PostList/PostList';
import articles from '../data';

export default function Blog() {
  const { theme } = useThemeContext();
  const styleList = [styles.Blog];
  const [posts] = useState(articles);

  if (theme.darkMode) {
    styleList.push("dark-theme");
  }
  return (
    <div className={styleList.join(' ')}>
      <Header />
      <PostList posts={posts}/>
    </div>
  )
}
