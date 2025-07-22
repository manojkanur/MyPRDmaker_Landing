"use client"

import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
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
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const faqs = [
    {
      question: "What is MakePRD?",
      answer:
        "MakePRD is an AI-powered platform designed to help creative developers and designers instantly generate professional Vibe Coding Prompts using intelligent prompts.",
    },
    {
      question: "How does the AI generate prompts?",
      answer:
        "Our AI uses advanced natural language processing to understand your creative vision and generate a structured, comprehensive coding prompt based on artistic principles and your chosen style.",
    },
    {
      question: "Can I customize the generated prompts?",
      answer:
        "Yes, while the AI provides a solid foundation, you can always edit and refine the generated prompt to perfectly match your specific artistic needs and preferences.",
    },
    {
      question: "What kind of prompt styles are available?",
      answer:
        "We offer a variety of prompt styles for different creative coding platforms, artistic genres, and levels of detail, from minimalist vibes to comprehensive interactive specifications. Pro plans unlock advanced styles.",
    },
    {
      question: "Is my data secure?",
      answer:
        "Absolutely. We prioritize your data security with industry-standard encryption and strict privacy policies. Your creative ideas remain confidential.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes, our Free Plan allows you to generate a limited number of prompts per month, giving you a chance to experience the power of MakePRD before committing to a paid plan.",
    },
  ]

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={containerVariants}
      className="text-center"
    >
      <motion.h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-soft-black" variants={itemVariants}>
        Frequently Asked Questions
      </motion.h2>
      <Accordion
        type="single"
        collapsible
        className="w-full max-w-3xl mx-auto text-soft-black bg-white/80 backdrop-blur-sm rounded-xl shadow-lg p-6"
      >
        {faqs.map((faq, index) => (
          <motion.div key={index} variants={itemVariants}>
            <AccordionItem value={`item-${index}`} className="border-b border-medium-gray/30 last:border-b-0">
              <AccordionTrigger className="text-lg md:text-xl text-left hover:no-underline py-4 hover:text-pure-black transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-medium-gray text-base md:text-lg pb-4">{faq.answer}</AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
    </motion.div>
  )
}
