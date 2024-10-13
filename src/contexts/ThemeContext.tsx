'use client'

import React, { createContext, useContext, useEffect, useState } from 'react'

type Theme = 'light-theme' | 'dark-theme'

interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('dark-theme')

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === 'light-theme' ? 'light-theme' : 'dark-theme'
    )
  }

  useEffect(() => {
    document.body.className = theme
  }, [theme])

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme(): ThemeContextType {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
