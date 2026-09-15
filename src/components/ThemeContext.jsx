import React, { createContext, useContext, useState, useEffect } from 'react'

const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('dark')
  const [currentColor, setCurrentColor] = useState('var(--theme-pink)')

  const handleUpdateTheme = (newTheme) => {
    const html = document.documentElement
    window.localStorage.setItem('theme', newTheme)
    html.style.setProperty('color-scheme', newTheme)

    if (newTheme === 'light') {
      html.classList.add('is-light')
      html.classList.remove('is-dark')
    } else {
      html.classList.add('is-dark')
      html.classList.remove('is-light')
    }

    setTheme(newTheme)
  }

  const handleSelectColor = (color) => {
    window.localStorage.setItem('color', color)
    setCurrentColor(color)
    const root = document.querySelector(':root')
    if (root) {
      root.style.setProperty('--color-primary', color)
    }
  }

  useEffect(() => {
    const html = document.documentElement
    const savedTheme = window.localStorage.getItem('theme') || 'dark'
    const savedColor = window.localStorage.getItem('color') || 'var(--theme-pink)'

    setTheme(savedTheme)
    html.style.setProperty('color-scheme', savedTheme)
    if (savedTheme === 'light') {
      html.classList.add('is-light')
      html.classList.remove('is-dark')
    } else {
      html.classList.add('is-dark')
      html.classList.remove('is-light')
    }

    setCurrentColor(savedColor)
    const root = document.querySelector(':root')
    if (root) {
      root.style.setProperty('--color-primary', savedColor)
    }
  }, [])

  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme: handleUpdateTheme,
        toggleTheme: () => handleUpdateTheme(theme === 'dark' ? 'light' : 'dark'),
        currentColor,
        setCurrentColor: handleSelectColor
      }}
    >
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
