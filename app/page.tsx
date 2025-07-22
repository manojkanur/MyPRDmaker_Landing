import { HeroSection } from "@/components/hero-section"
import { SupportedPlatforms } from "@/components/supported-platforms"
import { ProblemSolution } from "@/components/problem-solution"
import { HowItWorks } from "@/components/how-it-works"
import { FAQSection } from "@/components/faq-section"
import { FinalCTA } from "@/components/final-cta"
import { VibeCodingIntro } from "@/components/vibe-coding-intro"
import { VibeCodingBenefits } from "@/components/vibe-coding-benefits"
import { MakePRDVibeCoding } from "@/components/make-prd-vibe-coding"
import { WhyChooseMakePRD } from "@/components/why-choose-makeprd" // New import

export default function HomePage() {
  return (
    <main className="relative z-10">
      <HeroSection />
      <SupportedPlatforms />
      <section className="py-16 md:py-24 bg-transparent text-soft-black">
        <div className="container">
          <VibeCodingIntro />
        </div>
      </section>
      <section className="py-16 md:py-24 bg-transparent text-soft-black">
        <div className="container">
          <ProblemSolution />
        </div>
      </section>
      <section className="py-16 md:py-24 bg-transparent text-soft-black">
        <div className="container">
          <VibeCodingBenefits />
        </div>
      </section>
      <section className="py-16 md:py-24 bg-transparent text-soft-black">
        <div className="container">
          <HowItWorks />
        </div>
      </section>
      <section className="py-16 md:py-24 bg-transparent text-soft-black">
        <div className="container">
          <MakePRDVibeCoding />
        </div>
      </section>
      {/* Replaced sections */}
      <section className="py-16 md:py-24 bg-light-gray text-soft-black">
        <div className="container">
          <WhyChooseMakePRD /> {/* New section */}
        </div>
      </section>
      {/* End of replaced sections */}
      <section className="py-16 md:py-24 bg-light-gray text-soft-black">
        <div className="container">
          <FAQSection />
        </div>
      </section>
      <section className="py-16 md:py-24 bg-white text-soft-black">
        <div className="container">
          <FinalCTA />
        </div>
      </section>
    </main>
  )
}
