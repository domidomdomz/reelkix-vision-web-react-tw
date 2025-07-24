import { SunIcon, MoonIcon } from '@heroicons/react/24/solid'
import { useTheme } from '../context/ThemeContext'

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button onClick={toggleTheme} aria-label="Toggle theme" className="p-1">
      {theme === 'dark' ? (
        <SunIcon className="w-6 h-6 text-yellow-400" />
      ) : (
        <MoonIcon className="w-6 h-6 text-gray-800" />
      )}
    </button>
  )
}