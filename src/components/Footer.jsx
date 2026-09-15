import React from 'react'
import { Heart } from '../assets/Heart'
import { Mail } from '../assets/Mail'
import { GitHub } from '../assets/GitHub'
import { Linkedin } from '../assets/Linkedin'
import { File } from '../assets/File'
import { siteConfig } from '../data/siteConfig'
import { footerLinks } from '../data/navigation'

export const Footer = () => {
  const getIcon = (name) => {
    switch (name) {
      case 'Mail':
        return Mail
      case 'GitHub':
        return GitHub
      case 'Linkedin':
        return Linkedin
      case 'FileText':
        return File
      default:
        return File
    }
  }

  return (
    <footer className="footer">
      <section className="footer-section">
        <nav className="footer-menu">
          {footerLinks.map((link) => {
            const IconComponent = getIcon(link.iconName)
            return (
              <a
                href={link.url}
                target={link.url.startsWith('http') || link.download ? '_blank' : undefined}
                rel="noopener noreferrer"
                key={link.label}
                className="footer-link"
                download={link.download ? true : undefined}
              >
                <IconComponent size={15} />
                {link.label}
              </a>
            )
          })}
        </nav>
        <div className="footer-made-by">
          Made with <Heart size={14} /> by {siteConfig.name}
        </div>
      </section>
    </footer>
  )
}
