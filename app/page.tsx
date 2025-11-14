import dynamic from "next/dynamic"
import { HeroSection } from "@/components/hero-section"
// Lazy load below-the-fold components to reduce initial bundle size
const FeaturesPain = dynamic(
  () => import("@/components/features-pain").then((mod) => ({ default: mod.FeaturesPain })),
  {
    loading: () => <div className="h-96 bg-transparent" />,
  },
)

const HowItWorks = dynamic(() => import("@/components/how-it-works").then((mod) => ({ default: mod.HowItWorks })), {
  loading: () => <div className="h-96 bg-transparent" />,
})

const CoreBenefits = dynamic(
  () => import("@/components/core-benefits").then((mod) => ({ default: mod.CoreBenefits })),
  {
    loading: () => <div className="h-96 bg-light-gray" />,
  },
)

const ModesSection = dynamic(
  () => import("@/components/modes-section").then((mod) => ({ default: mod.ModesSection })),
  {
    loading: () => <div className="h-96 bg-white" />,
  },
)

const PlatformTemplates = dynamic(
  () => import("@/components/platform-templates").then((mod) => ({ default: mod.PlatformTemplates })),
  {
    loading: () => <div className="h-96 bg-light-gray" />,
  },
)

const UseCases = dynamic(() => import("@/components/use-cases").then((mod) => ({ default: mod.UseCases })), {
  loading: () => <div className="h-96 bg-white" />,
})

const SocialProof = dynamic(() => import("@/components/social-proof").then((mod) => ({ default: mod.SocialProof })), {
  loading: () => <div className="h-96 bg-light-gray" />,
})

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

      <FeaturesPain />

      <section className="py-16 md:py-24 bg-transparent text-soft-black">
        <div className="container">
          <HowItWorks />
        </div>
      </section>

      <CoreBenefits />

      <ModesSection />

      <PlatformTemplates />

      <UseCases />

      <SocialProof />

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
