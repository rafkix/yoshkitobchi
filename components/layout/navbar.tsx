'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Bosh saxifa', href: '/' },
  { label: 'Biz haqimizda', href: '/about' },
  { label: 'Test kunlari', href: '#tests' },
  { label: "Targ'ibotchilar", href: '#ambassadors' },
]

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10)

    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const header = document.querySelector('header')

    if (!header) return

    const observer = new ResizeObserver((entries) => {
      const height = entries[0].contentRect.height

      document.documentElement.style.setProperty(
        '--header-height',
        `${height}px`
      )
    })

    observer.observe(header)

    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`
        fixed
        top-0
        left-0
        z-50
        w-full

        transition-all
        duration-300

        ${isScrolled
          ? `
              bg-white/72
              backdrop-blur-2xl
              border-b
              border-white/40

              shadow-[0_8px_40px_rgba(99,102,241,0.06)]
            `
          : 'bg-transparent'
        }
      `}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-[88px] flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="shrink-0">
            <img
              src="/logo.png"
              alt="YOSHKITOBCHI"
              className="
                h-14
                md:h-20
                w-auto
                object-contain
              "
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-9">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  group
                  relative

                  text-[15px]
                  font-semibold
                  tracking-[-0.01em]

                  text-gray-700
                  hover:text-indigo-600

                  transition-all
                  duration-200
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {item.label}

                <span
                  className="
                    absolute
                    left-0
                    -bottom-[6px]

                    h-[2px]
                    w-0

                    rounded-full
                    bg-indigo-500

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />
              </a>
            ))}
          </nav>

          {/* DESKTOP ACTIONS */}
          <div className="hidden lg:flex items-center gap-3">
            {/* TELEGRAM */}
            <a
              href="https://t.me/yoshkitobchi"
              target="_blank"
              rel="noreferrer"
              className="
                px-5
                py-2.5

                rounded-2xl

                border
                border-indigo-200

                bg-white/70
                backdrop-blur-xl

                text-indigo-600

                hover:bg-indigo-50
                hover:border-indigo-300

                transition-all
                duration-300
              "
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 600,
                fontSize: '14px',
                letterSpacing: '-0.01em',
              }}
            >
              Telegram
            </a>

            {/* REGISTER */}
            <a
              href="https://t.me/yoshkitobchibot?start=register"
              target="_blank"
              rel="noreferrer"
              className="
                px-6
                py-2.5

                rounded-2xl

                text-white

                bg-gradient-to-r
                from-indigo-500
                to-indigo-600

                shadow-lg
                shadow-indigo-200/40

                hover:scale-[1.02]
                hover:shadow-indigo-300/40

                transition-all
                duration-300
              "
              style={{
                fontFamily: 'var(--font-inter)',
                fontWeight: 700,
                fontSize: '14px',
                letterSpacing: '-0.02em',
              }}
            >
              Ro'yxatdan o'tish
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              lg:hidden

              w-11
              h-11

              rounded-2xl

              border
              border-white/40

              bg-white/70
              backdrop-blur-xl

              flex
              items-center
              justify-center

              transition-all
            "
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-gray-700" />
            ) : (
              <Menu className="w-5 h-5 text-gray-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.22 }}
            className="
              lg:hidden

              border-t
              border-white/40

              bg-white/82
              backdrop-blur-2xl
            "
          >
            <div className="px-5 py-5 flex flex-col gap-2">
              {/* NAV ITEMS */}
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    block

                    px-4
                    py-3

                    rounded-2xl

                    text-gray-700
                    hover:text-indigo-600
                    hover:bg-indigo-50

                    transition-all
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '15px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  {item.label}
                </a>
              ))}

              {/* ACTIONS */}
              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://t.me/yoshkitobchi"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    py-3

                    rounded-2xl

                    border
                    border-indigo-200

                    bg-white

                    text-indigo-600
                    text-center

                    transition-all
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 600,
                    fontSize: '14px',
                    letterSpacing: '-0.01em',
                  }}
                >
                  Telegram kanal
                </a>

                <a
                  href="https://t.me/yoshkitobchibot?start=register"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    py-3

                    rounded-2xl

                    text-white
                    text-center

                    bg-gradient-to-r
                    from-indigo-500
                    to-indigo-600

                    shadow-lg
                    shadow-indigo-200/40
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                    fontWeight: 700,
                    fontSize: '14px',
                    letterSpacing: '-0.02em',
                  }}
                >
                  Ro'yxatdan o'tish
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}