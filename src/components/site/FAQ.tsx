import { Section } from "./Section";
import { useState } from "react";
import { Plus } from "lucide-react";

const faqs = [
  { q: "What streaming devices do you support?", a: "We support all major streaming devices including Fire TV Stick, Roku, Apple TV, Google Chromecast, Android TV boxes, and most smart TV platforms." },
  { q: "How does the setup process work?", a: "Simply call our number and a live expert will guide you through the entire setup over the phone — step by step. Most setups take under 30 minutes." },
  { q: "Do I need any technical knowledge?", a: "Not at all. Our technicians explain everything in plain language and walk with you at your own pace until your device is fully working." },
  { q: "What if my device stops working after setup?", a: "Call us any time, 24/7. We will troubleshoot and resolve any issue at no additional charge within the original service window." },
  { q: "Can you help me cut my cable bill?", a: "Yes. We can help you identify the right streaming apps and free channels to replace your cable subscription and start saving immediately." },
  { q: "Is this a free service?", a: "No. Stream Stick Hub provides paid assistance services. Our fees are clearly disclosed before any charge is made. We are not a free helpline." },
];

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <Section eyebrow="Questions" title={<>Everything you need <span className="text-gradient">to know</span></>}>
      <div className="max-w-3xl mx-auto space-y-3">
        {faqs.map((f, i) => {
          const isOpen = open === i;
          return (
            <button
              key={i}
              onClick={() => setOpen(isOpen ? null : i)}
              className="w-full text-left glass-strong rounded-2xl p-6 transition hover:bg-white/[0.06]"
            >
              <div className="flex items-center justify-between gap-4">
                <h3 className="text-lg font-semibold">{f.q}</h3>
                <Plus className={`h-5 w-5 shrink-0 transition-transform ${isOpen ? "rotate-45" : ""}`} />
              </div>
              <div className={`grid transition-all duration-300 ${isOpen ? "grid-rows-[1fr] opacity-100 mt-3" : "grid-rows-[0fr] opacity-0"}`}>
                <div className="overflow-hidden">
                  <p className="text-muted-foreground">{f.a}</p>
                </div>
              </div>
            </button>
          );
        })}
      </div>
    </Section>
  );
}
