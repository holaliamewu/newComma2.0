import React from 'react'
import Navbar from '../components/Navbar'
import { Outlet } from 'react-router'

export default function Layout() {
  return (
    <div>
        <Navbar />
        <Outlet />
    </div>
  )
}
