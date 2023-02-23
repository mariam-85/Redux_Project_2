import React from 'react'
import style from './index.module.css'
import { CloseOutlined } from '@ant-design/icons'

export default function Post({ id, title, description, delete_post }) {
  return (
    <div className={style.posts_cards}>
     <CloseOutlined className={style.cross_icon} onClick={() => delete_post(id)} />
        <h3>Title: { title }</h3>
        <p>Description: { description }</p>
    </div>
  )
}