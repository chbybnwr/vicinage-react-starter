import { apply } from 'vicinage'
import type { PropsWithChildren } from 'react'

export function LinkList({ children }: PropsWithChildren) {
  return (
    <ul
      {...apply({
        padding: 0,
        gap: '8px',
        listStyle: 'none',
        display: 'flex',
        flexWrap: {
          default: 'wrap',
          '@media (width >= 1024px)': 'initial',
        },
        justifyContent: {
          default: 'center',
          '@media (width >= 1024px)': 'initial',
        },
        marginTop: {
          default: '20px',
          '@media (width >= 1024px)': '32px',
        },
      })}
    >
      {children}
    </ul>
  )
}
