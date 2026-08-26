"use client";

import { FaqAccordion } from "@/components/ui/faq-chat-accordion";
import { BlurFade } from "@/components/ui/blur-fade";

const resortFaqData = [
  {
    id: 1,
    question: "What are the check-in and check-out timings?",
    answer:
      "Standard check-in is at 1:00 PM and check-out is at 11:00 AM. Early check-in or late check-out is subject to tent availability.",
    icon: "⏰",
    iconPosition: "left" as const,
  },
  {
    id: 2,
    question: "How do I reach Aarunya Resort in Valsad?",
    answer:
      "Aarunya is located along the scenic coast of Valsad, Gujarat. It is well connected via road and just a short drive from Valsad Railway Station. Pickup transfers can be arranged upon request.",
    icon: "🌴",
    iconPosition: "left" as const,
  },
  {
    id: 3,
    question: "Are the eco-tents air-conditioned with private bathrooms?",
    answer:
      "Yes! All 15 eco-friendly tents feature silent climate-control air conditioning and private attached teakwood en-suite bathrooms with hot rain showers.",
    icon: "✨",
    iconPosition: "left" as const,
  },
  {
    id: 4,
    question: "Is dining included with the stay?",
    answer:
      "Stays include complimentary morning tea, artisanal coffee, and fresh coastal breakfast at our Beach Cafe. Lunch and sea-catch dinners are served à la carte or buffets.",
    icon: "☕",
    iconPosition: "left" as const,
  },
  {
    id: 5,
    question: "What outdoor activities are available at the resort?",
    answer:
      "Guests can enjoy sunrise kayaking, sunset beach bonfires, stargazing, hammock lounges, beach volleyball, and local cultural performances.",
    icon: "🌊",
    iconPosition: "left" as const,
  },
];

export default function FAQ() {
  return (
    <section
      id="faq"
      className="w-full py-16 md:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      <div className="max-w-4xl mx-auto text-center space-y-1 mb-5">
        <div className="w-fit mx-auto px-3.5 py-1.5 rounded-full inline-flex items-center gap-2 shadow-sm border border-neutral-200">
          <span className="text-xs md:text-sm font-semibold tracking-tight text-slate-800">
            Got Questions?
          </span>
        </div>

        <BlurFade delay={0.15} inView>
          <h2 className="heading mx-auto opacity-100">FAQ</h2>
        </BlurFade>
        <BlurFade delay={0.3} inView>
          <p className="subheading mx-auto">Frequently Asked Questions</p>
        </BlurFade>
        <BlurFade delay={0.4} inView>
          <p className="para mx-auto max-w-[450px]">
            Details about tent check-in, dining options, activities, and staying
            at Aarunya.
          </p>
        </BlurFade>
      </div>

      <div className="flex justify-center">
        <FaqAccordion
          data={resortFaqData}
          className="max-w-[620px] w-5xl shadow-inner"
        />
      </div>
    </section>
  );
}
