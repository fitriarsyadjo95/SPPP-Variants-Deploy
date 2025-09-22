'use client'

import React from 'react'
import { usePathname } from 'next/navigation'
import { Header } from './header'
import { Footer } from './footer'
import { BaseComponentProps } from '@/types'
import { LanguageProvider } from '@/contexts/language-context'
import { AccessibilityProvider } from '@/contexts/accessibility-context'
import { ChatBotProvider } from '@/components/chatbot/ChatBotProvider'
import { FloatingChatWidget } from '@/components/chatbot/FloatingChatWidget'
import { ChatInterface } from '@/components/chatbot/ChatInterface'
import { AccessibilityMenu } from '@/components/accessibility/AccessibilityMenu'

interface LayoutProps extends BaseComponentProps {
  showHeader?: boolean
  showFooter?: boolean
}

export const Layout: React.FC<LayoutProps> = ({
  showHeader = true,
  showFooter = true,
  className,
  children
}) => {
  const pathname = usePathname()

  // Disable header and footer for V4 variation
  const isV4Page = pathname === '/variations/v4'
  const shouldShowHeader = showHeader && !isV4Page
  const shouldShowFooter = showFooter && !isV4Page
  return (
    <LanguageProvider>
      <AccessibilityProvider>
        <ChatBotProvider>
          <div className="min-h-screen flex flex-col">

            {/* Header */}
            {shouldShowHeader && <Header />}

            {/* Main Content */}
            <main className={`flex-1 ${className || ''} ${isV4Page ? 'bg-gray-950' : ''}`}>
              {children}
            </main>

            {/* Footer */}
            {shouldShowFooter && <Footer />}

            {/* Chatbot Components */}
            <FloatingChatWidget />
            <ChatInterface />
            
            {/* Accessibility Menu */}
            <AccessibilityMenu />
          </div>
        </ChatBotProvider>
      </AccessibilityProvider>
    </LanguageProvider>
  )
}

Layout.displayName = 'Layout'