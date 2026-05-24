import { apply, sheet } from 'vicinage'
import { Link } from './components/Link'
import { LinkIcon } from './components/LinkIcon'
import { LinkItem } from './components/LinkItem'
import { LinkList } from './components/LinkList'
import { NextStep } from './components/NextStep'
import { Ticks } from './components/Ticks'

export function Layout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <>
      <div
        {...apply({
          display: 'flex',
          flexDirection: 'column',
          flexGrow: 1,
        })}
      >
        {children}
      </div>
      <Ticks />
      <section
        {...apply({
          display: 'flex',
          flexDirection: {
            default: 'column',
            '@media (width >= 1024px)': 'initial',
          },
          textAlign: {
            default: 'center',
            '@media (width >= 1024px)': 'left',
          },
          borderTopColor: 'var(--border)',
          borderTopStyle: 'solid',
          borderTopWidth: '1px',
        })}
      >
        <NextStep
          style={sheet({
            borderRightWidth: {
              default: 'none',
              '@media (width >= 1024px)': '1px',
            },
            borderRightStyle: {
              default: 'none',
              '@media (width >= 1024px)': 'solid',
            },
            borderRightColor: {
              default: 'none',
              '@media (width >= 1024px)': 'var(--border)',
            },
            borderBottomWidth: {
              default: '1px',
              '@media (width >= 1024px)': 'none',
            },
            borderBottomStyle: {
              default: 'solid',
              '@media (width >= 1024px)': 'none',
            },
            borderBottomColor: {
              default: 'var(--border)',
              '@media (width >= 1024px)': 'none',
            },
          })}
        >
          <h2>Documentation</h2>
          <p>Your questions, answered</p>
          <LinkList>
            <LinkItem>
              <Link href="https://github.com/chbybnwr/vicinage" target="_blank">
                <LinkIcon>
                  <use href="/icons.svg#github-icon"></use>
                </LinkIcon>
                Vicinage
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                href="https://github.com/chbybnwr/solarwindcss"
                target="_blank"
              >
                SolarWind CSS
              </Link>
            </LinkItem>
          </LinkList>
        </NextStep>
        <NextStep>
          <h2>Connect with us</h2>
          <p>Join the community</p>
          <LinkList>
            <LinkItem>
              <Link href="https://github.com/chbybnwr" target="_blank">
                <LinkIcon>
                  <use href="/icons.svg#github-icon"></use>
                </LinkIcon>
                GitHub
              </Link>
            </LinkItem>
            <LinkItem>
              <Link href="https://x.com/chbybnwr" target="_blank">
                <LinkIcon>
                  <use href="/icons.svg#x-icon"></use>
                </LinkIcon>
                X.com
              </Link>
            </LinkItem>
            <LinkItem>
              <Link
                href="https://bsky.app/profile/chbybnwr.com"
                target="_blank"
              >
                <LinkIcon>
                  <use href="/icons.svg#bluesky-icon"></use>
                </LinkIcon>
                Bluesky
              </Link>
            </LinkItem>
          </LinkList>
        </NextStep>
      </section>
    </>
  )
}
