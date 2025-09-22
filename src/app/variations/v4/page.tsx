'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowLeftIcon, Menu, X, ChevronDown, Activity, Clock, Wifi, WifiOff,
  ArrowUpRight, TrendingUp, TrendingDown, Minus, Ship, Package, AlertCircle,
  BarChart3, Anchor, Truck, Shield, Gauge, ChevronRight, CheckCircle, AlertTriangle,
  Info, FileText, Download, Phone, Mail, MapPin, ExternalLink, Database, Users,
  Settings, HelpCircle, Terminal, Cpu, Globe, Eye, MessageSquare, Tag, Calendar,
  Filter, Grid, List, Bell, Zap, Lock, GitBranch, HardDrive, XCircle, Server,
  Search, Power, Monitor, Layers, Home
} from 'lucide-react'

// Header Component
function V4Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [language, setLanguage] = useState('BM')

  const navItems = [
    { id: 'overview', label: 'TINJAUAN', icon: Home, href: '#' },
    { id: 'services', label: 'PERKHIDMATAN', icon: Database, href: '#services' },
    { id: 'analytics', label: 'ANALITIK', icon: BarChart3, href: '#stats' },
    { id: 'operations', label: 'OPERASI', icon: Monitor, href: '#' },
    { id: 'support', label: 'SOKONGAN', icon: HelpCircle, href: '#' },
  ]

  const systemStatus = [
    { label: 'VTS', status: 'operational', color: 'green' },
    { label: 'PORT-NET', status: 'operational', color: 'green' },
    { label: 'EDI', status: 'maintenance', color: 'amber' },
  ]

  return (
    <header className="sticky top-0 z-50 bg-gray-950/95 backdrop-blur-sm border-b border-gray-800">
      {/* Top Status Bar */}
      <div className="bg-gray-900/50 border-b border-gray-800">
        <div className="container mx-auto px-4">
          <div className="flex h-10 items-center justify-between text-xs font-mono">
            <div className="flex items-center space-x-6">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400">SISTEM BEROPERASI</span>
              </div>
              <div className="hidden sm:flex items-center space-x-4">
                {systemStatus.map((system, index) => (
                  <div key={index} className="flex items-center gap-1">
                    <span className="text-gray-400">{system.label}:</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      system.color === 'green' ? 'bg-green-500' :
                      system.color === 'amber' ? 'bg-amber-500' :
                      'bg-red-500'
                    }`}></div>
                    <span className={`${
                      system.color === 'green' ? 'text-green-400' :
                      system.color === 'amber' ? 'text-amber-400' :
                      'text-red-400'
                    }`}>
                      {system.status.toUpperCase()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="hidden md:flex items-center space-x-2 text-gray-400">
                <Clock className="w-3 h-3" />
                <span suppressHydrationWarning>{new Date().toLocaleTimeString('en-US', { hour12: false })}</span>
              </div>
              <div className="flex space-x-2">
                <button
                  onClick={() => setLanguage('BM')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    language === 'BM'
                      ? 'text-cyan-400 bg-cyan-500/20'
                      : 'text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  BM
                </button>
                <span className="text-gray-600">|</span>
                <button
                  onClick={() => setLanguage('EN')}
                  className={`px-2 py-0.5 rounded transition-colors ${
                    language === 'EN'
                      ? 'text-cyan-400 bg-cyan-500/20'
                      : 'text-gray-400 hover:text-cyan-400'
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-gray-950/95 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
              {/* Malaysian Coat of Arms */}
              <div className="relative">
                <Image
                  src="/images/Coat_of_arms_of_Malaysia.png"
                  alt="Coat of Arms of Malaysia"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              {/* SPPP Logo */}
              <div className="relative">
                <Image
                  src="/images/SPPP Official Logo.png"
                  alt="SPPP Logo"
                  width={40}
                  height={40}
                  className="h-10 w-auto object-contain"
                />
              </div>
              {/* Text Content */}
              <div className="flex flex-col">
                <div className="text-xs text-cyan-400 font-mono mb-0.5">
                  PORTAL RASMI
                </div>
                <h1 className="text-sm font-bold text-white leading-tight font-mono">
                  SURUHANJAYA PELABUHAN PULAU PINANG
                </h1>
              </div>
            </div>

            {/* Navigation - Desktop */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    className="flex items-center gap-2 px-3 py-2 text-sm font-mono text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center space-x-3">
              {/* Search */}
              <div className="hidden md:flex items-center">
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                  <input
                    type="text"
                    placeholder="Cari modul..."
                    className="pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-800 text-gray-300 placeholder-gray-500 rounded-lg text-sm font-mono focus:border-cyan-500/50 focus:outline-none focus:ring-1 focus:ring-cyan-500/25 transition-all"
                  />
                </div>
              </div>

              {/* Quick Actions */}
              <div className="hidden lg:flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">
                  <Bell className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">
                  <Settings className="w-4 h-4" />
                </button>
                <div className="w-px h-6 bg-gray-800"></div>
                <button className="flex items-center gap-2 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg text-xs font-mono transition-all">
                  <Power className="w-3 h-3" />
                  LOG KELUAR
                </button>
              </div>

              {/* Mobile Menu Button */}
              <div className="lg:hidden">
                <button
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all"
                >
                  {mobileMenuOpen ? (
                    <X className="w-5 h-5" />
                  ) : (
                    <Menu className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-gray-950/98 backdrop-blur-sm border-t border-gray-800">
          <div className="container mx-auto px-4 py-4">
            {/* Search Mobile */}
            <div className="mb-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
                <input
                  type="text"
                  placeholder="Cari modul..."
                  className="w-full pl-10 pr-4 py-2 bg-gray-900/50 border border-gray-800 text-gray-300 placeholder-gray-500 rounded-lg text-sm font-mono focus:border-cyan-500/50 focus:outline-none"
                />
              </div>
            </div>

            {/* Navigation Mobile */}
            <nav className="space-y-2 mb-4">
              {navItems.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.id}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className="flex items-center gap-3 px-3 py-2 text-sm font-mono text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all"
                  >
                    <Icon className="w-4 h-4" />
                    {item.label}
                  </Link>
                )
              })}
            </nav>

            {/* Quick Actions Mobile */}
            <div className="flex items-center justify-between pt-4 border-t border-gray-800">
              <div className="flex items-center space-x-2">
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">
                  <Bell className="w-4 h-4" />
                </button>
                <button className="p-2 text-gray-400 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">
                  <Settings className="w-4 h-4" />
                </button>
              </div>
              <button className="flex items-center gap-2 px-3 py-2 bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 rounded-lg text-xs font-mono transition-all">
                <Power className="w-3 h-3" />
                LOG KELUAR
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

// Hero Component
function V4Hero() {
  const [currentMetric, setCurrentMetric] = useState(0)
  const [animatedValues, setAnimatedValues] = useState({
    vessels: 0,
    cargo: 0,
    efficiency: 0,
    berths: 0
  })

  useEffect(() => {
    // Animate numbers on mount
    const targets = { vessels: 24, cargo: 45678, efficiency: 94, berths: 85 }
    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { vessels: 0, cargo: 0, efficiency: 0, berths: 0 }
    const timer = setInterval(() => {
      current = {
        vessels: Math.min(current.vessels + targets.vessels / steps, targets.vessels),
        cargo: Math.min(current.cargo + targets.cargo / steps, targets.cargo),
        efficiency: Math.min(current.efficiency + targets.efficiency / steps, targets.efficiency),
        berths: Math.min(current.berths + targets.berths / steps, targets.berths),
      }
      setAnimatedValues(current)

      if (current.vessels >= targets.vessels) {
        clearInterval(timer)
      }
    }, increment)

    // Rotate through metrics
    const metricTimer = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % 4)
    }, 3000)

    return () => {
      clearInterval(timer)
      clearInterval(metricTimer)
    }
  }, [])

  const mainMetrics = [
    {
      label: 'KAPAL AKTIF',
      value: Math.round(animatedValues.vessels),
      unit: 'kapal',
      change: '+12%',
      trend: 'up',
      icon: Ship,
      color: 'cyan',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      borderColor: 'border-cyan-500/30',
      glowColor: 'shadow-cyan-500/20'
    },
    {
      label: 'VOLUM KARGO',
      value: Math.round(animatedValues.cargo).toLocaleString(),
      unit: 'MT hari ini',
      change: '+8.5%',
      trend: 'up',
      icon: Package,
      color: 'green',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      borderColor: 'border-green-500/30',
      glowColor: 'shadow-green-500/20'
    },
    {
      label: 'KECEKAPAN PELABUHAN',
      value: Math.round(animatedValues.efficiency),
      unit: '%',
      change: '+2.1%',
      trend: 'up',
      icon: Activity,
      color: 'purple',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      borderColor: 'border-purple-500/30',
      glowColor: 'shadow-purple-500/20'
    },
    {
      label: 'PENGGUNAAN DERMAGA',
      value: Math.round(animatedValues.berths),
      unit: '% diduduki',
      change: '-3%',
      trend: 'down',
      icon: Clock,
      color: 'amber',
      bgGradient: 'from-amber-500/20 to-orange-500/20',
      borderColor: 'border-amber-500/30',
      glowColor: 'shadow-amber-500/20'
    },
  ]

  const liveActivities = [
    { time: '14:32', event: 'MV PACIFIC STAR berthed at Wharf 3', type: 'arrival' },
    { time: '14:28', event: 'Container discharge commenced - Bay 5', type: 'operation' },
    { time: '14:15', event: 'MV OCEAN PRIDE departed from Berth 2', type: 'departure' },
    { time: '13:45', event: 'Pilot boarding - MV ASIAN GLORY', type: 'pilot' },
  ]

  const quickStats = [
    { label: 'Kapal di Tempat Berlabuh', value: '8', status: 'normal' },
    { label: 'Purata Masa Pemulihan', value: '18.5h', status: 'good' },
    { label: 'Status Cuaca', value: 'Cerah', status: 'excellent' },
    { label: 'Liputan VTS', value: '100%', status: 'excellent' },
  ]

  return (
    <section className="relative bg-gray-950 overflow-hidden">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      {/* Animated Background Gradient */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>

      <div className="relative container mx-auto px-4 py-12">
        {/* Hero Content */}
        <div className="mb-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left Content */}
          <div>
            <div className="inline-flex items-center px-4 py-2 bg-cyan-500/20 border border-cyan-500/30 rounded-lg text-sm font-mono mb-6">
              <div className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse mr-3"></div>
              <span className="text-cyan-400">PORTAL RASMI • PERKHIDMATAN 24/7</span>
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6 font-mono tracking-tight">
              Suruhanjaya Pelabuhan{' '}
              <span className="text-cyan-400 block lg:inline">Pulau Pinang</span>
            </h1>

            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Pemangkin transformasi digital industri maritim dengan teknologi canggih dan perkhidmatan yang cekap untuk masa depan pelabuhan pintar.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/variations"
                className="flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-mono rounded-lg hover:shadow-xl hover:shadow-cyan-500/25 transition-all transform hover:scale-105"
              >
                JELAJAHI PERKHIDMATAN
                <ArrowUpRight className="w-4 h-4" />
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 px-6 py-3 border border-gray-600 text-gray-300 hover:text-white hover:border-cyan-500 font-mono rounded-lg transition-all"
              >
                HUBUNGI KAMI
              </Link>
            </div>
          </div>

          {/* Right Content - Live Status */}
          <div className="lg:block">
            <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg p-4">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-cyan-400 text-sm font-mono">STATUS OPERASI LANGSUNG</span>
                </div>
                <span className="text-cyan-400 text-xs font-mono flex items-center gap-1">
                  LIHAT TERPERINCI <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-white">24</div>
                  <div className="text-xs text-gray-400">Kapal Aktif</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-mono font-bold text-white">94%</div>
                  <div className="text-xs text-gray-400">Kecekapan</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {mainMetrics.map((metric, index) => {
            const Icon = metric.icon
            const isActive = currentMetric === index
            return (
              <div
                key={metric.label}
                className={`relative bg-gradient-to-br ${metric.bgGradient} backdrop-blur-sm border ${metric.borderColor} rounded-lg p-6 transition-all duration-500 ${
                  isActive ? 'scale-105 shadow-2xl ' + metric.glowColor : ''
                }`}
              >
                {/* Corner Indicators */}
                <div className="absolute top-2 right-2">
                  <div className={`w-1.5 h-1.5 bg-${metric.color}-500 rounded-full ${isActive ? 'animate-pulse' : ''}`}></div>
                </div>

                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-gray-500 text-[10px] font-mono uppercase tracking-wider mb-1">{metric.label}</p>
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-mono font-bold text-white tabular-nums">
                        {metric.value}
                      </span>
                      <span className="text-xs text-gray-400 font-mono">{metric.unit}</span>
                    </div>
                  </div>
                  <div className={`p-2 bg-${metric.color}-500/20 rounded-lg`}>
                    <Icon className={`w-4 h-4 text-${metric.color}-400`} />
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {metric.trend === 'up' ? (
                    <TrendingUp className="w-3 h-3 text-green-400" />
                  ) : metric.trend === 'down' ? (
                    <TrendingDown className="w-3 h-3 text-red-400" />
                  ) : (
                    <Minus className="w-3 h-3 text-gray-400" />
                  )}
                  <span className={`text-xs font-mono ${
                    metric.trend === 'up' ? 'text-green-400' : metric.trend === 'down' ? 'text-red-400' : 'text-gray-400'
                  }`}>
                    {metric.change}
                  </span>
                  <span className="text-gray-600 text-[10px] font-mono">vs minggu lepas</span>
                </div>

                {/* Mini Chart Placeholder */}
                <div className="mt-4 h-8 flex items-end gap-0.5">
                  {[40, 65, 45, 70, 55, 85, 75, 90, 80, 95].map((height, i) => (
                    <div
                      key={i}
                      className={`flex-1 bg-gradient-to-t from-${metric.color}-500/40 to-${metric.color}-500/10 rounded-t`}
                      style={{ height: `${height}%` }}
                    ></div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        {/* Live Feed and Quick Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Live Activity Feed */}
          <div className="lg:col-span-2 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider">SUAPAN AKTIVITI LANGSUNG</h3>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-[10px] font-mono text-green-400">SIARAN LANGSUNG</span>
              </div>
            </div>

            <div className="space-y-3">
              {liveActivities.map((activity, index) => (
                <div
                  key={index}
                  className="flex items-start gap-4 p-3 bg-gray-800/30 rounded-lg border border-gray-700/50 hover:border-cyan-500/30 transition-all group"
                >
                  <span className="text-xs font-mono text-gray-500 tabular-nums">{activity.time}</span>
                  <div className="flex-1">
                    <p className="text-sm text-gray-200 group-hover:text-cyan-400 transition-colors">
                      {activity.event}
                    </p>
                  </div>
                  <div className={`px-2 py-0.5 rounded text-[10px] font-mono ${
                    activity.type === 'arrival' ? 'bg-green-500/20 text-green-400' :
                    activity.type === 'departure' ? 'bg-blue-500/20 text-blue-400' :
                    activity.type === 'operation' ? 'bg-amber-500/20 text-amber-400' :
                    'bg-purple-500/20 text-purple-400'
                  }`}>
                    {activity.type.toUpperCase()}
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-4 w-full py-2 bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-cyan-400 text-xs font-mono rounded transition-all">
              LIHAT SEMUA AKTIVITI →
            </button>
          </div>

          {/* Quick Stats Panel */}
          <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
            <h3 className="text-sm font-mono text-gray-400 uppercase tracking-wider mb-4">STATUS PANTAS</h3>

            <div className="space-y-4">
              {quickStats.map((stat, index) => (
                <div key={index} className="flex items-center justify-between p-3 bg-gray-800/30 rounded-lg">
                  <span className="text-xs text-gray-400">{stat.label}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm font-mono font-bold text-white">{stat.value}</span>
                    <div className={`w-1.5 h-1.5 rounded-full ${
                      stat.status === 'excellent' ? 'bg-green-500' :
                      stat.status === 'good' ? 'bg-cyan-500' :
                      stat.status === 'warning' ? 'bg-amber-500' :
                      'bg-gray-500'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-6 p-4 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 rounded-lg">
              <div className="flex items-start gap-3">
                <AlertCircle className="w-4 h-4 text-cyan-400 mt-0.5" />
                <div>
                  <p className="text-xs font-mono text-cyan-400 mb-1">AIR PASANG SETERUSNYA</p>
                  <p className="text-lg font-mono font-bold text-white">18:45</p>
                  <p className="text-[10px] text-gray-500 mt-1">Ketinggian: 2.8m</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);
          background-size: 50px 50px;
        }
      `}</style>
    </section>
  )
}

// Stats Component
function V4Stats() {
  const [animatedValues, setAnimatedValues] = useState({
    vessels: 0,
    cargo: 0,
    turnaround: 0,
    efficiency: 0,
    trade: 0,
    berths: 0
  })

  useEffect(() => {
    // Animate counter values
    const targets = {
      vessels: 1247,
      cargo: 8.5,
      turnaround: 18.5,
      efficiency: 94,
      trade: 145,
      berths: 12
    }

    const duration = 2000
    const steps = 60
    const increment = duration / steps

    let current = { vessels: 0, cargo: 0, turnaround: 0, efficiency: 0, trade: 0, berths: 0 }
    const timer = setInterval(() => {
      current = {
        vessels: Math.min(current.vessels + targets.vessels / steps, targets.vessels),
        cargo: Math.min(current.cargo + targets.cargo / steps, targets.cargo),
        turnaround: Math.min(current.turnaround + targets.turnaround / steps, targets.turnaround),
        efficiency: Math.min(current.efficiency + targets.efficiency / steps, targets.efficiency),
        trade: Math.min(current.trade + targets.trade / steps, targets.trade),
        berths: Math.min(current.berths + targets.berths / steps, targets.berths)
      }
      setAnimatedValues(current)

      if (current.vessels >= targets.vessels) {
        clearInterval(timer)
      }
    }, increment)

    return () => clearInterval(timer)
  }, [])

  const performanceMetrics = [
    {
      id: 'throughput',
      label: 'THROUGHPUT TAHUNAN',
      value: '1.2M',
      unit: 'TEU',
      change: +12.5,
      trend: 'up',
      icon: Package,
      color: 'cyan',
      bgGradient: 'from-cyan-500/20 to-blue-500/20',
      sparkline: [65, 70, 68, 72, 75, 78, 82, 85, 88, 92, 95, 98],
      comparison: 'Container dan kargo am'
    },
    {
      id: 'terminals',
      label: 'TERMINAL AKTIF',
      value: '15',
      unit: 'Unit',
      change: +13.3,
      trend: 'up',
      icon: Ship,
      color: 'green',
      bgGradient: 'from-green-500/20 to-emerald-500/20',
      sparkline: [70, 72, 71, 74, 76, 73, 78, 80, 82, 85, 87, 90],
      comparison: 'Kemudahan pelabuhan'
    },
    {
      id: 'staff',
      label: 'STAF TERLATIH',
      value: '2,500+',
      unit: 'Kakitangan',
      change: +8.2,
      trend: 'up',
      icon: Activity,
      color: 'amber',
      bgGradient: 'from-amber-500/20 to-orange-500/20',
      sparkline: [85, 82, 80, 78, 75, 73, 70, 68, 65, 62, 60, 58],
      comparison: 'Profesional maritim'
    },
    {
      id: 'efficiency',
      label: 'PRESTASI OPERASI',
      value: '96.8%',
      unit: 'Kecekapan',
      change: +3.1,
      trend: 'up',
      icon: Clock,
      color: 'purple',
      bgGradient: 'from-purple-500/20 to-pink-500/20',
      sparkline: [75, 77, 78, 80, 82, 83, 85, 87, 89, 91, 93, 94],
      comparison: 'Sistem automatik'
    }
  ]

  const getChangeIcon = (trend: string) => {
    switch(trend) {
      case 'up': return <TrendingUp className="w-3 h-3" />
      case 'down': return <TrendingDown className="w-3 h-3" />
      default: return <Minus className="w-3 h-3" />
    }
  }

  const getChangeColor = (trend: string, change: number) => {
    if (trend === 'neutral') return 'text-gray-400'
    if (trend === 'up') return change > 0 ? 'text-green-400' : 'text-red-400'
    if (trend === 'down') return change < 0 ? 'text-green-400' : 'text-red-400'
    return 'text-gray-400'
  }

  return (
    <section className="bg-gray-950 py-16 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl font-bold text-white font-mono mb-2">ANALISA PRESTASI</h2>
          <p className="text-gray-400 text-sm">Metrik operasi dan KPI masa nyata</p>

          {/* Time Range Selector */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button className="px-3 py-1.5 text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors">
              24H
            </button>
            <button className="px-3 py-1.5 text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors">
              7D
            </button>
            <button className="px-3 py-1.5 text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors">
              30D
            </button>
            <button className="px-3 py-1.5 text-xs font-mono bg-cyan-500/20 text-cyan-400 border border-cyan-500/50 rounded">
              YTD
            </button>
            <button className="px-3 py-1.5 text-xs font-mono text-gray-500 hover:text-gray-300 transition-colors">
              ALL
            </button>
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {performanceMetrics.map((metric) => {
            const Icon = metric.icon

            return (
              <div
                key={metric.id}
                className={`group relative bg-gradient-to-br ${metric.bgGradient} backdrop-blur-sm border border-gray-800 rounded-lg p-6 hover:border-${metric.color}-500/30 transition-all hover:scale-105`}
              >
                {/* Corner Badge */}
                <div className="absolute top-2 right-2">
                  <div className={`w-1.5 h-1.5 bg-${metric.color}-500 rounded-full animate-pulse`}></div>
                </div>

                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-[10px] font-mono text-gray-500 uppercase tracking-wider mb-1">
                      {metric.label}
                    </p>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-mono font-bold text-white tabular-nums">
                        {metric.value}
                      </span>
                      <span className="text-sm font-mono text-gray-400">
                        {metric.unit}
                      </span>
                    </div>
                  </div>
                  <div className={`p-2 bg-${metric.color}-500/20 rounded-lg`}>
                    <Icon className={`w-5 h-5 text-${metric.color}-400`} />
                  </div>
                </div>

                {/* Change Indicator */}
                <div className="flex items-center gap-2 mb-4">
                  <div className={`flex items-center gap-1 ${getChangeColor(metric.trend, metric.change)}`}>
                    {getChangeIcon(metric.trend)}
                    <span className="text-sm font-mono font-semibold">
                      {metric.change > 0 ? '+' : ''}{metric.change}%
                    </span>
                  </div>
                  <span className="text-[10px] text-gray-600">|</span>
                  <span className="text-[10px] font-mono text-gray-500">
                    {metric.comparison}
                  </span>
                </div>

                {/* Sparkline Chart */}
                <div className="h-12 flex items-end gap-0.5">
                  {metric.sparkline.map((value, index) => (
                    <div
                      key={index}
                      className={`flex-1 bg-gradient-to-t from-${metric.color}-500/40 to-${metric.color}-500/10 rounded-t hover:from-${metric.color}-500/60 hover:to-${metric.color}-500/20 transition-all`}
                      style={{ height: `${value}%` }}
                    />
                  ))}
                </div>

                {/* Trend Line */}
                <div className="mt-4 flex items-center justify-between text-[10px] font-mono text-gray-500">
                  <span>JAN</span>
                  <span>APR</span>
                  <span>JUL</span>
                  <span>OCT</span>
                  <span>DEC</span>
                </div>
              </div>
            )
          })}
        </div>

        {/* Summary Dashboard */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Overall Performance Score */}
            <div className="text-center">
              <h3 className="text-sm font-mono text-gray-400 uppercase mb-4">OVERALL PERFORMANCE</h3>
              <div className="relative inline-flex items-center justify-center">
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    className="text-gray-800"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="56"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="none"
                    strokeDasharray={`${2 * Math.PI * 56}`}
                    strokeDashoffset={`${2 * Math.PI * 56 * (1 - 0.89)}`}
                    className="text-cyan-500 transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-3xl font-mono font-bold text-white">89%</span>
                  <span className="text-[10px] font-mono text-gray-500">SCORE</span>
                </div>
              </div>
              <p className="mt-4 text-xs text-gray-400">
                Exceeding industry benchmarks
              </p>
            </div>

            {/* Key Achievements */}
            <div>
              <h3 className="text-sm font-mono text-gray-400 uppercase mb-4">KEY ACHIEVEMENTS</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Record cargo throughput in Q3</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">15% reduction in vessel wait time</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Zero safety incidents (180 days)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-amber-500 rounded-full"></div>
                  <span className="text-sm text-gray-300">Penggunaan perkhidmatan digital pada 78%</span>
                </div>
              </div>
            </div>

            {/* Projections */}
            <div>
              <h3 className="text-sm font-mono text-gray-400 uppercase mb-4">2024 PROJECTIONS</h3>
              <div className="space-y-3">
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Vessel Calls</span>
                    <span className="text-xs font-mono text-white">1,450</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[86%] bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Cargo Volume</span>
                    <span className="text-xs font-mono text-white">10.2M MT</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[83%] bg-gradient-to-r from-green-500 to-emerald-500 rounded-full"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs text-gray-400">Revenue Target</span>
                    <span className="text-xs font-mono text-white">$2.4B</span>
                  </div>
                  <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                    <div className="h-full w-[91%] bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Status Bar */}
          <div className="mt-8 pt-6 border-t border-gray-800 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <BarChart3 className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-gray-400">
                DATA DIKEMASKINI: <span className="text-cyan-400">LANGSUNG</span>
              </span>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
              <span>LAST UPDATE: 30s ago</span>
              <span>•</span>
              <span>NEXT REFRESH: 30s</span>
              <span>•</span>
              <span>SOURCE: PORT OPS DB</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Services Component
function V4Services() {
  const [hoveredService, setHoveredService] = useState<number | null>(null)
  const [selectedCategory, setSelectedCategory] = useState('all')

  const serviceCategories = [
    { id: 'all', label: 'SEMUA PERKHIDMATAN', count: 6 },
    { id: 'marine', label: 'MARIN', count: 2 },
    { id: 'cargo', label: 'KARGO', count: 2 },
    { id: 'logistics', label: 'LOGISTIK', count: 2 },
  ]

  const services = [
    {
      category: 'marine',
      title: 'PERKHIDMATAN MARIN',
      code: 'SVC-001',
      description: 'Pengurusan kapal menyeluruh dan sokongan',
      icon: Ship,
      status: 'operational',
      availability: 100,
      responseTime: '< 15 min',
      metrics: {
        daily: 24,
        weekly: 168,
        efficiency: 98
      },
      subServices: ['Pilotage', 'Tug Assistance', 'Mooring'],
      color: 'cyan',
      bgGradient: 'from-cyan-500/10 via-blue-500/10 to-cyan-500/10',
      borderGradient: 'from-cyan-500 to-blue-500'
    },
    {
      category: 'marine',
      title: 'OPERASI DERMAGA',
      code: 'SVC-002',
      description: 'Peruntukan dan pengurusan dermaga masa nyata',
      icon: Anchor,
      status: 'operational',
      availability: 85,
      responseTime: '< 30 min',
      metrics: {
        daily: 18,
        weekly: 126,
        efficiency: 92
      },
      subServices: ['Berth Booking', 'Allocation', 'Planning'],
      color: 'blue',
      bgGradient: 'from-blue-500/10 via-indigo-500/10 to-blue-500/10',
      borderGradient: 'from-blue-500 to-indigo-500'
    },
    {
      category: 'cargo',
      title: 'PENGENDALIAN KARGO',
      code: 'SVC-003',
      description: 'Operasi kargo dan penjejakan yang cekap',
      icon: Package,
      status: 'operational',
      availability: 95,
      responseTime: '< 20 min',
      metrics: {
        daily: 45678,
        weekly: 319746,
        efficiency: 94
      },
      subServices: ['Loading', 'Discharge', 'Storage'],
      color: 'green',
      bgGradient: 'from-green-500/10 via-emerald-500/10 to-green-500/10',
      borderGradient: 'from-green-500 to-emerald-500'
    },
    {
      category: 'cargo',
      title: 'PERKHIDMATAN KONTENA',
      code: 'SVC-004',
      description: 'Operasi terminal kontena',
      icon: Package,
      status: 'maintenance',
      availability: 78,
      responseTime: '< 25 min',
      metrics: {
        daily: 1250,
        weekly: 8750,
        efficiency: 88
      },
      subServices: ['Stacking', 'Reefer', 'Empty Depot'],
      color: 'amber',
      bgGradient: 'from-amber-500/10 via-orange-500/10 to-amber-500/10',
      borderGradient: 'from-amber-500 to-orange-500'
    },
    {
      category: 'logistics',
      title: 'HAULAGE & TRANSPORT',
      code: 'SVC-005',
      description: 'Logistik dan pengangkutan bersepadu',
      icon: Truck,
      status: 'operational',
      availability: 92,
      responseTime: '< 45 min',
      metrics: {
        daily: 450,
        weekly: 3150,
        efficiency: 91
      },
      subServices: ['Road Transport', 'Rail', 'Warehousing'],
      color: 'purple',
      bgGradient: 'from-purple-500/10 via-pink-500/10 to-purple-500/10',
      borderGradient: 'from-purple-500 to-pink-500'
    },
    {
      category: 'logistics',
      title: 'CUSTOMS & CLEARANCE',
      code: 'SVC-006',
      description: 'Dokumentasi dan pematuhan peraturan',
      icon: Shield,
      status: 'operational',
      availability: 100,
      responseTime: '< 60 min',
      metrics: {
        daily: 320,
        weekly: 2240,
        efficiency: 96
      },
      subServices: ['Dokumentasi', 'Pemeriksaan', 'Pelepasan'],
      color: 'red',
      bgGradient: 'from-red-500/10 via-rose-500/10 to-red-500/10',
      borderGradient: 'from-red-500 to-rose-500'
    },
  ]

  const filteredServices = selectedCategory === 'all'
    ? services
    : services.filter(s => s.category === selectedCategory)

  const getStatusIcon = (status: string) => {
    switch(status) {
      case 'operational':
        return <CheckCircle className="w-3 h-3 text-green-400" />
      case 'maintenance':
        return <AlertTriangle className="w-3 h-3 text-amber-400" />
      case 'offline':
        return <AlertTriangle className="w-3 h-3 text-red-400" />
      default:
        return <Info className="w-3 h-3 text-gray-400" />
    }
  }

  return (
    <section className="bg-gray-950 py-16 relative">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 className="text-2xl font-bold text-white font-mono mb-2">SERVICE MODULES</h2>
              <p className="text-gray-400 text-sm">Real-time operational status and performance metrics</p>
            </div>
            <div className="flex items-center gap-2">
              <Gauge className="w-4 h-4 text-cyan-400" />
              <span className="text-xs font-mono text-gray-400">SYSTEM LOAD: 72%</span>
            </div>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-2">
            {serviceCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg font-mono text-xs transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                    : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-gray-700'
                }`}
              >
                {cat.label}
                <span className="ml-2 text-[10px] opacity-60">({cat.count})</span>
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredServices.map((service, index) => {
            const Icon = service.icon
            const isHovered = hoveredService === index

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredService(index)}
                onMouseLeave={() => setHoveredService(null)}
                className={`relative group transition-all duration-300 ${
                  isHovered ? 'scale-105 z-10' : ''
                }`}
              >
                {/* Card Background with Gradient Border Effect */}
                <div className={`absolute inset-0 bg-gradient-to-r ${service.borderGradient} rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-sm`}></div>

                <div className={`relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden`}>
                  {/* Status Bar */}
                  <div className={`h-1 bg-gradient-to-r ${service.borderGradient}`}></div>

                  {/* Card Content */}
                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-gradient-to-br ${service.bgGradient} rounded-lg border border-${service.color}-500/20`}>
                          <Icon className={`w-5 h-5 text-${service.color}-400`} />
                        </div>
                        <div>
                          <h3 className="text-sm font-mono font-bold text-white">{service.title}</h3>
                          <p className="text-[10px] font-mono text-gray-500">{service.code}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-1">
                        {getStatusIcon(service.status)}
                        <span className={`text-[10px] font-mono ${
                          service.status === 'operational' ? 'text-green-400' :
                          service.status === 'maintenance' ? 'text-amber-400' :
                          'text-red-400'
                        }`}>
                          {service.status.toUpperCase()}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-400 mb-4 line-clamp-2">{service.description}</p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-2 mb-4">
                      <div className="bg-gray-800/50 rounded p-2">
                        <p className="text-[10px] text-gray-500 font-mono">DAILY</p>
                        <p className="text-sm font-mono font-bold text-white">
                          {service.metrics.daily > 1000 ? `${(service.metrics.daily / 1000).toFixed(1)}K` : service.metrics.daily}
                        </p>
                      </div>
                      <div className="bg-gray-800/50 rounded p-2">
                        <p className="text-[10px] text-gray-500 font-mono">WEEKLY</p>
                        <p className="text-sm font-mono font-bold text-white">
                          {service.metrics.weekly > 1000 ? `${(service.metrics.weekly / 1000).toFixed(1)}K` : service.metrics.weekly}
                        </p>
                      </div>
                      <div className="bg-gray-800/50 rounded p-2">
                        <p className="text-[10px] text-gray-500 font-mono">EFFICIENCY</p>
                        <p className="text-sm font-mono font-bold text-white">{service.metrics.efficiency}%</p>
                      </div>
                    </div>

                    {/* Availability Bar */}
                    <div className="mb-4">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-mono text-gray-500">AVAILABILITY</span>
                        <span className="text-[10px] font-mono text-white">{service.availability}%</span>
                      </div>
                      <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${service.borderGradient} transition-all duration-1000`}
                          style={{ width: `${service.availability}%` }}
                        ></div>
                      </div>
                    </div>

                    {/* Response Time */}
                    <div className="flex items-center justify-between p-2 bg-gray-800/30 rounded mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-3 h-3 text-gray-400" />
                        <span className="text-[10px] font-mono text-gray-400">RESPONSE TIME</span>
                      </div>
                      <span className="text-xs font-mono text-cyan-400">{service.responseTime}</span>
                    </div>

                    {/* Sub Services */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {service.subServices.map((sub, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-gray-800/50 text-[10px] font-mono text-gray-400 rounded"
                        >
                          {sub}
                        </span>
                      ))}
                    </div>

                    {/* Action Button */}
                    <Link
                      href="#"
                      className={`flex items-center justify-center gap-2 w-full py-2 bg-gradient-to-r ${service.bgGradient} hover:${service.bgGradient} border border-${service.color}-500/30 text-${service.color}-400 rounded font-mono text-xs transition-all hover:border-${service.color}-500/50 group`}
                    >
                      ACCESS MODULE
                      <ChevronRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                  {/* Live Indicator */}
                  {service.status === 'operational' && (
                    <div className="absolute top-4 right-4">
                      <div className="flex items-center gap-1">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        <span className="text-[10px] font-mono text-green-400">LANGSUNG</span>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Ringkasan Sistem */}
        <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Activity className="w-4 h-4 text-cyan-400" />
              <span className="text-sm font-mono text-gray-400">
                OVERALL SYSTEM PERFORMANCE
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500">UPTIME</span>
                <span className="text-sm font-mono font-bold text-cyan-400">99.8%</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono text-gray-500">PERKHIDMATAN AKTIF</span>
                <span className="text-sm font-mono font-bold text-green-400">5/6</span>
              </div>
              <div className="flex items-center gap-2">
                <TrendingUp className="w-3 h-3 text-green-400" />
                <span className="text-xs font-mono text-green-400">+12% efficiency</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
          background-size: 30px 30px;
        }
      `}</style>
    </section>
  )
}

// Quick Links Component
function V4QuickLinks() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const quickAccessCards = [
    {
      category: 'OPERASI',
      title: 'Jadual Kapal',
      code: 'QA-001',
      description: 'Ketibaan dan keberangkatan kapal masa nyata',
      icon: Database,
      stats: { active: 24, pending: 8 },
      lastUpdate: '2 min lalu',
      accessLevel: 'PUBLIC',
      color: 'cyan',
      href: '#'
    },
    {
      category: 'PERKHIDMATAN',
      title: 'Portal E-Perkhidmatan',
      code: 'QA-002',
      description: 'Perkhidmatan pelabuhan dan dokumentasi dalam talian',
      icon: Globe,
      stats: { users: 1250, requests: 45 },
      lastUpdate: '5 min lalu',
      accessLevel: 'REGISTERED',
      color: 'blue',
      href: '#'
    },
    {
      category: 'DOKUMENTASI',
      title: 'Kalkulator Tarif',
      code: 'QA-003',
      description: 'Kira caj dan yuran pelabuhan',
      icon: BarChart3,
      stats: { calculations: 892, saved: 234 },
      lastUpdate: '1 jam lalu',
      accessLevel: 'PUBLIC',
      color: 'green',
      href: '#'
    },
    {
      category: 'PEMATUHAN',
      title: 'Garis Panduan Keselamatan',
      code: 'QA-004',
      description: 'Port safety protocols and regulations',
      icon: Shield,
      stats: { documents: 45, updates: 3 },
      lastUpdate: 'Semalam',
      accessLevel: 'PUBLIC',
      color: 'amber',
      href: '#'
    },
    {
      category: 'PERNIAGAAN',
      title: 'Tender Board',
      code: 'QA-005',
      description: 'Current tenders and procurement',
      icon: FileText,
      stats: { active: 7, closing: 2 },
      lastUpdate: '3 jam lalu',
      accessLevel: 'PUBLIC',
      color: 'purple',
      href: '#'
    },
    {
      category: 'SOKONGAN',
      title: 'Pusat Bantuan',
      code: 'QA-006',
      description: 'Tiket sokongan dan FAQ',
      icon: HelpCircle,
      stats: { tickets: 34, resolved: 28 },
      lastUpdate: '30 min lalu',
      accessLevel: 'PUBLIC',
      color: 'red',
      href: '#'
    }
  ]

  const systemLinks = [
    {
      title: 'API DOCUMENTATION',
      description: 'Developer resources',
      icon: Terminal,
      status: 'online',
      href: '#'
    },
    {
      title: 'SYSTEM STATUS',
      description: 'Service availability',
      icon: Cpu,
      status: 'operational',
      href: '#'
    },
    {
      title: 'DATA EXPORTS',
      description: 'Download reports',
      icon: Download,
      status: 'online',
      href: '#'
    },
    {
      title: 'USER MANAGEMENT',
      description: 'Account settings',
      icon: Users,
      status: 'restricted',
      href: '#'
    }
  ]

  const contactChannels = [
    { type: 'HOTLINE', value: '+60 4-XXX XXXX', icon: Phone, available: true },
    { type: 'EMAIL', value: 'ops@penangport.gov.my', icon: Mail, available: true },
    { type: 'LOCATION', value: 'Georgetown, Penang', icon: MapPin, available: true },
  ]

  const getAccessColor = (level: string) => {
    switch(level) {
      case 'PUBLIC': return 'text-green-400 bg-green-500/10'
      case 'REGISTERED': return 'text-blue-400 bg-blue-500/10'
      case 'RESTRICTED': return 'text-red-400 bg-red-500/10'
      default: return 'text-gray-400 bg-gray-500/10'
    }
  }

  return (
    <section className="bg-gray-950 py-16 relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white font-mono mb-2">QUICK ACCESS</h2>
            <p className="text-gray-400 text-sm">Frequently accessed modules and resources</p>
          </div>
          <div className="flex items-center gap-2">
            <Settings className="w-4 h-4 text-gray-500" />
            <span className="text-xs font-mono text-gray-500">CUSTOMIZE DASHBOARD</span>
          </div>
        </div>

        {/* Main Quick Access Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {quickAccessCards.map((card, index) => {
            const Icon = card.icon
            const isHovered = hoveredCard === index

            return (
              <Link
                key={index}
                href={card.href}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`group relative block transition-all duration-300 ${
                  isHovered ? 'scale-105 z-10' : ''
                }`}
              >
                {/* Glow Effect */}
                <div className={`absolute inset-0 bg-${card.color}-500/20 blur-xl opacity-0 group-hover:opacity-50 transition-opacity duration-300`}></div>

                <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 hover:border-cyan-500/30 rounded-lg overflow-hidden">
                  {/* Status Indicator */}
                  <div className={`absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-${card.color}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>

                  <div className="p-5">
                    {/* Header */}
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 bg-${card.color}-500/10 rounded-lg border border-${card.color}-500/20`}>
                          <Icon className={`w-5 h-5 text-${card.color}-400`} />
                        </div>
                        <div>
                          <p className="text-[10px] font-mono text-gray-500 mb-0.5">{card.category}</p>
                          <h3 className="text-sm font-mono font-bold text-white group-hover:text-cyan-400 transition-colors">
                            {card.title}
                          </h3>
                        </div>
                      </div>
                      <ArrowUpRight className="w-3 h-3 text-gray-600 group-hover:text-cyan-400 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </div>

                    {/* Description */}
                    <p className="text-xs text-gray-400 mb-4">
                      {card.description}
                    </p>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-2 mb-4">
                      {Object.entries(card.stats).map(([key, value]) => (
                        <div key={key} className="bg-gray-800/30 rounded p-2">
                          <p className="text-[10px] font-mono text-gray-500 capitalize">{key}</p>
                          <p className="text-sm font-mono font-bold text-white">{value}</p>
                        </div>
                      ))}
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-between pt-3 border-t border-gray-800">
                      <span className={`px-2 py-0.5 text-[10px] font-mono rounded ${getAccessColor(card.accessLevel)}`}>
                        {card.accessLevel}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500">
                        Dikemaskini {card.lastUpdate}
                      </span>
                    </div>

                    {/* Module Code */}
                    <div className="absolute top-2 right-2">
                      <span className="text-[10px] font-mono text-gray-600">{card.code}</span>
                    </div>
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Baris Pautan Sistem */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 mb-8">
          {systemLinks.map((link, index) => {
            const Icon = link.icon
            return (
              <Link
                key={index}
                href={link.href}
                className="group flex items-center gap-3 p-4 bg-gray-900/50 border border-gray-800 hover:border-cyan-500/30 rounded-lg transition-all"
              >
                <div className="p-2 bg-gray-800 rounded">
                  <Icon className="w-4 h-4 text-cyan-400" />
                </div>
                <div className="flex-1">
                  <p className="text-xs font-mono text-white group-hover:text-cyan-400 transition-colors">
                    {link.title}
                  </p>
                  <p className="text-[10px] text-gray-500">{link.description}</p>
                </div>
                <div className={`w-1.5 h-1.5 rounded-full ${
                  link.status === 'online' || link.status === 'operational' ? 'bg-green-500' :
                  link.status === 'restricted' ? 'bg-amber-500' :
                  'bg-red-500'
                }`}></div>
              </Link>
            )
          })}
        </div>

        {/* Bahagian Hubungan & Sokongan */}
        <div className="bg-gradient-to-r from-gray-900/50 to-gray-900/30 border border-gray-800 rounded-lg p-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-lg font-mono text-white mb-2">24/7 COMMAND CENTER</h3>
              <p className="text-sm text-gray-400 mb-4">Direct access to port operations support</p>

              <div className="flex flex-wrap gap-4">
                {contactChannels.map((channel, index) => {
                  const Icon = channel.icon
                  return (
                    <div key={index} className="flex items-center gap-2">
                      <Icon className="w-4 h-4 text-cyan-400" />
                      <div>
                        <p className="text-[10px] font-mono text-gray-500">{channel.type}</p>
                        <p className="text-xs font-mono text-white">{channel.value}</p>
                      </div>
                      {channel.available && (
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <Link
                href="#"
                className="flex items-center justify-center gap-2 px-6 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-400 rounded-lg font-mono text-xs transition-all"
              >
                <FileText className="w-4 h-4" />
                SUBMIT REQUEST
              </Link>
              <Link
                href="#"
                className="flex items-center justify-center gap-2 px-6 py-2 bg-gray-800 hover:bg-gray-700 border border-gray-700 text-gray-400 hover:text-white rounded-lg font-mono text-xs transition-all"
              >
                <Download className="w-4 h-4" />
                DOWNLOAD FORMS
              </Link>
            </div>
          </div>
        </div>

        {/* Performance Metrics */}
        <div className="mt-4 flex items-center justify-center gap-6 text-[10px] font-mono text-gray-500">
          <span>RESPONSE TIME: 0.023s</span>
          <span>•</span>
          <span>CACHE HIT: 98.5%</span>
          <span>•</span>
          <span>API STATUS: HEALTHY</span>
          <span>•</span>
          <span>SSL: ACTIVE</span>
        </div>
      </div>

      <style jsx>{`
        .bg-grid-pattern {
          background-image:
            linear-gradient(rgba(255, 255, 255, 0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
          background-size: 25px 25px;
        }
      `}</style>
    </section>
  )
}

// Komponen Berita
function V4News() {
  const [viewMode, setViewMode] = useState<'grid' | 'timeline'>('timeline')
  const [selectedFilter, setSelectedFilter] = useState('all')

  const filters = [
    { id: 'all', label: 'ALL UPDATES', count: 12 },
    { id: 'critical', label: 'CRITICAL', count: 2 },
    { id: 'operations', label: 'OPERASI', count: 5 },
    { id: 'announcements', label: 'ANNOUNCEMENTS', count: 3 },
    { id: 'maintenance', label: 'MAINTENANCE', count: 2 },
  ]

  const newsItems = [
    {
      id: 1,
      timestamp: '2024-03-20T14:30:00',
      category: 'critical',
      priority: 'high',
      title: 'Sistem Pengurusan Trafik Kapal Baharu Dilancarkan',
      summary: 'Enhanced VTS capabilities now operational across all port sectors with real-time AI-powered monitoring.',
      content: 'Pihak berkuasa pelabuhan telah berjaya menggunakan Sistem Trafik Kapal generasi seterusnya...',
      metrics: {
        views: 2453,
        engagement: 89,
        shares: 34
      },
      tags: ['VTS', 'Technology', 'Safety'],
      status: 'NEW',
      author: 'Pentadbir Sistem',
      readTime: '3 min'
    },
    {
      id: 2,
      timestamp: '2024-03-20T10:15:00',
      category: 'operations',
      priority: 'medium',
      title: 'Q1 2024 Cargo Throughput Exceeds Projections',
      summary: 'First quarter performance shows 15% increase in container handling efficiency.',
      content: 'Penang Port has recorded exceptional growth in cargo throughput for Q1 2024...',
      metrics: {
        views: 1876,
        engagement: 72,
        shares: 28
      },
      tags: ['Performance', 'Statistics', 'Growth'],
      status: 'TRENDING',
      author: 'Analytics Team',
      readTime: '5 min'
    },
    {
      id: 3,
      timestamp: '2024-03-19T16:45:00',
      category: 'maintenance',
      priority: 'low',
      title: 'Penyelenggaraan Berjadual: Naik Taraf Dermaga 5-7',
      summary: 'Planned infrastructure improvements to enhance berthing capacity.',
      content: 'Notice is hereby given that Berths 5-7 will undergo scheduled maintenance...',
      metrics: {
        views: 945,
        engagement: 45,
        shares: 12
      },
      tags: ['Penyelenggaraan', 'Infrastruktur', 'Jadual'],
      status: 'SCHEDULED',
      author: 'Jabatan Operasi',
      readTime: '2 min'
    },
    {
      id: 4,
      timestamp: '2024-03-19T09:00:00',
      category: 'announcements',
      priority: 'medium',
      title: 'Kemaskini Platform Perkhidmatan Pelabuhan Digital',
      summary: 'Ciri-ciri baharu ditambahkan pada portal dalam talian untuk pengalaman pelanggan yang lebih baik.',
      content: 'We are pleased to announce significant updates to our digital services platform...',
      metrics: {
        views: 1234,
        engagement: 67,
        shares: 23
      },
      tags: ['Digital', 'Perkhidmatan', 'Kemaskini'],
      status: 'UPDATE',
      author: 'IT Department',
      readTime: '4 min'
    },
  ]

  const filteredNews = selectedFilter === 'all'
    ? newsItems
    : newsItems.filter(item => item.category === selectedFilter)

  const getPriorityColor = (priority: string) => {
    switch(priority) {
      case 'high': return 'text-red-400 bg-red-500/10 border-red-500/30'
      case 'medium': return 'text-amber-400 bg-amber-500/10 border-amber-500/30'
      case 'low': return 'text-green-400 bg-green-500/10 border-green-500/30'
      default: return 'text-gray-400 bg-gray-500/10 border-gray-500/30'
    }
  }

  const getStatusBadge = (status: string) => {
    switch(status) {
      case 'NEW': return 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30'
      case 'TRENDING': return 'bg-purple-500/20 text-purple-400 border-purple-500/30'
      case 'SCHEDULED': return 'bg-amber-500/20 text-amber-400 border-amber-500/30'
      case 'UPDATE': return 'bg-blue-500/20 text-blue-400 border-blue-500/30'
      default: return 'bg-gray-500/20 text-gray-400 border-gray-500/30'
    }
  }

  const formatTimestamp = (timestamp: string) => {
    const date = new Date(timestamp)
    const now = new Date()
    const diff = now.getTime() - date.getTime()
    const hours = Math.floor(diff / (1000 * 60 * 60))

    if (hours < 1) return 'Just now'
    if (hours < 24) return `${hours}h ago`
    if (hours < 48) return 'Yesterday'
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
  }

  return (
    <section className="bg-gray-950 py-16 relative">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-2xl font-bold text-white font-mono mb-2">INFORMATION FEED</h2>
            <p className="text-gray-400 text-sm">Real-time updates and critical announcements</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Live Indicator */}
            <div className="flex items-center gap-2 px-3 py-1.5 bg-gray-900/50 border border-gray-800 rounded-lg">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-xs font-mono text-gray-400">SUAPAN LANGSUNG</span>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center bg-gray-900/50 border border-gray-800 rounded-lg p-1">
              <button
                onClick={() => setViewMode('timeline')}
                className={`p-1.5 rounded transition-all ${
                  viewMode === 'timeline'
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <List className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`p-1.5 rounded transition-all ${
                  viewMode === 'grid'
                    ? 'bg-cyan-500/20 text-cyan-400'
                    : 'text-gray-500 hover:text-gray-300'
                }`}
              >
                <Grid className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2 mb-6">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setSelectedFilter(filter.id)}
              className={`px-3 py-1.5 rounded-lg font-mono text-xs transition-all ${
                selectedFilter === filter.id
                  ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/50'
                  : 'bg-gray-900/50 text-gray-400 border border-gray-800 hover:border-gray-700'
              }`}
            >
              {filter.label}
              <span className="ml-2 text-[10px] opacity-60">({filter.count})</span>
            </button>
          ))}
        </div>

        {/* Kandungan Berita */}
        {viewMode === 'timeline' ? (
          <div className="space-y-4">
            {filteredNews.map((item, index) => (
              <div
                key={item.id}
                className="group relative flex gap-4 p-5 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg hover:border-cyan-500/30 transition-all"
              >
                {/* Timeline Connector */}
                {index < filteredNews.length - 1 && (
                  <div className="absolute left-8 top-16 bottom-[-16px] w-px bg-gradient-to-b from-cyan-500/30 to-transparent"></div>
                )}

                {/* Priority Indicator */}
                <div className="flex-shrink-0">
                  <div className={`w-4 h-4 rounded-full border-2 ${getPriorityColor(item.priority)}`}>
                    <div className="w-full h-full rounded-full animate-ping"></div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1">
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className={`px-2 py-0.5 text-[10px] font-mono rounded border ${getStatusBadge(item.status)}`}>
                        {item.status}
                      </span>
                      <span className="text-xs font-mono text-gray-500">
                        {formatTimestamp(item.timestamp)}
                      </span>
                      <span className="text-gray-600">•</span>
                      <span className="text-xs text-gray-500">{item.author}</span>
                    </div>
                    <div className="flex items-center gap-3 text-[10px] font-mono text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {item.metrics.views > 1000 ? `${(item.metrics.views/1000).toFixed(1)}k` : item.metrics.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {item.metrics.engagement}%
                      </span>
                    </div>
                  </div>

                  {/* Title & Summary */}
                  <h3 className="text-white font-semibold mb-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-3 line-clamp-2">
                    {item.summary}
                  </p>

                  {/* Tags & Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <div className="flex flex-wrap gap-1">
                      {item.tags.map((tag, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-gray-800/50 text-[10px] font-mono text-gray-400 rounded"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    <Link
                      href="#"
                      className="flex items-center gap-1 text-xs font-mono text-cyan-400 hover:text-cyan-300 transition-colors"
                    >
                      BACA SELANJUTNYA
                      <ChevronRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {filteredNews.map((item) => (
              <div
                key={item.id}
                className="group relative bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden hover:border-cyan-500/30 transition-all"
              >
                {/* Status Bar */}
                <div className={`h-1 bg-gradient-to-r ${
                  item.priority === 'high' ? 'from-red-500 to-orange-500' :
                  item.priority === 'medium' ? 'from-amber-500 to-yellow-500' :
                  'from-green-500 to-emerald-500'
                }`}></div>

                <div className="p-5">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-3">
                    <span className={`px-2 py-0.5 text-[10px] font-mono rounded border ${getStatusBadge(item.status)}`}>
                      {item.status}
                    </span>
                    <span className="text-xs font-mono text-gray-500">
                      {formatTimestamp(item.timestamp)}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-white font-semibold mb-2 line-clamp-2 group-hover:text-cyan-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                    {item.summary}
                  </p>

                  {/* Metrics */}
                  <div className="flex items-center justify-between p-3 bg-gray-800/30 rounded mb-4">
                    <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500">
                      <span className="flex items-center gap-1">
                        <Eye className="w-3 h-3" />
                        {item.metrics.views}
                      </span>
                      <span className="flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {item.metrics.engagement}%
                      </span>
                      <span className="flex items-center gap-1">
                        <MessageSquare className="w-3 h-3" />
                        {item.metrics.shares}
                      </span>
                    </div>
                    <span className="text-[10px] text-gray-500">
                      {item.readTime} read
                    </span>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {item.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="px-2 py-0.5 bg-gray-800/50 text-[10px] font-mono text-gray-400 rounded"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>

                  {/* Action */}
                  <Link
                    href="#"
                    className="flex items-center justify-center gap-2 w-full py-2 bg-gray-800/50 hover:bg-cyan-500/10 border border-gray-700 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 rounded font-mono text-xs transition-all"
                  >
                    ACCESS FULL REPORT
                    <ChevronRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Load More */}
        <div className="mt-8 text-center">
          <button className="px-6 py-2 bg-gray-900/50 hover:bg-gray-800/50 border border-gray-800 hover:border-cyan-500/30 text-gray-400 hover:text-cyan-400 rounded-lg font-mono text-xs transition-all">
            LOAD MORE UPDATES
          </button>
        </div>

        {/* Quick Subscribe */}
        <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 border border-cyan-500/20 rounded-lg">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <Bell className="w-5 h-5 text-cyan-400" />
              <div>
                <p className="text-sm font-mono text-white">SUBSCRIBE TO ALERTS</p>
                <p className="text-xs text-gray-400">Get real-time notifications for critical updates</p>
              </div>
            </div>
            <button className="flex items-center gap-2 px-4 py-2 bg-cyan-500/20 hover:bg-cyan-500/30 border border-cyan-500/50 text-cyan-400 rounded-lg font-mono text-xs transition-all">
              <Zap className="w-3 h-3" />
              ENABLE NOTIFICATIONS
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

// Footer Component
function V4Footer() {
  const [systemMetrics, setSystemMetrics] = useState({
    cpu: 34,
    memory: 62,
    network: 78,
    storage: 45
  })

  const [activeConnections, setActiveConnections] = useState(1247)

  useEffect(() => {
    // Simulate real-time system metrics
    const interval = setInterval(() => {
      setSystemMetrics({
        cpu: Math.floor(Math.random() * 100),
        memory: Math.floor(Math.random() * 100),
        network: Math.floor(Math.random() * 100),
        storage: Math.floor(Math.random() * 100)
      })
      setActiveConnections(1200 + Math.floor(Math.random() * 100))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  const footerLinks = [
    {
      title: 'CORE SYSTEMS',
      links: [
        { name: 'Vessel Traffic Service', href: '#', status: 'online' },
        { name: 'Port Management System', href: '#', status: 'online' },
        { name: 'Cargo Tracking', href: '#', status: 'maintenance' },
        { name: 'Berth Allocation', href: '#', status: 'online' },
      ]
    },
    {
      title: 'INTEGRATIONS',
      links: [
        { name: 'Malaysia Port-Net', href: '#', status: 'online' },
        { name: 'EDI Gateway', href: '#', status: 'maintenance' },
        { name: 'Customs MQTT', href: '#', status: 'online' },
        { name: 'Weather API', href: '#', status: 'online' },
      ]
    },
    {
      title: 'MONITORING',
      links: [
        { name: 'System Health', href: '#', status: 'online' },
        { name: 'Performance Metrics', href: '#', status: 'online' },
        { name: 'Security Logs', href: '#', status: 'online' },
        { name: 'Backup Status', href: '#', status: 'online' },
      ]
    },
    {
      title: 'SUPPORT',
      links: [
        { name: 'Dokumentasi Teknikal', href: '#', status: 'online' },
        { name: 'API Reference', href: '#', status: 'online' },
        { name: 'Incident Reports', href: '#', status: 'online' },
        { name: 'Hubungan Kecemasan', href: '#', status: 'online' },
      ]
    }
  ]

  const getStatusColor = (status: string) => {
    switch(status) {
      case 'online': return 'text-green-400'
      case 'maintenance': return 'text-amber-400'
      case 'offline': return 'text-red-400'
      default: return 'text-gray-400'
    }
  }

  const getStatusDot = (status: string) => {
    switch(status) {
      case 'online': return 'bg-green-500'
      case 'maintenance': return 'bg-amber-500'
      case 'offline': return 'bg-red-500'
      default: return 'bg-gray-500'
    }
  }

  const getMetricColor = (value: number) => {
    if (value < 30) return 'text-green-400'
    if (value < 70) return 'text-amber-400'
    return 'text-red-400'
  }

  const getMetricBarColor = (value: number) => {
    if (value < 30) return 'from-green-500 to-emerald-500'
    if (value < 70) return 'from-amber-500 to-yellow-500'
    return 'from-red-500 to-orange-500'
  }

  return (
    <footer className="bg-gray-950 border-t border-gray-800">
      {/* System Metrics Bar */}
      <div className="bg-gray-900/50 border-b border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-6">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-cyan-400" />
                <span className="text-xs font-mono text-gray-400">SYSTEM PERFORMANCE</span>
              </div>
              <div className="flex items-center gap-4">
                {[
                  { label: 'CPU', value: systemMetrics.cpu, unit: '%' },
                  { label: 'RAM', value: systemMetrics.memory, unit: '%' },
                  { label: 'NET', value: systemMetrics.network, unit: '%' },
                  { label: 'DISK', value: systemMetrics.storage, unit: '%' }
                ].map((metric, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <span className="text-[10px] font-mono text-gray-500">{metric.label}:</span>
                    <span className={`text-xs font-mono font-bold ${getMetricColor(metric.value)}`}>
                      {metric.value}{metric.unit}
                    </span>
                    <div className="w-12 h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${getMetricBarColor(metric.value)} transition-all duration-1000`}
                        style={{ width: `${metric.value}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="text-gray-500">ACTIVE CONNECTIONS:</span>
              <span className="text-cyan-400 font-bold">{activeConnections.toLocaleString()}</span>
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {footerLinks.map((section, index) => (
            <div key={index}>
              <h3 className="text-sm font-mono font-bold text-cyan-400 mb-4 tracking-wider">
                {section.title}
              </h3>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-xs font-mono text-gray-400 hover:text-cyan-400 transition-colors group"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full ${getStatusDot(link.status)} ${
                        link.status === 'online' ? 'animate-pulse' : ''
                      }`}></div>
                      <span className="group-hover:translate-x-1 transition-transform duration-200">
                        {link.name}
                      </span>
                      <div className={`w-1 h-1 rounded-full ${getStatusColor(link.status)} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Additional System Info */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Maklumat Hubungan */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <h4 className="text-sm font-mono text-cyan-400 mb-3">COMMAND CENTER</h4>
              <div className="space-y-2 text-xs font-mono">
                <div className="flex items-center gap-2">
                  <Phone className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400">HOTLINE:</span>
                  <span className="text-white">+60 4-XXX XXXX</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400">OPS:</span>
                  <span className="text-white">ops@penangport.gov.my</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="w-3 h-3 text-gray-400" />
                  <span className="text-gray-400">LOC:</span>
                  <span className="text-white">Georgetown, Penang</span>
                </div>
              </div>
            </div>

            {/* Compliance Info */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <h4 className="text-sm font-mono text-cyan-400 mb-3">COMPLIANCE</h4>
              <div className="space-y-2 text-xs font-mono text-gray-400">
                <div className="flex items-center gap-2">
                  <Shield className="w-3 h-3" />
                  <span>ISO 27001:2013 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Lock className="w-3 h-3" />
                  <span>GDPR Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle className="w-3 h-3" />
                  <span>SOC 2 Type II</span>
                </div>
              </div>
            </div>

            {/* Maklumat Pembinaan */}
            <div className="bg-gray-900/30 border border-gray-800 rounded-lg p-4">
              <h4 className="text-sm font-mono text-cyan-400 mb-3">BUILD INFO</h4>
              <div className="space-y-2 text-xs font-mono text-gray-400">
                <div className="flex justify-between">
                  <span>VERSION:</span>
                  <span className="text-white">v4.2.1</span>
                </div>
                <div className="flex justify-between">
                  <span>BUILD:</span>
                  <span className="text-white">#2024.03.150</span>
                </div>
                <div className="flex justify-between">
                  <span>UPTIME:</span>
                  <span className="text-green-400">99.98%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright and Legal */}
        <div className="mt-8 pt-6 border-t border-gray-800">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-2">
                <Image
                  src="/images/Coat_of_arms_of_Malaysia.png"
                  alt="Malaysia Coat of Arms"
                  width={20}
                  height={20}
                  className="h-5 w-auto object-contain opacity-60"
                />
                <Image
                  src="/images/SPPP Official Logo.png"
                  alt="SPPP Logo"
                  width={20}
                  height={20}
                  className="h-5 w-auto object-contain opacity-60"
                />
              </div>
              <div className="text-xs font-mono text-gray-500">
                © 2024 Suruhanjaya Pelabuhan Pulau Pinang. All rights reserved.
              </div>
            </div>
            <div className="flex items-center gap-4 text-[10px] font-mono text-gray-600">
              <Link href="#" className="hover:text-cyan-400 transition-colors">PRIVACY POLICY</Link>
              <span>•</span>
              <Link href="#" className="hover:text-cyan-400 transition-colors">TERMS OF SERVICE</Link>
              <span>•</span>
              <Link href="#" className="hover:text-cyan-400 transition-colors">SECURITY</Link>
              <span>•</span>
              <span>LAST UPDATED: {new Date().toLocaleDateString('en-GB')}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Status Bar */}
      <div className="bg-gray-900/70 border-t border-gray-800">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center justify-center gap-6 text-[10px] font-mono text-gray-600">
            <span>STATUS: OPERATIONAL</span>
            <span>•</span>
            <span>LATENCY: &lt;50ms</span>
            <span>•</span>
            <span>SECURITY: ACTIVE</span>
            <span>•</span>
            <span>MONITORING: 24/7</span>
            <span>•</span>
            <span>SSL: ENABLED</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

// Main Page Component
export default function VariationFour() {
  return (
    <div className="min-h-screen bg-gray-950">
      {/* Fixed Navigation */}
      <div className="fixed top-4 left-4 z-50">
        <Link
          href="/variations"
          className="inline-flex items-center px-4 py-2 bg-white/90 backdrop-blur-sm text-gray-700 rounded-lg shadow-lg hover:bg-white transition-all duration-300"
        >
          <ArrowLeftIcon className="h-5 w-5 mr-2" />
          Kembali ke Variasi
        </Link>
      </div>

      <div className="fixed top-4 right-4 z-50">
        <div className="bg-gray-800 text-cyan-400 px-4 py-2 rounded-lg shadow-lg border border-cyan-500/30">
          Variasi 4: Dashboard
        </div>
      </div>

      <V4Header />

      <main>
        <V4Hero />
        <V4Stats />
        <V4Services />
        <V4QuickLinks />
        <V4News />
      </main>

      <V4Footer />
    </div>
  )
}