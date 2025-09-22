'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Popover, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  BuildingOfficeIcon,
  TruckIcon,
  AcademicCapIcon,
  UserGroupIcon,
  CogIcon,
  DocumentTextIcon,
  GlobeAltIcon,
  ShieldCheckIcon,
  ChartBarIcon,
  MapPinIcon,
  ArchiveBoxIcon,
  PhotoIcon,
  BriefcaseIcon,
  ChatBubbleLeftRightIcon,
  EyeIcon,
  StarIcon,
  UsersIcon,
  IdentificationIcon,
  FolderIcon,
  BookOpenIcon,
  QuestionMarkCircleIcon,
  GlobeAsiaAustraliaIcon,
  DocumentMagnifyingGlassIcon
} from '@heroicons/react/24/outline'
import { cn } from '@/lib/utils'
import { NavigationItem } from '@/types'
import { GlobalSearch } from '../search/global-search'

const navigationItems: NavigationItem[] = [
  {
    name: 'Utama',
    href: '/',
  },
  {
    name: 'Profil',
    href: '/profil',
    subItems: [
      {
        name: 'Latar Belakang',
        href: '/profil/latar-belakang',
        description: 'Sejarah dan latar belakang SPPP dan Teluk Ewa',
        icon: BookOpenIcon,
        subItems: [
          { name: 'SPPP', href: '/profil/latar-belakang/sppp', icon: BuildingOfficeIcon },
          { name: 'Teluk Ewa', href: '/profil/latar-belakang/teluk-ewa', icon: GlobeAltIcon }
        ]
      },
      {
        name: 'Visi & Misi',
        href: '/profil/visi-misi',
        description: 'Visi, misi dan objektif organisasi',
        icon: EyeIcon,
      },
      {
        name: 'Peranan Suruhanjaya',
        href: '/profil/peranan',
        description: 'Peranan dan tanggungjawab Suruhanjaya Pelabuhan',
        icon: ShieldCheckIcon,
      },
      {
        name: 'Sijil & Penghargaan',
        href: '/profil/sijil-penghargaan',
        description: 'Sijil dan penghargaan yang diterima',
        icon: StarIcon,
      },
      {
        name: 'Carta Organisasi',
        href: '/profil/carta-organisasi',
        description: 'Struktur organisasi dan hierarki jawatan',
        icon: ChartBarIcon,
      },
      {
        name: 'Organisasi',
        href: '/profil/organisasi',
        description: 'Struktur kepimpinan dan pengurusan',
        icon: UserGroupIcon,
        subItems: [
          { 
            name: 'Lembaga Pengarah', 
            href: '/profil/organisasi/lembaga-pengarah',
            icon: UsersIcon,
            subItems: [
              { name: 'SPPP', href: '/profil/organisasi/lembaga-pengarah/sppp', icon: BuildingOfficeIcon },
              { name: 'Teluk Ewa', href: '/profil/organisasi/lembaga-pengarah/teluk-ewa', icon: GlobeAltIcon }
            ]
          },
          { name: 'Ketua Pegawai Maklumat', href: '/profil/organisasi/ketua-pegawai-maklumat', icon: IdentificationIcon },
          { name: 'Ketua-Ketua Jabatan', href: '/profil/organisasi/ketua-jabatan', icon: UsersIcon },
          { name: 'Direktori', href: '/profil/organisasi/direktori', icon: FolderIcon }
        ]
      }
    ]
  },
  {
    name: 'Perkhidmatan',
    href: '/services',
    subItems: [
      {
        name: 'Perkhidmatan Kargo',
        href: '/services/cargo',
        description: 'Perkhidmatan pengendalian kargo',
        icon: TruckIcon,
      },
      {
        name: 'Perkhidmatan Kapal',
        href: '/services/vessel',
        description: 'Perkhidmatan kapal dan maritim',
        icon: GlobeAltIcon,
      },
      {
        name: 'Khidmat Nasihat Teknikal',
        href: '/services/consultation',
        description: 'Perkhidmatan konsultasi teknikal',
        icon: AcademicCapIcon,
      },
      {
        name: 'Perkhidmatan Digital',
        href: '/services/digital',
        description: 'Perkhidmatan dan aplikasi digital',
        icon: CogIcon,
      },
      {
        name: 'Peta Interaktif Pelabuhan',
        href: '/maps',
        description: 'Peta interaktif lokasi pelabuhan SPPP',
        icon: MapPinIcon,
      },
      {
        name: 'Kemudahan & Perkhidmatan',
        href: '/kemudahan',
        description: 'Kemudahan pelabuhan dan perkhidmatan sokongan',
        icon: BuildingOfficeIcon,
        subItems: [
          { name: 'Zon Bebas Komersil', href: '/kemudahan/zon-bebas', icon: BuildingOfficeIcon },
          { name: 'Kontena Butterworth Utara', href: '/kemudahan/kontena-butterworth', icon: TruckIcon },
          { name: 'Dermaga Butterworth (BDWW)', href: '/kemudahan/dermaga-butterworth', icon: GlobeAltIcon },
          { name: 'Kargo Pukal Prai', href: '/kemudahan/kargo-prai', icon: TruckIcon },
          { name: 'Swettenham Pier', href: '/kemudahan/swettenham-pier', icon: GlobeAltIcon },
          { name: 'Perkhidmatan Feri', href: '/kemudahan/perkhidmatan-feri', icon: GlobeAltIcon },
          { name: 'Perkhidmatan Marin', href: '/kemudahan/perkhidmatan-marin', icon: GlobeAltIcon },
          { name: 'Jeti Minyak Sayur', href: '/kemudahan/jeti-minyak', icon: BuildingOfficeIcon },
          { name: 'Perkhidmatan Bantuan', href: '/kemudahan/perkhidmatan-bantuan', icon: CogIcon },
          { name: 'Port Crafts', href: '/kemudahan/port-crafts', icon: GlobeAltIcon },
          { name: 'Bunkering', href: '/kemudahan/bunkering', icon: TruckIcon },
          { name: 'Dermaga Prai', href: '/kemudahan/dermaga-prai', icon: BuildingOfficeIcon },
          { name: 'Jeti Teluk Ewa', href: '/kemudahan/jeti-teluk-ewa', icon: GlobeAltIcon }
        ]
      }
    ]
  },
  {
    name: 'Berita & Media',
    href: '/news',
    subItems: [
      {
        name: 'Berita Terkini',
        href: '/news',
        description: 'Berita dan pengumuman terkini',
        icon: DocumentTextIcon,
      },
      {
        name: 'Galeri Media',
        href: '/sumber/galeri-media',
        description: 'Galeri foto dan video',
        icon: PhotoIcon,
      },
      {
        name: 'Penerbitan',
        href: '/sumber/penerbitan',
        description: 'Koleksi penerbitan, laporan, polisi dan dokumen rasmi SPPP',
        icon: DocumentTextIcon,
      },
      {
        name: 'Arkib Elektronik',
        href: '/sumber/arkib',
        description: 'Arkib dokumen elektronik',
        icon: ArchiveBoxIcon,
      }
    ]
  },
  {
    name: 'Hubungi Kami',
    href: '/hubungi',
    subItems: [
      {
        name: 'Lokasi',
        href: '/hubungi/lokasi',
        description: 'Lokasi pejabat dan kemudahan',
        icon: MapPinIcon,
      },
      {
        name: 'Maklum Balas',
        href: '/hubungi/maklum-balas',
        description: 'Hantar maklum balas dan cadangan',
        icon: ChatBubbleLeftRightIcon,
      },
      {
        name: 'Kajian Kepuasan',
        href: '/hubungi/kajian-kepuasan',
        description: 'Kajian kepuasan pelanggan',
        icon: DocumentTextIcon,
      },
      {
        name: 'Kerjaya',
        href: '/hubungi/kerjaya',
        description: 'Peluang kerjaya di SPPP',
        icon: BriefcaseIcon,
      },
      {
        name: 'Soalan Lazim',
        href: '/hubungi/faq',
        description: 'Soalan yang kerap ditanya',
        icon: QuestionMarkCircleIcon,
      },
      {
        name: 'Pelancongan Maritim',
        href: '/hubungi/pelancongan',
        description: 'Maklumat pelancongan maritim',
        icon: GlobeAsiaAustraliaIcon,
      },
      {
        name: 'Permohonan Maklumat',
        href: '/hubungi/permohonan-maklumat',
        description: 'Permohonan maklumat rasmi',
        icon: DocumentMagnifyingGlassIcon,
      },
      {
        name: 'Tender & Sebut Harga',
        href: '/sumber/tender',
        description: 'Tender dan sebut harga semasa',
        icon: DocumentTextIcon,
      },
      {
        name: 'e-Penyertaan',
        href: '/sumber/e-penyertaan',
        description: 'Portal penyertaan elektronik',
        icon: CogIcon,
      }
    ]
  }
]

interface NavigationProps {
  mobileMenuOpen: boolean
  setMobileMenuOpen: (open: boolean) => void
  isVariationsPage?: boolean
}

export const Navigation: React.FC<NavigationProps> = ({
  mobileMenuOpen,
  setMobileMenuOpen,
  isVariationsPage = false
}) => {
  const pathname = usePathname()

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/'
    }
    return pathname.startsWith(href)
  }

  const renderMegaMenu = (items: NavigationItem[] | undefined) => {
    if (!items) return null
    
    // Separate items with and without sub-items
    const itemsWithSub = items.filter(item => item.subItems && item.subItems.length > 0)
    const itemsWithoutSub = items.filter(item => !item.subItems || item.subItems.length === 0)
    
    return (
      <div className="grid gap-6">
        {/* Items without sub-items in a grid layout */}
        {itemsWithoutSub.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {itemsWithoutSub.map((item) => (
              isVariationsPage ? (
                <div
                  key={item.name}
                  className="flex items-start rounded-lg p-3 opacity-50 cursor-not-allowed group"
                >
                  {item.icon && (
                    <item.icon className="h-5 w-5 flex-shrink-0 text-gray-400 mt-0.5 mr-3" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-500">
                      {item.name}
                    </p>
                    {item.description && (
                      <p className="text-xs text-gray-400 mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </div>
              ) : (
                <Link
                  key={item.name}
                  href={item.href}
                  className="flex items-start rounded-lg p-3 hover:bg-sppp-light-gray transition-colors group"
                >
                  {item.icon && (
                    <item.icon className="h-5 w-5 flex-shrink-0 text-sppp-blue group-hover:text-sppp-dark-blue mt-0.5 mr-3" />
                  )}
                  <div className="min-w-0 flex-1">
                    <p className="text-sm font-medium text-gray-900 group-hover:text-sppp-dark-blue">
                      {item.name}
                    </p>
                    {item.description && (
                      <p className="text-xs text-sppp-gray mt-1">
                        {item.description}
                      </p>
                    )}
                  </div>
                </Link>
              )
            ))}
          </div>
        )}
        
        {/* Items with sub-items displayed as sections */}
        {itemsWithSub.length > 0 && (
          <div className="space-y-4">
            {itemsWithSub.map((item) => (
              <div key={item.name} className="border-t border-gray-200 pt-4 first:border-t-0 first:pt-0">
                {/* Parent item as a section header */}
                {isVariationsPage ? (
                  <div className="flex items-start rounded-lg p-3 mb-2 bg-gray-100 opacity-50 cursor-not-allowed">
                    {item.icon && (
                      <item.icon className="h-5 w-5 flex-shrink-0 text-gray-400 mt-0.5 mr-3" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-gray-500">
                        {item.name}
                      </p>
                      {item.description && (
                        <p className="text-xs text-gray-400 mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="flex items-start rounded-lg p-3 hover:bg-sppp-light-gray transition-colors group mb-2 bg-sppp-light-gray/50"
                  >
                    {item.icon && (
                      <item.icon className="h-5 w-5 flex-shrink-0 text-sppp-blue group-hover:text-sppp-dark-blue mt-0.5 mr-3" />
                    )}
                    <div className="min-w-0 flex-1">
                      <p className="text-sm font-semibold text-sppp-dark-blue group-hover:text-sppp-blue">
                        {item.name}
                      </p>
                      {item.description && (
                        <p className="text-xs text-sppp-gray mt-1">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </Link>
                )}

                {/* Sub-items in a compact grid */}
                <div className="grid grid-cols-2 gap-2 pl-8">
                  {item.subItems?.map((subItem) => (
                    isVariationsPage ? (
                      <div
                        key={subItem.name}
                        className="flex items-center rounded-lg p-2 opacity-50 cursor-not-allowed"
                      >
                        {subItem.icon && (
                          <subItem.icon className="h-4 w-4 flex-shrink-0 text-gray-400 mr-2" />
                        )}
                        <span className="text-sm text-gray-500">
                          {subItem.name}
                        </span>
                      </div>
                    ) : (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="flex items-center rounded-lg p-2 hover:bg-sppp-light-gray transition-colors group"
                      >
                        {subItem.icon && (
                          <subItem.icon className="h-4 w-4 flex-shrink-0 text-sppp-blue group-hover:text-sppp-dark-blue mr-2" />
                        )}
                        <span className="text-sm text-gray-700 group-hover:text-sppp-dark-blue">
                          {subItem.name}
                        </span>
                      </Link>
                    )
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    )
  }

  return (
    <>
      {/* Desktop Navigation */}
      <nav className="hidden lg:block" style={{backgroundColor: '#D0AA06'}}>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Popover.Group className="flex h-14 items-center justify-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.name}>
                {item.subItems ? (
                  <Popover className="relative">
                    {({ open }) => (
                      <>
                        <Popover.Button
                          className={cn(
                            'flex items-center text-sm font-medium text-white hover:text-sppp-accent transition-colors',
                            'focus:outline-none focus:ring-2 focus:ring-sppp-accent focus:ring-opacity-75',
                            isActive(item.href) && 'text-sppp-accent'
                          )}
                        >
                          {item.name}
                          <ChevronDownIcon
                            className={cn(
                              'ml-1 h-4 w-4 transition-transform',
                              open && 'rotate-180'
                            )}
                          />
                        </Popover.Button>

                        <Transition
                          enter="transition ease-out duration-200"
                          enterFrom="opacity-0 translate-y-1"
                          enterTo="opacity-100 translate-y-0"
                          leave="transition ease-in duration-150"
                          leaveFrom="opacity-100 translate-y-0"
                          leaveTo="opacity-0 translate-y-1"
                        >
                          <Popover.Panel className="absolute left-1/2 z-50 mt-3 w-screen max-w-4xl -translate-x-1/2 transform px-4">
                            <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                              <div className="bg-white p-6">
                                {renderMegaMenu(item.subItems)}
                              </div>
                            </div>
                          </Popover.Panel>
                        </Transition>
                      </>
                    )}
                  </Popover>
                ) : (
                  isVariationsPage ? (
                    <span className="text-sm font-medium text-gray-400 cursor-not-allowed opacity-50">
                      {item.name}
                    </span>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        'text-sm font-medium text-white hover:text-sppp-accent transition-colors',
                        isActive(item.href) && 'text-sppp-accent'
                      )}
                    >
                      {item.name}
                    </Link>
                  )
                )}
              </div>
            ))}
          </Popover.Group>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <Transition show={mobileMenuOpen}>
        <div className="lg:hidden">
          <Transition.Child
            enter="duration-150 ease-out"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 z-40 bg-black bg-opacity-25" />
          </Transition.Child>

          <Transition.Child
            enter="duration-150 ease-out"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="duration-150 ease-in"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <div className="absolute inset-x-0 top-0 z-50 origin-top-right transform p-2">
              <div className="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                <div className="px-5 pt-5 pb-6">
                  {/* Mobile Search */}
                  <div className="mb-6">
                    <GlobalSearch />
                  </div>

                  <div className="space-y-2 max-h-[70vh] overflow-y-auto">
                    {navigationItems.map((item) => (
                      <div key={item.name}>
                        {item.subItems ? (
                          <div>
                            <div className={`text-base font-medium py-2 border-b border-gray-100 ${isVariationsPage ? 'text-gray-500' : 'text-sppp-dark-blue'}`}>
                              {item.name}
                            </div>
                            <div className="pl-4 space-y-2 mt-2">
                              {item.subItems.map((subItem) => (
                                <div key={subItem.name}>
                                  {isVariationsPage ? (
                                    <div className="flex items-center text-sm text-gray-400 py-2 cursor-not-allowed opacity-50">
                                      {subItem.icon && (
                                        <subItem.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                                      )}
                                      <span className="flex-1">{subItem.name}</span>
                                    </div>
                                  ) : (
                                    <Link
                                      href={subItem.href}
                                      className="flex items-center text-sm text-sppp-gray hover:text-sppp-blue py-2"
                                      onClick={() => setMobileMenuOpen(false)}
                                    >
                                      {subItem.icon && (
                                        <subItem.icon className="h-4 w-4 mr-3 flex-shrink-0" />
                                      )}
                                      <span className="flex-1">{subItem.name}</span>
                                    </Link>
                                  )}
                                  {subItem.subItems && (
                                    <div className="pl-8 space-y-1">
                                      {subItem.subItems.map((nestedItem) => (
                                        isVariationsPage ? (
                                          <div
                                            key={nestedItem.name}
                                            className="flex items-center text-xs text-gray-400 py-1 cursor-not-allowed opacity-50"
                                          >
                                            {nestedItem.icon && (
                                              <nestedItem.icon className="h-3 w-3 mr-2 flex-shrink-0" />
                                            )}
                                            <span>• {nestedItem.name}</span>
                                          </div>
                                        ) : (
                                          <Link
                                            key={nestedItem.name}
                                            href={nestedItem.href}
                                            className="flex items-center text-xs text-sppp-gray hover:text-sppp-blue py-1"
                                            onClick={() => setMobileMenuOpen(false)}
                                          >
                                            {nestedItem.icon && (
                                              <nestedItem.icon className="h-3 w-3 mr-2 flex-shrink-0" />
                                            )}
                                            <span>• {nestedItem.name}</span>
                                          </Link>
                                        )
                                      ))}
                                    </div>
                                  )}
                                </div>
                              ))}
                            </div>
                          </div>
                        ) : (
                          isVariationsPage ? (
                            <div className="block text-base font-medium py-2 px-3 rounded-md text-gray-500 cursor-not-allowed opacity-50">
                              {item.name}
                            </div>
                          ) : (
                            <Link
                              href={item.href}
                              className={cn(
                                'block text-base font-medium py-2 px-3 rounded-md transition-colors',
                                isActive(item.href)
                                  ? 'text-sppp-blue bg-sppp-light-gray'
                                  : 'text-sppp-dark-blue hover:text-sppp-blue hover:bg-sppp-light-gray'
                              )}
                              onClick={() => setMobileMenuOpen(false)}
                            >
                              {item.name}
                            </Link>
                          )
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Transition>
    </>
  )
}

Navigation.displayName = 'Navigation'