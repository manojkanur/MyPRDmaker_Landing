import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"

// Lazy load below-the-fold components to reduce initial bundle size
const VibeCodingIntro = dynamic(
  () => import("@/components/vibe-coding-intro").then((mod) => ({ default: mod.VibeCodingIntro })),
  {
    loading: () => <div className="h-96 bg-transparent" />,
  },
)
const ProblemSolution = dynamic(
  () => import("@/components/problem-solution").then((mod) => ({ default: mod.ProblemSolution })),
  {
    loading: () => <div className="h-96 bg-transparent" />,
  },
)

const VibeCodingBenefits = dynamic(
  () => import("@/components/vibe-coding-benefits").then((mod) => ({ default: mod.VibeCodingBenefits })),
  {
    loading: () => <div className="h-96 bg-transparent" />,
  },
)

const GeneratePromptPRDSection = dynamic(
  () => import("@/components/generate-prompt-prd-section").then((mod) => ({ default: mod.GeneratePromptPRDSection })),
  {
    loading: () => <div className="h-96 bg-white" />,
  },
)

const GenerateGeneralPRDSection = dynamic(
  () => import("@/components/generate-general-prd-section").then((mod) => ({ default: mod.GenerateGeneralPRDSection })),
  {
    loading: () => <div className="h-96 bg-gray-50" />,
  },
)

const StorePreviousPRDSection = dynamic(
  () => import("@/components/store-previous-prd-section").then((mod) => ({ default: mod.StorePreviousPRDSection })),
  {
    loading: () => <div className="h-96 bg-white" />,
  },
)

const HowItWorks = dynamic(() => import("@/components/how-it-works").then((mod) => ({ default: mod.HowItWorks })), {
  loading: () => <div className="h-96 bg-transparent" />,
})

const MakePRDVibeCoding = dynamic(
  () => import("@/components/make-prd-vibe-coding").then((mod) => ({ default: mod.MakePRDVibeCoding })),
  {
    loading: () => <div className="h-96 bg-transparent" />,
  },
)

const WhyChooseMakePRD = dynamic(
  () => import("@/components/why-choose-makeprd").then((mod) => ({ default: mod.WhyChooseMakePRD })),
  {
    loading: () => <div className="h-96 bg-light-gray" />,
  },
)

const FAQSection = dynamic(() => import("@/components/faq-section").then((mod) => ({ default: mod.FAQSection })), {
  loading: () => <div className="h-96 bg-light-gray" />,
})

const FinalCTA = dynamic(() => import("@/components/final-cta").then((mod) => ({ default: mod.FinalCTA })), {
  loading: () => <div className="h-64 bg-white" />,
})

export default function HomePage() {
  return (
    <main className="relative z-10">
      <HeroSection />
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
      <GeneratePromptPRDSection />
      <GenerateGeneralPRDSection />
      <StorePreviousPRDSection />
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
      <section className="py-16 md:py-24 bg-light-gray text-soft-black">
        <div className="container">
          <WhyChooseMakePRD />
        </div>
      </section>
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
