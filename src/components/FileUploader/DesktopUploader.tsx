import { useState } from 'react'
import type { ChangeEvent, FC } from 'react'
import { useRecogniseShoe } from '../../hooks/useRecogniseShoe'
import { Skeleton } from '../Skeleton'

export const DesktopUploader: FC = () => {
  const [fileName, setFileName] = useState<string | null>(null);
  const  { mutate, data, status, isError, error } = useRecogniseShoe();

  // Derive a loading flag from status
  const isLoading = status === 'pending';

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setFileName(file.name);
    mutate(file);
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
        className={`
          inline-block px-4 py-2 rounded cursor-pointer
          ${isLoading ? 'bg-gray-400 cursor-not-allowed' : 'bg-brand text-white'}
        `}
      >
        {fileName ?? 'Select File'}
        <input
          type="file"
          accept="image/*"
          className="hidden"
          onChange={handleFileChange}
          disabled={isLoading}
        />
      </label>


      {isLoading && (
        <div className="mt-6 p-4 border rounded-lg bg-white dark:bg-gray-700 space-y-3">
          <Skeleton width="w-1/3" height="h-6" />
          <Skeleton width="w-2/3" />
          <Skeleton width="w-1/2" />
          <Skeleton width="w-3/4" />
          <Skeleton width="w-1/4" />
          <Skeleton width="w-full" height="h-12" className="mt-2" />
        </div>
      )}


      {isError && (
        <p className="mt-4 text-red-600">Error: {error?.message}</p>
      )}

      {data && (
        <div className="mt-6 p-4 border rounded-lg bg-white dark:bg-gray-700">
          <h3 className="text-lg font-semibold">Recognized Shoe</h3>
          <p>Brand: {data.brand.value}</p>
          <p>Model: {data.model.value}</p>
          <p>Colorway: {data.colorway.value}</p>
          <p>SKU: {data.sku.value}</p>
          <p>Confidence: {(data.confidence * 100).toFixed(1)}%</p>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            {data.description}
          </p>
        </div>
      )}
    </div>
  )
}
