"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter"
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism"
import type { ArticleContentType } from "@/lib/blog-data"
import type { JSX } from "react"

interface ArticleContentRendererProps {
  content: ArticleContentType[]
}

export function ArticleContentRenderer({ content }: ArticleContentRendererProps) {
  const renderContent = (item: ArticleContentType, index: number) => {
    const itemVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay: index * 0.1 } },
    }

    switch (item.type) {
      case "paragraph":
        return (
          <motion.p
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="text-lg leading-relaxed text-medium-gray mb-6"
          >
            {item.text}
          </motion.p>
        )

      case "heading":
        const HeadingTag = `h${item.level}` as keyof JSX.IntrinsicElements
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className={`font-sora font-bold text-pure-black mb-6 mt-8 ${
              item.level === 2 ? "text-3xl md:text-4xl" : "text-2xl md:text-3xl"
            }`}
          >
            <HeadingTag>{item.text}</HeadingTag>
          </motion.div>
        )

      case "list":
        return (
          <motion.ul
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="space-y-3 mb-6 ml-6"
          >
            {item.items.map((listItem, listIndex) => (
              <li key={listIndex} className="text-lg text-medium-gray relative">
                <span className="absolute -left-6 top-2 w-2 h-2 bg-soft-black rounded-full"></span>
                <span dangerouslySetInnerHTML={{ __html: listItem }} />
              </li>
            ))}
          </motion.ul>
        )

      case "code":
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 rounded-xl overflow-hidden shadow-lg"
          >
            <SyntaxHighlighter
              language={item.language}
              style={oneDark}
              customStyle={{
                margin: 0,
                padding: "1.5rem",
                fontSize: "0.9rem",
                lineHeight: "1.5",
              }}
            >
              {item.code}
            </SyntaxHighlighter>
          </motion.div>
        )

      case "image":
        return (
          <motion.figure key={index} variants={itemVariants} initial="hidden" animate="visible" className="mb-8">
            <div className="relative w-full h-64 md:h-96 rounded-xl overflow-hidden shadow-lg">
              <Image src={item.src || "/placeholder.svg"} alt={item.alt} fill className="object-cover" />
            </div>
            {item.caption && (
              <figcaption className="text-center text-sm text-medium-gray mt-3 italic">{item.caption}</figcaption>
            )}
          </motion.figure>
        )

      case "table":
        return (
          <motion.div
            key={index}
            variants={itemVariants}
            initial="hidden"
            animate="visible"
            className="mb-8 overflow-x-auto"
          >
            <table className="w-full border-collapse bg-white rounded-xl shadow-lg overflow-hidden">
              <thead>
                <tr className="bg-light-gray">
                  {item.headers.map((header, headerIndex) => (
                    <th
                      key={headerIndex}
                      className="px-6 py-4 text-left font-sora font-semibold text-pure-black border-b border-medium-gray/20"
                    >
                      {header}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {item.rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className="hover:bg-light-gray/50 transition-colors">
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex} className="px-6 py-4 text-medium-gray border-b border-medium-gray/10">
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
  }

  return (
    <article className="prose prose-lg max-w-none">{content.map((item, index) => renderContent(item, index))}</article>
  )
}
