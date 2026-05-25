'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export function AboutHeroSection() {
    return (
        <section className="relative min-h-screen overflow-hidden bg-white">
            {/* BACKGROUND */}
            <div className="absolute inset-0 overflow-hidden">
                {/* TOP BLUR */}
                <div
                    className="
                        absolute
                        top-[-320px]
                        left-1/2
                        -translate-x-1/2

                        w-[1000px]
                        h-[1000px]

                        rounded-full
                        bg-indigo-100/40

                        blur-3xl
                    "
                />

                {/* RIGHT BLUR */}
                <div
                    className="
                        absolute
                        top-[220px]
                        right-[-120px]

                        w-[460px]
                        h-[460px]

                        rounded-full
                        bg-violet-100/50

                        blur-3xl
                    "
                />

                {/* LEFT BLUR */}
                <div
                    className="
                        absolute
                        bottom-[100px]
                        left-[-120px]

                        w-[320px]
                        h-[320px]

                        rounded-full
                        bg-blue-100/40

                        blur-3xl
                    "
                />

                {/* FLOATING BOOK */}
                <motion.img
                    animate={{
                        y: [0, -18, 0],
                        rotate: [-6, 3, -6],
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
                        left-20
                        top-52

                        w-28

                        opacity-10
                    "
                />

                <motion.img
                    animate={{
                        y: [0, 22, 0],
                        rotate: [6, -3, 6],
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
                        right-20
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

                    px-4
                    md:px-6

                    pt-32
                    pb-20
                "
            >
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        {/* LEFT */}
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                            }}
                        >
                            {/* BADGE */}
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

                                    mb-7
                                "
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                }}
                            >
                                ✨ YOSHKITOBCHI HAQIDA
                            </div>

                            {/* TITLE */}
                            <h1
                                className="
                                    text-6xl
                                    md:text-8xl
                                    lg:text-[9rem]

                                    leading-[0.88]
                                    tracking-tight

                                    text-black

                                    mb-8
                                "
                                style={{
                                    fontFamily: 'var(--font-bebas)',
                                }}
                            >
                                O‘QI.
                                <br />
                                O‘RGAN.
                                <br />
                                YARAT.
                            </h1>

                            {/* DESC */}
                            <p
                                className="
                                    max-w-2xl

                                    text-lg
                                    md:text-2xl

                                    leading-relaxed

                                    text-gray-600

                                    mb-10
                                "
                                style={{
                                    fontFamily: 'var(--font-inter)',
                                }}
                            >
                                YOSHKITOBCHI —
                                yoshlar orasida kitobxonlik
                                madaniyatini rivojlantirish uchun
                                yaratilgan zamonaviy online platforma.
                                Badiiy asarlarni o‘qing,
                                testlarda qatnashing,
                                reytingda yuqorilang
                                va elektron sertifikatlarga ega bo‘ling.
                            </p>

                            {/* BUTTONS */}
                            <div className="flex flex-col sm:flex-row gap-4">
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
                                        shadow-indigo-200/60

                                        hover:scale-[1.03]

                                        transition-all
                                        duration-300
                                    "
                                    style={{
                                        fontFamily: 'var(--font-inter)',
                                    }}
                                >
                                    Platformaga qo‘shilish

                                    <ArrowRight
                                        className="
                                            w-5
                                            h-5

                                            group-hover:translate-x-1

                                            transition-transform
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
                                        border-indigo-100

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
                            </div>
                        </motion.div>

                        {/* RIGHT */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.92 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{
                                duration: 0.9,
                            }}
                            className="relative"
                        >
                            {/* IMAGE WRAPPER */}
                            <div
                                className="
                                    relative

                                    rounded-[42px]

                                    bg-white/70
                                    backdrop-blur-2xl

                                    border
                                    border-white/60

                                    shadow-[0_30px_120px_rgba(79,70,229,0.15)]

                                    overflow-hidden

                                    p-4
                                "
                            >
                                <img
                                    src="/about-hero.png"
                                    alt="Yoshkitobchi"
                                    className="
                                        w-full
                                        h-[680px]

                                        object-cover

                                        rounded-[32px]
                                    "
                                />
                            </div>

                            {/* PREMIUM FLOATING CARD */}
                            <motion.div
                                animate={{
                                    y: [0, -12, 0],
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                }}
                                className="
                                    absolute
                                    -bottom-8
                                    -left-8

                                    hidden
                                    md:flex

                                    items-center
                                    gap-5

                                    rounded-[32px]

                                    border
                                    border-white/60

                                    bg-white/75
                                    backdrop-blur-2xl

                                    px-7
                                    py-6

                                    shadow-[0_20px_80px_rgba(79,70,229,0.18)]
                                "
                            >
                                {/* ICON */}
                                <div
                                    className="
                                        relative

                                        w-16
                                        h-16

                                        rounded-3xl

                                        bg-gradient-to-br
                                        from-[#6366f1]
                                        via-[#5b5ff6]
                                        to-[#4f46e5]

                                        flex
                                        items-center
                                        justify-center

                                        shadow-[0_15px_40px_rgba(99,102,241,0.45)]
                                    "
                                >
                                    {/* GLOW */}
                                    <div
                                        className="
                                            absolute
                                            inset-0

                                            rounded-3xl

                                            bg-indigo-400/40
                                            blur-xl
                                        "
                                    />

                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        strokeWidth={1.8}
                                        stroke="currentColor"
                                        className="
                                            relative
                                            z-10

                                            w-8
                                            h-8

                                            text-white
                                        "
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M12 6.253v13m0-13C10.832 5.483 9.246 5 7.5 5S4.168 5.483 3 6.253v13C4.168 18.483 5.754 18 7.5 18s3.332.483 4.5 1.253m0-13C13.168 5.483 14.754 5 16.5 5s3.332.483 4.5 1.253v13C19.832 18.483 18.246 18 16.5 18s-3.332.483-4.5 1.253"
                                        />
                                    </svg>
                                </div>

                                {/* TEXT */}
                                <div>
                                    <h3
                                        className="
                                            text-4xl
                                            leading-none

                                            text-black

                                            mb-1
                                        "
                                        style={{
                                            fontFamily: 'var(--font-bebas)',
                                        }}
                                    >
                                        15K+
                                    </h3>

                                    <p
                                        className="
                                            text-sm

                                            text-gray-500

                                            leading-relaxed
                                        "
                                        style={{
                                            fontFamily: 'var(--font-inter)',
                                        }}
                                    >
                                        Yechilgan testlar
                                        <br />
                                        va challenge’lar
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    )
}