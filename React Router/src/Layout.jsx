import React from 'react'
import Footer from './assets/components/Footer/Footer'
import Header from './assets/components/Header/Header'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default Layout