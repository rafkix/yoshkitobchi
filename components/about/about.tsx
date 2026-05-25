'use client'

import { motion } from 'framer-motion'

export function AboutSection() {
    return (
        <section
            className="
        relative
        overflow-hidden

        py-28
        md:py-36

        px-4
        md:px-8

        bg-white
      "
        >
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="
            absolute
            left-[-120px]
            top-[120px]

            w-[340px]
            h-[340px]

            rounded-full
            bg-indigo-100/40
            blur-3xl
          "
                />

                <div
                    className="
            absolute
            right-[-120px]
            bottom-[0]

            w-[420px]
            h-[420px]

            rounded-full
            bg-violet-100/40
            blur-3xl
          "
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto">
                <div
                    className="
            grid
            lg:grid-cols-2

            gap-16
            lg:gap-24

            items-center
          "
                >
                    {/* LEFT IMAGE */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: -40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        viewport={{
                            once: true,
                        }}
                        className="relative"
                    >
                        {/* MAIN IMAGE */}
                        <div
                            className="
                relative

                overflow-hidden

                rounded-[40px]

                shadow-[0_30px_100px_rgba(0,0,0,0.08)]
              "
                        >
                            <img
                                src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1400&auto=format&fit=crop"
                                alt="Yoshkitobchi"

                                className="
                  w-full
                  h-[620px]

                  object-cover
                "
                            />
                        </div>

                        {/* FLOATING CARD */}
                        <motion.div
                            animate={{
                                y: [0, -8, 0],
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                            }}
                            className="
                absolute
                -bottom-8
                -right-6

                rounded-[28px]

                bg-white/90
                backdrop-blur-xl

                border
                border-white

                p-6

                shadow-[0_20px_60px_rgba(0,0,0,0.08)]
              "
                        >
                            <div className="flex items-center gap-4">
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
                    text-2xl
                  "
                                >
                                    📚
                                </div>

                                <div>
                                    <h4
                                        className="
                      text-2xl
                      leading-none

                      text-black
                    "
                                        style={{
                                            fontFamily: 'var(--font-bebas)',
                                        }}
                                    >
                                        15K+
                                    </h4>

                                    <p
                                        className="
                      text-sm
                      text-gray-500
                    "
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                        }}
                                    >
                                        Yechilgan testlar
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* RIGHT CONTENT */}
                    <motion.div
                        initial={{
                            opacity: 0,
                            x: 40,
                        }}
                        whileInView={{
                            opacity: 1,
                            x: 0,
                        }}
                        transition={{
                            duration: 0.8,
                        }}
                        viewport={{
                            once: true,
                        }}
                    >
                        {/* BADGE */}
                        <div
                            className="
                inline-flex
                items-center

                px-5
                py-2

                rounded-full

                bg-indigo-50

                text-indigo-600
                text-sm
                font-semibold

                mb-7
              "
                            style={{
                                fontFamily: 'var(--font-inter)',
                            }}
                        >
                            BIZ HAQIMIZDA
                        </div>

                        {/* TITLE */}
                        <h2
                            className="
                text-5xl
                md:text-7xl

                leading-[0.9]
                tracking-tight

                text-black

                mb-8
              "
                            style={{
                                fontFamily: 'var(--font-bebas)',
                            }}
                        >
                            YOSHLARNI
                            <br />
                            KITOBGA
                            <br />
                            QAYTARAMIZ.
                        </h2>

                        {/* DESCRIPTION */}
                        <div
                            className="
                space-y-6

                text-lg
                md:text-xl

                leading-relaxed

                text-gray-600
              "
                            style={{
                                fontFamily: 'var(--font-inter)',
                            }}
                        >
                            <p>
                                YOSHKITOBCHI —
                                yoshlar orasida kitobxonlik
                                madaniyatini rivojlantirish uchun
                                yaratilgan zamonaviy online platforma.
                            </p>

                            <p>
                                Platforma orqali foydalanuvchilar
                                badiiy asarlarni o‘qiydi,
                                test ishlaydi,
                                reytingda qatnashadi
                                va elektron sertifikatlarga ega bo‘ladi.
                            </p>

                            <p>
                                Bizning asosiy maqsad —
                                zamonaviy texnologiyalar yordamida
                                kitob o‘qishni yoshlar uchun
                                yanada qiziqarli,
                                motivatsion
                                va interaktiv qilish.
                            </p>
                        </div>

                        {/* STATS */}
                        <div
                            className="
                grid
                grid-cols-3

                gap-5

                mt-12
              "
                        >
                            {[
                                {
                                    value: '1000+',
                                    label: 'Kitobxon',
                                },
                                {
                                    value: '50+',
                                    label: 'Asarlar',
                                },
                                {
                                    value: '24/7',
                                    label: 'Platforma',
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="
                    rounded-[24px]

                    border
                    border-gray-100

                    bg-white/80
                    backdrop-blur-xl

                    p-5

                    text-center

                    shadow-[0_10px_40px_rgba(0,0,0,0.04)]
                  "
                                >
                                    <h3
                                        className="
                      text-4xl

                      leading-none

                      text-[#4f46e5]

                      mb-2
                    "
                                        style={{
                                            fontFamily: 'var(--font-bebas)',
                                        }}
                                    >
                                        {item.value}
                                    </h3>

                                    <p
                                        className="
                      text-sm
                      text-gray-500
                    "
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                        }}
                                    >
                                        {item.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>)
}