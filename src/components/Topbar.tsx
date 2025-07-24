import type { FC } from 'react'

interface TopbarProps {
  onMenuClick: () => void
}

export const Topbar: FC<TopbarProps> = ({ onMenuClick }) => (
  <header className="flex items-center justify-between bg-white p-4 shadow-md md:hidden">
    <button
      onClick={onMenuClick}
      aria-label="Open menu"
      className="p-2 focus:outline-none"
    >
      <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
      <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
      <span className="block w-6 h-1 bg-gray-800"></span>
    </button>
    <div className="text-lg font-semibold">Reelkix Vision</div>
    <div style={{ width: 32 }} />
  </header>
)
