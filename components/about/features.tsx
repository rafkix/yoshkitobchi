'use client'

import { motion } from 'framer-motion'
import {
    BookOpen,
    Trophy,
    Users,
    Sparkles,
} from 'lucide-react'

export function FeaturesSection() {
    const features = [
        {
            icon: BookOpen,
            title: 'Badiiy Asarlar',
            desc: 'O‘zbek va jahon adabiyotining eng sara asarlari asosida zamonaviy test tizimi.',
        },
        {
            icon: Trophy,
            title: 'Reyting Tizimi',
            desc: 'Global leaderboard orqali foydalanuvchilar o‘z natijalarini boshqalar bilan taqqoslaydi.',
        },
        {
            icon: Users,
            title: 'Kuchli Hamjamiyat',
            desc: 'Telegram orqali minglab kitobxon yoshlar yagona platformada jamlanadi.',
        },
    ]

    return (
        <section
            className="
        relative
        overflow-hidden

        py-28
        md:py-36

        px-4
        md:px-8

        bg-[#fafafa]
      "
        >
            {/* BG */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
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
            bottom-[-100px]
            left-[-100px]

            w-[400px]
            h-[400px]

            rounded-full
            bg-violet-100/40
            blur-3xl
          "
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                {/* TOP */}
                <div className="max-w-3xl mb-20">
                    {/* BADGE */}
                    <div
                        className="
              inline-flex
              items-center
              gap-2

              px-5
              py-2

              rounded-full

              bg-white

              border
              border-indigo-100

              text-indigo-600
              text-sm
              font-semibold

              shadow-lg

              mb-7
            "
                        style={{
                            fontFamily: 'var(--font-inter)',
                        }}
                    >
                        <Sparkles className="w-4 h-4" />
                        NIMA UCHUN YOSHKITOBCHI?
                    </div>

                    {/* TITLE */}
                    <h2
                        className="
              text-5xl
              md:text-7xl

              leading-[0.9]
              tracking-tight

              text-black

              mb-7
            "
                        style={{
                            fontFamily: 'var(--font-bebas)',
                        }}
                    >
                        ZAMONAVIY
                        <br />
                        KITOBXONLIK
                        <br />
                        PLATFORMASI.
                    </h2>

                    {/* DESC */}
                    <p
                        className="
              text-lg
              md:text-xl

              leading-relaxed

              text-gray-600
            "
                        style={{
                            fontFamily: 'var(--font-inter)',
                        }}
                    >
                        Platforma yoshlar uchun
                        kitob o‘qishni yanada
                        qiziqarli, interaktiv
                        va motivatsion qiladi.
                    </p>
                </div>

                {/* FEATURES */}
                <div
                    className="
            grid
            lg:grid-cols-3

            gap-8
          "
                >
                    {features.map((item, index) => {
                        const Icon = item.icon

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
                                    duration: 0.8,
                                    delay: index * 0.1,
                                }}
                                viewport={{
                                    once: true,
                                }}
                                className="
                  group
                  relative

                  overflow-hidden

                  rounded-[40px]

                  bg-white/80
                  backdrop-blur-2xl

                  border
                  border-white

                  p-8
                  md:p-10

                  shadow-[0_20px_80px_rgba(0,0,0,0.05)]

                  hover:-translate-y-2
                  hover:shadow-[0_30px_100px_rgba(79,70,229,0.10)]

                  transition-all
                  duration-500
                "
                            >
                                {/* HOVER BLUR */}
                                <div
                                    className="
                    absolute
                    top-[-80px]
                    right-[-80px]

                    w-[180px]
                    h-[180px]

                    rounded-full

                    bg-indigo-100/60

                    blur-3xl

                    opacity-0
                    group-hover:opacity-100

                    transition-opacity
                    duration-500
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

                    text-white

                    shadow-lg
                    shadow-indigo-200/50

                    mb-8
                  "
                                >
                                    <Icon className="w-8 h-8" />
                                </div>

                                {/* TITLE */}
                                <h3
                                    className="
                    relative
                    z-10

                    text-4xl

                    leading-[0.9]

                    text-black

                    mb-5
                  "
                                    style={{
                                        fontFamily: 'var(--font-bebas)',
                                    }}
                                >
                                    {item.title}
                                </h3>

                                {/* DESC */}
                                <p
                                    className="
                    relative
                    z-10

                    text-gray-600
                    text-lg

                    leading-relaxed
                  "
                                    style={{
                                        fontFamily: 'var(--font-inter)',
                                    }}
                                >
                                    {item.desc}
                                </p>

                                {/* NUMBER */}
                                <div
                                    className="
                    absolute
                    bottom-6
                    right-6

                    text-7xl

                    leading-none

                    text-black/[0.03]

                    select-none
                  "
                                    style={{
                                        fontFamily: 'var(--font-bebas)',
                                    }}
                                >
                                    0{index + 1}
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}