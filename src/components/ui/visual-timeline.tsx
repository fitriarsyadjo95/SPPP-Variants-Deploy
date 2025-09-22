'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronRightIcon } from '@heroicons/react/24/outline'

interface TimelineItem {
  id: string
  year: string
  title: string
  content: string
  icon: string
  color: string
  type: 'vision' | 'mission' | 'values' | 'milestone'
}

interface VisualTimelineProps {
  items: TimelineItem[]
  className?: string
}

export const VisualTimeline: React.FC<VisualTimelineProps> = ({ items, className = '' }) => {
  const [activeItem, setActiveItem] = useState<string>(items[0]?.id || '')

  const getTypeStyles = (type: string) => {
    switch (type) {
      case 'vision':
        return 'bg-gradient-to-r from-blue-600 to-blue-700'
      case 'mission':
        return 'bg-gradient-to-r from-green-600 to-green-700'
      case 'values':
        return 'bg-gradient-to-r from-purple-600 to-purple-700'
      case 'milestone':
        return 'bg-gradient-to-r from-orange-600 to-orange-700'
      default:
        return 'bg-gradient-to-r from-gray-600 to-gray-700'
    }
  }

  const activeItemData = items.find(item => item.id === activeItem)

  return (
    <div className={`w-full ${className}`}>
      {/* Timeline Navigation */}
      <div className="relative mb-8">
        {/* Timeline Line */}
        <div className="absolute top-1/2 left-0 right-0 h-1 bg-gray-200 transform -translate-y-1/2"></div>

        {/* Timeline Items */}
        <div className="relative flex justify-between items-center">
          {items.map((item) => (
            <motion.button
              key={item.id}
              onClick={() => setActiveItem(item.id)}
              className={`relative flex flex-col items-center p-4 rounded-lg transition-all duration-300 ${
                activeItem === item.id
                  ? 'transform scale-110 shadow-lg'
                  : 'hover:scale-105'
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* Timeline Dot */}
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white text-2xl mb-2 ${
                activeItem === item.id
                  ? getTypeStyles(item.type)
                  : 'bg-gray-400'
              }`}>
                {item.icon}
              </div>

              {/* Year Label */}
              <div className={`text-sm font-semibold ${
                activeItem === item.id
                  ? 'text-sppp-blue'
                  : 'text-gray-500'
              }`}>
                {item.year}
              </div>

              {/* Title */}
              <div className={`text-xs text-center mt-1 ${
                activeItem === item.id
                  ? 'text-sppp-dark-blue font-semibold'
                  : 'text-gray-600'
              }`}>
                {item.title}
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Content Display */}
      <AnimatePresence mode="wait">
        {activeItemData && (
          <motion.div
            key={activeItem}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-xl text-white ${getTypeStyles(activeItemData.type)}`}
          >
            <div className="flex items-center mb-4">
              <div className="text-4xl mr-4">{activeItemData.icon}</div>
              <div>
                <h3 className="text-2xl font-bold">{activeItemData.title}</h3>
                <p className="text-white/80">{activeItemData.year}</p>
              </div>
            </div>

            <div className="text-lg leading-relaxed">
              {activeItemData.content}
            </div>

            {/* Navigation Arrows */}
            <div className="flex justify-between mt-6">
              <button
                onClick={() => {
                  const currentIndex = items.findIndex(item => item.id === activeItem)
                  const prevIndex = currentIndex > 0 ? currentIndex - 1 : items.length - 1
                  setActiveItem(items[prevIndex].id)
                }}
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                <ChevronRightIcon className="w-5 h-5 rotate-180 mr-2" />
                Sebelumnya
              </button>

              <button
                onClick={() => {
                  const currentIndex = items.findIndex(item => item.id === activeItem)
                  const nextIndex = currentIndex < items.length - 1 ? currentIndex + 1 : 0
                  setActiveItem(items[nextIndex].id)
                }}
                className="flex items-center text-white/80 hover:text-white transition-colors"
              >
                Seterusnya
                <ChevronRightIcon className="w-5 h-5 ml-2" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Indicator */}
      <div className="mt-6 flex justify-center space-x-2">
        {items.map((item) => (
          <div
            key={item.id}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              activeItem === item.id
                ? 'bg-sppp-blue scale-125'
                : 'bg-gray-300 hover:bg-gray-400 cursor-pointer'
            }`}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>
    </div>
  )
}

VisualTimeline.displayName = 'VisualTimeline'