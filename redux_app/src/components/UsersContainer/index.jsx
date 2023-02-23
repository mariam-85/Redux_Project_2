import React from 'react'
import User from '../User';
import { useDispatch, useSelector } from 'react-redux';
import style from './index.module.css'
import { deleteUser } from '../../store/reducers/userCardsReducer';

export default function UsersContainer() {


    const state = useSelector(state => state.users);

    const dispatch = useDispatch();

    const delete_user = id => dispatch(deleteUser(id));

  return (
    <div className={style.users_container}>
      {
        state.map(el => <User key={el.id} {...el} delete_user={delete_user} />)
      }
    </div>
  )
}
