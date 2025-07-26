import { useRef, useState } from 'react'
import type { FC } from 'react'
import Webcam from 'react-webcam'

export const MobileUploader: FC = () => {
  const [useFront, setUseFront] = useState(false)
  const [capturedImg, setCapturedImg] = useState<string | null>(null)

  const videoConstraints = { facingMode: useFront ? 'user' : 'environment' }
  const webcamRef = useRef<Webcam>(null)

  const capture = () => {
    if (webcamRef && typeof webcamRef !== 'function') {
      const imageSrc = webcamRef.current?.getScreenshot();
      if (!imageSrc) return;
      setCapturedImg(imageSrc);
      // TODO: trigger upload useMutation with imageSrc
    }
  }

  return (
    <div className="space-y-4">
      <div className="flex justify-between">
        <button
          onClick={() => setUseFront(prev => !prev)}
          className="bg-brand text-white px-4 py-2 rounded"
        >
          Switch to {useFront ? 'Back' : 'Front'} Camera
        </button>

        <label className="bg-brand text-white px-4 py-2 rounded cursor-pointer">
          Gallery
          <input
            type="file"
            accept="image/*"
            className="hidden"
            onChange={e => {
              if (e.target.files?.[0]) {
                // TODO: trigger upload useMutation with e.target.files[0]
              }
            }}
          />
        </label>
      </div>

      {!capturedImg ? (
        <Webcam
          audio={false}
          ref={webcamRef as any}
          screenshotFormat="image/jpeg"
          videoConstraints={videoConstraints}
          className="w-full h-auto rounded-lg shadow-md"
        />
      ) : (
        <img
          src={capturedImg}
          alt="Captured"
          className="w-full h-auto rounded-lg shadow-md"
        />
      )}

      {!capturedImg && (
        <button
          onClick={capture}
          className="w-full bg-brand text-white py-2 rounded"
        >
          Capture Photo
        </button>
      )}
    </div>
  )
}
