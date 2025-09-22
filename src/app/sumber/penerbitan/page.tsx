import React from 'react'
import { Metadata } from 'next'
import { PageTemplate } from '@/components/PageTemplate'
import { PublicationsLibrary } from '@/components/sections/publications-library'
import { DocumentTextIcon } from '@heroicons/react/24/outline'

export const metadata: Metadata = {
  title: 'Penerbitan | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Koleksi penerbitan, laporan, polisi dan dokumen rasmi SPPP yang tersedia untuk umum',
  keywords: 'penerbitan, laporan, polisi, dokumen, SPPP, pelan strategik, anti-rasuah',
}

export default function PenerbitanPage() {
  return (
    <PageTemplate
      title="Penerbitan"
      subtitle="Koleksi penerbitan, laporan, polisi dan dokumen rasmi SPPP yang tersedia untuk umum"
    >
      {/* Publications Library */}
      <PublicationsLibrary />
    </PageTemplate>
  )
}