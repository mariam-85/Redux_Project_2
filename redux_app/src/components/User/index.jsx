import React from 'react'
import style from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'

export default function User({ id, name, age, country, delete_user }) {
  return (
    <div className={style.users_cards}>
        <CloseOutlined className={style.cross_icon} onClick={() => delete_user(id)}/>
        <p>Name: { name }</p>
        <p>Age: { age }</p>
        <p>Country: { country }</p>
    </div>
  )
}
