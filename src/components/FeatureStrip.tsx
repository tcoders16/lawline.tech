import React from 'react'

type Props = {
  icon: React.ReactElement
  title: string
  description: string
}

export default function FeatureStrip({ icon, title, description }: Props) {
  return (
    <div className="bg-white border border-zinc-300 rounded-md px-5 py-6 shadow-[9px_8px_0_rgba(0,0,0,1)] chakra-petch-regular hover:shadow-[4px_4px_0_rgba(0,0,0,1)] transition-all duration-200">
      <div className="mb-4 flex  justify-center">{icon}</div>
      <h3 className="text-lg font-semibold text-zinc-900 text-center">{title}</h3>
      <p className="text-sm text-zinc-600 text-center mt-2">{description}</p>
    </div>
  )
}