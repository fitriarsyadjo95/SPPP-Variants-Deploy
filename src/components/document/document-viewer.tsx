'use client'

import React, { useState, useRef } from 'react'
import {
  ArrowDownTrayIcon,
  ArrowsPointingOutIcon,
  ArrowsPointingInIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
  MinusIcon,
  XMarkIcon
} from '@heroicons/react/24/outline'
import { useLanguage } from '@/contexts/language-context'

interface Document {
  id: string
  title: string
  titleEn: string
  category: string
  categoryEn: string
  description: string
  descriptionEn: string
  fileUrl: string
  fileSize: string
  pages: number
  publishDate: string
  tags: string[]
  tagsEn: string[]
}

interface DocumentViewerProps {
  document: Document
  onClose: () => void
}

export const DocumentViewer: React.FC<DocumentViewerProps> = ({ document, onClose }) => {
  const { t, language } = useLanguage()
  const [currentPage, setCurrentPage] = useState(1)
  const [zoom, setZoom] = useState(100)
  const [isFullscreen, setIsFullscreen] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const viewerRef = useRef<HTMLDivElement>(null)

  const handleDownload = () => {
    const link = window.document.createElement('a')
    link.href = document.fileUrl
    link.download = `${document.title}.pdf`
    window.document.body.appendChild(link)
    link.click()
    window.document.body.removeChild(link)
  }

  const handleZoomIn = () => {
    setZoom(prev => Math.min(prev + 25, 200))
  }

  const handleZoomOut = () => {
    setZoom(prev => Math.max(prev - 25, 50))
  }

  const handlePrevPage = () => {
    setCurrentPage(prev => Math.max(prev - 1, 1))
  }

  const handleNextPage = () => {
    setCurrentPage(prev => Math.min(prev + 1, document.pages))
  }

  const toggleFullscreen = () => {
    if (!isFullscreen && viewerRef.current) {
      if (viewerRef.current.requestFullscreen) {
        viewerRef.current.requestFullscreen()
      }
    } else {
      if (window.document.exitFullscreen) {
        window.document.exitFullscreen()
      }
    }
    setIsFullscreen(!isFullscreen)
  }

  return (
    <div
      ref={viewerRef}
      className={`fixed inset-0 z-50 bg-black bg-opacity-90 flex flex-col ${
        isFullscreen ? 'p-0' : 'p-4'
      }`}
    >
      {/* Header Controls */}
      <div className="bg-white shadow-lg rounded-t-lg p-4 flex items-center justify-between">
        <div className="flex-1">
          <h2 className="text-lg font-bold text-gray-900 truncate">
            {language === 'BM' ? document.title : document.titleEn}
          </h2>
          <p className="text-sm text-gray-600">
            {language === 'BM' ? document.category : document.categoryEn} • {document.fileSize} • {document.pages} {t('pages', 'muka surat', 'pages')}
          </p>
        </div>

        {/* Controls */}
        <div className="flex items-center space-x-2 ml-4">
          {/* Page Navigation */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeftIcon className="w-4 h-4" />
            </button>
            <span className="px-2 text-sm font-medium">
              {currentPage} / {document.pages}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === document.pages}
              className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRightIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Zoom Controls */}
          <div className="flex items-center space-x-1 bg-gray-100 rounded-lg p-1">
            <button
              onClick={handleZoomOut}
              disabled={zoom === 50}
              className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <MinusIcon className="w-4 h-4" />
            </button>
            <span className="px-2 text-sm font-medium min-w-[3rem] text-center">
              {zoom}%
            </span>
            <button
              onClick={handleZoomIn}
              disabled={zoom === 200}
              className="p-1 rounded hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <PlusIcon className="w-4 h-4" />
            </button>
          </div>

          {/* Action Buttons */}
          <button
            onClick={handleDownload}
            className="p-2 bg-sppp-blue text-white rounded-lg hover:bg-sppp-dark-blue transition-colors"
            title={t('download', 'Muat Turun', 'Download')}
          >
            <ArrowDownTrayIcon className="w-4 h-4" />
          </button>

          <button
            onClick={toggleFullscreen}
            className="p-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
            title={t('fullscreen', 'Skrin Penuh', 'Fullscreen')}
          >
            {isFullscreen ? (
              <ArrowsPointingInIcon className="w-4 h-4" />
            ) : (
              <ArrowsPointingOutIcon className="w-4 h-4" />
            )}
          </button>

          <button
            onClick={onClose}
            className="p-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors"
            title={t('close', 'Tutup', 'Close')}
          >
            <XMarkIcon className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Document Viewer */}
      <div className="flex-1 bg-gray-100 rounded-b-lg overflow-hidden flex items-center justify-center">
        <div className="relative w-full h-full overflow-auto bg-gray-200">
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-white bg-opacity-90">
              <div className="text-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sppp-blue mx-auto mb-4"></div>
                <p className="text-gray-600">
                  {t('loading-document', 'Memuat dokumen...', 'Loading document...')}
                </p>
              </div>
            </div>
          )}

          {/* PDF Viewer Container */}
          <div
            className="flex justify-center p-4"
            style={{
              transform: `scale(${zoom / 100})`,
              transformOrigin: 'top center'
            }}
          >
            <div className="bg-white shadow-lg max-w-4xl w-full">
              {/* PDF iframe or alternative viewer */}
              <iframe
                src={`${document.fileUrl}#page=${currentPage}&zoom=${zoom}`}
                className="w-full h-screen border-0"
                onLoad={() => setIsLoading(false)}
                title={language === 'BM' ? document.title : document.titleEn}
              />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

DocumentViewer.displayName = 'DocumentViewer'