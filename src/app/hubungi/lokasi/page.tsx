'use client'

import { useState } from 'react'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { PhoneIcon } from '@heroicons/react/24/outline'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { ClockIcon } from '@heroicons/react/24/outline'
import { BuildingOfficeIcon } from '@heroicons/react/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline'
import { UserGroupIcon } from '@heroicons/react/24/outline'
import { TruckIcon } from '@heroicons/react/24/outline'
import { WrenchScrewdriverIcon } from '@heroicons/react/24/outline'

const locations = [
  {
    id: 'headquarters',
    name: 'Pejabat Utama SPPP',
    type: 'Ibu Pejabat',
    address: 'Aras 2, Swettenham Pier Cruise Terminal, No.1A, Pesara King Edward, 10300 George Town, Pulau Pinang',
    phone: '04-263 3211',
    fax: '04-262 6211',
    email: 'sppp@penangport.gov.my',
    hours: 'Isnin - Jumaat: 8:00 AM - 5:00 PM',
    coordinates: { lat: 5.4164, lng: 100.3327 },
    services: ['Pentadbiran Utama', 'Perkhidmatan Pelanggan', 'Lesen & Permit'],
    icon: BuildingOfficeIcon,
    color: 'blue'
  },
  {
    id: 'butterworth-ops',
    name: 'Unit Operasi Butterworth',
    type: 'Pejabat Operasi',
    address: 'NB Tower, 5050 Jalan Bagan Luar, 12000 Butterworth, Penang',
    phone: '04-263 3211',
    email: 'operations@penangport.gov.my',
    hours: 'Isnin - Jumaat: 8:00 AM - 5:00 PM',
    coordinates: { lat: 5.4009, lng: 100.3696 },
    services: ['Operasi Pelabuhan', 'Pengurusan Kapal', 'Pengawasan Trafik'],
    icon: TruckIcon,
    color: 'green'
  },
  {
    id: 'butterworth-eng',
    name: 'Unit Kejuruteraan & Trafik Feri',
    type: 'Pejabat Teknikal',
    address: 'NB Tower, 5050 Jalan Bagan Luar, 12000 Butterworth, Penang',
    phone: '04-263 3211',
    email: 'engineering@penangport.gov.my',
    hours: 'Isnin - Jumaat: 8:00 AM - 5:00 PM',
    coordinates: { lat: 5.4009, lng: 100.3696 },
    services: ['Kejuruteraan', 'Penyelenggaraan', 'Perkhidmatan Feri'],
    icon: WrenchScrewdriverIcon,
    color: 'orange'
  },
  {
    id: 'butterworth-fcz',
    name: 'Unit Zon Bebas Komersil',
    type: 'Pejabat Zon Bebas',
    address: 'NB Tower, 5050 Jalan Bagan Luar, 12000 Butterworth, Penang',
    phone: '04-263 3211',
    email: 'fcz@penangport.gov.my',
    hours: 'Isnin - Jumaat: 8:00 AM - 5:00 PM',
    coordinates: { lat: 5.4009, lng: 100.3696 },
    services: ['Zon Bebas Komersil', 'Kastam', 'Pergudangan'],
    icon: BuildingOfficeIcon,
    color: 'purple'
  },
  {
    id: 'langkawi',
    name: 'Pejabat Langkawi',
    type: 'Pejabat Cawangan',
    address: 'Kedah Cement Jetty Sdn. Bhd., Terminal Teluk Ewa, 07000 Langkawi, Kedah',
    phone: '04-263 3211',
    email: 'langkawi@penangport.gov.my',
    hours: 'Isnin - Jumaat: 8:00 AM - 5:00 PM',
    coordinates: { lat: 6.3500, lng: 99.7500 },
    services: ['Operasi Teluk Ewa', 'Pengurusan Kargo', 'Jeti Simen'],
    icon: UserGroupIcon,
    color: 'teal'
  }
]

export default function LokasiPage() {
  const [selectedLocation, setSelectedLocation] = useState(locations[0])
  const [, setMapCenter] = useState(locations[0].coordinates)

  const getColorClasses = (color: string) => {
    const colors = {
      blue: 'bg-blue-50 border-blue-200 text-blue-800',
      green: 'bg-green-50 border-green-200 text-green-800',
      orange: 'bg-orange-50 border-orange-200 text-orange-800',
      purple: 'bg-purple-50 border-purple-200 text-purple-800',
      teal: 'bg-teal-50 border-teal-200 text-teal-800'
    }
    return colors[color as keyof typeof colors] || colors.blue
  }

  const handleLocationClick = (location: typeof locations[0]) => {
    setSelectedLocation(location)
    setMapCenter(location.coordinates)
  }

  const getDirectionsUrl = (location: typeof locations[0]) => {
    return `https://www.google.com/maps/dir/?api=1&destination=${location.coordinates.lat},${location.coordinates.lng}&destination_place_id=${encodeURIComponent(location.name)}`
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-gradient-to-r from-sppp-dark-blue to-sppp-blue text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-16">
          <div className="text-center">
            <MapPinIcon className="h-12 w-12 sm:h-16 sm:w-16 mx-auto mb-4 text-blue-200" />
            <h1 className="text-2xl sm:text-4xl font-bold mb-4">Lokasi Pejabat SPPP</h1>
            <p className="text-base sm:text-xl text-blue-200 max-w-3xl mx-auto px-4">
              Temui lokasi pejabat dan kemudahan Suruhanjaya Pelabuhan Pulau Pinang di seluruh negeri
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-12">
        {/* Mobile Location Selector */}
        <section className="mb-6 lg:hidden">
          <div className="bg-white rounded-lg shadow-lg p-4">
            <h2 className="text-lg font-bold text-sppp-dark-blue mb-4 flex items-center">
              <MapPinIcon className="h-5 w-5 mr-2" />
              Pilih Lokasi
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {locations.map((location) => (
                <button
                  key={location.id}
                  onClick={() => handleLocationClick(location)}
                  className={`text-left p-3 rounded-lg border-2 transition-all duration-200 ${
                    selectedLocation.id === location.id
                      ? getColorClasses(location.color) + ' shadow-md'
                      : 'bg-white border-gray-200 hover:border-sppp-blue'
                  }`}
                >
                  <div className="flex items-center">
                    <location.icon className={`h-4 w-4 mr-2 flex-shrink-0 ${
                      selectedLocation.id === location.id ? '' : 'text-sppp-blue'
                    }`} />
                    <div className="min-w-0">
                      <div className="font-medium text-sm truncate">{location.name}</div>
                      <div className={`text-xs ${
                        selectedLocation.id === location.id ? '' : 'text-sppp-gray'
                      }`}>
                        {location.type}
                      </div>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Interactive Map Section - Desktop */}
        <section className="mb-12 hidden lg:block">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-6 border-b">
              <h2 className="text-2xl font-bold text-sppp-dark-blue flex items-center">
                <MagnifyingGlassIcon className="h-6 w-6 mr-2" />
                Peta Interaktif Lokasi
              </h2>
              <p className="text-sppp-gray mt-2">
                Klik pada lokasi di sebelah kiri untuk melihat butiran dan mendapatkan arah
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px]">
              {/* Location List */}
              <div className="lg:border-r bg-gray-50 p-6">
                <h3 className="text-lg font-semibold text-sppp-dark-blue mb-4">Senarai Lokasi</h3>
                <div className="space-y-3">
                  {locations.map((location) => (
                    <button
                      key={location.id}
                      onClick={() => handleLocationClick(location)}
                      className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md ${
                        selectedLocation.id === location.id
                          ? getColorClasses(location.color) + ' shadow-md'
                          : 'bg-white border-gray-200 hover:border-sppp-blue'
                      }`}
                    >
                      <div className="flex items-start">
                        <location.icon className={`h-5 w-5 mt-1 mr-3 ${
                          selectedLocation.id === location.id ? '' : 'text-sppp-blue'
                        }`} />
                        <div>
                          <div className="font-medium text-sm">{location.name}</div>
                          <div className={`text-xs ${
                            selectedLocation.id === location.id ? '' : 'text-sppp-gray'
                          }`}>
                            {location.type}
                          </div>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Google Maps Placeholder */}
              <div className="lg:col-span-2 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="bg-white rounded-full p-4 inline-block mb-4 shadow-lg">
                      <MapPinIcon className="h-12 w-12 text-sppp-blue" />
                    </div>
                    <h4 className="text-lg font-semibold text-sppp-dark-blue mb-2">
                      Peta Google Maps
                    </h4>
                    <p className="text-sppp-gray text-sm mb-4">
                      Lokasi terpilih: {selectedLocation.name}
                    </p>
                    <p className="text-xs text-sppp-gray mb-4">
                      Koordinat: {selectedLocation.coordinates.lat}, {selectedLocation.coordinates.lng}
                    </p>
                    <a
                      href={getDirectionsUrl(selectedLocation)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-sppp-blue text-white px-4 py-2 rounded-lg hover:bg-sppp-dark-blue transition-colors text-sm"
                    >
                      <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                      Buka di Google Maps
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mobile Map Section */}
        <section className="mb-8 lg:hidden">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="p-4 border-b">
              <h2 className="text-lg font-bold text-sppp-dark-blue flex items-center">
                <MagnifyingGlassIcon className="h-5 w-5 mr-2" />
                Peta Lokasi
              </h2>
              <p className="text-sppp-gray text-sm mt-1">
                {selectedLocation.name}
              </p>
            </div>
            <div className="h-64 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-green-100 flex items-center justify-center">
                <div className="text-center p-4">
                  <div className="bg-white rounded-full p-3 inline-block mb-3 shadow-lg">
                    <MapPinIcon className="h-8 w-8 text-sppp-blue" />
                  </div>
                  <h4 className="text-base font-semibold text-sppp-dark-blue mb-2">
                    {selectedLocation.name}
                  </h4>
                  <a
                    href={getDirectionsUrl(selectedLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center bg-sppp-blue text-white px-4 py-2 rounded-lg hover:bg-sppp-dark-blue transition-colors text-sm"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                    Buka di Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Selected Location Details */}
        <section className="mb-8 sm:mb-12">
          <div className="bg-white rounded-lg shadow-lg p-4 sm:p-8">
            <div className="flex items-center mb-4 sm:mb-6">
              <selectedLocation.icon className="h-6 w-6 sm:h-8 sm:w-8 text-sppp-blue mr-3 flex-shrink-0" />
              <div className="min-w-0">
                <h2 className="text-lg sm:text-2xl font-bold text-sppp-dark-blue truncate">{selectedLocation.name}</h2>
                <p className="text-sppp-gray text-sm sm:text-base">{selectedLocation.type}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
              {/* Contact Information */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-sppp-dark-blue mb-3 sm:mb-4">Maklumat Hubungan</h3>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-start">
                    <MapPinIcon className="h-4 w-4 sm:h-5 sm:w-5 text-sppp-blue mt-1 mr-3 flex-shrink-0" />
                    <div className="min-w-0">
                      <h4 className="font-medium text-sppp-dark-blue text-sm sm:text-base">Alamat</h4>
                      <p className="text-sppp-gray text-xs sm:text-sm leading-relaxed">{selectedLocation.address}</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-sppp-blue mt-1 mr-3 flex-shrink-0" />
                    <div className="min-w-0">
                      <h4 className="font-medium text-sppp-dark-blue text-sm sm:text-base">Telefon</h4>
                      <a href={`tel:${selectedLocation.phone}`} className="text-sppp-blue hover:underline text-xs sm:text-sm">
                        {selectedLocation.phone}
                      </a>
                    </div>
                  </div>

                  {selectedLocation.fax && (
                    <div className="flex items-start">
                      <PhoneIcon className="h-4 w-4 sm:h-5 sm:w-5 text-sppp-blue mt-1 mr-3 flex-shrink-0" />
                      <div className="min-w-0">
                        <h4 className="font-medium text-sppp-dark-blue text-sm sm:text-base">Faks</h4>
                        <p className="text-sppp-gray text-xs sm:text-sm">{selectedLocation.fax}</p>
                      </div>
                    </div>
                  )}

                  <div className="flex items-start">
                    <EnvelopeIcon className="h-4 w-4 sm:h-5 sm:w-5 text-sppp-blue mt-1 mr-3 flex-shrink-0" />
                    <div className="min-w-0">
                      <h4 className="font-medium text-sppp-dark-blue text-sm sm:text-base">E-mel</h4>
                      <a href={`mailto:${selectedLocation.email}`} className="text-sppp-blue hover:underline text-xs sm:text-sm break-all">
                        {selectedLocation.email}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <ClockIcon className="h-4 w-4 sm:h-5 sm:w-5 text-sppp-blue mt-1 mr-3 flex-shrink-0" />
                    <div className="min-w-0">
                      <h4 className="font-medium text-sppp-dark-blue text-sm sm:text-base">Waktu Operasi</h4>
                      <p className="text-sppp-gray text-xs sm:text-sm">{selectedLocation.hours}</p>
                    </div>
                  </div>
                </div>

                {/* Mobile Quick Actions */}
                <div className="mt-6 space-y-3 lg:hidden">
                  <a
                    href={getDirectionsUrl(selectedLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-sppp-blue text-white p-3 rounded-lg hover:bg-sppp-dark-blue transition-colors text-sm font-medium"
                  >
                    <ArrowTopRightOnSquareIcon className="h-4 w-4 mr-2" />
                    Dapatkan Arah di Google Maps
                  </a>

                  <a
                    href={`tel:${selectedLocation.phone}`}
                    className="flex items-center justify-center w-full border border-sppp-blue text-sppp-blue p-3 rounded-lg hover:bg-sppp-blue hover:text-white transition-colors text-sm font-medium"
                  >
                    <PhoneIcon className="h-4 w-4 mr-2" />
                    Hubungi Sekarang
                  </a>

                  <a
                    href={`mailto:${selectedLocation.email}`}
                    className="flex items-center justify-center w-full border border-gray-300 text-sppp-dark-blue p-3 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
                  >
                    <EnvelopeIcon className="h-4 w-4 mr-2" />
                    Hantar E-mel
                  </a>
                </div>
              </div>

              {/* Services Offered */}
              <div>
                <h3 className="text-base sm:text-lg font-semibold text-sppp-dark-blue mb-3 sm:mb-4">Perkhidmatan Tersedia</h3>
                <div className="grid grid-cols-1 gap-2 sm:gap-3">
                  {selectedLocation.services.map((service, index) => (
                    <div key={index} className="flex items-center p-2 sm:p-3 bg-sppp-light-gray rounded-lg">
                      <div className="w-2 h-2 bg-sppp-blue rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-sppp-dark-blue text-xs sm:text-sm font-medium">{service}</span>
                    </div>
                  ))}
                </div>

                {/* Desktop Quick Actions */}
                <div className="mt-6 space-y-3 hidden lg:block">
                  <a
                    href={getDirectionsUrl(selectedLocation)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center w-full bg-sppp-blue text-white p-3 rounded-lg hover:bg-sppp-dark-blue transition-colors"
                  >
                    <ArrowTopRightOnSquareIcon className="h-5 w-5 mr-2" />
                    Dapatkan Arah di Google Maps
                  </a>

                  <a
                    href={`tel:${selectedLocation.phone}`}
                    className="flex items-center justify-center w-full border border-sppp-blue text-sppp-blue p-3 rounded-lg hover:bg-sppp-blue hover:text-white transition-colors"
                  >
                    <PhoneIcon className="h-5 w-5 mr-2" />
                    Hubungi Sekarang
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Access Grid */}
        <section>
          <h2 className="text-lg sm:text-2xl font-bold text-sppp-dark-blue mb-4 sm:mb-6">Akses Pantas</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {locations.slice(0, 3).map((location) => (
              <div key={location.id} className="bg-white rounded-lg shadow-lg p-4 sm:p-6 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-3 sm:mb-4">
                  <location.icon className="h-5 w-5 sm:h-6 sm:w-6 text-sppp-blue mr-2 sm:mr-3 flex-shrink-0" />
                  <h3 className="font-semibold text-sppp-dark-blue text-sm sm:text-base truncate">{location.name}</h3>
                </div>
                <p className="text-sppp-gray text-xs sm:text-sm mb-3 sm:mb-4 line-clamp-2 leading-relaxed">{location.address}</p>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                  <button
                    onClick={() => handleLocationClick(location)}
                    className="flex-1 bg-sppp-light-gray text-sppp-dark-blue px-3 py-2 rounded text-xs sm:text-sm hover:bg-sppp-blue hover:text-white transition-colors font-medium"
                  >
                    Lihat Butiran
                  </button>
                  <a
                    href={`tel:${location.phone}`}
                    className="bg-sppp-blue text-white px-3 py-2 rounded text-xs sm:text-sm hover:bg-sppp-dark-blue transition-colors text-center font-medium"
                  >
                    Hubungi
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}