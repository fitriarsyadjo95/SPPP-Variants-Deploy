// vCard (VCF) utility functions for staff contact cards

export interface ContactInfo {
  name: string
  position: string
  department: string
  unit?: string
  phone?: string
  email?: string
  organization?: string
  website?: string
  address?: string
}

export function generateVCard(contact: ContactInfo): string {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${contact.name}`,
    `N:${contact.name.split(' ').reverse().join(';')}`, // Last name first for N field
    `TITLE:${contact.position}`,
    `ORG:${contact.organization || 'Suruhanjaya Pelabuhan Pulau Pinang'};${contact.department}${contact.unit ? ';' + contact.unit : ''}`,
  ]

  if (contact.phone) {
    // Clean phone number and format for vCard
    const cleanPhone = contact.phone.replace(/[^\d+]/g, '')
    vcard.push(`TEL;TYPE=WORK,VOICE:${cleanPhone}`)
  }

  if (contact.email) {
    vcard.push(`EMAIL;TYPE=WORK:${contact.email}`)
  }

  if (contact.website) {
    vcard.push(`URL:${contact.website}`)
  }

  if (contact.address) {
    vcard.push(`ADR;TYPE=WORK:;;${contact.address}`)
  } else {
    // Default SPPP address
    vcard.push('ADR;TYPE=WORK:;;Wisma Pelabuhan, 3250 Jalan Bagan Luar;Georgetown;Pulau Pinang;10300;Malaysia')
  }

  // Add organization website
  vcard.push('URL:https://www.penangport.gov.my')

  // Add creation timestamp
  vcard.push(`REV:${new Date().toISOString().replace(/[-:]/g, '').split('.')[0]}Z`)

  vcard.push('END:VCARD')

  return vcard.join('\r\n')
}

export function downloadVCard(contact: ContactInfo): void {
  const vcardContent = generateVCard(contact)
  const blob = new Blob([vcardContent], { type: 'text/vcard;charset=utf-8' })

  // Create filename from name
  const fileName = `${contact.name.replace(/[^a-zA-Z0-9]/g, '_')}_SPPP.vcf`

  // Create download link
  const url = window.URL.createObjectURL(blob)
  const link = document.createElement('a')
  link.href = url
  link.download = fileName

  // Trigger download
  document.body.appendChild(link)
  link.click()

  // Cleanup
  document.body.removeChild(link)
  window.URL.revokeObjectURL(url)
}

export function canSaveContact(): boolean {
  // Check if browser supports vCard download
  return typeof window !== 'undefined' &&
         typeof document !== 'undefined' &&
         typeof Blob !== 'undefined'
}

// Format phone number for display
export function formatPhoneNumber(phone: string): string {
  // Remove common formatting
  const cleaned = phone.replace(/[^\d+x]/gi, '')

  // Format Malaysian phone numbers
  if (cleaned.match(/^604/)) {
    return cleaned.replace(/^604(\d{3})(\d{4})/, '604-$1 $2')
  }

  return phone // Return original if no pattern matches
}

// Validate email format
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

// Generate QR code URL for contact (using external service)
export function generateContactQR(contact: ContactInfo): string {
  const vcardContent = generateVCard(contact)
  const encodedVCard = encodeURIComponent(vcardContent)

  // Using QR Server API (free service)
  return `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${encodedVCard}`
}