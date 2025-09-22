'use client'

import React, { useState } from 'react'
import { MapPinIcon, GlobeAsiaAustraliaIcon, BuildingOfficeIcon, TruckIcon } from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'

interface PortLocation {
  id: string
  name: string
  nameEn: string
  type: 'container' | 'cruise' | 'tanker' | 'general'
  coordinates: { x: number; y: number }
  description: string
  descriptionEn: string
  facilities: string[]
  facilitiesEn: string[]
}

const langkawiPorts: PortLocation[] = [
  {
    id: 'teluk-ewa',
    name: 'Pelabuhan Teluk Ewa',
    nameEn: 'Teluk Ewa Port',
    type: 'general',
    coordinates: { x: 35, y: 15 },
    description: 'Pelabuhan utama di Langkawi untuk perkhidmatan feri dan kargo am',
    descriptionEn: 'Main port in Langkawi for ferry services and general cargo',
    facilities: ['Terminal Feri', 'Dermaga Kargo', 'Kemudahan Penumpang'],
    facilitiesEn: ['Ferry Terminal', 'Cargo Wharf', 'Passenger Facilities']
  }
]

const penangPorts: PortLocation[] = [
  {
    id: 'north-butterworth',
    name: 'Terminal Kontena Butterworth Utara',
    nameEn: 'North Butterworth Container Terminal',
    type: 'container',
    coordinates: { x: 45, y: 25 },
    description: 'Terminal kontena moden dengan kemudahan automatik',
    descriptionEn: 'Modern container terminal with automated facilities',
    facilities: ['Kontena', 'Kren Automatik', 'Stor Sejuk'],
    facilitiesEn: ['Container', 'Automated Cranes', 'Cold Storage']
  },
  {
    id: 'swettenham-pier',
    name: 'Terminal Pelayaran Swettenham Pier',
    nameEn: 'Swettenham Pier Cruise Terminal',
    type: 'cruise',
    coordinates: { x: 55, y: 35 },
    description: 'Terminal mewah untuk kapal pelayaran antarabangsa',
    descriptionEn: 'Luxury terminal for international cruise ships',
    facilities: ['Terminal Mewah', 'Kemudahan VIP', 'Pusat Beli-belah'],
    facilitiesEn: ['Luxury Terminal', 'VIP Facilities', 'Shopping Center']
  },
  {
    id: 'butterworth-deep',
    name: 'Dermaga Air Dalam Butterworth',
    nameEn: 'Butterworth Deep Water Wharves',
    type: 'general',
    coordinates: { x: 50, y: 40 },
    description: 'Dermaga air dalam untuk kapal kargo besar',
    descriptionEn: 'Deep water wharves for large cargo vessels',
    facilities: ['Air Dalam', 'Kargo Berat', 'Kemudahan Ro-Ro'],
    facilitiesEn: ['Deep Water', 'Heavy Cargo', 'Ro-Ro Facilities']
  },
  {
    id: 'prai-wharves',
    name: 'Dermaga Prai - Pelabuhan Pulau Pinang',
    nameEn: 'Penang Port - Prai Wharves',
    type: 'general',
    coordinates: { x: 60, y: 45 },
    description: 'Pusat utama aktiviti pelabuhan dengan pelbagai kemudahan',
    descriptionEn: 'Main hub of port activities with various facilities',
    facilities: ['Pelbagai Kargo', 'Pemprosesan', 'Logistik'],
    facilitiesEn: ['Multi-Cargo', 'Processing', 'Logistics']
  },
  {
    id: 'vegetable-oil',
    name: 'Dermaga Kapal Tangki Minyak Sayuran',
    nameEn: 'Penang Vegetable Oil Tanker Pier',
    type: 'tanker',
    coordinates: { x: 40, y: 50 },
    description: 'Kemudahan khusus untuk pengendalian minyak sayuran',
    descriptionEn: 'Specialized facility for vegetable oil handling',
    facilities: ['Tangki Minyak', 'Pipeline', 'Pemprosesan'],
    facilitiesEn: ['Oil Tanks', 'Pipeline', 'Processing']
  }
]

export const InteractiveMaps: React.FC = () => {
  const { t, language } = useLanguage()
  const [activeMap, setActiveMap] = useState<'langkawi' | 'penang'>('penang')
  const [selectedPort, setSelectedPort] = useState<PortLocation | null>(null)

  const currentPorts = activeMap === 'langkawi' ? langkawiPorts : penangPorts

  const getPortTypeIcon = (type: string) => {
    switch (type) {
      case 'container':
        return <BuildingOfficeIcon className="w-4 h-4" />
      case 'cruise':
        return <GlobeAsiaAustraliaIcon className="w-4 h-4" />
      case 'tanker':
        return <TruckIcon className="w-4 h-4" />
      default:
        return <MapPinIcon className="w-4 h-4" />
    }
  }

  const getPortTypeColor = (type: string) => {
    switch (type) {
      case 'container':
        return 'bg-blue-500'
      case 'cruise':
        return 'bg-purple-500'
      case 'tanker':
        return 'bg-orange-500'
      default:
        return 'bg-sppp-blue'
    }
  }

  return (
    <section className="py-16 bg-gradient-to-br from-blue-50 to-cyan-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <MapPinIcon className="h-12 w-12 mx-auto mb-4 text-sppp-blue" />
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue mb-4">
            {t('interactive-maps-title', 'Peta Interaktif Pelabuhan', 'Interactive Port Maps')}
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            {t('maps-description',
              'Jelajahi lokasi strategik pelabuhan SPPP di Pulau Pinang dan Langkawi dengan peta interaktif yang terperinci.',
              'Explore strategic locations of SPPP ports in Penang and Langkawi with detailed interactive maps.'
            )}
          </p>
        </div>

        {/* Map Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white rounded-lg shadow-lg p-1 flex">
            <button
              onClick={() => setActiveMap('penang')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeMap === 'penang'
                  ? 'bg-sppp-blue text-white shadow-md'
                  : 'text-gray-600 hover:text-sppp-blue'
              }`}
            >
              {t('penang-map', 'Peta Pulau Pinang', 'Penang Map')}
            </button>
            <button
              onClick={() => setActiveMap('langkawi')}
              className={`px-6 py-3 rounded-md font-medium transition-all duration-200 ${
                activeMap === 'langkawi'
                  ? 'bg-sppp-blue text-white shadow-md'
                  : 'text-gray-600 hover:text-sppp-blue'
              }`}
            >
              {t('langkawi-map', 'Peta Langkawi', 'Langkawi Map')}
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Interactive Map */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-6 border-b border-gray-200">
                <h3 className="text-xl font-bold text-gray-900">
                  {activeMap === 'langkawi'
                    ? t('langkawi-ports', 'Pelabuhan Langkawi', 'Langkawi Ports')
                    : t('penang-ports', 'Pelabuhan Pulau Pinang', 'Penang Ports')
                  }
                </h3>
                <p className="text-gray-600 text-sm mt-1">
                  {t('click-markers', 'Klik pada penanda untuk maklumat lanjut', 'Click on markers for more information')}
                </p>
              </div>

              {/* SVG Map Container */}
              <div className="relative bg-gradient-to-br from-blue-100 to-blue-200 h-96">
                <svg
                  viewBox="0 0 100 70"
                  className="w-full h-full"
                  preserveAspectRatio="xMidYMid meet"
                >
                  {/* Background landmass */}
                  {activeMap === 'langkawi' ? (
                    // Langkawi island shape
                    <path
                      d="M15 20 Q25 15 35 18 Q45 22 55 25 Q65 30 70 40 Q68 50 60 55 Q50 60 40 58 Q30 55 25 50 Q20 45 18 35 Q15 25 15 20 Z"
                      fill="#10b981"
                      stroke="#059669"
                      strokeWidth="0.5"
                      opacity="0.8"
                    />
                  ) : (
                    // Penang mainland and island
                    <>
                      {/* Penang Island */}
                      <ellipse
                        cx="65"
                        cy="35"
                        rx="8"
                        ry="12"
                        fill="#10b981"
                        stroke="#059669"
                        strokeWidth="0.5"
                        opacity="0.8"
                      />
                      {/* Mainland */}
                      <path
                        d="M30 20 Q40 18 50 25 Q55 35 52 45 Q48 55 40 60 Q32 58 28 50 Q25 40 27 30 Q28 25 30 20 Z"
                        fill="#10b981"
                        stroke="#059669"
                        strokeWidth="0.5"
                        opacity="0.8"
                      />
                    </>
                  )}

                  {/* Water areas */}
                  <defs>
                    <pattern id="water" x="0" y="0" width="10" height="10" patternUnits="userSpaceOnUse">
                      <rect width="10" height="10" fill="#3b82f6" opacity="0.1"/>
                      <path d="M0,5 Q2.5,3 5,5 Q7.5,7 10,5" stroke="#3b82f6" strokeWidth="0.5" fill="none" opacity="0.3"/>
                    </pattern>
                  </defs>
                  <rect width="100" height="70" fill="url(#water)" />

                  {/* Port markers */}
                  {currentPorts.map((port) => (
                    <g key={port.id}>
                      {/* Port marker */}
                      <circle
                        cx={port.coordinates.x}
                        cy={port.coordinates.y}
                        r="2"
                        className={`${getPortTypeColor(port.type)} cursor-pointer transition-all duration-200 hover:r-3`}
                        onClick={() => setSelectedPort(port)}
                        style={{
                          filter: selectedPort?.id === port.id ? 'drop-shadow(0 0 5px rgba(0,0,0,0.5))' : 'none'
                        }}
                      />
                      {/* Port label */}
                      <text
                        x={port.coordinates.x}
                        y={port.coordinates.y - 3}
                        textAnchor="middle"
                        className="text-xs font-medium fill-gray-800 cursor-pointer"
                        onClick={() => setSelectedPort(port)}
                      >
                        {language === 'BM' ? port.name.split(' ').slice(-2).join(' ') : port.nameEn.split(' ').slice(-2).join(' ')}
                      </text>
                    </g>
                  ))}
                </svg>

                {/* Legend */}
                <div className="absolute bottom-4 left-4 bg-white rounded-lg shadow-lg p-3">
                  <h4 className="text-sm font-semibold text-gray-800 mb-2">
                    {t('legend', 'Legenda', 'Legend')}
                  </h4>
                  <div className="space-y-1">
                    <div className="flex items-center text-xs">
                      <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
                      {t('container-terminal', 'Terminal Kontena', 'Container Terminal')}
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="w-3 h-3 bg-purple-500 rounded-full mr-2"></div>
                      {t('cruise-terminal', 'Terminal Pelayaran', 'Cruise Terminal')}
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="w-3 h-3 bg-orange-500 rounded-full mr-2"></div>
                      {t('tanker-pier', 'Dermaga Tangki', 'Tanker Pier')}
                    </div>
                    <div className="flex items-center text-xs">
                      <div className="w-3 h-3 bg-sppp-blue rounded-full mr-2"></div>
                      {t('general-port', 'Pelabuhan Am', 'General Port')}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Port Details Panel */}
          <div className="space-y-6">
            {/* Current Selection */}
            {selectedPort ? (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center">
                    <div className={`p-2 rounded-lg ${getPortTypeColor(selectedPort.type)} text-white mr-3`}>
                      {getPortTypeIcon(selectedPort.type)}
                    </div>
                    <div>
                      <h3 className="font-bold text-gray-900">
                        {language === 'BM' ? selectedPort.name : selectedPort.nameEn}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {t('port-type-' + selectedPort.type,
                          selectedPort.type === 'container' ? 'Terminal Kontena' :
                          selectedPort.type === 'cruise' ? 'Terminal Pelayaran' :
                          selectedPort.type === 'tanker' ? 'Dermaga Tangki' : 'Pelabuhan Am',
                          selectedPort.type === 'container' ? 'Container Terminal' :
                          selectedPort.type === 'cruise' ? 'Cruise Terminal' :
                          selectedPort.type === 'tanker' ? 'Tanker Pier' : 'General Port'
                        )}
                      </p>
                    </div>
                  </div>
                </div>

                <p className="text-gray-700 mb-4">
                  {language === 'BM' ? selectedPort.description : selectedPort.descriptionEn}
                </p>

                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">
                    {t('facilities', 'Kemudahan', 'Facilities')}
                  </h4>
                  <div className="space-y-1">
                    {(language === 'BM' ? selectedPort.facilities : selectedPort.facilitiesEn).map((facility, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-sppp-blue rounded-full mr-2"></div>
                        {facility}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-lg p-6 text-center">
                <MapPinIcon className="h-12 w-12 mx-auto mb-3 text-gray-400" />
                <h3 className="font-semibold text-gray-900 mb-2">
                  {t('select-port', 'Pilih Pelabuhan', 'Select a Port')}
                </h3>
                <p className="text-gray-600 text-sm">
                  {t('select-port-instruction',
                    'Klik pada mana-mana penanda di peta untuk melihat maklumat terperinci pelabuhan.',
                    'Click on any marker on the map to view detailed port information.'
                  )}
                </p>
              </div>
            )}

            {/* Port List */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="font-bold text-gray-900 mb-4">
                {activeMap === 'langkawi'
                  ? t('langkawi-ports-list', 'Senarai Pelabuhan Langkawi', 'Langkawi Ports List')
                  : t('penang-ports-list', 'Senarai Pelabuhan Pulau Pinang', 'Penang Ports List')
                }
              </h3>
              <div className="space-y-3">
                {currentPorts.map((port) => (
                  <button
                    key={port.id}
                    onClick={() => setSelectedPort(port)}
                    className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                      selectedPort?.id === port.id
                        ? 'bg-sppp-blue text-white'
                        : 'bg-gray-50 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center">
                      <div className={`p-1.5 rounded ${
                        selectedPort?.id === port.id ? 'bg-white text-sppp-blue' : `${getPortTypeColor(port.type)} text-white`
                      } mr-3`}>
                        {getPortTypeIcon(port.type)}
                      </div>
                      <div>
                        <div className="font-medium text-sm">
                          {language === 'BM' ? port.name : port.nameEn}
                        </div>
                        <div className={`text-xs ${
                          selectedPort?.id === port.id ? 'text-blue-100' : 'text-gray-500'
                        }`}>
                          {t('port-type-' + port.type,
                            port.type === 'container' ? 'Terminal Kontena' :
                            port.type === 'cruise' ? 'Terminal Pelayaran' :
                            port.type === 'tanker' ? 'Dermaga Tangki' : 'Pelabuhan Am',
                            port.type === 'container' ? 'Container Terminal' :
                            port.type === 'cruise' ? 'Cruise Terminal' :
                            port.type === 'tanker' ? 'Tanker Pier' : 'General Port'
                          )}
                        </div>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-12 bg-white rounded-xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-center text-sppp-dark-blue mb-8">
            {t('port-statistics', 'Statistik Pelabuhan SPPP', 'SPPP Port Statistics')}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-sppp-blue mb-2">6</div>
              <div className="text-gray-600 text-sm">
                {t('total-ports', 'Jumlah Pelabuhan', 'Total Ports')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sppp-blue mb-2">2</div>
              <div className="text-gray-600 text-sm">
                {t('locations', 'Lokasi Utama', 'Main Locations')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sppp-blue mb-2">24/7</div>
              <div className="text-gray-600 text-sm">
                {t('operations', 'Operasi Berterusan', 'Continuous Operations')}
              </div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-sppp-blue mb-2">100%</div>
              <div className="text-gray-600 text-sm">
                {t('coverage', 'Liputan Kawasan', 'Area Coverage')}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

InteractiveMaps.displayName = 'InteractiveMaps'