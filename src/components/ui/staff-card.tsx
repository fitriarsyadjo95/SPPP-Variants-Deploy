'use client'

import React, { useState } from 'react'
import {
  UserIcon,
  PhoneIcon,
  EnvelopeIcon,
  BuildingOfficeIcon,
  ArrowDownTrayIcon,
  CheckIcon,
  QrCodeIcon
} from '@heroicons/react/24/outline'
import { downloadVCard, formatPhoneNumber, isValidEmail, generateContactQR, type ContactInfo } from '@/utils/vcard'

interface StaffMember {
  id: string
  name: string
  position: string
  department: string
  unit: string
  phone?: string
  email?: string
  image?: string
}

interface StaffCardProps {
  staff: StaffMember
  className?: string
}

export const StaffCard: React.FC<StaffCardProps> = ({ staff, className = '' }) => {
  const [isDownloading, setIsDownloading] = useState(false)
  const [showQR, setShowQR] = useState(false)
  const [downloaded, setDownloaded] = useState(false)

  const handleSaveContact = async () => {
    if (isDownloading) return

    setIsDownloading(true)

    try {
      const contactInfo: ContactInfo = {
        name: staff.name,
        position: staff.position,
        department: staff.department,
        unit: staff.unit,
        phone: staff.phone,
        email: staff.email,
        organization: 'Suruhanjaya Pelabuhan Pulau Pinang',
        website: 'https://www.penangport.gov.my',
        address: 'Wisma Pelabuhan, 3250 Jalan Bagan Luar, Georgetown, Pulau Pinang 10300, Malaysia'
      }

      await new Promise(resolve => setTimeout(resolve, 500)) // Small delay for UX
      downloadVCard(contactInfo)

      setDownloaded(true)
      setTimeout(() => setDownloaded(false), 3000) // Reset after 3 seconds

    } catch (error) {
      console.error('Error downloading vCard:', error)
    } finally {
      setIsDownloading(false)
    }
  }

  const handleShowQR = () => {
    setShowQR(!showQR)
  }

  const contactInfo: ContactInfo = {
    name: staff.name,
    position: staff.position,
    department: staff.department,
    unit: staff.unit,
    phone: staff.phone,
    email: staff.email,
    organization: 'Suruhanjaya Pelabuhan Pulau Pinang'
  }

  return (
    <div className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden ${className}`}>
      {/* Header */}
      <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue text-white p-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <div className="flex-shrink-0">
              {staff.image ? (
                <img
                  src={staff.image}
                  alt={staff.name}
                  className="w-12 h-12 rounded-full border-2 border-white object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full border-2 border-white bg-white/20 flex items-center justify-center">
                  <UserIcon className="w-6 h-6 text-white" />
                </div>
              )}
            </div>
            <div className="min-w-0 flex-1">
              <h3 className="text-lg font-semibold text-white truncate">
                {staff.name}
              </h3>
              <p className="text-blue-100 text-sm">
                {staff.position}
              </p>
            </div>
          </div>

          {/* QR Code Toggle */}
          <button
            onClick={handleShowQR}
            className="p-2 rounded-full hover:bg-white/20 transition-colors"
            title="Lihat QR Code"
          >
            <QrCodeIcon className="w-5 h-5 text-white" />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Department and Unit */}
        <div className="flex items-start space-x-2 mb-4">
          <BuildingOfficeIcon className="w-4 h-4 text-gray-400 mt-0.5 flex-shrink-0" />
          <div className="text-sm text-gray-600 min-w-0">
            <div className="font-medium">{staff.department}</div>
            {staff.unit && staff.unit !== staff.department && (
              <div className="text-gray-500">{staff.unit}</div>
            )}
          </div>
        </div>

        {/* Contact Information */}
        <div className="space-y-3">
          {staff.phone && (
            <div className="flex items-center space-x-2">
              <PhoneIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <a
                href={`tel:${staff.phone.replace(/[^\d+]/g, '')}`}
                className="text-sm text-gray-700 hover:text-sppp-blue transition-colors"
              >
                {formatPhoneNumber(staff.phone)}
              </a>
            </div>
          )}

          {staff.email && (
            <div className="flex items-center space-x-2">
              <EnvelopeIcon className="w-4 h-4 text-gray-400 flex-shrink-0" />
              <a
                href={`mailto:${staff.email}`}
                className={`text-sm transition-colors truncate ${
                  isValidEmail(staff.email)
                    ? 'text-gray-700 hover:text-sppp-blue'
                    : 'text-red-500'
                }`}
              >
                {staff.email}
              </a>
            </div>
          )}
        </div>

        {/* QR Code Section */}
        {showQR && (
          <div className="mt-4 pt-4 border-t border-gray-200">
            <div className="text-center">
              <p className="text-sm text-gray-600 mb-3">Imbas QR Code untuk simpan maklumat</p>
              <img
                src={generateContactQR(contactInfo)}
                alt="QR Code for contact"
                className="mx-auto w-32 h-32 border border-gray-200 rounded"
                loading="lazy"
              />
            </div>
          </div>
        )}

        {/* Save Contact Button */}
        <div className="mt-4 pt-4 border-t border-gray-200">
          <button
            onClick={handleSaveContact}
            disabled={isDownloading}
            className={`w-full flex items-center justify-center px-4 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
              downloaded
                ? 'bg-green-100 text-green-800 border border-green-200'
                : isDownloading
                ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                : 'bg-sppp-blue text-white hover:bg-sppp-dark-blue focus:outline-none focus:ring-2 focus:ring-sppp-blue focus:ring-offset-2'
            }`}
          >
            {downloaded ? (
              <>
                <CheckIcon className="w-4 h-4 mr-2" />
                Maklumat Disimpan
              </>
            ) : isDownloading ? (
              <>
                <div className="w-4 h-4 border-2 border-gray-300 border-t-gray-600 rounded-full animate-spin mr-2"></div>
                Menyimpan...
              </>
            ) : (
              <>
                <ArrowDownTrayIcon className="w-4 h-4 mr-2" />
                Simpan Maklumat
              </>
            )}
          </button>

          {/* Help Text */}
          <p className="mt-2 text-xs text-gray-500 text-center">
            Fail .vcf akan dimuat turun untuk disimpan dalam telefon anda
          </p>
        </div>
      </div>
    </div>
  )
}

StaffCard.displayName = 'StaffCard'