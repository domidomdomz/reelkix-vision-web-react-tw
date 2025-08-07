import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Sidebar } from './components/Sidebar'
import { Topbar } from './components/Topbar'
import { UploadPage } from './pages/UploadPage'
import { ResultsPage } from './pages/ResultsPage'

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <BrowserRouter>
      <div className="flex h-screen overflow-hidden">
        <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

        <div className="flex-1 flex flex-col">
          <Topbar onMenuClick={() => setSidebarOpen(true)} />

          <main className="flex-1 overflow-auto p-4">
            <Routes>
              <Route path="/" element={<UploadPage />} />
              <Route path="/results" element={<ResultsPage />} />
              {/* future routes here */}
            </Routes>
          </main>
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
