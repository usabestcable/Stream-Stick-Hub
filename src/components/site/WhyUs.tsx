import { ShieldCheck, Clock, Tv, Headphones, Zap, ThumbsUp } from "lucide-react";
import { Section } from "./Section";

const features = [
  { icon: Tv, title: "Every Device Supported", desc: "Fire Stick, Roku, Apple TV, Chromecast, Android TV — we know them all." },
  { icon: Zap, title: "Up & Running Fast", desc: "Most setups completed in under 30 minutes from the first call." },
  { icon: Headphones, title: "Real Human Support", desc: "No bots, no scripts. A live expert walks you through every step." },
  { icon: Clock, title: "Available 24/7", desc: "Day or night, our team is ready whenever you need us." },
  { icon: ShieldCheck, title: "Independent & Honest", desc: "We are not tied to any carrier or brand — our only goal is your stream." },
  { icon: ThumbsUp, title: "Satisfaction Guaranteed", desc: "We don't hang up until you are watching exactly what you want." },
];

export function WhyUs() {
  return (
    <Section
      eyebrow="Why Stream Stick Hub"
      title={<>Setup made <span className="text-gradient">simple</span></>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {features.map(({ icon: Icon, title, desc }) => (
          <div
            key={title}
            className="group relative rounded-2xl glass p-7 hover:bg-white/[0.06] transition"
          >
            <div className="h-12 w-12 rounded-xl bg-brand grid place-items-center mb-5 group-hover:scale-110 transition-transform">
              <Icon className="h-6 w-6 text-primary-foreground" />
            </div>
            <h3 className="text-xl font-bold">{title}</h3>
            <p className="mt-2 text-sm text-muted-foreground">{desc}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}
