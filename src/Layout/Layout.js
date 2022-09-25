/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-script-url */
import React from 'react'
import Footer from "../components/Footer/Footer"
import LeftSidebar from "../components/LeftSidebar/LeftSidebar"
import Navbar from "../components/Navbar/Navbar"

const Layout = ({ children }) => {
  return (
    <div className="wrapper">
      <Navbar />
      <LeftSidebar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout