'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'framer-motion'

interface ProgressIndicatorProps {
  percentage: number
  label: string
  color?: string
  size?: 'sm' | 'md' | 'lg'
  showPercentage?: boolean
  animated?: boolean
  className?: string
}

export const ProgressIndicator: React.FC<ProgressIndicatorProps> = ({
  percentage,
  label,
  color = 'bg-sppp-blue',
  size = 'md',
  showPercentage = true,
  animated = true,
  className = ''
}) => {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: "0px 0px -50px 0px" })
  const [currentPercentage, setCurrentPercentage] = useState(0)

  const sizeClasses = {
    sm: 'h-2',
    md: 'h-3',
    lg: 'h-4'
  }

  useEffect(() => {
    if (isInView && animated) {
      const timer = setTimeout(() => {
        setCurrentPercentage(percentage)
      }, 300)
      return () => clearTimeout(timer)
    } else if (!animated) {
      setCurrentPercentage(percentage)
    }
  }, [isInView, percentage, animated])

  return (
    <motion.div
      ref={ref}
      className={`w-full ${className}`}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">{label}</span>
        {showPercentage && (
          <span className="text-sm font-semibold text-gray-900">
            {currentPercentage}%
          </span>
        )}
      </div>
      <div className={`w-full bg-gray-200 rounded-full overflow-hidden ${sizeClasses[size]}`}>
        <motion.div
          className={`${color} ${sizeClasses[size]} rounded-full`}
          initial={{ width: 0 }}
          animate={{ width: `${currentPercentage}%` }}
          transition={{
            duration: animated ? 1.5 : 0,
            delay: animated ? 0.5 : 0,
            ease: "easeOut"
          }}
        />
      </div>
    </motion.div>
  )
}

ProgressIndicator.displayName = 'ProgressIndicator'