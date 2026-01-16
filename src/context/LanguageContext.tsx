'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

type Language = 'et' | 'en' | 'lv' | 'uk'

interface LanguageContextType {
  lang: Language
  setLang: (lang: Language) => void
  t: (et: string, en: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

interface LanguageProviderProps {
  children: ReactNode
  defaultLang?: Language
}

export function LanguageProvider({ children, defaultLang = 'et' }: LanguageProviderProps) {
  const [lang, setLang] = useState<Language>(defaultLang)

  // Legacy support for t('et', 'en') - mostly used for et/en dual sites.
  // For new languages, components should use dictionary objects.
  const t = (et: string, en: string) => (lang === 'et' ? et : en)

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

// Default value for SSR / when provider is missing
const defaultLanguageValue: LanguageContextType = {
  lang: 'et',
  setLang: () => {},
  t: (et: string) => et,
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  // Return default during SSR instead of throwing
  return context ?? defaultLanguageValue
}
