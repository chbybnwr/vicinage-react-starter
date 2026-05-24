import { apply } from 'vicinage'
import { color } from 'solarwindcss/color.stylex'
import { spacing } from 'solarwindcss/spacing.stylex'
import { transition } from 'solarwindcss'
import { useEffect, useState } from 'react'

export function Dynamic() {
  const [percentage, setPercentage] = useState(0)

  useEffect(() => {
    if (percentage > 100) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setPercentage(0)
    }
  }, [percentage])

  return (
    <>
      <button
        onClick={() => {
          setPercentage(percentage + 10)
        }}
        {...apply(
          {
            '--initial-size': spacing[32],
            borderRadius: 'var(--initial-size)',
            backgroundColor: color.yellow500,
            display: 'flex',
            justifyContent: 'end',
            height: 'var(--initial-size)',
            minWidth: 'var(--initial-size)',
            width: () =>
              `calc(var(--initial-size) + ${percentage} / 100 * (100% - var(--initial-size)))`,
          },
          transition.all,
          //
        )}
      ></button>
      <div>click it</div>
    </>
  )
}
