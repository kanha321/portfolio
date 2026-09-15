import React, { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import floppyLogo from '../assets/nav-floppy.png'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { Menu } from '../assets/Menu'
import { Close } from '../assets/Close'
import { GitHub } from '../assets/GitHub'
import { Linkedin } from '../assets/Linkedin'
import { ColorDropdown } from './ColorDropdown'
import { useTheme } from './ThemeContext'
import { siteConfig } from '../data/siteConfig'
import { mainNavLinks } from '../data/navigation'

export const Navigation = () => {
  const [navOpen, setNavOpen] = useState(false)
  const { theme, toggleTheme } = useTheme()

  const handleToggle = () => setNavOpen((prev) => !prev)
  const handleClose = () => setNavOpen(false)

  return (
    <header className="navbar">
      <div className="navbar-title">
        <div className="navbar-title-content">
          <Link to="/" className="navbar-title-link" onClick={handleClose}>
            <span>
              <img
                src={floppyLogo}
                className="navbar-logo"
                alt={siteConfig.domain}
                title="💾"
                height="16"
                width="16"
              />
            </span>
            <span className="site-name">{siteConfig.domain}</span>
          </Link>
        </div>
      </div>
      <div className="navbar-container">
        <section className="navbar-section">
          <button
            className={`navbar-button nav-menu-button ${navOpen ? 'active' : ''}`}
            onClick={handleToggle}
            aria-label="Toggle navigation menu"
            type="button"
          >
            {navOpen ? <Close /> : <Menu />}
          </button>
          <nav className={`navbar-menu nav-items ${navOpen ? 'active' : ''}`}>
            {mainNavLinks.map((link) => (
              <NavLink
                key={link.url}
                to={link.url}
                className={({ isActive }) => (isActive ? 'active' : '')}
                onClick={handleClose}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
          <nav className="navbar-menu social">
            <button
              className="navbar-button"
              onClick={toggleTheme}
              aria-label="Toggle dark/light theme"
              type="button"
            >
              {theme === 'dark' ? <Sun /> : <Moon />}
            </button>
            <ColorDropdown />
            <a
              href={siteConfig.social.github}
              target="_blank"
              rel="noreferrer"
              className="navbar-icon"
              aria-label="GitHub Profile"
            >
              <GitHub size={20} />
            </a>
            <a
              href={siteConfig.social.linkedin}
              target="_blank"
              rel="noreferrer"
              className="navbar-icon"
              aria-label="LinkedIn Profile"
            >
              <Linkedin size={20} />
            </a>
          </nav>
        </section>
      </div>
    </header>
  )
}
