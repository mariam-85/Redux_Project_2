import React from 'react'
import { Outlet } from 'react-router-dom'
import Nav from '../Nav'
import Footer from '../Footer'
import style from './index.module.css'

export default function Layout() {
  return (
    <div>
        <Nav />
        <main className={style.outlet}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}
