"use client"

import { MessageCircle, X } from "lucide-react"
import { useState } from "react"

export function HelpAssistant() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="fixed bottom-4 right-4 z-50 max-h-screen">
      {isOpen ? (
        <div className="shadow-2xl rounded-lg overflow-hidden bg-white relative max-h-[calc(100vh-2rem)]">
          {/* Close button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-2 right-2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors"
            aria-label="Close chat"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Chat iframe */}
          <iframe
            src="https://dashboard.tinytalk.ai/bots/76e56265-ceed-4f45-80a4-5e08d8f4c1a1/chat"
            className="border-0 w-[90vw] max-w-[400px] h-[80vh] max-h-[600px]"
            title="Help Assistant"
          />
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-black hover:bg-gray-800 text-white rounded-full p-4 shadow-lg transition-all hover:scale-110"
          aria-label="Open chat"
        >
          <MessageCircle className="w-6 h-6" />
        </button>
      )}
    </div>
  )
}
