'use client'

import { createContext, useContext, ReactNode } from 'react'

export interface NavTopic {
  slug: string
  name: string
  description: string
  href: string
}

interface TopicsContextValue {
  topics: NavTopic[]
}

const TopicsContext = createContext<TopicsContextValue | null>(null)

export function TopicsProvider({ children, topics }: { children: ReactNode; topics: NavTopic[] }) {
  return <TopicsContext.Provider value={{ topics }}>{children}</TopicsContext.Provider>
}

export function useTopics(): NavTopic[] {
  const context = useContext(TopicsContext)
  if (!context) {
    // Return empty array if used outside provider (fallback)
    return []
  }
  return context.topics
}
