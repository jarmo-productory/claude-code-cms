'use client'

import { Check, Minus } from 'lucide-react'

interface FeatureRow {
  feature: string
  starter: boolean | string
  team: boolean | string
  custom: boolean | string
}

interface PricingComparisonProps {
  headline: string
  description?: string
  plans: {
    starter: string
    team: string
    custom: string
  }
  features: FeatureRow[]
  className?: string
}

export function PricingComparison({
  headline,
  description,
  plans,
  features,
  className,
}: PricingComparisonProps) {
  const renderCell = (value: boolean | string) => {
    if (typeof value === 'boolean') {
      return value ? (
        <Check className="w-5 h-5 text-green-500 mx-auto" />
      ) : (
        <Minus className="w-5 h-5 text-gray-300 mx-auto" />
      )
    }
    return <span className="text-gray-900 font-medium">{value}</span>
  }

  return (
    <section className={`py-16 lg:py-24 bg-gray-50 ${className || ''}`}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 font-display">
            {headline}
          </h2>
          {description && <p className="text-lg text-gray-600 max-w-2xl mx-auto">{description}</p>}
        </div>

        <div className="overflow-x-auto">
          <table className="w-full bg-white rounded-2xl shadow-sm overflow-hidden">
            <thead>
              <tr className="border-b border-gray-100">
                <th className="text-left p-6 bg-gray-50"></th>
                <th className="p-6 text-center bg-gray-50">
                  <span className="text-lg font-bold text-gray-900">{plans.starter}</span>
                </th>
                <th className="p-6 text-center bg-brand-primary/5 border-x-2 border-brand-primary/10">
                  <span className="text-lg font-bold text-brand-primary">{plans.team}</span>
                </th>
                <th className="p-6 text-center bg-gray-50">
                  <span className="text-lg font-bold text-gray-900">{plans.custom}</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {features.map((row, index) => (
                <tr
                  key={index}
                  className={`border-b border-gray-50 ${
                    index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                  }`}
                >
                  <td className="p-4 lg:p-6 text-gray-700 font-medium">{row.feature}</td>
                  <td className="p-4 lg:p-6 text-center">{renderCell(row.starter)}</td>
                  <td className="p-4 lg:p-6 text-center bg-brand-primary/5 border-x-2 border-brand-primary/10">
                    {renderCell(row.team)}
                  </td>
                  <td className="p-4 lg:p-6 text-center">{renderCell(row.custom)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
