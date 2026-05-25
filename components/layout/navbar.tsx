// components/navbar.tsx

'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const navItems = [
    {
      label: 'Bosh saxifa',
      href: '/',
    },
    {
      label: 'Biz haqimizda',
      href: '/about',
    },
    {
      label: 'Test kunlari',
      href: '#tests',
    },
    {
      label: 'Targ‘ibotchilar',
      href: '#ambassadors',
    },
  ]

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">
          {/* LEFT */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Yoshkitobchi"
              className="
                h-16
                md:h-20
                w-auto
                object-contain
              "
            />
          </Link>
          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="
                  text-[15px]
                  text-gray-700
                  hover:text-[#4f46e5]
                  transition-colors
                  font-medium
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>

          {/* RIGHT */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="https://t.me/yoshkitobchi"
              target="_blank"
              className="
                px-5
                py-2.5
                rounded-xl
                border
                border-indigo-200
                text-[#4f46e5]
                hover:bg-indigo-50
                transition-all
                text-sm
                font-semibold
              "
              style={{
                fontFamily: 'var(--font-inter)',
              }}
            >
              Telegram
            </a>

            <button
              className="
                px-6
                py-2.5
                rounded-xl
                text-white
                text-sm
                font-semibold
                bg-gradient-to-r
                from-[#6366f1]
                to-[#4f46e5]
                shadow-lg
                shadow-indigo-200/50
                hover:opacity-95
                transition-all
              "
              style={{
                fontFamily: 'var(--font-inter)',
              }}
            >
              Ro‘yxatdan o‘tish
            </button>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="
              lg:hidden
              w-11
              h-11
              rounded-xl
              border
              border-gray-200
              flex
              items-center
              justify-center
            "
          >
            {mobileOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
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
            className="
              lg:hidden
              bg-white
              border-t
              border-gray-100
            "
          >
            <div className="px-5 py-5 space-y-3">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="
                    block
                    px-4
                    py-3
                    rounded-xl
                    text-gray-700
                    hover:bg-indigo-50
                    hover:text-[#4f46e5]
                    transition-all
                    font-medium
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {item.label}
                </a>
              ))}

              <div className="pt-4 flex flex-col gap-3">
                <a
                  href="https://t.me/yoshkitobchi"
                  target="_blank"
                  className="
                    py-3
                    rounded-xl
                    border
                    border-indigo-200
                    text-center
                    text-[#4f46e5]
                    font-semibold
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  Telegram kanal
                </a>

                <button
                  className="
                    py-3
                    rounded-xl
                    text-white
                    font-semibold
                    bg-gradient-to-r
                    from-[#6366f1]
                    to-[#4f46e5]
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  Ro‘yxatdan o‘tish
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}