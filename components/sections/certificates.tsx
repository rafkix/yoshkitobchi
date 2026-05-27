'use client'

import { motion } from 'framer-motion'
import {
  Award,
  Download,
  Share2,
  ShieldCheck,
  Sparkles,
  BadgeCheck,
} from 'lucide-react'

export function CertificatesSection() {
  return (
    <section
      id="certificates"
      className="
        relative
        overflow-hidden

        py-24
        md:py-32
      "
    >
      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2

              px-5
              py-2

              rounded-full

              bg-indigo-100

              text-[#4f46e5]
              text-sm
              font-semibold

              mb-6
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            <Award className="w-4 h-4" />
            Rasmiy elektron sertifikatlar
          </div>

          <h2
            className="
              text-5xl
              md:text-7xl

              leading-none

              text-black

              mb-6
            "
            style={{
              fontFamily: 'var(--font-bebas)',
            }}
          >
            SERTIFIKATLAR
          </h2>

          <p
            className="
              max-w-3xl
              mx-auto

              text-lg
              md:text-2xl

              text-gray-600
              leading-relaxed
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            Testlarni muvaffaqiyatli yakunlang va
            maxsus elektron sertifikatlarga ega bo‘ling.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="
            relative
            overflow-hidden

            rounded-[40px]

            border
            border-indigo-100

            bg-white

            shadow-[0_40px_120px_rgba(99,102,241,0.12)]
          "
        >
          {/* CARD BG */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-indigo-50/30 to-indigo-100/20" />

          {/* GLOW */}
          <div
            className="
              absolute
              top-[-120px]
              right-[-120px]

              w-[420px]
              h-[420px]

              rounded-full

              bg-indigo-200/30

              blur-3xl
            "
          />

          <div
            className="
              relative
              z-10

              grid
              grid-cols-1
              lg:grid-cols-2
            "
          >
            {/* LEFT */}
            <div className="p-8 md:p-12 lg:p-16">
              <div
                className="
                  inline-flex
                  items-center
                  gap-2

                  px-4
                  py-2

                  rounded-full

                  bg-indigo-100

                  text-[#4f46e5]
                  text-sm
                  font-semibold

                  mb-8
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                <Sparkles className="w-4 h-4" />
                Premium digital certificate
              </div>

              <h3
                className="
                  text-4xl
                  md:text-6xl

                  leading-none

                  text-black

                  mb-6
                "
                style={{
                  fontFamily: 'var(--font-bebas)',
                }}
              >
                YUTUQLARINGIZ
                <br />
                RASMIY
                <br />
                TASDIQLANADI
              </h3>

              <p
                className="
                  text-lg
                  md:text-xl

                  text-gray-600
                  leading-relaxed

                  mb-10
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Har bir muvaffaqiyatli ishtirokchi
                maxsus dizayndagi sertifikatlarni
                yuklab olishi va ijtimoiy tarmoqlarda
                ulashishi mumkin.
              </p>

              {/* FEATURES */}
              <div className="space-y-5 mb-10">
                {[
                  {
                    icon: ShieldCheck,
                    text: 'QR kod orqali verifikatsiya',
                  },
                  {
                    icon: Download,
                    text: 'PDF va PNG formatda yuklab olish',
                  },
                  {
                    icon: BadgeCheck,
                    text: 'TOP ishtirokchilar uchun maxsus badge',
                  },
                ].map((item, index) => {
                  const Icon = item.icon

                  return (
                    <div
                      key={index}
                      className="flex items-start gap-4"
                    >
                      <div
                        className="
                          w-12
                          h-12

                          rounded-2xl

                          bg-indigo-100

                          flex
                          items-center
                          justify-center

                          text-[#4f46e5]

                          shrink-0
                        "
                      >
                        <Icon className="w-6 h-6" />
                      </div>

                      <div>
                        <p
                          className="
                            text-gray-800
                            font-semibold
                            text-lg
                          "
                          style={{
                            fontFamily: 'var(--font-inter)',
                          }}
                        >
                          {item.text}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* BUTTONS */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2

                    px-7
                    py-4

                    rounded-2xl

                    bg-gradient-to-r
                    from-[#6366f1]
                    to-[#4f46e5]

                    text-white
                    font-semibold

                    shadow-xl
                    shadow-indigo-200/50

                    hover:scale-[1.02]

                    transition-all
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  <Download className="w-5 h-5" />
                  Yuklab olish
                </button>

                <button
                  className="
                    flex
                    items-center
                    justify-center
                    gap-2

                    px-7
                    py-4

                    rounded-2xl

                    border
                    border-indigo-200

                    bg-white

                    text-[#4f46e5]
                    font-semibold

                    hover:bg-indigo-50

                    transition-all
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  <Share2 className="w-5 h-5" />
                  Ulashish
                </button>
              </div>
            </div>

            {/* RIGHT */}
            <div
              className="
                relative

                flex
                items-center
                justify-center

                p-8
                md:p-12
              "
            >
              {/* CERTIFICATE IMAGE */}
              <motion.div
                whileHover={{
                  rotate: -2,
                  scale: 1.02,
                }}
                transition={{
                  duration: 0.3,
                }}
                className="
                  relative

                  w-full
                  max-w-[560px]

                  rounded-[32px]

                  border
                  border-indigo-100

                  bg-white

                  shadow-[0_30px_80px_rgba(0,0,0,0.12)]

                  overflow-hidden
                "
              >
                {/* IMAGE PLACE */}
                <img
                  src="/certificate.png"
                  alt="Certificate"
                  className="
                    w-full
                    h-auto
                    object-cover
                  "
                />

                {/* 
                  PNG sertifikatni shu joyga tashlaysiz:
                  public/certificate.png
                */}
              </motion.div>

              {/* FLOATING BADGE */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="
                  absolute
                  top-10
                  right-4
                  md:right-10

                  px-5
                  py-4

                  rounded-3xl

                  bg-white/90
                  backdrop-blur-xl

                  border
                  border-indigo-100

                  shadow-2xl
                "
              >
                <div
                  className="
                    text-3xl

                    text-[#4f46e5]

                    leading-none
                  "
                  style={{
                    fontFamily: 'var(--font-bebas)',
                  }}
                >
                  TOP 100
                </div>

                <div
                  className="
                    text-xs
                    uppercase
                    tracking-[0.2em]

                    text-gray-500

                    mt-1
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  maxsus badge
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* BOTTOM CARDS */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-3

            gap-6

            mt-12
          "
        >
          {[
            {
              title: 'Completion',
              desc: 'Kitobni to‘liq yakunlaganlar uchun',
            },
            {
              title: 'Excellence',
              desc: '95%+ natija qayd etganlar uchun',
            },
            {
              title: 'Leaderboard',
              desc: 'TOP reytingga kirganlar uchun',
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -8,
              }}
              className="
                rounded-[28px]

                border
                border-indigo-100

                bg-white/80
                backdrop-blur-xl

                p-8

                shadow-lg
              "
            >
              <div
                className="
                  w-14
                  h-14

                  rounded-2xl

                  bg-gradient-to-br
                  from-[#6366f1]
                  to-[#4f46e5]

                  flex
                  items-center
                  justify-center

                  text-white

                  mb-6
                "
              >
                <Award className="w-7 h-7" />
              </div>

              <h3
                className="
                  text-3xl

                  text-black

                  mb-3
                "
                style={{
                  fontFamily: 'var(--font-bebas)',
                }}
              >
                {item.title}
              </h3>

              <p
                className="
                  text-gray-600
                  leading-relaxed
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}