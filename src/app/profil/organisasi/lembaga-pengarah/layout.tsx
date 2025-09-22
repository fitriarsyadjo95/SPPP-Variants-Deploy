import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Lembaga Pengarah | Suruhanjaya Pelabuhan Pulau Pinang',
  description: 'Lembaga Pengarah SPPP dan Teluk Ewa - kepimpinan dan tadbir urus yang berkesan untuk operasi pelabuhan',
  keywords: 'Lembaga Pengarah, SPPP, Teluk Ewa, kepimpinan, tadbir urus',
}

export default function LembagaPengarahLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}