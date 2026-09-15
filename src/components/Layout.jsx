import React from 'react'
import { Navigation } from './Navigation'
import { Sidebar } from './Sidebar'
import { Footer } from './Footer'

export const Layout = ({ children }) => {
  return (
    <div id="layout" className="layout">
      <Navigation />
      <Sidebar />
      <div className="main-wrapper">
        <main className="main-container">
          <div className="main-content page">
            {children}
          </div>
        </main>
        <Footer />
      </div>
    </div>
  )
}
