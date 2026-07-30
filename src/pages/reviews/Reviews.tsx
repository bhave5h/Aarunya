"use client";

import * as React from "react";
import { MasonryGrid } from "@/components/ui/image-testimonial-grid";
import { BlurFade } from "@/components/ui/blur-fade";

// --- Data for resort guest reviews ---
const testimonials = [
  {
    profileImage: "https://randomuser.me/api/portraits/women/44.jpg",
    name: "Aanya & Rohan",
    feedback: "Waking up to the sea breeze right from our canopy tent was unforgettable.",
    mainImage: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?auto=format&fit=crop&w=800&h=1200&q=80",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/32.jpg",
    name: "Vikram Malhotra",
    feedback: "The sunset kayaking and starlit bonfire dinners were pure magic.",
    mainImage: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&h=1000&q=80",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/68.jpg",
    name: "Priya Sharma",
    feedback: "Eco-friendly luxury done right. The teak bathrooms and open skies are divine.",
    mainImage: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=800&h=1100&q=80",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/56.jpg",
    name: "Devendra Patel",
    feedback: "A tranquil private beach retreat in Gujarat. We will definitely return!",
    mainImage: "https://images.unsplash.com/photo-1494500764479-0c8f2919a3d8?auto=format&fit=crop&w=800&h=1000&q=80",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/women/88.jpg",
    name: "Sneha & Kabir",
    feedback: "Listening to breaking waves from our sun deck made our weekend paradise.",
    mainImage: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=800&h=1200&q=80",
  },
  {
    profileImage: "https://randomuser.me/api/portraits/men/78.jpg",
    name: "Arjun Verma",
    feedback: "Handcrafted interiors, stellar hospitality, and peaceful ocean shores.",
    mainImage: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&h=1000&q=80",
  },
];

// --- Reusable Card Component ---
const TestimonialCard = ({
  profileImage,
  name,
  feedback,
  mainImage,
}: (typeof testimonials)[0]) => (
  <div className="relative rounded-2xl overflow-hidden group transition-transform duration-300 ease-in-out hover:scale-[1.03] shadow-md border border-white/60">
    <img
      src={mainImage}
      alt={name}
      className="w-full h-auto object-cover"
      onError={(e) => {
        e.currentTarget.src = "https://placehold.co/800x600/1a1a1a/ffffff?text=Resort+View";
      }}
    />
    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent pointer-events-none" />
    <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={profileImage}
          className="w-9 h-9 rounded-full border-2 border-white/80 object-cover shadow-sm"
          alt={name}
        />
        <span className="font-bold text-sm drop-shadow-md">{name}</span>
      </div>
      <p className="text-sm font-medium leading-relaxed drop-shadow-md text-white/95">
        &ldquo;{feedback}&rdquo;
      </p>
    </div>
  </div>
);

export const Reviews = () => {
  const [columns, setColumns] = React.useState(3);

  const getColumns = (width: number) => {
    if (width < 640) return 1; // sm
    if (width < 1024) return 2; // lg
    return 3; // xl and up
  };

  React.useEffect(() => {
    const handleResize = () => {
      setColumns(getColumns(window.innerWidth));
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <section id="reviews" className="max-w-3xl mx-auto py-16 md:py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        {/* Header Section */}
        <div className="max-w-4xl mx-auto text-center space-y-3 opacity-99">
          <div className="w-fit mx-auto px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-neutral-200">
            <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800">
              Feedbacks
            </span>
          </div>

          {/* Heading & Subheading */}
          <BlurFade delay={0.15} inView>
            <h1 className="heading mx-auto">Reviews</h1>
          </BlurFade>

          <BlurFade delay={0.3} inView>
            <p className="subheading mx-auto">Tales From the Tide</p>
          </BlurFade>

          <p className="para mx-auto max-w-2xl">
            Real stories from travelers who found their own quiet corner of paradise near Valsad's shores.
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="pt-4 max-w-5xl">
          <MasonryGrid columns={columns} gap={4}>
            {testimonials.map((card, index) => (
              <TestimonialCard key={index} {...card} />
            ))}
          </MasonryGrid>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
