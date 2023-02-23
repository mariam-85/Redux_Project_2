import React from 'react'
import style from './index.module.css'
import { useDispatch } from 'react-redux'
import { addUser } from '../../store/reducers/userCardsReducer';

export default function AddUserForm() {

    const dispatch = useDispatch();

    const submit = event => {
        event.preventDefault();
        const { name, age, country } = event.target;
        dispatch(addUser({
            name: name.value,
            age: age.value,
            country: country.value,
        }));
        name.value = '';
        age.value = '';
        country.value = '';
    }

    
  return (
        <form onSubmit={submit} className={style.form_style}>
            <input type="text" name='name' placeholder='Name' />
            <input type="text" name='age' placeholder='Age' />
            <input type="text" name='country' placeholder='Country' />
            <button>Add user</button>
        </form>
  )
}
