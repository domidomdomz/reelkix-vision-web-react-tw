import type { FC } from 'react'
import { isMobile } from 'react-device-detect'
import { DesktopUploader } from '../components/FileUploader/DesktopUploader'
import { MobileUploader } from '../components/FileUploader/MobileUploader'

export const UploadPage: FC = () => (
  <div className="max-w-lg mx-auto">
    <h2 className="text-2xl font-semibold mb-6">Upload Shoe Photo</h2>

    {isMobile ? <MobileUploader /> : <DesktopUploader />}
  </div>
)
