"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Switch } from "@/components/ui/switch"
import { Check } from "lucide-react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"

interface FeatureProps {
  text: string
  included: boolean
}

const Feature: React.FC<FeatureProps> = ({ text, included }) => (
  <li className={cn("flex items-center gap-2", included ? "text-soft-black" : "text-medium-gray line-through")}>
    <Check className={cn("w-4 h-4", included ? "text-soft-black" : "text-medium-gray")} />
    <span>{text}</span>
  </li>
)

export default function PricingPage() {
  const [isYearly, setIsYearly] = useState(false)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7,
        ease: "easeOut",
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const pricingPlans = [
    {
      name: "Free Plan",
      description: "Perfect for getting started with prompt generation.",
      monthlyPrice: 0,
      yearlyPrice: 0,
      features: [
        { text: "3 Prompts/month", included: true },
        { text: "Basic styles", included: true },
        { text: "Standard support", included: true },
        { text: "Unlimited Prompts", included: false },
        { text: "Advanced styles", included: false },
        { text: "Priority support", included: false },
        { text: "Team collaboration", included: false },
        { text: "API access", included: false },
      ],
      cta: "Get Started Free",
      ctaLink: "#signup",
      isPrimary: false,
    },
    {
      name: "Pro Plan",
      description: "Unlock unlimited prompts and advanced features.",
      monthlyPrice: 29,
      yearlyPrice: 299, // Example: $29 * 12 = $348, so $299 is a discount
      features: [
        { text: "Unlimited Prompts", included: true },
        { text: "Advanced styles", included: true },
        { text: "Priority support", included: true },
        { text: "Team collaboration", included: true },
        { text: "API access", included: true },
        { text: "3 Prompts/month", included: true }, // Included for comparison
        { text: "Basic styles", included: true }, // Included for comparison
        { text: "Standard support", included: true }, // Included for comparison
      ],
      cta: "Go Pro",
      ctaLink: "#signup-pro",
      isPrimary: true,
    },
  ]

  return (
    <main className="relative z-10 py-16 md:py-24 bg-white text-soft-black">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={containerVariants}
        className="container text-center"
      >
        <motion.h1 className="text-4xl md:text-5xl font-sora font-bold mb-6" variants={itemVariants}>
          Flexible Pricing for Every Need
        </motion.h1>
        <motion.p className="text-lg md:text-xl text-medium-gray mb-12 max-w-2xl mx-auto" variants={itemVariants}>
          Choose the plan that best fits your creative coding workflow.
        </motion.p>

        <motion.div className="flex items-center justify-center gap-4 mb-12" variants={itemVariants}>
          <span className={cn("text-lg", !isYearly ? "font-bold text-soft-black" : "text-medium-gray")}>Monthly</span>
          <Switch
            checked={isYearly}
            onCheckedChange={setIsYearly}
            className="data-[state=checked]:bg-soft-black data-[state=unchecked]:bg-medium-gray"
            thumbClassName="data-[state=checked]:bg-white data-[state=unchecked]:bg-white"
          />
          <span className={cn("text-lg", isYearly ? "font-bold text-soft-black" : "text-medium-gray")}>
            Yearly (Save {Math.round((1 - pricingPlans[1].yearlyPrice / 12 / pricingPlans[1].monthlyPrice) * 100)}%)
          </span>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {pricingPlans.map((plan) => (
            <motion.div key={plan.name} variants={itemVariants}>
              <Card
                className={cn(
                  "flex flex-col justify-between rounded-xl shadow-xl p-6 transition-all duration-300 hover:scale-[1.01]",
                  plan.isPrimary
                    ? "bg-soft-black text-white border-soft-black"
                    : "bg-white/80 backdrop-blur-sm text-soft-black border-light-gray",
                )}
              >
                <CardHeader className="pb-4">
                  <CardTitle
                    className={cn("text-3xl font-sora font-bold", plan.isPrimary ? "text-white" : "text-soft-black")}
                  >
                    {plan.name}
                  </CardTitle>
                  <CardDescription className={cn("text-base", plan.isPrimary ? "text-light-gray" : "text-medium-gray")}>
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow pb-6">
                  <div className="text-5xl font-sora font-bold mb-6">
                    ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                    <span
                      className={cn("text-xl font-normal", plan.isPrimary ? "text-light-gray" : "text-medium-gray")}
                    >
                      {isYearly ? "/year" : "/month"}
                    </span>
                  </div>
                  <ul className={cn("space-y-3 text-left", plan.isPrimary ? "text-light-gray" : "text-soft-black")}>
                    {plan.features.map((feature, idx) => (
                      <Feature key={idx} text={feature.text} included={feature.included} />
                    ))}
                  </ul>
                </CardContent>
                <CardFooter className="pt-6">
                  <Button
                    asChild
                    className={cn(
                      "w-full px-8 py-6 text-lg rounded-xl transition-all duration-300 hover:shadow-lg",
                      plan.isPrimary
                        ? "bg-white text-soft-black hover:bg-light-gray"
                        : "bg-soft-black text-white hover:bg-pure-black",
                    )}
                  >
                    <Link href={plan.ctaLink}>{plan.cta}</Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-8" variants={itemVariants}>
          Detailed Plan Comparison
        </motion.h2>
        <motion.div
          variants={itemVariants}
          className="overflow-x-auto bg-white/80 backdrop-blur-sm rounded-xl shadow-lg"
        >
          <table className="w-full max-w-4xl mx-auto text-left border-collapse">
            <thead>
              <tr className="bg-light-gray text-soft-black">
                <th className="p-4 border-b border-medium-gray/30">Feature</th>
                <th className="p-4 border-b border-medium-gray/30">Free Plan</th>
                <th className="p-4 border-b border-medium-gray/30">Pro Plan</th>
              </tr>
            </thead>
            <tbody>
              {[
                "Prompts per month", // Updated
                "Style Access", // Updated
                "Support Level",
                "Team Collaboration",
                "API Access",
                "Custom Branding",
                "Version History",
              ].map((feature, idx) => (
                <tr key={idx} className="border-b border-medium-gray/10 last:border-b-0">
                  <td className="p-4 text-soft-black font-medium">{feature}</td>
                  <td className="p-4 text-medium-gray">
                    {feature === "Prompts per month" && "3"}
                    {feature === "Style Access" && "Basic"}
                    {feature === "Support Level" && "Standard"}
                    {feature === "Team Collaboration" && "No"}
                    {feature === "API Access" && "No"}
                    {feature === "Custom Branding" && "No"}
                    {feature === "Version History" && "Limited"}
                  </td>
                  <td className="p-4 text-soft-black">
                    {feature === "Prompts per month" && "Unlimited"}
                    {feature === "Style Access" && "Advanced & Custom"}
                    {feature === "Support Level" && "Priority"}
                    {feature === "Team Collaboration" && "Yes"}
                    {feature === "API Access" && "Yes"}
                    {feature === "Custom Branding" && "Yes"}
                    {feature === "Version History" && "Full"}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </motion.div>
    </main>
  )
}
