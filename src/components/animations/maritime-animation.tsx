'use client'

import React, { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface Ship {
  id: string
  name: string
  x: number
  y: number
  size: 'small' | 'medium' | 'large'
  speed: number
  cargo: string
  route: string
}

interface MaritimeAnimationProps {
  className?: string
}

export const MaritimeAnimation: React.FC<MaritimeAnimationProps> = ({ className = '' }) => {
  const [ships, setShips] = useState<Ship[]>([])
  const [hoveredShip, setHoveredShip] = useState<string | null>(null)


  const generateShips = () => {
    const newShips: Ship[] = [
      {
        id: 'ship1',
        name: 'MV Ocean Pride',
        x: -200,
        y: 60,
        size: 'large',
        speed: 1.2,
        cargo: '2,450 TEU',
        route: 'Singapore → Penang'
      },
      {
        id: 'ship2',
        name: 'Star Carrier',
        x: -150,
        y: 80,
        size: 'medium',
        speed: 0.8,
        cargo: '850 TEU',
        route: 'Bangkok → George Town'
      },
      {
        id: 'ship3',
        name: 'Port Voyager',
        x: 120,
        y: 40,
        size: 'small',
        speed: 1.5,
        cargo: '340 TEU',
        route: 'KL → Butterworth'
      }
    ]
    setShips(newShips)
  }

  useEffect(() => {
    generateShips()

    const interval = setInterval(() => {
      setShips(prevShips =>
        prevShips.map(ship => ({
          ...ship,
          x: ship.x > window.innerWidth ? -200 : ship.x + ship.speed
        }))
      )
    }, 50)

    return () => clearInterval(interval)
  }, [])

  const getShipIcon = (size: string) => {
    const baseSize = size === 'large' ? 'w-16 h-8' : size === 'medium' ? 'w-12 h-6' : 'w-8 h-4'
    return (
      <svg className={`${baseSize} text-white drop-shadow-lg`} viewBox="0 0 64 32" fill="currentColor">
        <path d="M8 24L8 16L12 16L12 8L52 8L52 16L56 16L56 24L8 24Z" />
        <rect x="16" y="12" width="8" height="8" className="fill-blue-300" />
        <rect x="28" y="12" width="8" height="8" className="fill-blue-300" />
        <rect x="40" y="12" width="8" height="8" className="fill-blue-300" />
        <path d="M4 24L4 20L8 20L8 24L60 24L60 20L64 20L64 28L4 28Z" className="fill-gray-600" />
      </svg>
    )
  }

  const getCraneAnimation = (index: number) => (
    <motion.div
      key={`crane-${index}`}
      className="absolute"
      style={{
        left: `${20 + index * 25}%`,
        top: '30%',
        zIndex: 1
      }}
      animate={{
        rotate: [0, 15, -10, 0],
      }}
      transition={{
        duration: 8,
        repeat: Infinity,
        delay: index * 2,
        ease: "easeInOut"
      }}
    >
      <svg className="w-8 h-16 text-yellow-500 drop-shadow-lg" viewBox="0 0 32 64" fill="currentColor">
        <rect x="14" y="0" width="4" height="48" />
        <rect x="0" y="12" width="32" height="3" />
        <rect x="26" y="15" width="6" height="2" className="fill-red-500" />
        <rect x="12" y="48" width="8" height="16" className="fill-gray-600" />
      </svg>
    </motion.div>
  )

  const getContainerStack = (index: number) => (
    <motion.div
      key={`container-${index}`}
      className="absolute"
      style={{
        left: `${10 + index * 15}%`,
        bottom: '20%',
        zIndex: 1
      }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        delay: index * 1.5,
        ease: "easeInOut"
      }}
    >
      <div className="space-y-1">
        <div className="w-6 h-3 bg-red-500 border border-red-600"></div>
        <div className="w-6 h-3 bg-blue-500 border border-blue-600"></div>
        <div className="w-6 h-3 bg-green-500 border border-green-600"></div>
      </div>
    </motion.div>
  )

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Ocean Background with Waves */}
      <div className="absolute inset-0 bg-gradient-to-b from-sky-200 via-blue-300 to-blue-500">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            backgroundPosition: ['0% 0%', '100% 0%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='30' viewBox='0 0 60 30' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 20 Q15 10 30 20 T60 20 V30 H0 Z' fill='%23ffffff' fill-opacity='0.1'/%3E%3C/svg%3E")`,
            backgroundSize: '60px 30px',
            backgroundRepeat: 'repeat-x'
          }}
        />
      </div>

      {/* Port Infrastructure Background */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Cranes */}
        {[0, 1, 2].map(index => getCraneAnimation(index))}

        {/* Container Stacks */}
        {[0, 1, 2, 3].map(index => getContainerStack(index))}

        {/* Port Buildings Silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-gray-800 to-transparent opacity-60"></div>
      </div>

      {/* Moving Ships */}
      <AnimatePresence>
        {ships.map((ship) => (
          <motion.div
            key={ship.id}
            className="absolute cursor-pointer z-10"
            style={{
              left: ship.x,
              top: `${ship.y}%`,
            }}
            animate={{
              y: [0, -3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            onHoverStart={() => setHoveredShip(ship.id)}
            onHoverEnd={() => setHoveredShip(null)}
            whileHover={{ scale: 1.1 }}
          >
            {getShipIcon(ship.size)}

            {/* Ship Info Tooltip */}
            <AnimatePresence>
              {hoveredShip === ship.id && (
                <motion.div
                  initial={{ opacity: 0, y: 10, scale: 0.8 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10, scale: 0.8 }}
                  className="absolute -top-20 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-xl p-3 min-w-48 z-50"
                >
                  <div className="text-xs font-semibold text-gray-800">{ship.name}</div>
                  <div className="text-xs text-gray-600">{ship.route}</div>
                  <div className="text-xs text-sppp-blue font-medium">{ship.cargo}</div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-full w-0 h-0 border-l-4 border-r-4 border-t-4 border-transparent border-t-white"></div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </AnimatePresence>

      {/* Floating Particles (Seagulls, Cargo indicators) */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${20 + Math.random() * 40}%`,
            }}
            animate={{
              x: [0, 30, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <div className="w-2 h-2 bg-white rounded-full opacity-60"></div>
          </motion.div>
        ))}
      </div>

      {/* Animated Statistics Overlay */}
      <div className="absolute bottom-6 right-6 bg-white/90 backdrop-blur-sm rounded-lg p-4 shadow-lg">
        <div className="text-xs font-semibold text-gray-600 mb-2">Live Port Activity</div>
        <div className="space-y-1">
          <div className="flex justify-between text-xs">
            <span>Ships in Port:</span>
            <motion.span
              className="font-bold text-sppp-blue"
              animate={{ opacity: [1, 0.5, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              {ships.length + 9}
            </motion.span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Berth Usage:</span>
            <span className="font-bold text-green-600">89%</span>
          </div>
          <div className="flex justify-between text-xs">
            <span>Daily TEU:</span>
            <span className="font-bold text-orange-600">2,450</span>
          </div>
        </div>
      </div>
    </div>
  )
}

MaritimeAnimation.displayName = 'MaritimeAnimation'