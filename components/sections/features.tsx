'use client'

import { motion } from 'framer-motion'
import {
  BookOpen,
  Trophy,
  Zap,
  Users,
  Award,
  MonitorSmartphone,
} from 'lucide-react'

export function FeaturesSection() {
  const features = [
    {
      icon: BookOpen,
      title: 'Online testlar',
      description:
        'Har bir badiiy asar asosida zamonaviy interaktiv testlar ishlanadi.',
    },
    {
      icon: MonitorSmartphone,
      title: '24/7 platforma',
      description:
        'Istalgan joydan telefon yoki kompyuter orqali qatnashing.',
    },
    {
      icon: Trophy,
      title: 'Global reyting',
      description:
        'Har bir test natijasi umumiy reytingga ta’sir qiladi.',
    },
    {
      icon: Zap,
      title: 'Tezkor natijalar',
      description:
        'Test yakunida natijangiz va to‘plagan ballaringiz chiqadi.',
    },
    {
      icon: Users,
      title: 'Targ‘ibotchilar',
      description:
        'Do‘stlaringizni taklif qiling va maxsus sovg‘alarni qo‘lga kiriting.',
    },
    {
      icon: Award,
      title: 'Elektron sertifikat',
      description:
        'Faol ishtirokchilar uchun rasmiy sertifikatlar taqdim etiladi.',
    },
  ]

  return (
    <section
      id="features"
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

            rounded-full
            bg-indigo-100/30
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-0
            right-0

            w-[300px]
            h-[300px]

            rounded-full
            bg-indigo-100/20
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* TOP */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
          }}
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
            Zamonaviy online kitobxonlik tizimi
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl

              text-black
              leading-none

              mb-5
            "
            style={{
              fontFamily: 'var(--font-bebas)',
            }}
          >
            PLATFORMA IMKONIYATLARI
          </h2>

          <p
            className="
              max-w-3xl
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
            Kitob o‘qish, test ishlash va reyting tizimini
            bitta platformada birlashtirgan zamonaviy loyiha.
          </p>
        </motion.div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            lg:grid-cols-3

            gap-5
            md:gap-7
          "
        >
          {features.map((feature, index) => {
            const Icon = feature.icon

            return (
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
                  delay: index * 0.08,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden

                  rounded-3xl

                  border
                  border-indigo-100

                  bg-white/90
                  backdrop-blur-xl

                  p-7
                  md:p-8

                  shadow-xl
                  shadow-indigo-100/30

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

                    rounded-full

                    bg-indigo-100/40
                    blur-2xl
                  "
                />

                {/* ICON */}
                <div
                  className="
                    relative
                    z-10

                    w-16
                    h-16

                    rounded-2xl

                    bg-gradient-to-br
                    from-[#6366f1]
                    to-[#4f46e5]

                    flex
                    items-center
                    justify-center

                    shadow-lg
                    shadow-indigo-200/50

                    mb-6
                  "
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>

                {/* TITLE */}
                <h3
                  className="
                    relative
                    z-10

                    text-2xl
                    text-black

                    mb-4
                  "
                  style={{
                    fontFamily: 'var(--font-bebas)',
                  }}
                >
                  {feature.title}
                </h3>

                {/* DESCRIPTION */}
                <p
                  className="
                    relative
                    z-10

                    text-gray-600
                    leading-relaxed

                    text-base
                    md:text-lg
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {feature.description}
                </p>

                {/* LINE */}
                <div
                  className="
                    relative
                    z-10

                    mt-6

                    h-[4px]
                    w-14

                    rounded-full

                    bg-gradient-to-r
                    from-[#6366f1]
                    to-[#4f46e5]

                    transition-all
                    duration-300

                    group-hover:w-20
                  "
                />
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}