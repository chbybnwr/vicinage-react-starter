import { apply } from 'vicinage'
import { color } from 'solarwindcss/color.stylex'

export function Hello() {
  return (
    <div
      {...apply({
        color: color.green500,
      })}
    >
      hello, world
    </div>
  )
}
