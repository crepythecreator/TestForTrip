import type { SVGProps } from 'react'

export function PortfolioIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M9 3a2 2 0 0 0-2 2v1H4a2 2 0 0 0-2 2v3h20V8a2 2 0 0 0-2-2h-3V5a2 2 0 0 0-2-2H9Zm0 2h6v1H9V5ZM2 13v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6h-8v1.5h-4V13H2Z" />
    </svg>
  )
}
