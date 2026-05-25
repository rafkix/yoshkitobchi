'use client'

import { motion } from 'framer-motion'
import { useEffect, useState } from 'react'

function Counter({ value }: { value: number }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let start = 0

    const duration = 1800
    const increment = value / (duration / 16)

    const timer = setInterval(() => {
      start += increment

      if (start >= value) {
        setCount(value)
        clearInterval(timer)
      } else {
        setCount(Math.floor(start))
      }
    }, 16)

    return () => clearInterval(timer)
  }, [value])

  return <span>{count}</span>
}

export function StatisticsSection() {
  const stats = [
    {
      value: 1000,
      label: 'Ishtirokchilar',
      suffix: '+',
    },
    {
      value: 15000,
      label: 'Yechilgan testlar',
      suffix: '+',
    },
    {
      value: 50,
      label: 'Badiiy asarlar',
      suffix: '+',
    },
    {
      value: 92,
      label: 'Faol qatnashuv',
      suffix: '%',
    },
  ]

  return (
    <section
      className="
        relative
        py-24
        md:py-32
        overflow-hidden
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0">
        <div
          className="
            absolute
            top-0
            left-1/2
            -translate-x-1/2

            w-[900px]
            h-[500px]

            bg-indigo-100/40
            blur-3xl
            rounded-full
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0

            w-[300px]
            h-[300px]

            bg-indigo-100/30
            blur-3xl
            rounded-full
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* TOP */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div
            className="
              inline-flex
              items-center
              justify-center

              px-5
              py-2

              rounded-full

              border
              border-indigo-100

              bg-white

              text-[#4f46e5]
              text-sm
              font-semibold

              shadow-md

              mb-6
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            Loyihaning asosiy natijalari
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl

              leading-none
              text-black

              mb-5
            "
            style={{
              fontFamily: 'var(--font-bebas)',
            }}
          >
            YOSHKITOBCHI RAQAMLARDA
          </h2>

          <p
            className="
              max-w-2xl
              mx-auto

              text-gray-600
              text-lg
              md:text-xl

              leading-relaxed
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            Minglab yoshlarni birlashtirayotgan zamonaviy
            online kitobxonlik platformasi.
          </p>
        </motion.div>

        {/* STATS */}
        <div
          className="
            grid
            grid-cols-2
            lg:grid-cols-4

            gap-4
            md:gap-6
          "
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -6,
              }}
              className="
                relative
                overflow-hidden

                rounded-3xl

                border
                border-indigo-100

                bg-white/90
                backdrop-blur-xl

                p-6
                md:p-8

                shadow-xl
                shadow-indigo-100/40

                transition-all
              "
            >
              {/* GLOW */}
              <div
                className="
                  absolute
                  top-0
                  right-0

                  w-28
                  h-28

                  bg-indigo-100/50
                  blur-2xl
                  rounded-full
                "
              />

              {/* NUMBER */}
              <div
                className="
                  relative
                  z-10

                  text-5xl
                  md:text-7xl

                  text-[#4f46e5]

                  leading-none

                  mb-4
                "
                style={{
                  fontFamily: 'var(--font-bebas)',
                }}
              >
                <Counter value={stat.value} />
                {stat.suffix}
              </div>

              {/* LABEL */}
              <div
                className="
                  relative
                  z-10

                  text-gray-700
                  text-sm
                  md:text-lg

                  font-medium
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {stat.label}
              </div>

              {/* LINE */}
              <div
                className="
                  relative
                  z-10

                  mt-5

                  h-[4px]
                  w-14

                  rounded-full

                  bg-gradient-to-r
                  from-[#6366f1]
                  to-[#4f46e5]
                "
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}