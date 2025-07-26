import { useState } from 'react'
import type { ChangeEvent, FC } from 'react'

export const DesktopUploader: FC = () => {
  const [fileName, setFileName] = useState<string | null>(null)

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFileName(e.target.files[0].name)
      // TODO: call your upload useMutation here
    }
  }

  return (
    <div
      className="border-2 border-dashed rounded-lg p-8 text-center
                 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200
                 hover:border-brand transition-colors"
    >
      <p className="mb-2">Drag & drop your image here</p>
      <p className="mb-4 text-sm">or click to browse</p>

      <label
        className="inline-block bg-brand text-white px-4 py-2 rounded cursor-pointer"
      >
        {fileName ?? 'Select File'}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
        />
      </label>

      {fileName && (
        <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
          Selected: {fileName}
        </p>
      )}
    </div>
  )
}
