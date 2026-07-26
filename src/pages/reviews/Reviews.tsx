"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { Star, Quote, MapPin, CheckCircle2, Heart } from "lucide-react";
import { MasonryGrid } from "@/components/ui/masonry-grid";
import SimpleMarquee from "@/components/fancy/blocks/simple-marquee";

const exampleImages = [
  "https://cdn.cosmos.so/4b771c5c-d1eb-4948-b839-255dbeb931ba?format=jpeg",
  "https://cdn.cosmos.so/a8d82afd-2293-43ad-bac3-887683d85b44?format=jpeg",
  "https://cdn.cosmos.so/49206ba5-c174-4cd5-aee8-5b744842e6c2?format=jpeg",
  "https://cdn.cosmos.so/b29bd150-6477-420f-8efb-65ed99694421?format=jpeg",
  "https://cdn.cosmos.so/e1a0313e-7617-431d-b7f1-f1b169e6bcb4?format=jpeg",
  "https://cdn.cosmos.so/ad640c12-69fb-4186-bc3d-b1cc93986a37?format=jpeg",
  "https://cdn.cosmos.so/5cf0c3d2-e785-41a3-b0c8-a073ee2f2862?format=jpeg",
  "https://cdn.cosmos.so/938ab21c-a975-41b3-b303-418290343b09?format=jpeg",
  "https://cdn.cosmos.so/2e14a9bb-27e3-40fd-b940-cfb797a1224c?format=jpeg",
  "https://cdn.cosmos.so/81841d9f-e164-4770-aebc-cfc97d72f3ab?format=jpeg",
  "https://cdn.cosmos.so/49b81db0-37ea-4569-b0d6-04afa5115a10?format=jpeg",
  "https://cdn.cosmos.so/ade1834b-9317-44fb-8dc3-b43d29acd409?format=jpeg",
  "https://cdn.cosmos.so/621c250c-3833-45f9-862a-3f400aaf8f28?format=jpeg",
  "https://cdn.cosmos.so/f9b7eae8-e5a6-4ce6-b6e1-9ef125ba7f8e?format=jpeg",
  "https://cdn.cosmos.so/bd56ed6d-1bbd-44a4-b1a1-79b7199bbebb?format=jpeg",
];

const MarqueeItem = ({ children }: { children: React.ReactNode }) => (
  <div className="mx-2 sm:mx-3 md:mx-4 hover:scale-105 cursor-pointer duration-300 ease-in-out">
    {children}
  </div>
);

interface ReviewData {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  date: string;
  stayType: string;
  title: string;
  content: string;
  image?: string;
  likes: number;
}

const REVIEWS: ReviewData[] = [
  {
    id: "r1",
    name: "Ananya & Rohan Deshmukh",
    location: "Mumbai, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Stayed Oct 2024",
    stayType: "Oceanfront Luxury Tent",
    title: "Unmatched serenity by Valsad's quiet tide",
    content: "Aarunya is unlike any place we have visited on the western coast. Waking up to the sea sound right outside our canopy tent without noisy city crowds was magical. The sunset bonfire by the shore made our anniversary unforgettable.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    likes: 34,
  },
  {
    id: "r2",
    name: "Kabir Varma & Family",
    location: "Ahmedabad, Gujarat",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Stayed Nov 2024",
    stayType: "Garden & Hammock Suite",
    title: "Sunrise kayaking & pure luxury in canvas",
    content: "Our kids loved the early morning kayaking! The eco-tents are extraordinarily plush — hot rain showers, silent inverter AC, and super comfortable teak beds. The food prepared with fresh local seafood and Kathiyawadi flavors was 10/10.",
    likes: 28,
  },
  {
    id: "r3",
    name: "Meera Patel",
    location: "Surat, Gujarat",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Stayed Dec 2024",
    stayType: "Sunset View Suite",
    title: "A solo peaceful retreat just 2 hours drive",
    content: "Needed a quiet weekend getaway to read and reset. The hammock outside my tent became my favorite spot in the world. Listening to coastal breezes while drinking artisanal coffee served by the warmest hospitality team.",
    image: "https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=800&q=80",
    likes: 42,
  },
  {
    id: "r4",
    name: "Vikram & Priya Roy",
    location: "Vadodara, Gujarat",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Stayed Jan 2025",
    stayType: "Hillside Palm Canopy",
    title: "Starry skies and private sun deck heaven",
    content: "The balance between untouched natural beauty and resort comfort is unbelievable. You feel completely immersed in nature under the ancient palm trees, yet every detail from linen to lighting is 5-star standard.",
    likes: 19,
  },
  {
    id: "r5",
    name: "Devansh Mehta",
    location: "Bengaluru, Karnataka",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Stayed Dec 2024",
    stayType: "Surf & Beach Shack Suite",
    title: "Found my peaceful corner of paradise",
    content: "As someone who works in tech, disconnecting at Aarunya was the best decision of my year. Fast Wi-Fi when needed, but mostly zero distractions — just golden hour skies and crashing tides near Tithal & Valsad shores.",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&q=80",
    likes: 51,
  },
  {
    id: "r6",
    name: "Shalini & Arvind Sen",
    location: "Pune, Maharashtra",
    avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=80",
    rating: 5,
    date: "Stayed Jan 2025",
    stayType: "Oceanfront Luxury Tent",
    title: "Warm Gujarati hospitality with a Goan soul",
    content: "The staff treats you like family. From private beach bonfires to customized dinner setups right by the waves, every moment was crafted with genuine warmth. We are already booking our next stay!",
    likes: 37,
  },
];

export function Reviews() {
  const container = useRef<HTMLDivElement>(null);

  const firstThird = exampleImages.slice(
    0,
    Math.floor(exampleImages.length / 3)
  );
  const secondThird = exampleImages.slice(
    Math.floor(exampleImages.length / 3),
    Math.floor((2 * exampleImages.length) / 3)
  );
  const lastThird = exampleImages.slice(
    Math.floor((2 * exampleImages.length) / 3)
  );

  return (
    <div className="w-full bg-[#FAF7F2]">
      {/* 1. Header & Reviews Section */}
      <section className="relative w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="max-w-3xl mx-auto text-center space-y-3 mb-12 md:mb-16">
          <h2 className="heading text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 tracking-tight">
            Reviews
          </h2>
          <p className="subheading text-xl sm:text-2xl text-gray-800 tracking-wide font-normal italic">
            Tales From the Tide
          </p>
          <p className="para text-gray-600 text-sm sm:text-base md:text-lg max-w-xl mx-auto leading-relaxed pt-1">
            Real stories from travelers who found their own quiet corner of paradise near Valsad&apos;s shores.
          </p>
        </div>

        {/* Masonry Grid Section for Reviews */}
        <MasonryGrid columns={3} gap={6} className="mt-8">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-3xl p-6 sm:p-7 shadow-sm border border-amber-900/10 hover:shadow-md transition-all duration-300 space-y-4"
            >
              {/* Top Row: User Avatar, Name, Verified Tag */}
              <div className="flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-11 h-11 rounded-full overflow-hidden shrink-0 border border-amber-200">
                    <Image
                      src={review.avatar}
                      alt={review.name}
                      fill
                      unoptimized
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-base leading-tight">
                        {review.name}
                      </h4>
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    </div>
                    <p className="text-xs text-gray-500 flex items-center gap-1 mt-0.5">
                      <MapPin className="w-3 h-3 text-amber-700 shrink-0" />
                      <span>{review.location}</span>
                    </p>
                  </div>
                </div>
                <Quote className="w-6 h-6 text-amber-800/20 shrink-0" />
              </div>

              {/* Rating Stars & Stay Tag */}
              <div className="flex items-center justify-between text-xs pt-1 border-t border-amber-900/5">
                <div className="flex items-center gap-1">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <span className="bg-amber-50 text-amber-900 px-2.5 py-1 rounded-full font-medium text-[11px]">
                  {review.stayType}
                </span>
              </div>

              {/* Title & Review Content */}
              <div>
                <h5 className="font-bold text-gray-900 text-base leading-snug mb-1.5">
                  &ldquo;{review.title}&rdquo;
                </h5>
                <p className="text-gray-600 text-sm leading-relaxed font-normal">
                  {review.content}
                </p>
              </div>

              {/* Optional Photo Attachment */}
              {review.image && (
                <div className="relative h-44 w-full rounded-2xl overflow-hidden shadow-inner mt-3">
                  <Image
                    src={review.image}
                    alt={review.title}
                    fill
                    unoptimized
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              )}

              {/* Footer: Date & Likes */}
              <div className="flex items-center justify-between text-xs text-gray-400 pt-2">
                <span>{review.date}</span>
                <button className="flex items-center gap-1 hover:text-rose-500 transition-colors cursor-pointer">
                  <Heart className="w-3.5 h-3.5" />
                  <span>{review.likes}</span>
                </button>
              </div>
            </div>
          ))}
        </MasonryGrid>
      </section>

      {/* 2. Gallery Marquee Section (Photos of Resorts) */}
      <section className="max-w-4xl w-full mx-auto relative">
        <div
          className="flex w-full min-h-screen relative justify-center items-center flex-col bg-black overflow-hidden py-20"
          ref={container}
        >
          <h1 className="absolute text-center text-3xl sm:text-5xl md:text-6xl top-1/3 sm:top-1/3 md:top-1/4 text-white font-calendas z-10 pointer-events-none drop-shadow-lg">
            Weekly Finds
          </h1>
          <div className="absolute h-[170%] sm:h-[200%] top-0 w-full justify-center items-center flex flex-col space-y-2 sm:space-y-3 md:space-y-4">
            <SimpleMarquee
              className="w-full"
              baseVelocity={8}
              repeat={4}
              draggable={false}
              scrollSpringConfig={{ damping: 50, stiffness: 400 }}
              slowDownFactor={0.1}
              slowdownOnHover
              slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
              scrollAwareDirection={true}
              scrollContainer={container}
              useScrollVelocity={true}
              direction="left"
            >
              {firstThird.map((src, i) => (
                <MarqueeItem key={i}>
                  <img
                    src={src}
                    alt={`Resort Photo ${i + 1}`}
                    className="h-20 w-32 sm:h-24 sm:w-40 md:h-32 md:w-48 object-cover rounded-lg shadow-lg"
                  />
                </MarqueeItem>
              ))}
            </SimpleMarquee>

            <SimpleMarquee
              className="w-full"
              baseVelocity={8}
              repeat={4}
              scrollAwareDirection={true}
              scrollSpringConfig={{ damping: 50, stiffness: 400 }}
              slowdownOnHover
              slowDownFactor={0.1}
              slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
              useScrollVelocity={true}
              scrollContainer={container}
              draggable={false}
              direction="right"
            >
              {secondThird.map((src, i) => (
                <MarqueeItem key={i}>
                  <img
                    src={src}
                    alt={`Resort Photo ${i + firstThird.length}`}
                    className="h-20 w-32 sm:h-24 sm:w-40 md:h-32 md:w-48 object-cover rounded-lg shadow-lg"
                  />
                </MarqueeItem>
              ))}
            </SimpleMarquee>

            <SimpleMarquee
              className="w-full"
              baseVelocity={8}
              repeat={4}
              draggable={false}
              scrollSpringConfig={{ damping: 50, stiffness: 400 }}
              slowDownFactor={0.1}
              slowdownOnHover
              slowDownSpringConfig={{ damping: 60, stiffness: 300 }}
              scrollAwareDirection={true}
              scrollContainer={container}
              useScrollVelocity={true}
              direction="left"
            >
              {lastThird.map((src, i) => (
                <MarqueeItem key={i}>
                  <img
                    src={src}
                    alt={`Resort Photo ${i + firstThird.length + secondThird.length}`}
                    className="h-20 w-32 sm:h-24 sm:w-40 md:h-32 md:w-48 object-cover rounded-lg shadow-lg"
                  />
                </MarqueeItem>
              ))}
            </SimpleMarquee>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Reviews;
