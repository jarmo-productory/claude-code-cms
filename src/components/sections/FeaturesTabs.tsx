'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from '@/components/ui/Button'
import { Zap, FileText, PenTool } from 'lucide-react'

interface FeatureTab {
  id: string
  label: string
  icon?: React.ReactNode
  content: {
    overline: string
    headline: string
    description: React.ReactNode
    imageSrc: string
    imageAlt: string
    imageOverlay?: string
    primaryCta?: { text: string; href: string }
    secondaryCta?: { text: string; href: string }
  }
}

interface FeaturesTabsProps {
  overline?: string
  headline?: string
  description?: string
  tabs?: FeatureTab[] // Make optional to allow default mock data for dev
}

export function FeaturesTabs({
  overline = "PLATFORM FEATURES",
  headline = "Make your e-signing and contract management easier",
  description = "Agrello streamlines every step — draft, sign, store, and track — so you can focus on real work.",
  tabs
}: FeaturesTabsProps) {
  
  // Default mock data if no tabs provided
  const defaultTabs: FeatureTab[] = [
    {
      id: 'automation',
      label: 'Automation',
      icon: <Zap className="w-4 h-4" />,
      content: {
        overline: "FEATURES",
        headline: "Say goodbye to manual data entry and errors",
        description: <p>With Agrello, you can create contracts using Microsoft Word templates, just like you're used to. Need to generate multiple contracts at once? <br/><br/>Simply <strong>pull your data from an Excel spreadsheet</strong>, and let Agrello do the rest. In just a few clicks, you'll have professionally formatted contracts ready to send for e-signing.</p>,
        imageSrc: "/images/features/automation.webp",
        imageAlt: "Automation features",
        imageOverlay: "Create multiple contracts at once using Excel and Word templates",
        primaryCta: { text: "Learn more", href: "#" },
        secondaryCta: { text: "Get started", href: "#" }
      }
    },
    {
      id: 'management',
      label: 'Contract management',
      icon: <FileText className="w-4 h-4" />,
      content: {
        overline: "MANAGEMENT",
        headline: "Keep all your agreements organized in one place",
        description: <p>Stop searching through email chains and shared drives. Agrello provides a <strong>centralized repository</strong> for all your contracts.<br/><br/>Track status, set reminders for renewals, and find any document instantly with powerful search and filter capabilities.</p>,
        imageSrc: "/images/sections/macbook-screenshot.webp",
        imageAlt: "Contract management dashboard",
        imageOverlay: "Centralized dashboard for complete visibility",
        primaryCta: { text: "Explore management", href: "#" },
      }
    },
    {
      id: 'signing',
      label: 'Secure e-signing',
      icon: <PenTool className="w-4 h-4" />,
      content: {
        overline: "E-SIGNING",
        headline: "Legally binding signatures, simplified",
        description: <p>Collect signatures from anyone, anywhere, on any device. Agrello supports <strong>eIDAS compliant qualified electronic signatures</strong> (QES) and advanced electronic signatures (AdES).<br/><br/>Ensure your contracts are secure and legally enforceable across the EU and beyond.</p>,
        imageSrc: "/images/hero/signature.svg", // Using SVG might need styling adjustment, using webp placeholder if needed
        imageAlt: "Secure e-signing",
        imageOverlay: "eIDAS compliant signatures for peace of mind",
        primaryCta: { text: "Start signing", href: "#" },
      }
    }
  ]

  const activeTabs = tabs || defaultTabs
  const [activeTabId, setActiveTabId] = useState(activeTabs[0].id)
  const activeContent = activeTabs.find(t => t.id === activeTabId)?.content || activeTabs[0].content

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <p className="text-xs font-bold tracking-widest text-gray-900 uppercase mb-4">{overline}</p>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 font-display tracking-tight">{headline}</h2>
          <p className="text-lg text-gray-600 leading-relaxed">{description}</p>
        </div>

        {/* Tabs Navigation */}
        <div className="flex flex-wrap justify-center gap-8 mb-16 border-b border-gray-200">
          {activeTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTabId(tab.id)}
              className={`pb-4 px-2 text-lg font-medium transition-colors relative flex items-center gap-2 cursor-pointer ${
                activeTabId === tab.id ? 'text-brand-primary' : 'text-gray-500 hover:text-gray-800'
              }`}
            >
              {tab.icon}
              {tab.label}
              {activeTabId === tab.id && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-brand-primary rounded-t-full"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTabId}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
            >
              {/* Image Side */}
              <div className="relative order-2 lg:order-1">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 bg-[#f5f6fa] aspect-[4/3] flex items-center justify-center p-8 lg:p-12">
                  <Image
                    src={activeContent.imageSrc}
                    alt={activeContent.imageAlt}
                    width={800}
                    height={600}
                    className="w-full h-full object-contain"
                  />
                  
                  {activeContent.imageOverlay && (
                    <div className="absolute bottom-6 left-6 max-w-[280px] bg-white/90 backdrop-blur-md p-5 rounded-xl shadow-xl border border-white/20 z-20 flex gap-3">
                      <div className="w-1 bg-brand-primary rounded-full shrink-0" />
                      <p className="text-sm font-semibold text-gray-800 leading-tight">
                        {activeContent.imageOverlay}
                      </p>
                    </div>
                  )}
                </div>
              </div>

              {/* Text Side */}
              <div className="flex flex-col order-1 lg:order-2">
                <p className="text-xs font-bold tracking-widest text-gray-500 uppercase mb-4">
                  {activeContent.overline}
                </p>
                <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6 font-display leading-tight">
                  {activeContent.headline}
                </h3>
                <div className="text-lg text-gray-600 mb-8 leading-relaxed space-y-4">
                  {activeContent.description}
                </div>
                
                <div className="flex flex-wrap gap-4">
                  {activeContent.secondaryCta && (
                    <Button variant="outline" size="lg" as="a" href={activeContent.secondaryCta.href}>
                      {activeContent.secondaryCta.text}
                    </Button>
                  )}
                  {activeContent.primaryCta && (
                    <Button size="lg" as="a" href={activeContent.primaryCta.href}>
                      {activeContent.primaryCta.text}
                    </Button>
                  )}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  )
}
