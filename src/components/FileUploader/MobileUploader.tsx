import { useRef, useState, type ChangeEvent, type FC } from 'react'
import { useNavigate } from 'react-router-dom'
import Webcam from 'react-webcam'
import { useRecogniseShoe } from '../../hooks/useRecogniseShoe'
import { Skeleton } from '../Skeleton'

export const MobileUploader: FC = () => {
  const [useFront, setUseFront] = useState(false)
  const [capturedImg, setCapturedImg] = useState<string | null>(null)

  const navigate = useNavigate()
  const webcamRef = useRef<Webcam>(null)

  const { mutate, status, isError, error } = useRecogniseShoe()
  const isLoading = status === 'pending'

  // Gallery file picked
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (!file) return

    mutate(file, {
      onSuccess: (response) => {
        navigate('/results', { state: response })
      },
    })
  }

  // Take screenshot only
  const capture = () => {
    if (!webcamRef.current) return
    const imageSrc = webcamRef.current.getScreenshot()
    if (!imageSrc) return
    setCapturedImg(imageSrc)
  }

  // Convert dataURL to File and upload
  const uploadCapture = async () => {
    if (!capturedImg) return
    try {
      const blob = await (await fetch(capturedImg)).blob()
      const file = new File([blob], 'capture.jpg', { type: blob.type })
      mutate(file, {
        onSuccess: (response) => {
          navigate('/results', { state: response })
        },
      })
    } catch (e) {
      console.error('Upload failed', e)
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <button
          onClick={() => setUseFront((f) => !f)}
          disabled={isLoading}
          className={`bg-brand text-white px-4 py-2 rounded ${
            isLoading && 'opacity-50 cursor-not-allowed'
          }`}
        >
          Switch to {useFront ? 'Back' : 'Front'} Camera
        </button>

        <label
          className={`bg-brand text-white px-4 py-2 rounded cursor-pointer ${
            isLoading && 'opacity-50 pointer-events-none'
          }`}
        >
          Gallery
          <input
            type="file"
            accept="image/*"
            className="hidden"
            disabled={isLoading}
            onChange={handleFileChange}
          />
        </label>
      </div>

      {isLoading && (
        <div className="mt-6 p-4 border rounded-lg bg-white dark:bg-gray-700 space-y-3">
          <Skeleton width="w-full" height="h-48" />
          <Skeleton width="w-1/3" height="h-6" />
          <Skeleton width="w-2/3" />
          <Skeleton width="w-1/2" />
          <Skeleton width="w-1/4" />
        </div>
      )}

      {!isLoading && (
        <>
          {!capturedImg ? (
            <Webcam
              audio={false}
              ref={webcamRef as any}
              screenshotFormat="image/jpeg"
              videoConstraints={{
                facingMode: useFront ? 'user' : 'environment',
              }}
              className="w-full h-auto rounded-lg shadow-md"
            />
          ) : (
            <img
              src={capturedImg}
              alt="Captured"
              className="w-full h-auto rounded-lg shadow-md"
            />
          )}

          <div className="flex space-x-2 mt-2">
            {!capturedImg ? (
              <button
                onClick={capture}
                className="flex-1 bg-brand text-white py-2 rounded"
              >
                Capture Photo
              </button>
            ) : (
              <>
                <button
                  onClick={() => setCapturedImg(null)}
                  className="flex-1 bg-gray-400 text-white py-2 rounded"
                >
                  Retake
                </button>
                <button
                  onClick={uploadCapture}
                  className="flex-1 bg-brand text-white py-2 rounded"
                >
                  Upload
                </button>
              </>
            )}
          </div>

          {isError && (
            <p className="mt-4 text-red-600">Error: {error?.message}</p>
          )}
        </>
      )}
    </div>
  )
}
