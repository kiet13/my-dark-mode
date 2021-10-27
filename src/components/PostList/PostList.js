import React from 'react'
import styles from './PostList.module.scss';
import Post from '../Post/Post';

export default function PostList(props) {
  const posts = props.posts.map(item => 
    <Post key={item.id} item={item} />
  )
  return (
    <div className={styles.PostList}>
      {posts}
    </div>
  )
}
