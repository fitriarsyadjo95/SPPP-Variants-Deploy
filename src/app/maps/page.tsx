import React from 'react'
import { Metadata } from 'next'
import { PageTemplate } from '@/components/PageTemplate'
import { InteractiveMaps } from '@/components/sections/interactive-maps'

export const metadata: Metadata = {
  title: 'Peta Interaktif Pelabuhan | SPPP',
  description: 'Jelajahi lokasi strategik pelabuhan SPPP di Pulau Pinang dan Langkawi dengan peta interaktif yang terperinci',
  keywords: 'peta, pelabuhan, Pulau Pinang, Langkawi, lokasi, SPPP, interaktif',
}

export default function MapsPage() {
  return (
    <PageTemplate
      title="Peta Interaktif Pelabuhan"
      subtitle="Jelajahi lokasi strategik pelabuhan SPPP di Pulau Pinang dan Langkawi dengan peta interaktif yang terperinci"
    >
      <InteractiveMaps />
    </PageTemplate>
  )
}