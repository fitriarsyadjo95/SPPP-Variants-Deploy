'use client'

import React from 'react'
import Link from 'next/link'
import {
  TruckIcon,
  GlobeAltIcon,
  DocumentTextIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
  BuildingOfficeIcon,
  MapIcon
} from '@heroicons/react/24/outline'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 1,
    name: 'Perkhidmatan Kontena',
    icon: BuildingOfficeIcon,
    href: '/kemudahan/kontena-butterworth'
  },
  {
    id: 2,
    name: 'Perkhidmatan Kargo',
    icon: TruckIcon,
    href: '/kemudahan/kargo-prai'
  },
  {
    id: 3,
    name: 'Perkhidmatan Feri',
    icon: MapIcon,
    href: '/kemudahan/perkhidmatan-feri'
  },
  {
    id: 4,
    name: 'Perkhidmatan Marin',
    icon: GlobeAltIcon,
    href: '/kemudahan/perkhidmatan-marin'
  },
  {
    id: 5,
    name: 'Kemudahan Pelabuhan',
    icon: ShieldCheckIcon,
    href: '/kemudahan/swettenham-pier'
  },
  {
    id: 6,
    name: 'Penerbitan',
    icon: DocumentTextIcon,
    href: '/sumber/penerbitan'
  }
]

export const Services: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-sppp-dark-blue">
            Perkhidmatan Pelabuhan
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 mb-12">
          {services.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-sppp-lg transition-all duration-300 group text-center"
            >
              <div className="flex flex-col items-center">
                <div className="p-3 bg-sppp-blue/10 rounded-lg group-hover:bg-sppp-blue group-hover:text-white transition-colors mb-4">
                  <service.icon className="h-8 w-8 text-sppp-blue group-hover:text-white" />
                </div>
                <h3 className="text-sm font-semibold text-sppp-dark-blue group-hover:text-sppp-blue transition-colors">
                  {service.name}
                </h3>
              </div>
            </Link>
          ))}
        </div>


        {/* Bottom CTA Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-light-blue rounded-2xl p-8 text-white text-center">
          <h3 className="text-xl font-bold mb-6">
            Perlu Perkhidmatan Khas?
          </h3>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/hubungi">
              <Button
                className="bg-white text-sppp-blue hover:bg-gray-100 font-semibold"
              >
                Hubungi Kami
              </Button>
            </Link>
            <Link href="/hubungi/maklum-balas">
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-sppp-blue font-semibold"
              >
                Maklum Balas
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

Services.displayName = 'Services'