import React from 'react'
import styles from './Post.module.scss';


export default function Post({ item }) {
  const timeOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  return (
    <div className={styles.Post}>
      <h1 className={styles.Title}>{item.title}</h1>
      <div className={styles.Info}>
        <span>{item.date.toLocaleDateString('en-US', timeOptions)}</span>
        <span>{item.length} min read</span>
      </div>
      <p>{item.snippet}</p>
    </div>
  )
}
