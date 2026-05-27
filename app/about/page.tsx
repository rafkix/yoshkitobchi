import Navbar from '@/components/layout/navbar'
import { Footer } from '@/components/layout/footer'

import { AboutHeroSection } from '@/components/about/hero'
import { AboutSection } from '@/components/about/about'
import { FeaturesSection } from '@/components/about/features'
import { StatisticsSection } from '@/components/about/stats'
import { NewsSection } from '@/components/about/news'

export default function AboutPage() {
    return (
        <>
            <Navbar />

            <main className="relative overflow-hidden bg-[#f0effa] text-slate-900">
                {/* GLOBAL BACKGROUND */}
                <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">

                    {/* BASE */}
                    <div className="absolute inset-0 bg-[#f7f7fb]" />

                    {/* DESKTOP BACKGROUND */}
                    <div className="hidden md:block">
                        {/* Top-left sphere */}
                        <div
                            className="
        absolute
        -top-24
        -left-20
        w-64
        h-64
        rounded-full
      "
                            style={{
                                background:
                                    'radial-gradient(circle at 55% 55%, #e8e4fd, #c8c1f7 60%, #a89ef2)',
                            }}
                        />

                        {/* Main sphere */}
                        <div
                            className="
        absolute
        -top-16
        -right-24
        w-[420px]
        h-[420px]
        rounded-full
      "
                            style={{
                                background:
                                    'radial-gradient(circle at 38% 38%, #c4bff5, #9d97f0 30%, #7b72e8 60%, #6459d4)',
                            }}
                        />

                        {/* Arc */}
                        <div
                            className="
        absolute
        top-5
        -right-28
        w-[500px]
        h-[500px]
        rounded-full
        border-2
        border-[rgba(180,170,240,0.35)]
      "
                        />

                        {/* Bottom left */}
                        <div
                            className="
        absolute
        bottom-[5%]
        -left-16
        w-72
        h-72
        rounded-full
      "
                            style={{
                                background:
                                    'radial-gradient(circle at 40% 35%, #d0abf5, #b57fee 40%, #9055d4)',
                            }}
                        />
                    </div>

                    {/* MOBILE BACKGROUND */}
                    <div className="md:hidden">

                        {/* TOP PURPLE GRADIENT */}
                        <div
                            className="
        absolute
        top-0
        left-0
        right-0
        h-[340px]
      "
                            style={{
                                background:
                                    'linear-gradient(180deg, #dad5ff 0%, #ece9ff 40%, rgba(247,247,251,0) 100%)',
                            }}
                        />

                        {/* MAIN HERO BLOB */}
                        <div
                            className="
        absolute
        -top-24
        right-[-120px]

        w-[340px]
        h-[340px]

        rounded-full
      "
                            style={{
                                background:
                                    'radial-gradient(circle at 40% 40%, #8b80ff 0%, #6d63f0 40%, #5b52d6 70%, transparent 100%)',
                                opacity: 0.9,
                                filter: 'blur(2px)',
                            }}
                        />

                        {/* SECONDARY LIGHT ORB */}
                        <div
                            className="
        absolute
        top-[120px]
        left-[-100px]

        w-[220px]
        h-[220px]

        rounded-full
      "
                            style={{
                                background:
                                    'radial-gradient(circle at 50% 50%, #ffffff 0%, #ece8ff 60%, transparent 100%)',
                            }}
                        />

                        {/* SOFT RING */}
                        <div
                            className="
        absolute
        top-[60px]
        right-[-140px]

        w-[380px]
        h-[380px]

        rounded-full
        border
        border-[#cfc8ff]
      "
                            style={{
                                opacity: 0.5,
                            }}
                        />

                        {/* BOTTOM LIGHT */}
                        <div
                            className="
        absolute
        bottom-0
        left-1/2
        -translate-x-1/2

        w-[420px]
        h-[220px]

        rounded-full
      "
                            style={{
                                background:
                                    'radial-gradient(ellipse, rgba(139,128,255,0.12) 0%, transparent 70%)',
                            }}
                        />
                    </div>

                    {/* GLOBAL NOISE */}
                    <div
                        className="
      absolute
      inset-0
      opacity-[0.03]
    "
                        style={{
                            backgroundImage:
                                'radial-gradient(rgba(80,70,180,0.6) 0.5px, transparent 0.5px)',
                            backgroundSize: '6px 6px',
                        }}
                    />
                </div>
                <div className="relative z-10">
                    <AboutHeroSection />
                    <AboutSection />
                    <FeaturesSection />
                    <StatisticsSection />
                    <NewsSection />
                </div>
            </main>

            <Footer />
        </>
    )
}