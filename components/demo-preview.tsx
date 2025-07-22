"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import Image from "next/image"

export function DemoPreview() {
  return (
    <div className="text-center">
      <h2 className="text-3xl md:text-4xl font-sora font-bold mb-12 text-soft-black">See MakePRD in Action</h2>
      <Card className="max-w-3xl mx-auto bg-white/80 backdrop-blur-sm border-light-gray shadow-lg rounded-lg overflow-hidden">
        <CardHeader className="pb-0">
          <CardTitle className="text-2xl font-sora text-soft-black">Sample Vibe Coding Prompt</CardTitle>
          <CardDescription className="text-medium-gray">
            A glimpse into the quality and structure of a generated prompt.
          </CardDescription>
        </CardHeader>
        <CardContent className="p-6">
          <div className="relative w-full h-64 md:h-96 bg-light-gray rounded-md overflow-hidden border border-medium-gray flex items-center justify-center">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Sample Vibe Coding Prompt Preview"
              width={600}
              height={400}
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-soft-black/50 opacity-0 hover:opacity-100 transition-opacity duration-300">
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-white text-soft-black hover:bg-light-gray px-6 py-3 rounded-lg">
                    Expand to View
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-4xl w-[90vw] h-[90vh] p-0 overflow-hidden bg-white text-soft-black">
                  <DialogHeader className="p-6 pb-0">
                    <DialogTitle className="text-2xl font-sora">Full Prompt Preview</DialogTitle>
                    <DialogDescription className="text-medium-gray">
                      This is a non-editable sample of a generated Vibe Coding Prompt.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="p-6 pt-0 h-full overflow-y-auto">
                    <Image
                      src="/placeholder.svg?height=1200&width=800"
                      alt="Full Sample Vibe Coding Prompt"
                      width={800}
                      height={1200}
                      className="w-full h-auto object-contain"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
