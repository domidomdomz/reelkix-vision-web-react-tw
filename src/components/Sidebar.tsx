import type { FC } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import { ThemeToggle } from './ThemeToggle'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => (
  <>
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50
                  transition-opacity duration-300
                  ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    />

    <aside
      className={`fixed top-0 left-0 z-30 h-full w-64 p-6
                  transform transition-transform duration-300
                  bg-white text-gray-900 dark:bg-gray-800 dark:text-gray-50
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                  md:translate-x-0 md:static`}
    >
      <img src={logo} alt="Reelkix Vision" className="w-32 mb-6" />
      <nav className="flex flex-col space-y-3 text-sm">
        <Link to="/" className="nav-link">Upload Shoe</Link>
        <a href="https://facebook.com/your-shop" className="nav-link" target="_blank">Facebook</a>
        <a href="https://instagram.com/your-shop" className="nav-link" target="_blank">Instagram</a>
        <a href="https://tiktok.com/@your-shop" className="nav-link" target="_blank">TikTok</a>
      </nav>

        <div className="mt-6 md:flex hidden items-center space-x-2">
            <ThemeToggle />
        </div>
      
    </aside>
  </>
)
