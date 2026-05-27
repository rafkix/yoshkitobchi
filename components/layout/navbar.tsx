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
    const onScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
    }
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
              bg-[rgba(255,255,255,0.45)]

              supports-[backdrop-filter]:bg-[rgba(255,255,255,0.28)]

              backdrop-blur-2xl
              backdrop-saturate-150

              border-b
              border-white/30

              shadow-[0_8px_40px_rgba(99,102,241,0.05)]
            `
          : 'bg-transparent'
        }
      `}
    >
      {/* TOP LIGHT */}
      <div
        className="
          absolute
          inset-x-0
          top-0
          h-px

          bg-gradient-to-r
          from-transparent
          via-white/70
          to-transparent
        "
      />

      {/* BLUR ORB */}
      <div
        className="
          absolute
          top-[-120px]
          left-1/2
          -translate-x-1/2

          w-[500px]
          h-[220px]

          rounded-full

          bg-indigo-300/10
          blur-3xl
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-[88px] flex items-center justify-between">
          {/* LOGO */}
          <Link
            href="/"
            className="
              shrink-0
              transition-transform
              duration-300

              hover:scale-[1.02]
            "
          >
            <img
              src="/logo.png"
              alt="YOSHKITOBCHI"
              className="
                h-12
                md:h-14

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

                  py-2

                  text-[15px]
                  font-semibold
                  tracking-[-0.01em]

                  text-slate-700
                  hover:text-indigo-600

                  transition-all
                  duration-300
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {item.label}

                {/* UNDERLINE */}
                <span
                  className="
                    absolute
                    left-0
                    bottom-0

                    h-[2px]
                    w-0

                    rounded-full

                    bg-gradient-to-r
                    from-indigo-500
                    to-violet-500

                    transition-all
                    duration-300

                    group-hover:w-full
                  "
                />

                {/* HOVER GLOW */}
                <span
                  className="
                    absolute
                    inset-0

                    rounded-xl

                    bg-indigo-500/[0.04]

                    opacity-0
                    group-hover:opacity-100

                    transition-all
                    duration-300

                    -z-10
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
                group
                relative

                overflow-hidden

                px-5
                py-2.5

                rounded-2xl

                border
                border-white/40

                bg-[rgba(255,255,255,0.4)]

                backdrop-blur-xl
                backdrop-saturate-150

                text-indigo-600

                shadow-[0_4px_20px_rgba(99,102,241,0.08)]

                hover:bg-indigo-50/80
                hover:border-indigo-200

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
              <span className="relative z-10">
                Telegram
              </span>

              <div
                className="
                  absolute
                  inset-0

                  bg-gradient-to-r
                  from-white/0
                  via-white/40
                  to-white/0

                  translate-x-[-120%]
                  group-hover:translate-x-[120%]

                  transition-transform
                  duration-1000
                "
              />
            </a>

            {/* REGISTER */}
            <a
              href="https://t.me/yoshkitobchibot?start=register"
              target="_blank"
              rel="noreferrer"
              className="
                relative

                px-6
                py-2.5

                rounded-2xl

                text-white

                bg-gradient-to-r
                from-indigo-500
                via-indigo-600
                to-violet-600

                shadow-[0_10px_30px_rgba(99,102,241,0.28)]

                hover:scale-[1.03]
                hover:shadow-[0_14px_40px_rgba(99,102,241,0.35)]

                active:scale-[0.99]

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

          {/* MOBILE BUTTON */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              lg:hidden

              relative

              w-11
              h-11

              rounded-2xl

              border
              border-white/40

              bg-[rgba(255,255,255,0.35)]

              backdrop-blur-xl
              backdrop-saturate-150

              flex
              items-center
              justify-center

              shadow-[0_4px_20px_rgba(99,102,241,0.08)]

              transition-all
              duration-300

              hover:scale-[1.03]
            "
          >
            {mobileOpen ? (
              <X className="w-5 h-5 text-slate-700" />
            ) : (
              <Menu className="w-5 h-5 text-slate-700" />
            )}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -14 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -14 }}
            transition={{ duration: 0.25 }}
            className="
              lg:hidden

              border-t
              border-white/30

              bg-[rgba(255,255,255,0.38)]

              supports-[backdrop-filter]:bg-[rgba(255,255,255,0.24)]

              backdrop-blur-2xl
              backdrop-saturate-150
            "
          >
            <div className="px-5 py-5 flex flex-col gap-2">
              {/* MOBILE NAV ITEMS */}
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    flex
                    items-center

                    px-4
                    py-3

                    rounded-2xl

                    text-slate-700

                    hover:bg-indigo-50/70
                    hover:text-indigo-600

                    transition-all
                    duration-300
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
                {/* TELEGRAM */}
                <a
                  href="https://t.me/yoshkitobchi"
                  target="_blank"
                  rel="noreferrer"
                  className="
                    py-3

                    rounded-2xl

                    border
                    border-white/40

                    bg-[rgba(255,255,255,0.45)]

                    backdrop-blur-xl

                    text-indigo-600
                    text-center

                    shadow-[0_4px_20px_rgba(99,102,241,0.08)]

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
                  Telegram kanal
                </a>

                {/* REGISTER */}
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
                    via-indigo-600
                    to-violet-600

                    shadow-[0_10px_30px_rgba(99,102,241,0.25)]

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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}