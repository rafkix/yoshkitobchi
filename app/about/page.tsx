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
                <div className="absolute inset-0 z-0 pointer-events-none" style={{ background: '#f0effa' }}>
                    {/* Top-left partial sphere */}
                    <div className="absolute -top-24 -left-20 w-64 h-64 rounded-full"
                        style={{ background: 'radial-gradient(circle at 55% 55%, #e8e4fd, #c8c1f7 60%, #a89ef2)' }} />

                    {/* Main large sphere — top right */}
                    <div className="absolute -top-16 -right-24 w-[420px] h-[420px] rounded-full"
                        style={{ background: 'radial-gradient(circle at 38% 38%, #c4bff5, #9d97f0 30%, #7b72e8 60%, #6459d4)' }} />

                    {/* Arc ring */}
                    <div className="absolute top-5 -right-28 w-[500px] h-[500px] rounded-full border-2 border-[rgba(180,170,240,0.35)]" />

                    {/* Left-bottom purple blob — endi % bilan joylashtirilgan */}
                    <div className="absolute bottom-[5%] -left-16 w-72 h-72 rounded-full"
                        style={{ background: 'radial-gradient(circle at 40% 35%, #d0abf5, #b57fee 40%, #9055d4)' }} />

                    {/* Small sphere */}
                    <div className="absolute top-16 right-[310px] w-10 h-10 rounded-full"
                        style={{ background: 'radial-gradient(circle at 38% 35%, #d5cff8, #9f98e8 60%, #7a72d6)' }} />

                    {/* Dot grid — left */}
                    <div className="absolute top-[35%] left-7 grid grid-cols-6 gap-[7px]">
                        {Array.from({ length: 18 }).map((_, i) => (
                            <div key={i} className="w-[3px] h-[3px] rounded-full bg-[rgba(140,128,210,0.45)]" />
                        ))}
                    </div>

                    {/* Dot grid — right */}
                    <div className="absolute bottom-[10%] right-28 grid grid-cols-7 gap-[7px]">
                        {Array.from({ length: 21 }).map((_, i) => (
                            <div key={i} className="w-[3px] h-[3px] rounded-full bg-[rgba(140,128,210,0.45)]" />
                        ))}
                    </div>

                    {/* Small open rings */}
                    <div className="absolute top-[30%] right-40 w-5 h-5 rounded-full border-2 border-[rgba(140,128,210,0.5)]" />
                    <div className="absolute bottom-[12%] left-8 w-5 h-5 rounded-full border-2 border-[rgba(140,128,210,0.5)]" />

                    {/* Center white glow */}
                    <div className="absolute top-[20%] left-[42%] -translate-x-1/2 -translate-y-1/2 w-[420px] h-[280px] rounded-full"
                        style={{ background: 'radial-gradient(ellipse, rgba(255,255,255,0.9) 0%, rgba(240,238,255,0.4) 60%, transparent 100%)' }} />

                    {/* MID-PAGE — sahifa o'rtasi uchun qo'shimcha sferalar */}
                    <div className="absolute top-[45%] -right-20 w-80 h-80 rounded-full"
                        style={{ background: 'radial-gradient(circle at 38% 38%, #d5d0fa, #a89ef0 40%, #7b72e0 100%)' }} />

                    <div className="absolute top-[60%] -left-24 w-64 h-64 rounded-full"
                        style={{ background: 'radial-gradient(circle at 50% 45%, #e2ddfb, #c0b8f5 50%, #9088e0 100%)' }} />

                    {/* BOTTOM — sahifa oxiri uchun */}
                    <div className="absolute bottom-[2%] -right-16 w-56 h-56 rounded-full"
                        style={{ background: 'radial-gradient(circle at 40% 40%, #dcd7fa, #b8b2f0 50%, #9990e4)' }} />
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