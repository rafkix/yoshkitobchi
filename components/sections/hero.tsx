'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function HeroSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const targetDate = new Date('2026-06-01T00:00:00').getTime()
      const now = new Date().getTime()
      const difference = targetDate - now

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        })
      }
    }

    calculateTimeLeft()

    const timer = setInterval(calculateTimeLeft, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            top-[-300px]
            left-1/2
            -translate-x-1/2

            w-[900px]
            h-[900px]

            rounded-full
            bg-indigo-100/40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-200px]
            right-[-100px]

            w-[500px]
            h-[500px]

            rounded-full
            bg-indigo-100/30
            blur-3xl
          "
        />

        {/* FLOATING BOOKS */}
        <motion.img
          animate={{
            y: [0, -20, 0],
            rotate: [-5, 3, -5],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
          }}
          src="/book.png"
          alt=""
          className="
            hidden
            xl:block

            absolute
            left-24
            top-52

            w-28
            opacity-10
          "
        />

        <motion.img
          animate={{
            y: [0, 20, 0],
            rotate: [5, -3, 5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          src="/book.png"
          alt=""
          className="
            hidden
            xl:block

            absolute
            right-24
            top-72

            w-32
            opacity-10
          "
        />
      </div>

      {/* CONTENT */}
      <div
        className="
          relative
          z-10

          min-h-screen

          flex
          items-center
          justify-center

          px-4
          md:px-6
        "
      >
        <div
          className="
            w-full
            max-w-6xl

            flex
            flex-col
            items-center
            justify-center

            text-center
          "
        >
          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 0.7,
            }}
            className="mb-4"
          >
            <img
              src="/logo.png"
              alt="Yoshkitobchi"
              className="
                w-[220px]
                md:w-[360px]
                lg:w-[420px]

                h-auto
                object-contain
              "
            />
          </motion.div>

          {/* SLOGAN */}
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="
              text-2xl
              md:text-4xl

              font-bold
              text-black

              mb-5
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            O‘QI. O‘RGAN. YARAT.
          </motion.h2>

          {/* DESCRIPTION */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="
              max-w-3xl

              text-base
              md:text-xl

              text-gray-600
              leading-relaxed

              mb-10
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            Badiiy asarlarni o‘qing, testlarda qatnashing,
            reytingda yuqorilang va elektron sertifikatlarga ega bo‘ling.
          </motion.p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
            }}
            className="
              flex
              flex-col
              sm:flex-row

              items-center
              justify-center

              gap-4

              mb-12
            "
          >
            <a
              href="https://t.me/yoshkitobchibot?start=register"
              target="_blank"
              className="
                group

                inline-flex
                items-center
                justify-center
                gap-3

                px-8
                md:px-10

                py-4

                rounded-2xl

                bg-gradient-to-r
                from-[#6366f1]
                to-[#4f46e5]

                text-white
                text-lg
                font-semibold

                shadow-2xl
                shadow-indigo-200/50

                hover:scale-[1.03]
                hover:shadow-indigo-300/60

                transition-all
                duration-300
              "
              style={{
                fontFamily: 'var(--font-inter)',
              }}
            >
              Ro‘yxatdan o‘tish

              <ArrowRight
                className="
                  w-5
                  h-5

                  transition-transform
                  group-hover:translate-x-1
                "
              />
            </a>

            <a
              href="https://t.me/yoshkitobchi"
              target="_blank"
              className="
                px-8
                md:px-10

                py-4

                rounded-2xl

                border
                border-indigo-200

                bg-white/80
                backdrop-blur-xl

                text-[#4f46e5]
                text-lg
                font-semibold

                hover:bg-indigo-50

                transition-all
              "
              style={{
                fontFamily: 'var(--font-inter)',
              }}
            >
              Telegram kanal
            </a>
          </motion.div>

          {/* COUNTDOWN */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.4,
            }}
            className="w-full max-w-4xl"
          >
            <div
              className="
                mb-5

                text-sm
                font-bold

                uppercase
                tracking-[0.25em]

                text-[#4f46e5]
              "
              style={{
                fontFamily: 'var(--font-inter)',
              }}
            >
              1-IYUNGACHA QOLDI
            </div>

            <div
              className="
                grid
                grid-cols-2
                md:grid-cols-4

                gap-4
              "
            >
              {[
                {
                  value: timeLeft.days,
                  label: 'Kun',
                },
                {
                  value: timeLeft.hours,
                  label: 'Soat',
                },
                {
                  value: timeLeft.minutes,
                  label: 'Minut',
                },
                {
                  value: timeLeft.seconds,
                  label: 'Soniya',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{
                    y: -4,
                  }}
                  className="
                    rounded-2xl

                    border
                    border-indigo-100

                    bg-white/90
                    backdrop-blur-xl

                    p-5

                    shadow-lg
                  "
                >
                  <div
                    className="
                      text-5xl
                      md:text-6xl

                      leading-none

                      text-[#4f46e5]
                    "
                    style={{
                      fontFamily: 'var(--font-bebas)',
                    }}
                  >
                    {String(item.value).padStart(2, '0')}
                  </div>

                  <div
                    className="
                      mt-2

                      text-sm
                      uppercase
                      tracking-wider

                      text-gray-500
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {item.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}