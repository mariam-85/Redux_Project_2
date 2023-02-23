import React from 'react'
import Post from '../Post';
import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { deletePost } from '../../store/reducers/postsCardsReducer';

export default function UsersContainer() {

    const state = useSelector(state => state.posts);

    const dispatch = useDispatch();

    const delete_post = id => dispatch(deletePost(id));

  return (
    <div className={style.posts_container}>
      {
        state.map(el => <Post key={el.id} {...el} delete_post={delete_post} />)
      }
    </div>
  )
}