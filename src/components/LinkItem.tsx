import { apply } from 'vicinage'
import type { PropsWithChildren } from 'react'

export function LinkItem({ children }: PropsWithChildren) {
  return (
    <li
      {...apply({
        flex: {
          default: '1 1 calc(50% - 8px)',
          '@media (width >= 1024px)': 'initial',
        },
      })}
    >
      {children}
    </li>
  )
}
