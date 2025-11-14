import PricingClientPage from "./PricingClientPage"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Pricing - MakePRD.AI",
  description: "Choose the plan that fits your needs. Start building with MakePRD.AI today.",
}

export default function PricingPage() {
  return <PricingClientPage />
}
