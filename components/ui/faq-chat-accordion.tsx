"use client";

import * as React from "react";
import { motion } from "framer-motion";
import * as Accordion from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
  icon?: string;
  iconPosition?: "left" | "right";
}

interface FaqAccordionProps {
  data: FAQItem[];
  className?: string;
  timestamp?: string;
  questionClassName?: string;
  answerClassName?: string;
}

export function FaqAccordion({
  data,
  className,
  timestamp = "Every day, 9:01 AM",
  questionClassName,
  answerClassName,
}: FaqAccordionProps) {
  const [openItem, setOpenItem] = React.useState<string | null>("1");

  return (
    <div className={cn("w-full max-w-lg p-4 font-sans", className)}>
      {timestamp && (
        <div className="mb-6 text-xs text-neutral-400 tracking-tight font-medium">
          {timestamp}
        </div>
      )}

      <Accordion.Root
        type="single"
        collapsible
        value={openItem || ""}
        onValueChange={(value) => setOpenItem(value)}
        className="space-y-3"
      >
        {data.map((item) => {
          const isOpen = openItem === item.id.toString();

          return (
            <Accordion.Item 
              value={item.id.toString()} 
              key={item.id} 
              className="border-none"
            >
              <Accordion.Header asChild>
                <Accordion.Trigger className="flex items-center gap-x-3 w-full group text-left cursor-pointer outline-none focus:outline-none">
                  {/* Question Pill */}
                  <div
                    className={cn(
                      "relative inline-flex items-center rounded-2xl bg-[#f4f4f6] px-4 py-2.5 text-sm text-neutral-900 transition-colors hover:bg-[#ebebee]",
                      questionClassName
                    )}
                  >
                    {item.icon && (
                      <span
                        className={cn(
                          "absolute text-sm leading-none z-10 select-none",
                          item.iconPosition === "right" ? "-right-1 -top-2" : "-left-1 -top-2"
                        )}
                        style={{
                          transform: item.iconPosition === "right" 
                            ? "rotate(7deg)" 
                            : "rotate(-4deg)",
                        }}
                      >
                        {item.icon}
                      </span>
                    )}
                    <span className="font-normal text-neutral-900">{item.question}</span>
                  </div>

                  {/* Toggle Plus/Minus Icon */}
                  <span className="text-neutral-400 group-hover:text-neutral-600 transition-colors flex-shrink-0">
                    {isOpen ? (
                      <Minus className="h-4 w-4 stroke-[1.75]" />
                    ) : (
                      <Plus className="h-4 w-4 stroke-[1.75]" />
                    )}
                  </span>
                </Accordion.Trigger>
              </Accordion.Header>

              {/* Answer Chat Bubble */}
              <Accordion.Content asChild forceMount>
                <motion.div
                  initial="collapsed"
                  animate={isOpen ? "open" : "collapsed"}
                  variants={{
                    open: { opacity: 1, height: "auto" },
                    collapsed: { opacity: 0, height: 0 },
                  }}
                  transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                  className="overflow-hidden"
                >
                  <div className="pt-2 flex justify-end">
                    <div
                      className={cn(
                        "relative max-w-xs md:max-w-sm rounded-2xl rounded-tr-md bg-[#18181b] px-4 py-3 text-sm text-white leading-relaxed shadow-sm",
                        answerClassName
                      )}
                    >
                      {item.answer}
                    </div>
                  </div>
                </motion.div>
              </Accordion.Content>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
    </div>
  );
}
