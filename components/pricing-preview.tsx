import { Button } from "@/components/ui/button"
import Link from "next/link"

export function PricingPreview() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-sora font-bold mb-6 text-soft-black">Simple, Transparent Pricing</h2>
      <p className="text-lg md:text-xl text-medium-gray mb-10 max-w-2xl mx-auto">
        Start generating PRDs for free, or upgrade for unlimited access and advanced features.
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-12">
        {/* Free Plan Snapshot */}
        <div className="bg-light-gray p-8 rounded-lg shadow-sm w-full max-w-sm text-soft-black">
          <h3 className="text-2xl font-sora font-bold mb-4">Free Plan</h3>
          <p className="text-4xl font-sora font-bold mb-4">
            $0<span className="text-lg text-medium-gray">/month</span>
          </p>
          <ul className="text-left space-y-2 text-medium-gray mb-6">
            <li>3 PRDs/month</li>
            <li>Basic templates</li>
            <li>Standard support</li>
          </ul>
        </div>

        {/* Pro Plan Snapshot */}
        <div className="bg-soft-black text-white p-8 rounded-lg shadow-lg w-full max-w-sm">
          <h3 className="text-2xl font-sora font-bold mb-4">Pro Plan</h3>
          <p className="text-4xl font-sora font-bold mb-4">
            $29<span className="text-lg text-medium-gray">/month</span>
          </p>
          <ul className="text-left space-y-2 text-light-gray mb-6">
            <li>Unlimited PRDs</li>
            <li>Advanced templates</li>
            <li>Priority support</li>
          </ul>
        </div>
      </div>
      <Button
        asChild
        className="px-8 py-6 text-lg rounded-lg bg-soft-black text-white hover:bg-pure-black transition-colors duration-200"
      >
        <Link href="/pricing">View All Plans</Link>
      </Button>
    </div>
  )
}
