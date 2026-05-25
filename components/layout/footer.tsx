'use client'

import {
  Send,
  Mail,
  Globe,
  ArrowUpRight,
} from 'lucide-react'
import Link from 'next/link'

const menu = [
  { label: 'Testlar', href: '/tests' },
  { label: 'Reyting', href: '/ratings' },
  { label: 'Sertifikatlar', href: '/certificates' },
  { label: 'Hamjamiyat', href: '/community' },
]

export function Footer() {
  return (
    <footer className="relative pt-24 pb-10 overflow-hidden">
      {/* BACKGROUND */}
      <div
        className="
          absolute
          inset-0

          bg-gradient-to-b
          from-transparent
          to-indigo-50/40
        "
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* TOP */}
        <div
          className="
            flex
            flex-col
            lg:flex-row

            justify-between

            gap-12

            pb-10
            border-b
            border-gray-200
          "
        >
          {/* BRAND */}
          <div className="max-w-xl">
            <img
              src="/logo.png"
              alt="YOSHKITOBCHI"
              className="
                h-14
                w-auto
                object-contain

                mb-5
              "
            />

            <p
              className="
                text-gray-600
                text-base
                leading-relaxed
              "
              style={{
                fontFamily: 'var(--font-inter)',
              }}
            >
              YOSHKITOBCHI — yoshlar uchun zamonaviy online
              kitobxonlik platformasi.
            </p>

            <div
              className="
                flex
                items-center
                gap-3

                mt-6
              "
            >
              <a
                href="https://t.me/yoshkitobchi"
                target="_blank"
                className="
                  group

                  flex
                  items-center
                  gap-3

                  px-5
                  py-3

                  rounded-2xl

                  bg-[#5865F2]

                  text-white

                  hover:scale-[1.03]

                  transition-all
                "
              >
                <Send className="w-5 h-5" />

                <span
                  className="font-medium"
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  Telegram
                </span>

                <ArrowUpRight
                  className="
                    w-4
                    h-4

                    transition-transform
                    group-hover:-translate-y-1
                    group-hover:translate-x-1
                  "
                />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div
            className="
              grid
              grid-cols-2
              md:grid-cols-3

              gap-10
            "
          >
            {/* PLATFORM */}
            <div>
              <h4
                className="
                  text-black
                  font-semibold
                  mb-4
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Platforma
              </h4>

              <div className="space-y-3">
                {menu.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="
            block
            text-gray-500
            hover:text-indigo-600
            transition-colors
          "
                    style={{ fontFamily: 'var(--font-inter)' }}
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <h4
                className="
                  text-black
                  font-semibold
                  mb-4
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Aloqa
              </h4>

              <div className="space-y-4">
                <a
                  href="mailto:info@yoshkitobchi.uz"
                  className="
                    flex
                    items-center
                    gap-3

                    text-gray-500
                    hover:text-indigo-600

                    transition-colors
                  "
                >
                  <Mail className="w-4 h-4" />

                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    Email
                  </span>
                </a>

                <a
                  href="https://yoshkitobchi.uz"
                  className="
                    flex
                    items-center
                    gap-3

                    text-gray-500
                    hover:text-indigo-600

                    transition-colors
                  "
                >
                  <Globe className="w-4 h-4" />

                  <span
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    Website
                  </span>
                </a>
              </div>
            </div>

            {/* PARTNER */}
            <div>
              <h4
                className="
                  text-black
                  font-semibold
                  mb-4
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Hamkorlar
              </h4>

              <div
                className="
                  space-y-3

                  text-gray-500
                  text-sm
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                <p>Yoshlar Ishlari Agentligi</p>
                <p>Lexis Education</p>
              </div>
            </div>
          </div>
        </div>

        {/* BOTTOM */}
        <div
          className="
            pt-6

            flex
            flex-col
            md:flex-row

            items-center
            justify-between

            gap-4
          "
        >
          <p
            className="
              text-sm
              text-gray-400
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            © 2026 YOSHKITOBCHI
          </p>

          <p
            className="
              text-sm
              text-gray-400
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            O‘QI • O‘RGAN • YARAT
          </p>
        </div>
      </div>
    </footer>
  )
}