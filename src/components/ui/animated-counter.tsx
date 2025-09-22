'use client'

import React, { useEffect, useRef, useState } from 'react'
import { motion, useInView, useMotionValue, useSpring, useTransform } from 'framer-motion'

interface AnimatedCounterProps {
  from?: number
  to: number
  duration?: number
  suffix?: string
  prefix?: string
  className?: string
  delay?: number
  decimals?: number
}

export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  from = 0,
  to,
  duration = 2,
  suffix = '',
  prefix = '',
  className = '',
  delay = 0,
  decimals = 0
}) => {
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  const motionValue = useMotionValue(from)
  const springValue = useSpring(motionValue, {
    duration: duration * 1000,
    bounce: 0,
  })
  const displayed = useTransform(springValue, (latest) =>
    (Math.round(latest * Math.pow(10, decimals)) / Math.pow(10, decimals)).toFixed(decimals)
  )

  const [displayValue, setDisplayValue] = useState(from.toFixed(decimals))

  useEffect(() => {
    const unsubscribe = displayed.on('change', (latest) => {
      setDisplayValue(latest)
    })

    return unsubscribe
  }, [displayed])

  useEffect(() => {
    if (isInView) {
      const timer = setTimeout(() => {
        motionValue.set(to)
      }, delay * 1000)

      return () => clearTimeout(timer)
    }
  }, [isInView, to, delay, motionValue])

  return (
    <motion.span
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: delay }}
    >
      {prefix}{displayValue}{suffix}
    </motion.span>
  )
}

interface CounterCardProps {
  icon: React.ReactNode
  value: number
  suffix?: string
  prefix?: string
  label: string
  description?: string
  color?: string
  delay?: number
  decimals?: number
}

export const CounterCard: React.FC<CounterCardProps> = ({
  icon,
  value,
  suffix = '',
  prefix = '',
  label,
  description,
  color = 'blue',
  delay = 0,
  decimals = 0
}) => {
  const colorClasses = {
    blue: 'from-blue-500 to-blue-600 text-blue-600',
    green: 'from-green-500 to-green-600 text-green-600',
    purple: 'from-purple-500 to-purple-600 text-purple-600',
    orange: 'from-orange-500 to-orange-600 text-orange-600',
    red: 'from-red-500 to-red-600 text-red-600',
    teal: 'from-teal-500 to-teal-600 text-teal-600'
  }

  const gradientClass = colorClasses[color as keyof typeof colorClasses]?.split(' ')[0] + ' ' + colorClasses[color as keyof typeof colorClasses]?.split(' ')[1]
  const textColorClass = colorClasses[color as keyof typeof colorClasses]?.split(' ')[2]

  return (
    <motion.div
      className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay }}
      whileHover={{ scale: 1.02 }}
    >
      <div className="flex items-center justify-between mb-4">
        <div className={`w-12 h-12 bg-gradient-to-br ${gradientClass} rounded-lg flex items-center justify-center text-white`}>
          {icon}
        </div>
        <motion.div
          className={`text-3xl font-bold ${textColorClass}`}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: delay + 0.3, type: "spring", bounce: 0.4 }}
        >
          <AnimatedCounter
            to={value}
            suffix={suffix}
            prefix={prefix}
            delay={delay + 0.5}
            decimals={decimals}
          />
        </motion.div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-800 mb-1">
          {label}
        </h3>
        {description && (
          <p className="text-sm text-gray-600">
            {description}
          </p>
        )}
      </div>
    </motion.div>
  )
}

interface AnimatedStatsGridProps {
  stats: {
    icon: React.ReactNode
    value: number
    suffix?: string
    prefix?: string
    label: string
    description?: string
    color?: string
    decimals?: number
  }[]
  title?: string
  subtitle?: string
  className?: string
}

export const AnimatedStatsGrid: React.FC<AnimatedStatsGridProps> = ({
  stats,
  title,
  subtitle,
  className = ''
}) => {
  return (
    <div className={`w-full ${className}`}>
      {(title || subtitle) && (
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {title && (
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              {subtitle}
            </p>
          )}
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <CounterCard
            key={index}
            icon={stat.icon}
            value={stat.value}
            suffix={stat.suffix}
            prefix={stat.prefix}
            label={stat.label}
            description={stat.description}
            color={stat.color}
            delay={index * 0.1}
            decimals={stat.decimals || 0}
          />
        ))}
      </div>
    </div>
  )
}

AnimatedCounter.displayName = 'AnimatedCounter'
CounterCard.displayName = 'CounterCard'
AnimatedStatsGrid.displayName = 'AnimatedStatsGrid'