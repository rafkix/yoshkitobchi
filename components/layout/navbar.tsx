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
      document.documentElement.style.setProperty('--header-height', `${height}px`)
    })

    observer.observe(header)
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 z-50 w-full transition-all duration-300 ${isScrolled
        ? 'bg-white/90 backdrop-blur-xl border-b border-gray-100'
        : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
        <div className="h-20 flex items-center justify-between">

          {/* LOGO */}
          <Link href="/">
            <img
              src="/logo.png"
              alt="Yoshkitobchi"
              className="h-16 md:h-20 w-auto object-contain"
            />
          </Link>

          {/* DESKTOP NAV */}
          <nav className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.label}
                href={item.href}
                className="text-sm text-gray-700 hover:text-indigo-600 transition-colors font-medium">
                {item.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">

            <a href="https://t.me/yoshkitobchi"
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2.5 rounded-xl border border-indigo-200 text-indigo-600 hover:bg-indigo-50 transition-all text-sm font-semibold"
            >
              Telegram
            </a>

            <a href="https://t.me/yoshkitobchibot?start=register"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-xl text-white text-sm font-semibold bg-gradient-to-r from-indigo-500 to-indigo-600 shadow-lg shadow-indigo-200/50 hover:opacity-90 transition-all"
            >
              Ro'yxatdan o'tish
            </a>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div >
      </div >

      {/* MOBILE MENU */}
      <AnimatePresence>
        {
          mobileOpen && (
            <motion.div
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden bg-white border-t border-gray-100"
            >
              <div className="px-5 py-5 flex flex-col gap-2">
                {navItems.map((item) => (

                  <a key={item.label}
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="block px-4 py-3 rounded-xl text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 transition-all font-medium text-sm"
                  >
                    {item.label}
                  </a>
                ))}

                <div className="pt-3 flex flex-col gap-3">

                  <a href="https://t.me/yoshkitobchi"
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 rounded-xl border border-indigo-200 text-center text-indigo-600 font-semibold text-sm"
                  >
                    Telegram kanal
                  </a>

                  <a href="https://t.me/yoshkitobchibot?start=register"
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 rounded-xl text-white font-semibold text-center text-sm bg-gradient-to-r from-indigo-500 to-indigo-600"
                  >
                    Ro'yxatdan o'tish
                  </a>
                </div >
              </div >
            </motion.div >
          )
        }
      </AnimatePresence >
    </header >
  )
}