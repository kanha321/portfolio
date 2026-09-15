import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import floppyLogo from '../assets/nav-floppy.png'
import navProjects from '../assets/nav-projects.png'
import navBlog from '../assets/nav-blog.png'
import { Moon } from '../assets/Moon'
import { Sun } from '../assets/Sun'
import { Mail } from '../assets/Mail'
import { GitHub } from '../assets/GitHub'
import { Linkedin } from '../assets/Linkedin'
import { File } from '../assets/File'
import { ColorDropdown } from './ColorDropdown'
import { useTheme } from './ThemeContext'
import { siteConfig } from '../data/siteConfig'
import { mainNavLinks, subNavLinks } from '../data/navigation'

export const Sidebar = () => {
  const { theme, toggleTheme } = useTheme()

  const socialIcons = [
    { url: siteConfig.social.email, label: 'Email me', Icon: Mail },
    { url: siteConfig.social.github, label: 'GitHub', Icon: GitHub },
    { url: siteConfig.social.linkedin, label: 'LinkedIn', Icon: Linkedin },
    { url: siteConfig.resumeUrl, label: 'Download CV', Icon: File, download: true }
  ]

  const getLinkImage = (url) => {
    if (url === '/projects') return navProjects
    return navBlog
  }

  return (
    <aside className="sidebar">
      <section className="sidebar-section">
        <div className="sidebar-title-link">
          <Link to="/" className="flex-align-center gap">
            <span>
              <img
                src={floppyLogo}
                className="navbar-logo"
                alt={siteConfig.name}
                title="💾"
                height="16"
                width="16"
              />
            </span>
            <span className="site-name">{siteConfig.name}</span>
          </Link>
          <div className="flex-align-center">
            <ColorDropdown />
            <div className="tooltip-container">
              <button
                className="navbar-button"
                onClick={toggleTheme}
                aria-label="Toggle theme"
                type="button"
              >
                {theme === 'dark' ? <Sun /> : <Moon />}
              </button>
              <div className="tooltip">Theme</div>
            </div>
          </div>
        </div>
      </section>

      <section className="sidebar-section">
        <div className="sidebar-content">
          <p>
            I'm <Link to="/about">{siteConfig.shortName}</Link>, an Android and software engineer. Welcome to my digital space. 🌱
          </p>
        </div>
      </section>

      <section className="sidebar-section">
        <nav className="sidebar-nav-links">
          {mainNavLinks.map((link) => (
            <NavLink
              key={link.url}
              to={link.url}
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              <img src={getLinkImage(link.url)} alt="" />
              {link.label}
            </NavLink>
          ))}
        </nav>
      </section>

      <div className="sidebar-bottom">
        <section className="sidebar-section">
          <nav className="sidebar-links">
            {socialIcons.map(({ url, label, Icon, download }) => (
              <div className="tooltip-container tooltip-above" key={label}>
                <a
                  href={url}
                  target={url.startsWith('http') || download ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  aria-label={label}
                  download={download ? true : undefined}
                >
                  <Icon size={20} />
                </a>
                <div className="tooltip">{label}</div>
              </div>
            ))}
          </nav>
        </section>

        <nav className="sidebar-sub-links">
          {subNavLinks.map((link, index) => (
            <React.Fragment key={link.url}>
              {index > 0 && <div className="divider" />}
              {link.external ? (
                <a href={link.url} target="_blank" rel="noopener noreferrer">
                  {link.label}
                </a>
              ) : (
                <NavLink
                  to={link.url}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </aside>
  )
}
