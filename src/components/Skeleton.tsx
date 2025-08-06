import type { FC } from 'react'

interface SkeletonProps {
  width?: string
  height?: string
  className?: string
}

export const Skeleton: FC<SkeletonProps> = ({
  width = 'w-full',
  height = 'h-4',
  className = '',
}) => (
  <div
    className={`
      ${width} ${height} bg-gray-300 rounded ${className}
      animate-pulse
    `}
  />
)
