"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { ArrowUpRight } from "lucide-react"
import { BlurFade } from "@/components/ui/blur-fade"

interface Amenity {
  title: string
  description: string
  tag: string
  link: string
  image: string
}

const amenities: Amenity[] = [
  {
    title: "Private Oceanfront Deck",
    description: "Direct beach access with panoramic sea views & teak sun loungers.",
    tag: "Beachfront",
    link: "#explore",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "En-Suite Teak Bathroom",
    description: "Open-air rain showers with organic botanical toiletries.",
    tag: "Luxury",
    link: "#explore",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Coastal Dining & Cafe",
    description: "Fresh sea-catch dining, coconut blends, and artisanal breakfasts.",
    tag: "Dining",
    link: "#contact",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "Sunset Lounge & Bonfire",
    description: "Evening acoustic rhythms, stargazing beanbags, and fireside warmth.",
    tag: "Experience",
    link: "#experience",
    image: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=1200&auto=format&fit=crop",
  },
]

export function ProjectShowcase() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [smoothPosition, setSmoothPosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const containerRef = useRef<HTMLDivElement>(null)
  const animationRef = useRef<number | null>(null)

  useEffect(() => {
    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      setSmoothPosition((prev) => ({
        x: lerp(prev.x, mousePosition.x, 0.15),
        y: lerp(prev.y, mousePosition.y, 0.15),
      }))
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [mousePosition])

  const handleMouseMove = (e: React.MouseEvent) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect()
      setMousePosition({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      })
    }
  }

  const handleMouseEnter = (index: number) => {
    setHoveredIndex(index)
    setIsVisible(true)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setIsVisible(false)
  }

  return (
    <section id="amenities" ref={containerRef} onMouseMove={handleMouseMove} className="relative w-full max-w-xl mx-auto py-12 md:py-20">

<div className="mx-auto flex flex-col items-center justify-center space-y-3 pb-8">
  <div className="bg-white/40 backdrop-blur-md w-fit mx-auto px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-neutral-200">
    <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800">
      Resort Comforts
    </span>
  </div>

   <BlurFade delay={0.15} inView>
     <h1 className="heading mx-auto">
       Amenities
     </h1>
   </BlurFade>

   <BlurFade delay={0.3} inView>
     <p className="subheading mx-auto">
       Tents Fit for a Maharaja
     </p>
   </BlurFade>

        <p className="para mx-auto max-w-xl text-center">
          Handcrafted Rajasthani interiors, sea-facing verandas and <br className="hidden sm:inline" /> private en-suite baths, only fifteen keys along the shore.
        </p>
    
</div>

      <div
        className="pointer-events-none fixed z-50 overflow-hidden rounded-xl shadow-2xl"
        style={{
          left: containerRef.current?.getBoundingClientRect().left ?? 0,
          top: containerRef.current?.getBoundingClientRect().top ?? 0,
          transform: `translate3d(${smoothPosition.x + 20}px, ${smoothPosition.y - 100}px, 0)`,
          opacity: isVisible ? 1 : 0,
          scale: isVisible ? 1 : 0.8,
          transition: "opacity 0.3s cubic-bezier(0.4, 0, 0.2, 1), scale 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <div className="relative w-[280px] h-[180px] bg-neutral-100 rounded-xl overflow-hidden shadow-lg border border-neutral-200">
          {amenities.map((amenity, index) => (
            <img
              key={amenity.title}
              src={amenity.image}
              alt={amenity.title}
              className="absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out"
              style={{
                opacity: hoveredIndex === index ? 1 : 0,
                scale: hoveredIndex === index ? 1 : 1.1,
                filter: hoveredIndex === index ? "none" : "blur(10px)",
              }}
            />
          ))}
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
        </div>
      </div>

      <div className="space-y-0">
        {amenities.map((amenity, index) => (
          <a
            key={amenity.title}
            href={amenity.link}
            className="group block"
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="relative py-5 border-t border-neutral-200 transition-all duration-300 ease-out">
              {/* Background highlight on hover */}
              <div
                className={`
                  absolute inset-0 -mx-4 px-4 bg-neutral-100/60 rounded-xl
                  transition-all duration-300 ease-out
                  ${hoveredIndex === index ? "opacity-100 scale-100" : "opacity-0 scale-95"}
                `}
              />

              <div className="relative flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Title with animated underline */}
                  <div className="inline-flex items-center gap-2">
                    <h3 className="text-neutral-900 font-semibold text-lg tracking-tight">
                      <span className="relative">
                        {amenity.title}
                        {/* Animated underline */}
                        <span
                          className={`
                            absolute left-0 -bottom-0.5 h-px bg-neutral-900
                            transition-all duration-300 ease-out
                            ${hoveredIndex === index ? "w-full" : "w-0"}
                          `}
                        />
                      </span>
                    </h3>

                    {/* Arrow that slides in */}
                    <ArrowUpRight
                      className={`
                        w-4 h-4 text-neutral-500
                        transition-all duration-300 ease-out
                        ${
                          hoveredIndex === index
                            ? "opacity-100 translate-x-0 translate-y-0"
                            : "opacity-0 -translate-x-2 translate-y-2"
                        }
                      `}
                    />
                  </div>

                  {/* Description with fade effect */}
                  <p
                    className={`
                      text-neutral-600 text-sm mt-1 leading-relaxed
                      transition-all duration-300 ease-out
                      ${hoveredIndex === index ? "text-neutral-900" : "text-neutral-600"}
                    `}
                  >
                    {amenity.description}
                  </p>
                </div>

                {/* Tag badge */}
                <span
                  className={`
                    text-xs font-semibold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded-full border border-neutral-200/80
                    transition-all duration-300 ease-out
                    ${hoveredIndex === index ? "bg-neutral-900 text-white border-neutral-900" : ""}
                  `}
                >
                  {amenity.tag}
                </span>
              </div>
            </div>
          </a>
        ))}

        {/* Bottom border for last item */}
        <div className="border-t border-border" />
      </div>
    </section>
  )
}
