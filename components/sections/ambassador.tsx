'use client'

import { motion } from 'framer-motion'
import {
  UsersThree,
  Gift,
  Lightning,
  Crown,
  ArrowRight,
  Medal,
} from '@phosphor-icons/react'

const rewards = [
  {
    icon: UsersThree,
    title: 'Do‘stlarni taklif qiling',
    description:
      'Referal havolangiz orqali yangi ishtirokchilarni loyihaga qo‘shing.',
    reward: '+ Ballar',
  },
  {
    icon: Gift,
    title: 'Maxsus sovg‘alar',
    description:
      'Eng faol targ‘ibotchilar kitoblar va esdalik sovg‘alari bilan taqdirlanadi.',
    reward: 'TOP sovg‘a',
  },
  {
    icon: Lightning,
    title: 'Faol targ‘ibotchi statusi',
    description:
      'Reytingda yuqori o‘rinlarni egallab maxsus statusga ega bo‘ling.',
    reward: 'VIP',
  },
  {
    icon: Crown,
    title: 'Eng yaxshi 5 targ‘ibotchi',
    description:
      'Loyiha yakunida TOP targ‘ibotchilar sertifikat va mukofot oladi.',
    reward: 'TOP 5',
  },
]

export function AmbassadorSection() {
  return (
    <section
      id="ambassadors"
      className="
        relative
        overflow-hidden
        py-24
        md:py-32
        bg-white
      "
    >
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            top-[-200px]
            right-[-100px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-indigo-100/40
            blur-3xl
          "
        />

        <div
          className="
            absolute
            bottom-[-250px]
            left-[-120px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-indigo-50
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-6">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
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
              bg-indigo-50
              border
              border-indigo-100
              text-[#4f46e5]
              text-sm
              font-semibold
              mb-6
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            TARG‘IBOTCHILAR DASTURI
          </div>

          <h2
            className="
              text-4xl
              md:text-6xl
              text-black
              mb-6
            "
            style={{
              fontFamily: 'var(--font-bebas)',
              letterSpacing: '1px',
            }}
          >
            AMBASSADOR PROGRAM
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
            Loyihani do‘stlaringiz orasida targ‘ib qiling,
            referal havolangiz orqali ishtirokchilarni taklif eting
            va maxsus sovg‘alarga ega bo‘ling.
          </p>
        </motion.div>

        {/* CONTENT */}
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-10
            items-center
          "
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="
              relative
              rounded-[32px]
              overflow-hidden
              border
              border-indigo-100
              bg-gradient-to-br
              from-[#4f46e5]
              to-[#6366f1]
              p-10
              md:p-14
              text-white
              shadow-2xl
            "
          >
            <div className="relative z-10">
              <div
                className="
                  w-20
                  h-20
                  rounded-3xl
                  bg-white/15
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  mb-8
                "
              >
                <Medal size={42} weight="duotone" />
              </div>

              <h3
                className="
                  text-3xl
                  md:text-5xl
                  leading-tight
                  mb-6
                "
                style={{
                  fontFamily: 'var(--font-bebas)',
                }}
              >
                ENG FAOL
                <br />
                TARG‘IBOTCHILAR
              </h3>

              <p
                className="
                  text-indigo-100
                  text-lg
                  leading-relaxed
                  mb-8
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Referal havolangiz orqali qancha ko‘p
                ishtirokchi taklif qilsangiz,
                reytingda shuncha yuqoriga chiqasiz.
              </p>

              <div className="space-y-4 mb-10">
                {[
                  'TOP 5 targ‘ibotchiga kitoblar',
                  'Elektron sertifikat',
                  'Maxsus ambassador status',
                  'Telegram kanalida e’tirof',
                ].map((item, index) => (
                  <div
                    key={index}
                    className="
                      flex
                      items-center
                      gap-3
                    "
                  >
                    <div
                      className="
                        w-2.5
                        h-2.5
                        rounded-full
                        bg-white
                      "
                    />

                    <span
                      className="
                        text-white
                        text-base
                      "
                      style={{
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>

              <a
                href="https://t.me/yoshkitobchibot"
                target="_blank"
                className="
                  inline-flex
                  items-center
                  gap-3

                  px-8
                  py-4

                  rounded-2xl

                  bg-white
                  text-[#4f46e5]

                  font-semibold
                  text-lg

                  hover:scale-[1.03]

                  transition-all
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                Targ‘ibotchi bo‘lish

                <ArrowRight
                  size={22}
                  weight="bold"
                />
              </a>
            </div>
          </motion.div>

          {/* RIGHT */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {rewards.map((item, index) => {
              const Icon = item.icon

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
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
                    border-gray-100
                    bg-white
                    p-8
                    shadow-lg
                    hover:shadow-2xl
                    transition-all
                  "
                >
                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl

                      bg-indigo-50

                      flex
                      items-center
                      justify-center

                      mb-6
                    "
                  >
                    <Icon
                      size={32}
                      weight="duotone"
                      className="text-[#4f46e5]"
                    />
                  </div>

                  <div
                    className="
                      inline-flex
                      px-3
                      py-1
                      rounded-full
                      bg-indigo-50
                      text-[#4f46e5]
                      text-xs
                      font-bold
                      mb-4
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {item.reward}
                  </div>

                  <h4
                    className="
                      text-2xl
                      text-black
                      mb-3
                    "
                    style={{
                      fontFamily: 'var(--font-bebas)',
                    }}
                  >
                    {item.title}
                  </h4>

                  <p
                    className="
                      text-gray-600
                      leading-relaxed
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}