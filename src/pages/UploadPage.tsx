import type { FC } from 'react'

export const UploadPage: FC = () => (
  <div className="max-w-md mx-auto">
    <h3 className="text-xl font-semibold mb-4">Upload Shoe Photo</h3>
    <div className="border-2 border-dashed border-gray-300 rounded p-8 text-center text-gray-500">
      Drag & drop or click to select a file
    </div>
  </div>
)
