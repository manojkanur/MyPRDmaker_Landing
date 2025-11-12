"use client"
import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const pricingPlans = [
  {
    name: "Starter",
    price: 9,
    description: "Perfect for trying out MakePRD.AI",
    credits: 55,
    features: [
      { name: "55 PRD generations per month", included: true },
      { name: "Credits reset monthly", included: true },
      { name: "All templates", included: true },
      { name: "Basic AI features", included: true },
      { name: "Advanced AI features", included: false },
      { name: "Priority support", included: false },
      { name: "Dedicated support", included: false },
      { name: "Custom branding options", included: false },
    ],
    buttonText: "Subscribe to Starter",
    popular: false,
  },
  {
    name: "Professional",
    price: 29,
    description: "Best value for regular users",
    credits: 180,
    features: [
      { name: "180 PRD generations per month", included: true },
      { name: "Credits reset monthly", included: true },
      { name: "All premium templates", included: true },
      { name: "Advanced AI features", included: true },
      { name: "Priority support", included: true },
      { name: "All templates", included: true },
      { name: "Dedicated support", included: false },
      { name: "Custom branding options", included: false },
    ],
    buttonText: "Subscribe to Professional",
    popular: true,
  },
  {
    name: "Enterprise",
    price: null,
    description: "For teams and heavy users",
    credits: "Unlimited",
    features: [
      { name: "Unlimited PRD generations", included: true },
      { name: "All premium templates", included: true },
      { name: "Advanced AI features", included: true },
      { name: "Dedicated support", included: true },
      { name: "Custom branding options", included: true },
      { name: "Volume discounts available", included: true },
      { name: "Priority support", included: true },
      { name: "API access", included: true },
    ],
    buttonText: "Contact Sales",
    popular: false,
  },
]

const comparisonFeatures = [
  { name: "PRD Generations per month", starter: "55", professional: "180", enterprise: "Unlimited" },
  { name: "Monthly credit renewal", starter: true, professional: true, enterprise: true },
  { name: "All Templates", starter: true, professional: true, enterprise: true },
  { name: "Advanced AI Features", starter: false, professional: true, enterprise: true },
  { name: "Priority Support", starter: false, professional: true, enterprise: true },
  { name: "Dedicated Support", starter: false, professional: false, enterprise: true },
  { name: "Custom Branding", starter: false, professional: false, enterprise: true },
]

export default function PricingClientPage() {
  return (
    <main className="relative z-10 min-h-screen bg-white">
      {/* Pricing Cards Section */}
      <section className="py-24 md:py-32">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-pure-black mb-4">Choose Your Plan</h1>
            <p className="text-lg text-soft-black max-w-2xl mx-auto">
              Select the perfect plan for your needs. All plans include access to our powerful PRD generation tools.
            </p>
          </div>

          {/* Pricing Cards */}
          <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-24">
            {pricingPlans.map((plan) => (
              <Card
                key={plan.name}
                className={`relative flex flex-col ${
                  plan.popular ? "border-2 border-soft-black shadow-xl scale-105" : "border border-gray-200"
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-soft-black text-white px-4 py-1 rounded-full text-sm font-medium">
                    Best Value
                  </div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-2xl font-bold mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-soft-black mb-4">{plan.description}</CardDescription>
                  <div className="mt-4">
                    {plan.price !== null ? (
                      <>
                        <span className="text-5xl font-bold text-pure-black">${plan.price}</span>
                        <span className="text-soft-black ml-2">/month</span>
                      </>
                    ) : (
                      <span className="text-4xl font-bold text-pure-black">Custom Pricing</span>
                    )}
                  </div>
                  <p className="text-sm text-soft-black mt-2">
                    {typeof plan.credits === "number" ? `${plan.credits} Credits per month` : plan.credits}
                  </p>
                  {plan.price !== null && <p className="text-xs text-soft-black">Renews automatically</p>}
                </CardHeader>
                <CardContent className="flex-1">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-3">
                        {feature.included ? (
                          <div className="rounded-full bg-soft-black p-1 mt-0.5">
                            <Check className="h-3 w-3 text-white" />
                          </div>
                        ) : (
                          <div className="rounded-full bg-gray-200 p-1 mt-0.5">
                            <X className="h-3 w-3 text-gray-400" />
                          </div>
                        )}
                        <span className={`text-sm ${feature.included ? "text-soft-black" : "text-gray-400"}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    className={`w-full ${
                      plan.popular
                        ? "bg-soft-black text-white hover:bg-pure-black"
                        : "bg-soft-black text-white hover:bg-pure-black"
                    }`}
                    size="lg"
                    onClick={() => {
                      window.location.href = "https://app.makeprd.ai/pricing"
                    }}
                  >
                    {plan.buttonText}
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* Comparison Table */}
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8 text-pure-black">Compare Plans</h2>
            <p className="text-center text-soft-black mb-12">Choose the plan that fits your needs</p>

            <div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-200">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-200">
                      <th className="text-left py-6 px-6 font-semibold text-pure-black bg-gray-50">Features</th>
                      <th className="text-center py-6 px-6 font-semibold text-pure-black bg-white">Starter</th>
                      <th className="text-center py-6 px-6 font-semibold text-pure-black bg-gray-50">Professional</th>
                      <th className="text-center py-6 px-6 font-semibold text-pure-black bg-white">Enterprise</th>
                    </tr>
                  </thead>
                  <tbody>
                    {comparisonFeatures.map((feature, index) => (
                      <tr key={index} className="border-b border-gray-100 last:border-0">
                        <td className="py-5 px-6 text-soft-black bg-gray-50">{feature.name}</td>
                        <td className="py-5 px-6 text-center bg-white">
                          {typeof feature.starter === "boolean" ? (
                            feature.starter ? (
                              <Check className="h-5 w-5 text-soft-black mx-auto" />
                            ) : (
                              <span className="text-gray-300">-</span>
                            )
                          ) : (
                            <span className="text-soft-black font-medium">{feature.starter}</span>
                          )}
                        </td>
                        <td className="py-5 px-6 text-center bg-gray-50">
                          {typeof feature.professional === "boolean" ? (
                            feature.professional ? (
                              <Check className="h-5 w-5 text-soft-black mx-auto" />
                            ) : (
                              <span className="text-gray-300">-</span>
                            )
                          ) : (
                            <span className="text-soft-black font-medium">{feature.professional}</span>
                          )}
                        </td>
                        <td className="py-5 px-6 text-center bg-white">
                          {typeof feature.enterprise === "boolean" ? (
                            feature.enterprise ? (
                              <Check className="h-5 w-5 text-soft-black mx-auto" />
                            ) : (
                              <span className="text-gray-300">-</span>
                            )
                          ) : (
                            <span className="text-soft-black font-medium">{feature.enterprise}</span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
