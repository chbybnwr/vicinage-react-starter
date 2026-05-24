import type { StyleXStyles } from '@stylexjs/stylex'
import { useState } from 'react'
import { transition } from 'solarwindcss'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { apply, sheet } from 'vicinage'

export function Responsive() {
  const [isHorizontal, setIsHorizontal] = useState(true)

  return (
    <>
      <div
        onClick={() => setIsHorizontal(!isHorizontal)}
        {...apply(
          {
            paddingBlock: spacing[4],
            containerType: 'inline-size',
            display: 'flex',
            justifyContent: 'center',
            outlineColor: 'light-dark(black, white)',
            outlineStyle: 'solid',
            outlineWidth: '1px',
            width: isHorizontal ? '360px' : '160px',
          },
          transition.all,
          {
            transitionDuration: '0.5s',
          },
        )}
      >
        <div // traffic light
          {...apply({
            gap: spacing[4],
            display: 'grid',
            gridTemplateColumns: {
              default: 'minmax(0, 96px)',
              '@container (width >= 360px)': 'repeat(3, minmax(0, 96px))',
            },
          })}
        >
          <Light style={sheet({ backgroundColor: color.red500 })} />
          <Light style={sheet({ backgroundColor: color.yellow500 })} />
          <Light style={sheet({ backgroundColor: color.green500 })} />
        </div>
      </div>
      <div>click it</div>
    </>
  )
}

const Light = function ({
  style,
}: {
  style?: StyleXStyles<{
    backgroundColor: string
  }>
}) {
  return (
    <div
      {...apply(
        {
          borderRadius: '100%',
          aspectRatio: 1,
          backgroundColor: 'white',
        },
        style,
      )}
    ></div>
  )
}
