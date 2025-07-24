import type { FC } from 'react'
import { Link } from 'react-router-dom'

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
}

export const Sidebar: FC<SidebarProps> = ({ isOpen, onClose }) => (
  <>
    {/* Overlay */}
    <div
      className={`fixed inset-0 z-20 bg-black bg-opacity-50
                  transition-opacity duration-300
                  ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      onClick={onClose}
    />

    {/* Drawer */}
    <aside
      className={`fixed top-0 left-0 z-30 h-full w-64 bg-white p-6
                  transform transition-transform duration-300
                  ${isOpen ? 'translate-x-0' : '-translate-x-full'}
                  md:translate-x-0 md:static`}
    >
      <h2 className="text-2xl font-semibold mb-8">Reelkix Vision</h2>
      <nav className="flex flex-col space-y-3 text-sm">
        <Link to="/" className="nav-link">Upload Shoe</Link>
        <a href="https://facebook.com/your-shop" className="nav-link" target="_blank">Facebook</a>
        <a href="https://instagram.com/your-shop" className="nav-link" target="_blank">Instagram</a>
        <a href="https://tiktok.com/@your-shop" className="nav-link" target="_blank">TikTok</a>
      </nav>
    </aside>
  </>
)
