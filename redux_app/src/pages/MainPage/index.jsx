import React from 'react'
import { Link } from 'react-router-dom'

export default function MainPage() {
  return (
    <div>
        <Link to='/posts'>
        <button className='style_button'>Posts</button>
        </Link>
        
        <Link to='/users'>
        <button className='style_button'>Users</button>
        </Link>

    </div>
  )
}
