import { apply } from 'vicinage'
import type { StyleXStyles } from '@stylexjs/stylex'
import type { PropsWithChildren } from 'react'

export function NextStep({
  style,
  children,
}: PropsWithChildren<{
  style?: StyleXStyles
}>) {
  return (
    <div
      {...apply(
        {
          paddingBlock: '24px',
          paddingInline: {
            default: '20px',
            '@media (width >= 1024px)': '32px',
          },
          flexBasis: '0',
          flexGrow: '1',
          flexShrink: '1',
        },
        style,
      )}
    >
      {children}
    </div>
  )
}
