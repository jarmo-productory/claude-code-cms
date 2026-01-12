export function LogoCloud() {
  const logos = [
    { name: '[CLIENT_1]' },
    { name: '[CLIENT_2]' },
    { name: '[CLIENT_3]' },
    { name: '[CLIENT_4]' },
    { name: '[CLIENT_5]' },
    { name: '[CLIENT_6]' },
  ]

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-semibold uppercase tracking-wider text-slate-600">
            [TRUSTED_BY_TEXT]
          </p>
        </div>

        {/* Logo grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center h-16 grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
            >
              <div className="w-full h-full flex items-center justify-center border-2 border-dashed border-slate-200 rounded-lg">
                <span className="text-xs text-slate-400 font-semibold">{logo.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
