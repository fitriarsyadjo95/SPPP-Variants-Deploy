'use client'

import React, { useState } from 'react'
import {
  DocumentPlusIcon,
  ArrowUpTrayIcon,
  CheckCircleIcon,
  XCircleIcon,
  TagIcon,
  FolderIcon
} from '@heroicons/react/24/outline'

interface DocumentUploadProps {
  onUploadComplete?: (document: any) => void
}

export const DocumentUpload: React.FC<DocumentUploadProps> = ({ onUploadComplete }) => {
  const [dragActive, setDragActive] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [uploadComplete, setUploadComplete] = useState(false)
  const [formData, setFormData] = useState({
    title: '',
    titleEn: '',
    category: '',
    categoryEn: '',
    description: '',
    descriptionEn: '',
    tags: '',
    tagsEn: '',
    featured: false
  })

  const categories = [
    { id: 'annual-reports', name: 'Laporan Tahunan', nameEn: 'Annual Reports' },
    { id: 'safety-guidelines', name: 'Panduan Keselamatan', nameEn: 'Safety Guidelines' },
    { id: 'policies', name: 'Dasar dan Polisi', nameEn: 'Policies' },
    { id: 'procedures', name: 'Prosedur Perkhidmatan', nameEn: 'Service Procedures' },
    { id: 'strategic-plans', name: 'Pelan Strategik', nameEn: 'Strategic Plans' }
  ]

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === 'dragenter' || e.type === 'dragover') {
      setDragActive(true)
    } else if (e.type === 'dragleave') {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0])
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0])
    }
  }

  const handleFile = async (file: File) => {
    if (file.type !== 'application/pdf') {
      alert('Please upload PDF files only')
      return
    }

    if (file.size > 50 * 1024 * 1024) { // 50MB limit
      alert('File size must be less than 50MB')
      return
    }

    setUploading(true)

    // Simulate upload process
    try {
      await new Promise(resolve => setTimeout(resolve, 2000))

      const newDocument = {
        id: Date.now().toString(),
        title: formData.title || file.name.replace('.pdf', ''),
        titleEn: formData.titleEn || file.name.replace('.pdf', ''),
        category: formData.category || 'general',
        categoryEn: formData.categoryEn || 'General',
        description: formData.description || 'Document description',
        descriptionEn: formData.descriptionEn || 'Document description',
        fileUrl: URL.createObjectURL(file), // In real app, this would be uploaded to server
        fileSize: `${(file.size / 1024 / 1024).toFixed(1)} MB`,
        pages: Math.floor(Math.random() * 50) + 10, // Random page count for demo
        publishDate: new Date().toISOString().split('T')[0],
        tags: formData.tags.split(',').map(tag => tag.trim()).filter(Boolean),
        tagsEn: formData.tagsEn.split(',').map(tag => tag.trim()).filter(Boolean),
        featured: formData.featured
      }

      setUploadComplete(true)
      if (onUploadComplete) {
        onUploadComplete(newDocument)
      }

      // Reset form after successful upload
      setTimeout(() => {
        setUploadComplete(false)
        setFormData({
          title: '',
          titleEn: '',
          category: '',
          categoryEn: '',
          description: '',
          descriptionEn: '',
          tags: '',
          tagsEn: '',
          featured: false
        })
      }, 3000)

    } catch (error) {
      console.error('Upload failed:', error)
      alert('Upload failed. Please try again.')
    } finally {
      setUploading(false)
    }
  }

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-2">Upload Document</h3>
        <p className="text-sm text-gray-600">Upload PDF documents to the library</p>
      </div>

      {/* Document Information Form */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title (BM) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.title}
            onChange={(e) => setFormData({ ...formData, title: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
            placeholder="Tajuk dokumen dalam Bahasa Malaysia"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Title (EN) <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.titleEn}
            onChange={(e) => setFormData({ ...formData, titleEn: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
            placeholder="Document title in English"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Category <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.category}
            onChange={(e) => {
              const selectedCategory = categories.find(cat => cat.id === e.target.value)
              setFormData({
                ...formData,
                category: selectedCategory?.name || '',
                categoryEn: selectedCategory?.nameEn || ''
              })
            }}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
          >
            <option value="">Select category</option>
            {categories.map(category => (
              <option key={category.id} value={category.id}>
                {category.name} / {category.nameEn}
              </option>
            ))}
          </select>
        </div>

        <div className="flex items-center">
          <input
            type="checkbox"
            id="featured"
            checked={formData.featured}
            onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
            className="h-4 w-4 text-sppp-blue focus:ring-sppp-blue border-gray-300 rounded"
          />
          <label htmlFor="featured" className="ml-2 block text-sm text-gray-700">
            Mark as featured document
          </label>
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description (BM)
          </label>
          <textarea
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
            placeholder="Penerangan dokumen dalam Bahasa Malaysia"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Description (EN)
          </label>
          <textarea
            value={formData.descriptionEn}
            onChange={(e) => setFormData({ ...formData, descriptionEn: e.target.value })}
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
            placeholder="Document description in English"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags (BM)
          </label>
          <input
            type="text"
            value={formData.tags}
            onChange={(e) => setFormData({ ...formData, tags: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
            placeholder="tag1, tag2, tag3"
          />
          <p className="text-xs text-gray-500 mt-1">Separated by commas</p>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Tags (EN)
          </label>
          <input
            type="text"
            value={formData.tagsEn}
            onChange={(e) => setFormData({ ...formData, tagsEn: e.target.value })}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-sppp-blue focus:border-transparent"
            placeholder="tag1, tag2, tag3"
          />
          <p className="text-xs text-gray-500 mt-1">Separated by commas</p>
        </div>
      </div>

      {/* File Upload Area */}
      <div
        className={`relative border-2 border-dashed rounded-lg p-8 text-center transition-colors ${
          dragActive
            ? 'border-sppp-blue bg-blue-50'
            : uploadComplete
            ? 'border-green-500 bg-green-50'
            : 'border-gray-300 hover:border-gray-400'
        }`}
        onDragEnter={handleDrag}
        onDragLeave={handleDrag}
        onDragOver={handleDrag}
        onDrop={handleDrop}
      >
        {uploading ? (
          <div className="flex flex-col items-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-sppp-blue mb-4"></div>
            <p className="text-gray-600">Uploading document...</p>
          </div>
        ) : uploadComplete ? (
          <div className="flex flex-col items-center text-green-600">
            <CheckCircleIcon className="h-12 w-12 mb-4" />
            <p className="font-medium">Document uploaded successfully!</p>
          </div>
        ) : (
          <div className="flex flex-col items-center">
            <DocumentPlusIcon className="h-12 w-12 text-gray-400 mb-4" />
            <p className="text-lg font-medium text-gray-900 mb-2">
              Drop your PDF file here, or{' '}
              <label className="text-sppp-blue cursor-pointer hover:text-sppp-dark-blue">
                browse
                <input
                  type="file"
                  accept=".pdf"
                  onChange={handleFileChange}
                  className="hidden"
                />
              </label>
            </p>
            <p className="text-sm text-gray-500">PDF files up to 50MB</p>
          </div>
        )}
      </div>

      {/* Upload Guidelines */}
      <div className="mt-6 bg-gray-50 rounded-lg p-4">
        <h4 className="font-medium text-gray-900 mb-2">Upload Guidelines:</h4>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• Only PDF files are accepted</li>
          <li>• Maximum file size: 50MB</li>
          <li>• Provide both BM and EN titles and descriptions</li>
          <li>• Select appropriate category for better organization</li>
          <li>• Add relevant tags to improve searchability</li>
          <li>• Mark important documents as featured</li>
        </ul>
      </div>
    </div>
  )
}

DocumentUpload.displayName = 'DocumentUpload'