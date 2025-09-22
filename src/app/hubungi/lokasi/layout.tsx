import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lokasi | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Lokasi pejabat dan kemudahan Suruhanjaya Pelabuhan Pulau Pinang di seluruh Penang dan Langkawi',
  keywords: 'SPPP, lokasi, pejabat, alamat, hubungi, Penang, Langkawi',
}

export default function LokasiLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}