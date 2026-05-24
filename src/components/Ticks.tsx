import { apply } from 'vicinage'

export function Ticks() {
  return (
    <div
      {...apply({
        position: 'relative',
        width: '100%',
        '::after': {
          borderColor: 'transparent',
          borderStyle: 'solid',
          borderWidth: '5px',
          content: "''",
          position: 'absolute',
          borderRightColor: 'var(--border)',
          right: 0,
          top: '-4.5px',
        },
        '::before': {
          borderColor: 'transparent',
          borderStyle: 'solid',
          borderWidth: '5px',
          content: "''",
          position: 'absolute',
          borderLeftColor: 'var(--border)',
          left: 0,
          top: '-4.5px',
        },
      })}
    ></div>
  )
}
