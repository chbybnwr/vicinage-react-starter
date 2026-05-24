import { apply } from 'vicinage'
import type { PropsWithChildren } from 'react'

export function LinkIcon({ children }: PropsWithChildren) {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      {...apply({
        filter: {
          default: null,
          ['@media (prefers-color-scheme: dark)']: 'invert(1) brightness(2)',
        },
        height: '18px',
        width: '18px',
      })}
    >
      {children}
    </svg>
  )
}
