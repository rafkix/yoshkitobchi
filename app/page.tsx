import Navbar  from '@/components/layout/navbar'
import { HeroSection } from '@/components/sections/hero'
import { StatisticsSection } from '@/components/sections/statistics'
import { FeaturesSection } from '@/components/sections/features'
import { BooksSection } from '@/components/sections/books'
import { LeaderboardSection } from '@/components/sections/leaderboard'
import { AmbassadorSection } from '@/components/sections/ambassador'
import { CertificatesSection } from '@/components/sections/certificates'
import { CommunitySection } from '@/components/sections/community'
import { FinalCTASection } from '@/components/sections/cta'
import { Footer } from '@/components/layout/footer'

export default function Home() {
  return (
    <main className="bg-white overflow-x-hidden">
      <Navbar />
      <HeroSection />
      {/* <StatisticsSection /> */}
      <FeaturesSection />
      <BooksSection />
      {/* <LeaderboardSection /> */}
      {/* <AmbassadorSection /> */}
      <CertificatesSection />
      {/* <CommunitySection /> */}
      {/* <FinalCTASection /> */}
      <Footer />
    </main>
  )
}
