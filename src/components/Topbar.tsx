import type { FC } from 'react'
import { ThemeToggle } from './ThemeToggle'

interface TopbarProps {
  onMenuClick: () => void
}

export const Topbar: FC<TopbarProps> = ({ onMenuClick }) => {
  return (
    <header className="flex items-center justify-between p-4
                   bg-white text-gray-900 shadow-md
                   dark:bg-gray-800 dark:text-gray-50
                   md:hidden">

      <button onClick={onMenuClick} aria-label="Open menu">
        <span className="block w-6 h-1 bg-current mb-1"></span>
        <span className="block w-6 h-1 bg-current mb-1"></span>
        <span className="block w-6 h-1 bg-current"></span>
      </button>

      {/* Logo can go here on mobile too */}
      <div className="flex items-center space-x-2">
        <img src="/src/assets/logo.png" alt="Logo" className="w-8 h-8" />
        <span className="font-semibold text-lg">Reelkix Vision</span>
      </div>

      <ThemeToggle />
    </header>
  )
}