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

            <main className="overflow-hidden bg-white">
                <AboutHeroSection />
                <AboutSection />
                <FeaturesSection />
                <StatisticsSection />
                <NewsSection />
            </main>

            <Footer />
        </>
    )
}