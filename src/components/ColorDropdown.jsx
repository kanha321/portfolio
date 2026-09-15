import React, { useState, useEffect, useRef } from 'react'
import { useTheme } from './ThemeContext'

export const ColorDropdown = () => {
  const { currentColor, setCurrentColor } = useTheme()
  const dropdownRef = useRef(null)
  const [open, setOpen] = useState(false)

  const colors = [
    'var(--theme-lavender)',
    'var(--theme-pink)',
    'var(--theme-yellow)',
    'var(--theme-green)',
    'var(--theme-blue)'
  ]

  const handleToggle = () => {
    setOpen((prev) => !prev)
  }

  const handleSelect = (color) => {
    setCurrentColor(color)
    setOpen(false)
  }

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [])

  return (
    <div className="dropdown tooltip-container" ref={dropdownRef}>
      <button
        onClick={handleToggle}
        className={`navbar-button ${open ? 'active' : ''}`}
        aria-label="Change Accent Color"
        type="button"
      >
        <div className="circle" style={{ backgroundColor: currentColor }} />
      </button>
      {open && (
        <div className="dropdown-results">
          <div className="circles">
            {colors.map((color) => (
              <div
                key={color}
                className="dropdown-option"
                onClick={() => handleSelect(color)}
                role="button"
                tabIndex={0}
              >
                <div style={{ backgroundColor: color }} className="circle" />
              </div>
            ))}
          </div>
        </div>
      )}
      {!open && <div className="tooltip">Color</div>}
    </div>
  )
}
