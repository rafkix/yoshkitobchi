'use client'

import { motion } from 'framer-motion'
import { MessageCircle, Heart, Users } from 'lucide-react'

export function CommunitySection() {
  const messages = [
    {
      author: 'Aydinjon K.',
      message:
        '"O‘tkan Kunlar" juda qiziqarli kitob bo‘ldi! 45 testni tugatdim 🎉',
      reactions: 124,
    },
    {
      author: 'Zarina M.',
      message:
        'Reyting juda qiziq ketmoqda 😄 Hali TOP 10 ga kirishga harakat qilyapman!',
      reactions: 89,
    },
    {
      author: 'Bakhtiyor R.',
      message:
        'Daily challenge juda zo‘r ekan. Har kuni yangi savollar motivatsiya beradi 🔥',
      reactions: 156,
    },
  ]

  const stats = [
    {
      icon: Users,
      label: '10K+ Ishtirokchilar',
      value: 'Faol hamjamiyat',
    },
    {
      icon: MessageCircle,
      label: '50K+ Xabarlar',
      value: 'Telegram community',
    },
    {
      icon: Heart,
      label: '100K+ Reaksiyalar',
      value: 'Faol muloqot',
    },
  ]

  return (
    <section className="py-20 md:py-32 px-4 md:px-8 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* BACKGROUND */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="
            absolute
            top-[-200px]
            left-[-100px]
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
            bottom-[-200px]
            right-[-100px]
            w-[500px]
            h-[500px]
            rounded-full
            bg-indigo-100/30
            blur-3xl
          "
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* HEADER */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div
            className="
              inline-flex
              items-center
              gap-2
              px-5
              py-2
              rounded-full
              border
              border-indigo-100
              bg-white/80
              backdrop-blur-xl
              text-indigo-600
              text-sm
              font-semibold
              shadow-lg
              mb-6
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            YOSHKITOBCHI COMMUNITY
          </div>

          <h2
            className="
              text-5xl
              md:text-6xl
              lg:text-7xl
              text-black
              mb-5
              leading-none
            "
            style={{
              fontFamily: 'var(--font-bebas)',
            }}
          >
            JAMOA VA
            <br />
            HAMJAMIYAT
          </h2>

          <p
            className="
              text-lg
              md:text-2xl
              text-gray-600
              max-w-3xl
              mx-auto
              leading-relaxed
            "
            style={{
              fontFamily: 'var(--font-inter)',
            }}
          >
            Minglab yosh kitobxonlar bilan birgalikda
            kitob o‘qing, fikr almashing va reytinglarda
            raqobatlashing.
          </p>
        </motion.div>

        {/* STATS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {stats.map((stat, i) => {
            const Icon = stat.icon

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -8,
                }}
                className="
                  group
                  rounded-3xl
                  border
                  border-indigo-100
                  bg-white/80
                  backdrop-blur-xl
                  p-8
                  shadow-lg
                  hover:shadow-2xl
                  transition-all
                "
              >
                <div
                  className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-br
                    from-indigo-500
                    to-indigo-700
                    flex
                    items-center
                    justify-center
                    text-white
                    shadow-lg
                    mb-5
                    group-hover:scale-110
                    transition-transform
                  "
                >
                  <Icon className="w-7 h-7" />
                </div>

                <div
                  className="
                    text-4xl
                    md:text-5xl
                    text-black
                    mb-2
                  "
                  style={{
                    fontFamily: 'var(--font-bebas)',
                  }}
                >
                  {stat.label.split(' ')[0]}
                </div>

                <p
                  className="
                    text-black
                    font-semibold
                    mb-1
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {stat.label}
                </p>

                <p
                  className="text-gray-500"
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  {stat.value}
                </p>
              </motion.div>
            )
          })}
        </div>

        {/* CHAT BOXES */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-5"
        >
          {messages.map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: i * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{
                x: 8,
              }}
              className="
                group
                rounded-3xl
                border
                border-gray-200
                bg-white/90
                backdrop-blur-xl
                p-6
                shadow-lg
                hover:shadow-2xl
                transition-all
              "
            >
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-4">
                  {/* AVATAR */}
                  <div
                    className="
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-br
                      from-indigo-500
                      to-indigo-700
                      flex
                      items-center
                      justify-center
                      text-white
                      text-lg
                      font-bold
                      shadow-lg
                    "
                    style={{
                      fontFamily: 'var(--font-inter)',
                    }}
                  >
                    {msg.author.charAt(0)}
                  </div>

                  <div>
                    <p
                      className="
                        font-bold
                        text-black
                        text-lg
                      "
                      style={{
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      {msg.author}
                    </p>

                    <p
                      className="
                        text-sm
                        text-gray-500
                      "
                      style={{
                        fontFamily: 'var(--font-inter)',
                      }}
                    >
                      Telegram community
                    </p>
                  </div>
                </div>

                {/* REACTIONS */}
                <div
                  className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-rose-50
                    text-rose-500
                    font-semibold
                  "
                  style={{
                    fontFamily: 'var(--font-inter)',
                  }}
                >
                  <Heart className="w-4 h-4 fill-rose-500" />
                  {msg.reactions}
                </div>
              </div>

              <p
                className="
                  text-gray-700
                  text-lg
                  leading-relaxed
                "
                style={{
                  fontFamily: 'var(--font-inter)',
                }}
              >
                {msg.message}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.3,
          }}
          viewport={{ once: true }}
          className="
            mt-14
            relative
            overflow-hidden
            rounded-[32px]
            bg-gradient-to-br
            from-indigo-600
            to-indigo-800
            p-10
            text-center
            shadow-2xl
          "
        >
          <div
            className="
              absolute
              top-[-100px]
              right-[-100px]
              w-[300px]
              h-[300px]
              rounded-full
              bg-white/10
              blur-3xl
            "
          />

          <div className="relative z-10">
            <h3
              className="
                text-4xl
                md:text-5xl
                text-white
                mb-4
                leading-none
              "
              style={{
                fontFamily: 'var(--font-bebas)',
              }}
            >
              TELEGRAM JAMOAMIZGA
              <br />
              QO‘SHILING
            </h3>

            <p
              className="
                text-indigo-100
                text-lg
                md:text-xl
                max-w-2xl
                mx-auto
                mb-8
                leading-relaxed
              "
              style={{
                fontFamily: 'var(--font-inter)',
              }}
            >
              Yangi testlar, challenge’lar,
              reyting yangiliklari va community
              announcementlarini birinchilardan
              bo‘lib kuzating.
            </p>

            <motion.a
              href="https://t.me/yoshkitobchi"
              target="_blank"
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="
                inline-flex
                items-center
                justify-center
                gap-3
                px-8
                py-4
                rounded-2xl
                bg-white
                text-indigo-700
                font-semibold
                shadow-2xl
                hover:shadow-white/20
                transition-all
              "
              style={{
                fontFamily: 'var(--font-inter)',
              }}
            >
              <MessageCircle className="w-5 h-5" />

              @yoshkitobchi ga qo‘shilish
            </motion.a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}