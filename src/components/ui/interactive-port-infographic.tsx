'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Container, Ship, Building, Truck, Settings, MapPin } from 'lucide-react'

interface FacilityData {
  id: string
  name: string
  category: 'terminal' | 'wharf' | 'storage' | 'support' | 'transport'
  description: string
  capacity: string
  area: string
  features: string[]
  position: { x: number; y: number }
  icon: React.ElementType
  color: string
}

interface InteractivePortInfographicProps {
  className?: string
}

const facilitiesData: FacilityData[] = [
  {
    id: 'container-terminal-1',
    name: 'Terminal Kontena 1',
    category: 'terminal',
    description: 'Terminal kontena utama dengan kemudahan moden',
    capacity: '1.5 juta TEU/tahun',
    area: '45 hektar',
    features: ['TOS Automatik', 'Pemeriksaan Kastam', 'Keselamatan 24/7', 'Cold Storage'],
    position: { x: 25, y: 35 },
    icon: Container,
    color: '#3b82f6'
  },
  {
    id: 'container-terminal-2',
    name: 'Terminal Kontena 2',
    category: 'terminal',
    description: 'Terminal kontena dengan teknologi terkini',
    capacity: '1.2 juta TEU/tahun',
    area: '38 hektar',
    features: ['ULCS Support', 'Real-time Tracking', 'Container Repair', 'IT Integration'],
    position: { x: 45, y: 30 },
    icon: Container,
    color: '#3b82f6'
  },
  {
    id: 'conventional-wharf',
    name: 'Dermaga Konvensional',
    category: 'wharf',
    description: 'Dermaga untuk kargo am dan kenderaan',
    capacity: '2.5 juta tan metrik/tahun',
    area: '25 hektar',
    features: ['Kargo Konvensional', 'Terminal RoRo', 'Kargo Berat', 'Storage Yard'],
    position: { x: 60, y: 45 },
    icon: Ship,
    color: '#10b981'
  },
  {
    id: 'bulk-terminal',
    name: 'Terminal Kargo Pukal',
    category: 'wharf',
    description: 'Kemudahan kargo pukal khusus',
    capacity: '3 juta tan metrik/tahun',
    area: '15 hektar',
    features: ['Pneumatic System', 'Silo Storage', 'Dust Suppression', 'Testing Facility'],
    position: { x: 70, y: 60 },
    icon: Ship,
    color: '#10b981'
  },
  {
    id: 'warehouse-complex',
    name: 'Kompleks Gudang',
    category: 'storage',
    description: 'Gudang moden untuk penyimpanan',
    capacity: '200,000 tan metrik',
    area: '20 hektar',
    features: ['Climate Control', 'Cold Storage', 'Security System', 'Material Handling'],
    position: { x: 35, y: 55 },
    icon: Building,
    color: '#f59e0b'
  },
  {
    id: 'truck-terminal',
    name: 'Terminal Trak',
    category: 'transport',
    description: 'Kemudahan untuk trak dan kenderaan',
    capacity: '500 trak',
    area: '10 hektar',
    features: ['Electronic Gate', 'Appointment System', 'Driver Facilities', 'Fuel Station'],
    position: { x: 15, y: 70 },
    icon: Truck,
    color: '#ef4444'
  },
  {
    id: 'admin-complex',
    name: 'Kompleks Pentadbiran',
    category: 'support',
    description: 'Bangunan pentadbiran dan operasi',
    capacity: '8 tingkat',
    area: '2 hektar',
    features: ['Control Center', 'Customs Office', 'Conference Facilities', 'Staff Amenities'],
    position: { x: 50, y: 75 },
    icon: Building,
    color: '#8b5cf6'
  },
  {
    id: 'maintenance-facility',
    name: 'Kemudahan Penyelenggaraan',
    category: 'support',
    description: 'Workshop dan penyelenggaraan',
    capacity: '50 tan capacity',
    area: '3 hektar',
    features: ['Crane Maintenance', 'Electrical Repair', 'Parts Inventory', '24/7 Emergency'],
    position: { x: 80, y: 25 },
    icon: Settings,
    color: '#8b5cf6'
  }
]

const categoryStats = {
  terminal: { count: 2, totalCapacity: '2.7M TEU/year', color: '#3b82f6' },
  wharf: { count: 2, totalCapacity: '5.5M MT/year', color: '#10b981' },
  storage: { count: 1, totalCapacity: '200K MT', color: '#f59e0b' },
  transport: { count: 1, totalCapacity: '500 trucks', color: '#ef4444' },
  support: { count: 2, totalCapacity: '8 buildings', color: '#8b5cf6' }
}

export const InteractivePortInfographic: React.FC<InteractivePortInfographicProps> = ({ className = '' }) => {
  const [selectedFacility, setSelectedFacility] = useState<string | null>(null)
  const [hoveredFacility, setHoveredFacility] = useState<string | null>(null)
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null)

  const selectedFacilityData = selectedFacility ? facilitiesData.find(f => f.id === selectedFacility) : null

  const filteredFacilities = selectedCategory
    ? facilitiesData.filter(f => f.category === selectedCategory)
    : facilitiesData

  return (
    <div className={`w-full ${className}`}>
      {/* Category Filter */}
      <div className="mb-8">
        <h3 className="text-lg font-semibold text-gray-800 mb-4">Kategori Kemudahan</h3>
        <div className="flex flex-wrap gap-3">
          <button
            onClick={() => setSelectedCategory(null)}
            className={`px-4 py-2 rounded-full transition-all ${
              !selectedCategory
                ? 'bg-gray-800 text-white'
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
          >
            Semua
          </button>
          {Object.entries(categoryStats).map(([category, stats]) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-all flex items-center ${
                selectedCategory === category
                  ? 'text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
              style={{
                backgroundColor: selectedCategory === category ? stats.color : undefined
              }}
            >
              {category === 'terminal' && 'Terminal'}
              {category === 'wharf' && 'Dermaga'}
              {category === 'storage' && 'Penyimpanan'}
              {category === 'transport' && 'Pengangkutan'}
              {category === 'support' && 'Sokongan'}
              <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                {stats.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Main Infographic */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Port Layout Visualization */}
        <div className="lg:col-span-2">
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6 relative h-96 overflow-hidden">
            <h4 className="text-lg font-semibold text-gray-800 mb-4">Layout Pelabuhan Interaktif</h4>

            {/* Port Background */}
            <div className="absolute inset-0 bg-gradient-to-b from-sky-200/30 to-blue-300/30"></div>

            {/* Water Area */}
            <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-blue-400/40 to-blue-300/20 rounded-b-xl"></div>

            {/* Facilities Points */}
            {filteredFacilities.map((facility) => {
              const IconComponent = facility.icon
              const isSelected = selectedFacility === facility.id
              const isHovered = hoveredFacility === facility.id

              return (
                <motion.button
                  key={facility.id}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 z-10"
                  style={{
                    left: `${facility.position.x}%`,
                    top: `${facility.position.y}%`
                  }}
                  onClick={() => setSelectedFacility(facility.id)}
                  onMouseEnter={() => setHoveredFacility(facility.id)}
                  onMouseLeave={() => setHoveredFacility(null)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  animate={{
                    scale: isSelected ? 1.2 : 1,
                  }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center text-white shadow-lg transition-all duration-200 ${
                      isSelected || isHovered ? 'shadow-xl' : 'shadow-md'
                    }`}
                    style={{ backgroundColor: facility.color }}
                  >
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Facility Label */}
                  <AnimatePresence>
                    {(isSelected || isHovered) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 10 }}
                        className="absolute top-full mt-2 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg px-3 py-2 min-w-max"
                      >
                        <div className="text-sm font-semibold text-gray-800">
                          {facility.name}
                        </div>
                        <div className="text-xs text-gray-600">
                          {facility.area}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.button>
              )
            })}
          </div>
        </div>

        {/* Facility Details Panel */}
        <div className="bg-white rounded-xl shadow-lg p-6">
          <AnimatePresence mode="wait">
            {selectedFacilityData ? (
              <motion.div
                key={selectedFacilityData.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="flex items-center mb-4">
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center text-white mr-4"
                    style={{ backgroundColor: selectedFacilityData.color }}
                  >
                    <selectedFacilityData.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-800">
                      {selectedFacilityData.name}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {selectedFacilityData.area}
                    </p>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  {selectedFacilityData.description}
                </p>

                <div className="mb-4 p-3 bg-blue-50 rounded-lg">
                  <div className="text-sm font-semibold text-blue-900 mb-1">
                    Kapasiti
                  </div>
                  <div className="text-lg font-bold text-blue-700">
                    {selectedFacilityData.capacity}
                  </div>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Ciri-ciri Utama:
                  </h4>
                  <ul className="space-y-2">
                    {selectedFacilityData.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <MapPin className="w-16 h-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-gray-600 mb-2">
                  Pilih Kemudahan
                </h3>
                <p className="text-gray-500 text-sm">
                  Klik pada mana-mana kemudahan di sebelah kiri untuk melihat maklumat terperinci
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Statistics Summary */}
      <div className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4">
        {Object.entries(categoryStats).map(([category, stats]) => (
          <div
            key={category}
            className="bg-white rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedCategory(category === selectedCategory ? null : category)}
          >
            <div
              className="text-2xl font-bold mb-1"
              style={{ color: stats.color }}
            >
              {stats.count}
            </div>
            <div className="text-xs text-gray-600 mb-1">
              {category === 'terminal' && 'Terminal'}
              {category === 'wharf' && 'Dermaga'}
              {category === 'storage' && 'Penyimpanan'}
              {category === 'transport' && 'Pengangkutan'}
              {category === 'support' && 'Sokongan'}
            </div>
            <div className="text-xs text-gray-500">
              {stats.totalCapacity}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

InteractivePortInfographic.displayName = 'InteractivePortInfographic'