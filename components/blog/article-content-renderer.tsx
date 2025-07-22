"use client"

import React from "react"

import type { ReactElement } from "react"
import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import type { ArticleContentType } from "@/lib/blog-data"
import Image from "next/image"
import { cn } from "@/lib/utils"

interface ArticleContentRendererProps {
  content: ArticleContentType[]
}

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
}

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
}

export function ArticleContentRenderer({ content }: ArticleContentRendererProps): ReactElement {
  const HeadingTags = ["h1", "h2", "h3", "h4", "h5", "h6"] as const
  const headingVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: "easeOut" } },
  }

  return (
    <div className="prose prose-neutral max-w-none text-soft-black">
      {content.map((block, index) => {
        const [ref, inView] = useInView({
          triggerOnce: true,
          threshold: 0.1,
        })

        switch (block.type) {
          case "paragraph":
            return (
              <motion.p
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={paragraphVariants}
                className="mb-6 text-lg leading-relaxed text-soft-black"
              >
                {block.text}
              </motion.p>
            )
          case "heading":
            const HeadingTag = HeadingTags[block.level - 1]
            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={headingVariants}
              >
                {React.createElement(
                  HeadingTag,
                  {
                    className: cn(
                      "font-sora font-bold mt-10 mb-4",
                      block.level === 2
                        ? "text-3xl md:text-4xl text-pure-black"
                        : "text-2xl md:text-3xl text-soft-black",
                    ),
                  },
                  block.text,
                )}
              </motion.div>
            )
          case "list":
            return (
              <motion.ul
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={sectionVariants}
                className="list-disc list-inside space-y-2 mb-6 text-lg text-soft-black"
              >
                {block.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </motion.ul>
            )
          case "code":
            return (
              <motion.pre
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={sectionVariants}
                className="bg-soft-black text-white p-4 rounded-md overflow-x-auto text-sm font-mono mb-6"
              >
                <code className={`language-${block.language}`}>{block.code}</code>
              </motion.pre>
            )
          case "image":
            return (
              <motion.figure
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={sectionVariants}
                className="my-8 text-center"
              >
                <Image
                  src={block.src || "/placeholder.svg"}
                  alt={block.alt}
                  width={800}
                  height={500}
                  className="max-w-full h-auto rounded-lg shadow-md mx-auto grayscale"
                />
                {block.caption && <figcaption className="mt-2 text-sm text-medium-gray">{block.caption}</figcaption>}
              </motion.figure>
            )
          case "table":
            return (
              <motion.div
                key={index}
                ref={ref}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
                variants={sectionVariants}
                className="overflow-x-auto my-8"
              >
                <table className="w-full border-collapse text-soft-black">
                  <thead>
                    <tr className="bg-light-gray">
                      {block.headers.map((header, i) => (
                        <th key={i} className="p-3 border border-medium-gray/30 text-left font-bold">
                          {header}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {block.rows.map((row, rowIndex) => (
                      <tr key={rowIndex} className="even:bg-light-gray/50">
                        {row.map((cell, cellIndex) => (
                          <td key={cellIndex} className="p-3 border border-medium-gray/30">
                            {cell}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </motion.div>
            )
          default:
            return null
        }
      })}
    </div>
  )
}
