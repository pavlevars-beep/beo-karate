import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'

const navItems = [
  { to: '/pronadji-klub', label: 'Pronađi klub' },
  { to: '/za-roditelje', label: 'Za roditelje' },
  { to: '/takmicenja', label: 'Takmičenja' },
  { to: '/rezultati', label: 'Rezultati' },
  { to: '/clanstvo', label: 'Klubovi i članstvo' },
  { to: '/treneri-i-sudije', label: 'Treneri i sudije' },
  { to: '/bezbedan-karate', label: 'Bezbedan karate' },
  { to: '/o-nama', label: 'O BKS-u' },
  { to: '/media-i-partneri', label: 'Media / Partneri' },
  { to: '/kontakt', label: 'Kontakt' },
]

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `rounded-md px-2.5 py-2 text-sm font-medium transition-colors ${
      isActive ? 'text-bks-red' : 'text-bks-ink/80 hover:text-bks-blue'
    }`

  return (
    <header className="sticky top-0 z-40 border-b border-black/5 bg-white/95 backdrop-blur">
      <div className="container-bks flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center" onClick={() => setOpen(false)}>
          <img
            src="/logo.svg"
            alt="Beogradski karate savez"
            className="h-12 w-auto sm:h-14"
          />
        </Link>

        <nav className="hidden items-center xl:flex">
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <Link to="/pronadji-klub" className="btn-primary hidden xl:inline-flex">
          Pronađi klub
        </Link>

        <button
          type="button"
          className="rounded-md p-2 text-bks-ink xl:hidden"
          aria-label="Meni"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <nav className="border-t border-black/5 bg-white xl:hidden">
          <div className="container-bks flex flex-col py-2">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={linkClass}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  )
}
