'use client'

import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'

interface IsometricPortAnimationProps {
  className?: string
}

export const IsometricPortAnimation: React.FC<IsometricPortAnimationProps> = ({ className = '' }) => {
  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {/* Base Isometric Illustration */}
      <div className="absolute inset-0">
        <Image
          src="/images/port-isometric-base.jpg"
          alt="SPPP Port Operations"
          fill
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Animated Activity Indicators */}
      <motion.div
        className="absolute w-6 h-6 bg-yellow-400 rounded-full shadow-lg border-2 border-white"
        style={{ left: '25%', top: '35%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />

      <motion.div
        className="absolute w-6 h-6 bg-green-400 rounded-full shadow-lg border-2 border-white"
        style={{ left: '40%', top: '30%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 2.5,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <motion.div
        className="absolute w-6 h-6 bg-blue-400 rounded-full shadow-lg border-2 border-white"
        style={{ left: '55%', top: '45%' }}
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.8, 1, 0.8]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1
        }}
      />

      {/* Moving Ship Animation */}
      <motion.div
        className="absolute"
        style={{ left: '-100px', top: '75%' }}
        animate={{
          x: [0, 1600]
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear"
        }}
      >
        <div className="w-16 h-8 bg-blue-600 rounded-lg shadow-lg relative">
          <div className="absolute top-1 left-2 w-3 h-2 bg-blue-300 rounded"></div>
          <div className="absolute top-1 left-6 w-3 h-2 bg-blue-300 rounded"></div>
          <div className="absolute top-1 left-10 w-3 h-2 bg-blue-300 rounded"></div>
        </div>
      </motion.div>

      {/* Floating Animation for Water Effect */}
      <motion.div
        className="absolute inset-0"
        animate={{
          y: [0, -2, 0]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        {/* Invisible div that creates subtle floating motion */}
        <div className="w-full h-full" />
      </motion.div>

      {/* Text Overlay Labels */}
      <motion.div
        className="absolute"
        style={{ left: '15%', top: '20%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-white/20">
          <div className="text-sm font-bold text-blue-900">SPPP TERMINAL</div>
          <div className="text-xs text-gray-600">Advanced Port Operations</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: '60%', top: '35%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.8 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-white/20">
          <div className="text-sm font-bold text-blue-900">CONTAINER LOGISTICS</div>
          <div className="text-xs text-gray-600">Automated Handling</div>
        </div>
      </motion.div>

      <motion.div
        className="absolute"
        style={{ left: '75%', top: '65%' }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.8 }}
      >
        <div className="bg-white/95 backdrop-blur-sm rounded-lg px-4 py-2 shadow-lg border border-white/20">
          <div className="text-sm font-bold text-blue-900">MARITIME HUB</div>
          <div className="text-xs text-gray-600">Northern Gateway</div>
        </div>
      </motion.div>

      {/* Subtle Blue Overlay for SPPP Branding */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-blue-600/5 pointer-events-none" />

    </div>
  )
}

IsometricPortAnimation.displayName = 'IsometricPortAnimation'