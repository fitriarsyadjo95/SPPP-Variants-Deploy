'use client'

import { useState, useMemo } from 'react'
import { PageTemplate } from '@/components/PageTemplate'
import {
  MagnifyingGlassIcon,
  UserIcon,
  BuildingOfficeIcon,
  PhoneIcon,
  EnvelopeIcon,
  XMarkIcon,
  ChevronDownIcon,
  UsersIcon,
  MapPinIcon
} from '@heroicons/react/24/outline'
import { StaffCard } from '@/components/ui/staff-card'

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

const departments = [
  'Pejabat Pengurus Besar',
  'Bahagian Korporat',
  'Bahagian Operasi & Kawalselia',
  'Bahagian Khidmat Pengurusan & Kewangan'
]

const units = {
  'Pejabat Pengurus Besar': [
    'Pejabat Pengurus Besar',
    'Unit Audit Dalam',
    'Unit Perundangan',
    'Unit Integriti'
  ],
  'Bahagian Korporat': [
    'Unit Korporat',
    'Unit Zon Bebas Komersil'
  ],
  'Bahagian Operasi & Kawalselia': [
    'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    'Unit Kejuruteraan',
    'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan'
  ],
  'Bahagian Khidmat Pengurusan & Kewangan': [
    'Unit Khidmat Pengurusan',
    'Unit Kewangan'
  ]
}

const staffDirectory: StaffMember[] = [
  // PEJABAT PENGURUS BESAR
  {
    id: '1',
    name: 'YBhg. Dato\' Dr. Vijayaindiaran A/L R.Viswalingam',
    position: 'Pengurus Besar',
    department: 'Pejabat Pengurus Besar',
    unit: 'Pejabat Pengurus Besar',
    phone: '604 263 3211 Ext : 103',
    email: 'vsvijay@penangport.gov.my'
  },
  {
    id: '2',
    name: 'Hazwani binti Hamat',
    position: 'Pembantu Khas Kepada Pengurus Besar',
    department: 'Pejabat Pengurus Besar',
    unit: 'Pejabat Pengurus Besar',
    phone: '604 263 3211 Ext : 104',
    email: 'hazwani@penangport.gov.my'
  },

  // UNIT AUDIT DALAM
  {
    id: '3',
    name: 'Muhammad Fauzi bin Che Leh',
    position: 'Ketua Audit Dalam',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Audit Dalam',
    phone: '604 263 3211 Ext : 136',
    email: 'fauzi@penangport.gov.my'
  },
  {
    id: '4',
    name: 'Mohd Zaidi bin Idros',
    position: 'Juruaudit Dalam',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Audit Dalam',
    phone: '604 263 3211 Ext : 137',
    email: 'zaidi@penangport.gov.my'
  },
  {
    id: '5',
    name: 'Rizalia binti Nordin',
    position: 'Penolong Juruaudit',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Audit Dalam',
    phone: '604 263 3211 Ext : 138',
    email: 'rizalia@penangport.gov.my'
  },
  {
    id: '6',
    name: 'Samsul Azhar bin Abu Bakar',
    position: 'Pembantu Tadbir Kanan Audit',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Audit Dalam',
    phone: '604 263 3211 Ext : 139',
    email: 'samsul@penangport.gov.my'
  },

  // UNIT PERUNDANGAN
  {
    id: '7',
    name: 'Hasnizah binti Mat Akhir',
    position: 'Pegawai Undang-undang',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Perundangan',
    phone: '604 263 3211 Ext : 135',
    email: 'hasnizah@penangport.gov.my'
  },
  {
    id: '8',
    name: 'Mohammad Firdaus bin Marzukhi',
    position: 'Penolong Pegawai Undang-undang',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Perundangan',
    phone: '604 263 3211 Ext :148',
    email: 'mohdfirdaus@penangport.gov.my'
  },
  {
    id: '9',
    name: 'Nor Adira binti Hassan',
    position: 'Pembantu Tadbir Undang-Undang',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Perundangan',
    phone: '604 263 3211',
    email: 'adira@penangport.gov.my'
  },
  {
    id: '10',
    name: 'Fatimah binti Zachariah',
    position: 'Pembantu Tadbir Kanan Perundangan',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Perundangan',
    phone: '604 263 3211 Ext : 132',
    email: 'fatimah@penangport.gov.my'
  },

  // UNIT INTEGRITI
  {
    id: '11',
    name: 'Nurliyana binti Che Anour',
    position: 'Pegawai Integriti',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Integriti',
    phone: '604 263 3211 Ext : 130',
    email: 'nurliyana@penangport.gov.my'
  },
  {
    id: '12',
    name: 'Intan Norhanim binti Abd Aziz',
    position: 'Pembantu Tadbir Integriti',
    department: 'Pejabat Pengurus Besar',
    unit: 'Unit Integriti',
    phone: '604 263 3211 Ext : 122',
    email: 'intan@penangport.gov.my'
  },

  // BAHAGIAN KORPORAT - Unit Korporat
  {
    id: '13',
    name: 'Maryati binti Ramli',
    position: 'Pengurus Kanan Korporat',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 106',
    email: 'maryati@penangport.gov.my'
  },
  {
    id: '14',
    name: 'Hudiana binti Husain',
    position: 'Setiausaha Pejabat Korporat',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 109',
    email: 'hudiana@penangport.gov.my'
  },
  {
    id: '15',
    name: 'Mohd Syarmizar bin Mhd Nasir',
    position: 'Pengurus Korporat',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 107',
    email: 'syarmizar@penangport.gov.my'
  },
  {
    id: '16',
    name: 'Haffian bin Mahalim',
    position: 'Pegawai Teknologi Maklumat 1',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 110',
    email: 'haffian@penangport.gov.my'
  },
  {
    id: '17',
    name: 'Muhammad Hafiz bin Abdul Wahab',
    position: 'Pegawai Teknologi Maklumat 2',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 108',
    email: 'hafiz@penangport.gov.my'
  },
  {
    id: '18',
    name: 'Noriesah binti Ahmad',
    position: 'Pegawai Teknologi Maklumat 3',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 147',
    email: 'noriesah@penangport.gov.my'
  },
  {
    id: '19',
    name: 'Mohamad Shazwan Afwan bin Mohamad Ali',
    position: 'Pegawai Korporat 1',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 141',
    email: 'shazwan@penangport.gov.my'
  },
  {
    id: '20',
    name: 'Tahirah binti Zakaria',
    position: 'Pegawai Korporat 2',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 152',
    email: 'tahirah@penangport.gov.my'
  },
  {
    id: '21',
    name: 'Syaza Nazifa binti Zulkifli',
    position: 'Pegawai Korporat 3',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext :',
    email: 'syaza@penangport.gov.my'
  },
  {
    id: '22',
    name: 'Siti Nur Ain Waqiyah binti Zawawi',
    position: 'Penolong Pegawai Korporat',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 2633211 Ext: 111',
    email: 'waqiyah@penangport.gov.my'
  },
  {
    id: '23',
    name: 'Nur Afiqah binti Zurhan',
    position: 'Penolong Pegawai Teknologi Maklumat',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 2633211 Ext : 153',
    email: 'afiqah@penangport.gov.my'
  },
  {
    id: '24',
    name: 'Suhaila binti Jaafar',
    position: 'Pembantu Tadbir Kanan Korporat',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 113',
    email: 'suhaila@penangport.gov.my'
  },
  {
    id: '25',
    name: 'Nasliza binti Omar',
    position: 'Pembantu Tadbir Kanan Korporat',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 112',
    email: 'nasliza@penangport.gov.my'
  },
  {
    id: '26',
    name: 'Muhammad Adam bin Ahmad Kamarudin',
    position: 'Pembantu Tadbir Korporat',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 114',
    email: 'adam@penangport.gov.my'
  },
  {
    id: '27',
    name: 'Shawarizal Fitri bin Mansor',
    position: 'Juruteknik Komputer',
    department: 'Bahagian Korporat',
    unit: 'Unit Korporat',
    phone: '604 263 3211 Ext : 145',
    email: 'shawarizal@penangport.gov.my'
  },

  // BAHAGIAN KORPORAT - Unit Zon Bebas Komersil
  {
    id: '28',
    name: 'Shapudin bin Khalid',
    position: 'Pengurus Zon Bebas Komersil',
    department: 'Bahagian Korporat',
    unit: 'Unit Zon Bebas Komersil',
    phone: '604 323 8723/323 8724 Ext : 224',
    email: 'shapudin@penangport.gov.my'
  },
  {
    id: '29',
    name: 'Ishak bin Ibrahim @ Ismail',
    position: 'Penolong Pengurus Zon Bebas Komersil',
    department: 'Bahagian Korporat',
    unit: 'Unit Zon Bebas Komersil',
    phone: '604 323 8723 Ext : 228',
    email: 'ishak@penangport.gov.my'
  },
  {
    id: '30',
    name: 'Vethiswaran a/l Magaswaran',
    position: 'Pegawai Zon Bebas Komersil',
    department: 'Bahagian Korporat',
    unit: 'Unit Zon Bebas Komersil',
    phone: '604 263 3211',
    email: 'vethis@penangport.gov.my'
  },
  {
    id: '31',
    name: 'Mohammad Firdaus bin Baharom',
    position: 'Pembantu Tadbir Kanan Zon Bebas Komersil 1',
    department: 'Bahagian Korporat',
    unit: 'Unit Zon Bebas Komersil',
    phone: '604 323 8723/323 8724 Ext : 230',
    email: 'firdaus@penangport.gov.my'
  },
  {
    id: '32',
    name: 'Nurul Jeehan binti Mohd Dzulkefli',
    position: 'Pembantu Tadbir Kanan Korporat',
    department: 'Bahagian Korporat',
    unit: 'Unit Zon Bebas Komersil',
    phone: '604 323 8723/323 8724 Ext : 231',
    email: 'jeehan@penangport.gov.my'
  },
  {
    id: '33',
    name: 'Siti Fatimah binti Mohamed Noor',
    position: 'Pembantu Tadbir Kanan Zon Bebas Komersil 3',
    department: 'Bahagian Korporat',
    unit: 'Unit Zon Bebas Komersil',
    phone: '604 323 8724 Ext : 232',
    email: 'sitifatimah@penangport.gov.my'
  },

  // BAHAGIAN OPERASI & KAWALSELIA - Pengurus & Setiausaha
  {
    id: '34',
    name: 'Norlida Saad binti Md Saad',
    position: 'Pengurus Kanan Operasi & Kawalselia',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532 Ext: 200',
    email: 'norlida@penangport.gov.my'
  },
  {
    id: '35',
    name: 'Fatin Hanani binti Yusuf',
    position: 'Setiausaha Pejabat Operasi & Kawalselia',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532 Ext : 206',
    email: 'fatinhanani@penangport.gov.my'
  },

  // BAHAGIAN OPERASI & KAWALSELIA - Unit Marin & Kargo Berbahaya Dan Kejuruteraan
  {
    id: '36',
    name: 'Zulkeffli bin Md Desa',
    position: 'Pengurus Operasi',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 331 8575 Ext: 219',
    email: 'zulkeffli@penangport.gov.my'
  },
  {
    id: '37',
    name: 'Mithan Raj Nair A/L Letchumanan',
    position: 'Penolong Pengurus Marin',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532',
    email: 'mithan@penangport.gov.my'
  },
  {
    id: '38',
    name: 'Muhamad Fitrey bin Shamsul',
    position: 'Pegawai Kargo Berbahaya',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532 Ext: 201',
    email: 'fitrey@penangport.gov.my'
  },
  {
    id: '39',
    name: 'Amar bin Mat Adzin',
    position: 'Pegawai Marin 1',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 959 4311',
    email: 'amar@penangport.gov.my'
  },
  {
    id: '40',
    name: 'Muhamad Syafiq bin Mohd Rizani',
    position: 'Pegawai Marin 2',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532 Ext: 208',
    email: 'syafiq@penangport.gov.my'
  },
  {
    id: '41',
    name: 'Mohd Nizam bin Saidin',
    position: 'Penolong Kanan Pegawai Kargo Berbahaya',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532 Ext : 207',
    email: 'nizam@penangport.gov.my'
  },
  {
    id: '42',
    name: 'Mohamad Khairul Anuar bin Nazri',
    position: 'Penolong Pegawai Marin',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532 Ext: 209',
    email: 'khairul@penangport.gov.my'
  },
  {
    id: '43',
    name: 'Shazli Amri bin Mahmood',
    position: 'Penolong Pegawai Kargo Berbahaya',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532 Ext : 203',
    email: 'shazli@penangport.gov.my'
  },
  {
    id: '44',
    name: 'Muhammad Qhairil Anwar bin Mohd Adnan',
    position: 'Pembantu Tadbir Kanan Kargo Berbahaya',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 323 8532 Ext : 212',
    email: 'qhairil@penangport.gov.my'
  },
  {
    id: '45',
    name: 'Muhamad Faizal bin Mohamad Yusoff',
    position: 'Pembantu Tadbir Marin',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 959 4311',
    email: 'faizal@penangport.gov.my'
  },
  {
    id: '46',
    name: 'Hasrul Zamir bin Nasrodin',
    position: 'Pembantu Tadbir Kargo Berbahaya',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Marin & Kargo Berbahaya Dan Kejuruteraan',
    phone: '604 331 8575 Ext : 221',
    email: 'hasrul@penangport.gov.my'
  },

  // BAHAGIAN OPERASI & KAWALSELIA - Unit Kejuruteraan
  {
    id: '47',
    name: 'Norwahida Azwani binti Mat Yusop',
    position: 'Jurutera',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kejuruteraan',
    phone: '604 331 8575 Ext : 216',
    email: 'wahida@penangport.gov.my'
  },
  {
    id: '48',
    name: 'Azhar bin Aziz',
    position: 'Penolong Kanan Jurutera',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kejuruteraan',
    phone: '604 331 8575 Ext : 215',
    email: 'azhar@penangport.gov.my'
  },
  {
    id: '49',
    name: 'Mohammad Sameer bin Ishak',
    position: 'Penolong Jurutera',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kejuruteraan',
    phone: '604 331 8575 Ext : 217',
    email: 'sameer@penangport.gov.my'
  },
  {
    id: '50',
    name: 'Mustaffa bin Mat Nun',
    position: 'Penjaga Jentera Elektrik',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kejuruteraan',
    phone: '604 263 3211 Ext : 146',
    email: 'mustaffa@penangport.gov.my'
  },
  {
    id: '51',
    name: 'Muhammad Sulhi bin Jamaluddin',
    position: 'Penolong Jurutera (Elektrik)',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kejuruteraan',
    phone: '604 331 8575 Ext :',
    email: 'sulhi@penangport.gov.my'
  },

  // BAHAGIAN OPERASI & KAWALSELIA - Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan
  {
    id: '52',
    name: 'Hamidi bin Karla',
    position: 'Pengurus Keselamatan & Kebombaan',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 324 0182 Ext : 204',
    email: 'hamidi@penangport.gov.my'
  },
  {
    id: '53',
    name: 'Nor Effendi bin Abd Hamid',
    position: 'Penolong Pengurus Kebombaan',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 324 0182 Ext : 202',
    email: 'effendi@penangport.gov.my'
  },
  {
    id: '54',
    name: 'Mohamad Zamri bin Ismail',
    position: 'Penolong Pengurus Keselamatan',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 324 0182 Ext : 205',
    email: 'zamri@penangport.gov.my'
  },
  {
    id: '55',
    name: 'Arjunaidi Isyaqi bin Abu Osman',
    position: 'Pembantu Tadbir Kanan Keselamatan',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 263 3211',
    email: 'arjunaidi@penangport.gov.my'
  },
  {
    id: '56',
    name: 'Noor Fathurrahman bin Abdullah',
    position: 'Pembantu Tadbir Keselamatan',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 324 0182 Ext : 210',
    email: 'fathurrahman@penangport.gov.my'
  },
  {
    id: '57',
    name: 'Arjunaidi Isyaqi bin Abu Osman',
    position: 'Pembantu Tadbir Kanan Kebombaan',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 324 0182 Ext : 211',
    email: 'muzammil@penangport.gov.my'
  },
  {
    id: '58',
    name: 'Sharizan binti Rosli',
    position: 'Pengawal Keselamatan 1',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 263 3211',
    email: 'sharizan@penangport.gov.my'
  },
  {
    id: '59',
    name: 'Ahmad Mujahid bin Samsudin',
    position: 'Pengawal Keselamatan 2',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 263 3211',
    email: 'mujahid@penangport.gov.my'
  },
  {
    id: '60',
    name: 'Ahmad Fitri bin Abd Latif',
    position: 'Pengawal Keselamatan 3',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 263 3211',
    email: 'fitri@penangport.gov.my'
  },
  {
    id: '61',
    name: 'Muhammad Muzammil bin Omar',
    position: 'Pengawal Keselamatan 4',
    department: 'Bahagian Operasi & Kawalselia',
    unit: 'Unit Kepolisan Pelabuhan, Kebombaan & Keselamatan',
    phone: '604 263 3211',
    email: 'irham@penangport.gov.my'
  },

  // BAHAGIAN KHIDMAT PENGURUSAN & KEWANGAN - Unit Khidmat Pengurusan
  {
    id: '62',
    name: 'Lim Ben Ching',
    position: 'Penolong Pengurus Khidmat Pengurusan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 119',
    email: 'benching@penangport.gov.my'
  },
  {
    id: '63',
    name: 'Shanzat binti Rosli',
    position: 'Pegawai Khidmat Pengurusan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 118',
    email: 'shanzat@penangport.gov.my'
  },
  {
    id: '64',
    name: 'Zalina binti Daud',
    position: 'Penolong Kanan Pegawai Khidmat Pengurusan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 150',
    email: 'zalina@penangport.gov.my'
  },
  {
    id: '65',
    name: 'Norafizah binti Ismail',
    position: 'Penolong Pegawai Khidmat Pengurusan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 151',
    email: 'norafizah@penangport.gov.my'
  },
  {
    id: '66',
    name: 'Azmin bin Yaacob',
    position: 'Ketua Pembantu Tadbir',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 120',
    email: 'azmin@penangport.gov.my'
  },
  {
    id: '67',
    name: 'Mohamed Nur Azizan bin Mohamed Nasir',
    position: 'Pembantu Tadbir Kanan Khidmat Pengurusan 1',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 123',
    email: 'azizan@penangport.gov.my'
  },
  {
    id: '68',
    name: 'Hanisah binti Hamzah',
    position: 'Pembantu Tadbir Kanan Khidmat Pengurusan 2',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 133',
    email: 'hanisah@penangport.gov.my'
  },
  {
    id: '69',
    name: 'Mazuwin bin Mohd Ariff',
    position: 'Pegawai Khidmat Pelanggan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211',
    email: 'mazuwin@penangport.gov.my'
  },
  {
    id: '70',
    name: 'Nur Syazwani binti Mohd Faeree',
    position: 'Pembantu Tadbir Khidmat Pengurusan 1',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 121',
    email: 'syazwani@penangport.gov.my'
  },
  {
    id: '71',
    name: 'Muhammad Arif Syahmi bin Yusmidar',
    position: 'Pembantu Tadbir Khidmat Pengurusan 2',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 134',
    email: 'arif@penangport.gov.my'
  },
  {
    id: '72',
    name: 'Mohd Shahnee bin Mohd Zaini',
    position: 'Pembantu Operasi',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext : 131',
    email: 'shahnee@penangport.gov.my'
  },
  {
    id: '73',
    name: 'Muhammad Nasir bin Shahrom',
    position: 'Pemandu 1',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext :',
    email: 'nasir@penangport.gov.my'
  },
  {
    id: '74',
    name: 'Mahathir bin Yusof',
    position: 'Pemandu 2',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext :',
    email: 'mahathir@penangport.gov.my'
  },
  {
    id: '75',
    name: 'Mohammad Ifwan bin Annuar',
    position: 'Pemandu 3',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext:',
    email: 'ifwan@penangport.gov.my'
  },
  {
    id: '76',
    name: 'Mohd Danel bin Abu Bakar',
    position: 'Pemandu 4',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Khidmat Pengurusan',
    phone: '604 263 3211 Ext :',
    email: 'danel@penangport.gov.my'
  },

  // BAHAGIAN KHIDMAT PENGURUSAN & KEWANGAN - Unit Kewangan
  {
    id: '77',
    name: 'Mohamad Safri bin Halim',
    position: 'Pengurus Khidmat Pengurusan & Kewangan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 263 3211 Ext : 124',
    email: 'safri@penangport.gov.my'
  },
  {
    id: '78',
    name: 'Safwan bin Sabahi',
    position: 'Setiausaha Pejabat Khidmat Pengurusan dan Kewangan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 263 3211 Ext:',
    email: 'safwan@penangport.gov.my'
  },
  {
    id: '79',
    name: 'Indira A/P M. Sivananthasharma',
    position: 'Pengurus Kewangan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 263 3211 Ext: 131',
    email: 'indira@penangport.gov.my'
  },
  {
    id: '80',
    name: 'Suryani binti Mohd Hadzir',
    position: 'Akauntan Kanan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 263 3211 Ext : 117',
    email: 'suryani@penangport.gov.my'
  },
  {
    id: '81',
    name: 'Sharina binti Sudin',
    position: 'Akauntan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 263 3211 Ext : 125',
    email: 'sharina@penangport.gov.my'
  },
  {
    id: '82',
    name: 'Azrinbadrinas binti Abu Bakar',
    position: 'Penolong Kanan Pegawai Kewangan',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 263 3211 Ext : 126',
    email: 'azrin@penangport.gov.my'
  },
  {
    id: '83',
    name: 'Noor Asmalini binti Ismail',
    position: 'Pembantu Tadbir Kewangan 1',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 263 3211 Ext : 127',
    email: 'asmalini@penangport.gov.my'
  },
  {
    id: '84',
    name: 'Fauzan Ibrahim bin Ismail',
    position: 'Pembantu Tadbir Kewangan 2',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 263 3211 Ext : 128',
    email: 'fauzan@penangport.gov.my'
  },
  {
    id: '85',
    name: 'Kirrthana a/p Tharumaraj',
    position: 'Pembantu Tadbir Kewangan 3',
    department: 'Bahagian Khidmat Pengurusan & Kewangan',
    unit: 'Unit Kewangan',
    phone: '604 2633211 Ext : 129',
    email: 'kirrthana@penangport.gov.my'
  }
]

export default function DirektoriPage() {
  const [searchName, setSearchName] = useState('')
  const [selectedDepartment, setSelectedDepartment] = useState('')
  const [selectedUnit, setSelectedUnit] = useState('')
  const [showDepartmentDropdown, setShowDepartmentDropdown] = useState(false)
  const [showUnitDropdown, setShowUnitDropdown] = useState(false)

  const availableUnits = useMemo(() => {
    if (!selectedDepartment) return []
    return units[selectedDepartment as keyof typeof units] || []
  }, [selectedDepartment])

  const filteredStaff = useMemo(() => {
    return staffDirectory.filter(staff => {
      const matchesName = !searchName ||
        staff.name.toLowerCase().includes(searchName.toLowerCase()) ||
        staff.position.toLowerCase().includes(searchName.toLowerCase())

      const matchesDepartment = !selectedDepartment ||
        staff.department === selectedDepartment

      const matchesUnit = !selectedUnit || staff.unit === selectedUnit

      return matchesName && matchesDepartment && matchesUnit
    })
  }, [searchName, selectedDepartment, selectedUnit])

  const clearFilters = () => {
    setSearchName('')
    setSelectedDepartment('')
    setSelectedUnit('')
  }

  const handleDepartmentSelect = (dept: string) => {
    setSelectedDepartment(dept)
    setSelectedUnit('') // Clear unit when department changes
    setShowDepartmentDropdown(false)
  }

  const handleUnitSelect = (unit: string) => {
    setSelectedUnit(unit)
    setShowUnitDropdown(false)
  }

  return (
    <PageTemplate
      title="Direktori Pegawai"
      subtitle="Direktori pegawai dan kakitangan Suruhanjaya Pelabuhan Pulau Pinang"
      breadcrumbs={[{ name: 'Utama', href: '/' }, { name: 'Profil', href: '/profil' }, { name: 'Organisasi', href: '/profil/organisasi' }, { name: 'Direktori' }]}
    >
      <div className="max-w-none">
        {/* Header Section */}
        <div className="bg-gradient-to-r from-sppp-blue to-sppp-dark-blue rounded-2xl p-8 mb-8 text-white">
          <div className="text-center">
            <div className="flex justify-center mb-4">
              <UsersIcon className="h-16 w-16" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Direktori Pegawai SPPP</h2>
            <p className="text-xl opacity-90 max-w-3xl mx-auto">
              Cari dan hubungi pegawai serta kakitangan Suruhanjaya Pelabuhan Pulau Pinang
              berdasarkan nama, bahagian, atau unit
            </p>
          </div>
        </div>

        {/* Modern Search Interface - 3 Search Bars Side by Side */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-8 border border-gray-100">
          <h3 className="text-xl font-bold text-sppp-dark-blue mb-6 flex items-center">
            <MagnifyingGlassIcon className="h-6 w-6 mr-2" />
            Carian Pegawai
          </h3>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
            {/* Name Search */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Nama Pegawai
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="Cari nama atau jawatan..."
                  value={searchName}
                  onChange={(e) => setSearchName(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sppp-blue focus:ring-4 focus:ring-sppp-blue/20 transition-all duration-300"
                />
                <UserIcon className="absolute right-3 top-3 h-6 w-6 text-gray-400" />
              </div>
            </div>

            {/* Department Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Bahagian
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowDepartmentDropdown(!showDepartmentDropdown)}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sppp-blue focus:ring-4 focus:ring-sppp-blue/20 transition-all duration-300 text-left bg-white flex items-center justify-between"
                >
                  <span className={selectedDepartment ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedDepartment || 'Pilih Bahagian'}
                  </span>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${showDepartmentDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showDepartmentDropdown && (
                  <div className="absolute z-20 top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                    <div
                      onClick={() => handleDepartmentSelect('')}
                      className="px-4 py-3 hover:bg-sppp-light-blue hover:text-sppp-dark-blue cursor-pointer transition-colors border-b border-gray-100"
                    >
                      Semua Bahagian
                    </div>
                    {departments.map((dept) => (
                      <div
                        key={dept}
                        onClick={() => handleDepartmentSelect(dept)}
                        className="px-4 py-3 hover:bg-sppp-light-blue hover:text-sppp-dark-blue cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {dept}
                      </div>
                    ))}
                  </div>
                )}
                <BuildingOfficeIcon className="absolute right-10 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
              </div>
            </div>

            {/* Unit Dropdown */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Unit
              </label>
              <div className="relative">
                <button
                  onClick={() => setShowUnitDropdown(!showUnitDropdown)}
                  disabled={!selectedDepartment}
                  className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-sppp-blue focus:ring-4 focus:ring-sppp-blue/20 transition-all duration-300 text-left bg-white flex items-center justify-between disabled:bg-gray-100 disabled:cursor-not-allowed"
                >
                  <span className={selectedUnit ? 'text-gray-900' : 'text-gray-500'}>
                    {selectedUnit || (selectedDepartment ? 'Pilih Unit' : 'Pilih bahagian dahulu')}
                  </span>
                  <ChevronDownIcon className={`h-5 w-5 transition-transform duration-200 ${showUnitDropdown ? 'rotate-180' : ''}`} />
                </button>

                {showUnitDropdown && selectedDepartment && (
                  <div className="absolute z-20 top-full left-0 right-0 mt-2 bg-white border-2 border-gray-200 rounded-xl shadow-lg max-h-60 overflow-y-auto">
                    <div
                      onClick={() => handleUnitSelect('')}
                      className="px-4 py-3 hover:bg-sppp-light-blue hover:text-sppp-dark-blue cursor-pointer transition-colors border-b border-gray-100"
                    >
                      Semua Unit
                    </div>
                    {availableUnits.map((unit) => (
                      <div
                        key={unit}
                        onClick={() => handleUnitSelect(unit)}
                        className="px-4 py-3 hover:bg-sppp-light-blue hover:text-sppp-dark-blue cursor-pointer transition-colors border-b border-gray-100 last:border-b-0"
                      >
                        {unit}
                      </div>
                    ))}
                  </div>
                )}
                <MapPinIcon className="absolute right-10 top-3 h-6 w-6 text-gray-400 pointer-events-none" />
              </div>
            </div>
          </div>

          {/* Clear Filters Button */}
          {(searchName || selectedDepartment || selectedUnit) && (
            <div className="flex justify-center">
              <button
                onClick={clearFilters}
                className="flex items-center px-6 py-2 text-sm font-medium text-sppp-blue hover:text-sppp-dark-blue hover:bg-sppp-light-blue rounded-lg transition-colors"
              >
                <XMarkIcon className="h-4 w-4 mr-2" />
                Padam Penapis
              </button>
            </div>
          )}
        </div>

        {/* Results Summary */}
        <div className="mb-6">
          <div className="flex items-center justify-between bg-gray-50 rounded-lg p-4">
            <div className="flex items-center text-gray-600">
              <UsersIcon className="h-5 w-5 mr-2" />
              <span className="font-medium">
                {filteredStaff.length} pegawai ditemui
                {(searchName || selectedDepartment || selectedUnit) && ` daripada ${staffDirectory.length} jumlah pegawai`}
              </span>
            </div>
            {filteredStaff.length > 0 && (
              <div className="text-sm text-gray-500">
                Paparan bergrid dengan maklumat lengkap
              </div>
            )}
          </div>
        </div>

        {/* Staff Directory Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredStaff.map((staff) => (
            <StaffCard key={staff.id} staff={staff} />
          ))}
        </div>

        {/* No Results */}
        {filteredStaff.length === 0 && (
          <div className="text-center py-16">
            <UsersIcon className="h-20 w-20 text-gray-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Tiada pegawai ditemui
            </h3>
            <p className="text-gray-500 mb-6">
              Cuba ubah kriteria carian atau padam penapis untuk melihat semua pegawai
            </p>
            {(searchName || selectedDepartment || selectedUnit) && (
              <button
                onClick={clearFilters}
                className="bg-sppp-blue text-white px-6 py-3 rounded-lg hover:bg-sppp-dark-blue transition-colors"
              >
                Papar Semua Pegawai
              </button>
            )}
          </div>
        )}

        {/* Contact Information Footer */}
        <div className="mt-12 bg-gradient-to-r from-gray-50 to-white rounded-2xl p-8 border border-gray-100">
          <div className="text-center">
            <h3 className="text-xl font-bold text-sppp-dark-blue mb-4">
              Maklumat Hubungan Pejabat Utama
            </h3>
            <div className="space-y-2 text-gray-600">
              <p className="flex items-center justify-center space-x-2">
                <MapPinIcon className="h-5 w-5 text-sppp-blue" />
                <span>Aras 2, Swettenham Pier Cruise Terminal, No.1A, Pesara King Edward</span>
              </p>
              <p className="text-gray-600">10300 George Town, Pulau Pinang</p>
              <div className="flex items-center justify-center space-x-6 pt-2">
                <a href="tel:+60426333211" className="flex items-center space-x-2 hover:text-sppp-blue transition-colors">
                  <PhoneIcon className="h-5 w-5" />
                  <span>+60 4-263 3211</span>
                </a>
                <a href="mailto:sppp@penangport.gov.my" className="flex items-center space-x-2 hover:text-sppp-blue transition-colors">
                  <EnvelopeIcon className="h-5 w-5" />
                  <span>sppp@penangport.gov.my</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageTemplate>
  )
}
