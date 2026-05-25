'use client'

import { motion } from 'framer-motion'
import { Newspaper, ArrowUpRight } from 'lucide-react'

const news = [
    {
        title: '2026 yozgi challenge boshlandi',
        desc: 'Platformaga yangi badiiy asarlar, murakkab testlar va yangi reyting tizimi qo‘shildi.',
        image:
            'https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?q=80&w=1600&auto=format&fit=crop',
        date: '12 MAY • 2026',
    },
    {
        title: 'Top kitobxonlar taqdirlandi',
        desc: 'Eng faol foydalanuvchilar sertifikat va maxsus sovg‘alar bilan taqdirlandi.',
        image:
            'https://images.unsplash.com/photo-1512820790803-83ca734da794?q=80&w=1600&auto=format&fit=crop',
        date: '28 APR • 2026',
    },
    {
        title: '50+ yangi test platformaga qo‘shildi',
        desc: 'Yangi challenge formatidagi testlar va asarlar foydalanuvchilar uchun ochildi.',
        image:
            'https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&w=1600&auto=format&fit=crop',
        date: '16 APR • 2026',
    },
]

export function NewsSection() {
    return (
        <section className="relative py-28 md:py-36 overflow-hidden">
            {/* BG */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="
            absolute
            right-[-200px]
            top-[0]

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
            left-[-150px]
            bottom-[-100px]

            w-[400px]
            h-[400px]

            rounded-full
            bg-violet-100/40
            blur-3xl
          "
                />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 md:px-8">
                {/* HEADER */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <div
                        className="
              inline-flex
              items-center
              gap-2

              px-4
              py-2

              rounded-full

              bg-indigo-50
              border
              border-indigo-100

              text-indigo-600
              text-sm
              font-semibold

              mb-6
            "
                        style={{
                            fontFamily: 'var(--font-inter)',
                        }}
                    >
                        <Newspaper className="w-4 h-4" />
                        SO‘NGGI YANGILIKLAR
                    </div>

                    <h2
                        className="
              text-5xl
              md:text-7xl
              lg:text-8xl

              leading-[0.9]

              text-black

              mb-6
            "
                        style={{
                            fontFamily: 'var(--font-bebas)',
                        }}
                    >
                        PLATFORMA
                        <br />
                        YANGILIKLARI
                    </h2>

                    <p
                        className="
              max-w-2xl

              text-lg
              md:text-xl

              leading-relaxed

              text-gray-600
            "
                        style={{
                            fontFamily: 'var(--font-inter)',
                        }}
                    >
                        YOSHKITOBCHI platformasidagi eng muhim
                        yangiliklar, challenge’lar va yangi imkoniyatlar.
                    </p>
                </motion.div>

                {/* NEWS GRID */}
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {news.map((item, index) => (
                        <motion.article
                            key={index}
                            initial={{ opacity: 0, y: 45 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.12,
                            }}
                            viewport={{ once: true }}
                            className="
                group

                overflow-hidden

                rounded-[36px]

                bg-white/80
                backdrop-blur-xl

                border
                border-white

                shadow-[0_25px_80px_rgba(0,0,0,0.06)]

                hover:translate-y-[-8px]
                hover:shadow-[0_35px_100px_rgba(79,70,229,0.12)]

                transition-all
                duration-500
              "
                        >
                            {/* IMAGE */}
                            <div className="relative overflow-hidden">
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="
                    w-full
                    h-[300px]

                    object-cover

                    group-hover:scale-105

                    transition-transform
                    duration-700
                  "
                                />

                                <div
                                    className="
                    absolute
                    inset-0

                    bg-gradient-to-t
                    from-black/30
                    via-black/0
                    to-black/0
                  "
                                />

                                <div
                                    className="
                    absolute
                    top-5
                    left-5

                    px-3
                    py-1.5

                    rounded-full

                    bg-white/90
                    backdrop-blur-xl

                    text-[11px]
                    font-bold
                    tracking-[0.15em]

                    text-[#4f46e5]
                  "
                                    style={{
                                        fontFamily: 'var(--font-inter)',
                                    }}
                                >
                                    {item.date}
                                </div>
                            </div>

                            {/* CONTENT */}
                            <div className="p-7 md:p-8">
                                <h3
                                    className="
                    text-3xl
                    md:text-4xl

                    leading-[0.95]

                    text-black

                    mb-4
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

                    mb-7
                  "
                                    style={{
                                        fontFamily: 'var(--font-inter)',
                                    }}
                                >
                                    {item.desc}
                                </p>

                                <button
                                    className="
                    group/btn

                    inline-flex
                    items-center
                    gap-2

                    text-[#4f46e5]
                    font-semibold

                    hover:gap-3

                    transition-all
                  "
                                    style={{
                                        fontFamily: 'var(--font-inter)',
                                    }}
                                >
                                    Batafsil

                                    <ArrowUpRight
                                        className="
                      w-4
                      h-4

                      transition-transform
                      group-hover/btn:translate-x-0.5
                      group-hover/btn:-translate-y-0.5
                    "
                                    />
                                </button>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    )
}