import { apply } from 'vicinage'
import type { PropsWithChildren } from 'react'

export function NextStepIcon({ children }: PropsWithChildren) {
  return (
    <svg
      role="presentation"
      aria-hidden="true"
      {...apply({
        height: '22px',
        marginBottom: '16px',
        width: '22px',
      })}
    >
      {children}
    </svg>
  )
}
