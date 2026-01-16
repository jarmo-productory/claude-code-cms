'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/Button'

interface BigHeroProps {
  overline?: string
  headline?: React.ReactNode
  description?: string
  ctaText?: string
  trustText?: string
}

export function BigHero({
  overline = "Secure e-signatures & contract management platform",
  headline = <>Cut contract signing time by <span className="text-brand-primary">60% with Agrello</span></>,
  description = "Create, e-sign, and track contracts faster and more securely.",
  ctaText = "Try it out for free",
  trustText = "14-days free trial. No credit card needed. Full functionality. No hidden agenda."
}: BigHeroProps) {
  return (
    <section className="relative overflow-hidden bg-gray-200 pt-32 pb-16 lg:pt-48 lg:pb-32">
      {/* Background Pattern */}
      <div 
        className="absolute inset-0 z-0" 
        style={{ 
          backgroundImage: 'url(/images/hero/dots.svg)', 
          backgroundPosition: '0 0',
          backgroundSize: 'auto' 
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Column: Content */}
          <div className="max-w-2xl">
            <div className="inline-block mb-6">
              <span className="text-xs font-bold tracking-widest text-gray-900 uppercase">
                {overline}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.1] mb-6 font-display">
              {headline}
            </h1>
            
            <p className="text-xl text-gray-600 mb-10 max-w-lg leading-relaxed">
              {description}
            </p>
            
            <div className="relative inline-block mb-6">
              <Button size="lg" className="px-8 py-6 text-lg rounded-xl bg-brand-primary hover:bg-blue-700 transition-colors shadow-lg shadow-blue-900/20">
                {ctaText}
              </Button>
              
              {/* Arrow Decoration */}
              <div className="absolute -left-24 top-1/2 -translate-y-1/2 hidden md:block">
                <Image 
                  src="/images/hero/arrow.svg" 
                  alt="" 
                  width={80} 
                  height={40} 
                  className="w-20 h-auto opacity-80 rotate-[-10deg]"
                />
              </div>
            </div>
            
            <p className="text-sm text-gray-500 font-medium">
              {trustText}
            </p>
          </div>

          {/* Right Column: Image Wrapper */}
          <div className="relative flex justify-start items-end w-full lg:w-[32rem] h-[30rem] lg:h-[36rem] mx-auto lg:mr-0">
            {/* The Image Card Container */}
            <div 
              className="relative flex-1 h-full z-10 overflow-hidden"
              style={{
                backgroundImage: 'url(/images/hero/hero-woman.avif)',
                backgroundPosition: '35%',
                backgroundRepeat: 'no-repeat',
                backgroundSize: 'cover',
                borderTopLeftRadius: '64px',
                borderBottomRightRadius: '64px',
                borderRight: '12px solid #000',
                borderBottom: '12px solid #FF9E8F',
                filter: 'saturate(109%) contrast(107%) brightness(116%) grayscale(100%)',
                boxShadow: '8px 6px 60px #0003'
              }}
            >
            </div>

             {/* Signature Overlay - Absolute over the image container, but needs z-index > image bg */}
             <div className="absolute bottom-8 right-8 z-20">
               <Image 
                 src="/images/hero/signature.svg" 
                 alt="Signature" 
                 width={100} 
                 height={50} 
                 className="w-24 h-auto text-brand-primary"
               />
             </div>

            {/* Zigzag Decoration */}
            <div className="absolute -left-12 bottom-12 z-20 hidden lg:block">
              <Image 
                src="/images/hero/zigzag.svg" 
                alt="" 
                width={60} 
                height={30} 
                className="w-16 h-auto"
              />
            </div>
            
          </div>
        </div>

        {/* Blobs Decoration */}
        <div 
          className="absolute z-0 pointer-events-none"
          style={{
            inset: 'auto 0 -40% 18%',
            minWidth: '600px',
            minHeight: '600px'
          }}
        >
           <Image 
             src="/images/hero/blobs.svg" 
             alt="" 
             fill
             className="object-contain object-bottom"
           />
        </div>
      </div>
    </section>
  )
}
