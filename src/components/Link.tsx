import { apply } from 'vicinage'
import type { AnchorHTMLAttributes, PropsWithChildren } from 'react'

export function Link({
  children,
  ...props
}: PropsWithChildren<AnchorHTMLAttributes<HTMLAnchorElement>>) {
  return (
    <a
      {...props}
      {...apply({
        borderRadius: '6px',
        gap: '8px',
        paddingBlock: '6px',
        paddingInline: '12px',
        textDecoration: 'none',
        transition: 'box-shadow 0.3s',
        alignItems: 'center',
        backgroundColor: 'var(--social-bg)',
        boxShadow: {
          default: null,
          ':hover': 'var(--shadow)',
        },
        boxSizing: {
          default: 'border-box',
          '@media (width >= 1024px)': 'initial',
        },
        color: 'var(--text-h)',
        display: 'flex',
        fontSize: '16px',
        justifyContent: {
          default: 'center',
          '@media (width >= 1024px)': 'initial',
        },
        width: {
          default: '100%',
          '@media (width >= 1024px)': 'initial',
        },
      })}
    >
      {children}
    </a>
  )
}
