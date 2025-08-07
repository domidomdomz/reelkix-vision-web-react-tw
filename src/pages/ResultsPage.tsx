import { type FC } from 'react'
import { useLocation, Navigate } from 'react-router-dom'
import type { RecognitionResponse } from '../application/usecases/recogniseShoe'

export const ResultsPage: FC = () => {
  const location = useLocation()
  const state = location.state as RecognitionResponse | undefined

  // If accessed directly, redirect back
  if (!state) return <Navigate to="/" replace />

  const { imageUrl, shoe } = state

  return (
    <div className="max-w-md mx-auto p-4 space-y-6">
      <img
        src={imageUrl}
        alt="Uploaded shoe"
        className="w-full rounded-lg shadow-lg"
      />

      {/* <h2 className="text-xl font-semibold">{message}</h2> */}

      <div className="space-y-2 text-gray-800 dark:text-gray-200">
        {shoe.brand.value !== '' && (
          <p>
            <strong>Brand:</strong> {shoe.brand.value}
          </p>
        )}
        {shoe.model.value !== '' && (
          <p>
            <strong>Model:</strong> {shoe.model.value}
          </p>
        )}
        {shoe.colorway.value !== '' && (
          <p>
            <strong>Colorway:</strong> {shoe.colorway.value}
          </p>
        )}
        {shoe.sku.value !== '' && (
          <p>
            <strong>SKU:</strong> {shoe.sku.value}
          </p>
        )}
        {shoe.confidence !== 0 && (
          <p>
            <strong>Confidence:</strong>{' '}
            {(shoe.confidence * 100).toFixed(1)}%
        </p>
        )}
      </div>

      <div className="mt-4 p-4 bg-gray-50 dark:bg-gray-800 rounded">
        <p className="whitespace-pre-line">{shoe.description}</p>
      </div>
    </div>
  )
}
