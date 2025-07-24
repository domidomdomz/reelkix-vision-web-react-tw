import type { ReactNode } from 'react'
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react'

type Theme = 'light' | 'dark'
interface ThemeContextType {
  theme: Theme
  toggleTheme: () => void
}

const ThemeContext = createContext<ThemeContextType>({
  theme: 'dark',
  toggleTheme: () => {}
})

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>('dark')

  // On mount, read from localStorage or default to dark
  useEffect(() => {
    const stored = localStorage.getItem('theme') as Theme
    setTheme(stored === 'light' ? 'light' : 'dark')
  }, [])

  // Whenever theme changes, update <html> class and localStorage
  useEffect(() => {
    const root = document.documentElement
    root.classList.remove(theme === 'dark' ? 'light' : 'dark')
    root.classList.add(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () =>
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'))

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)
