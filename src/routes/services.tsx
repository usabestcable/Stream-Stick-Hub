import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FAQ } from "@/components/site/FAQ";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Settings, Home, Wrench, CreditCard, Users2, Gauge, Check, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import setupImg from "@/assets/srv-setup.jpg";
import smartImg from "@/assets/srv-smart.jpg";
import installImg from "@/assets/srv-install.jpg";
import supportImg from "@/assets/srv-support.jpg";
import optimizeImg from "@/assets/srv-optimize.jpg";
import bundleImg from "@/assets/srv-bundle.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Services Stream Stick Hub" },
      { name: "description", content: "Expert streaming device setup, troubleshooting, and 24/7 support. We handle Fire Stick, Roku, Apple TV, smart TVs, and more." },
      { property: "og:title", content: "Stream Stick Hub Services" },
      { property: "og:description", content: "Every device set up. Every problem solved. Same day." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  { icon: Settings, img: setupImg, title: "Device Setup & Activation", desc: "We set up your streaming device from scratch — unboxing to first play — in one call.", points: ["All brands supported", "Apps installed & signed in", "Remote and settings configured"] },
  { icon: Home, img: smartImg, title: "Smart TV Integration", desc: "We connect your smart TV, streaming stick, and apps into one clean, easy-to-use system.", points: ["Any smart TV brand", "App library installed", "Input and source setup"] },
  { icon: Wrench, img: installImg, title: "Troubleshooting & Repair", desc: "Buffering, black screen, or a device that won't respond? We diagnose and fix it fast.", points: ["Remote diagnosis", "Step-by-step guided fix", "Follow-up support included"] },
  { icon: CreditCard, img: supportImg, title: "24/7 Live Support", desc: "A real streaming expert is available around the clock — no wait times, no bots.", points: ["Pick up in under 2 minutes", "US-based specialists", "Available nights and weekends"] },
  { icon: Gauge, img: optimizeImg, title: "Network & Speed Optimization", desc: "Slow Wi-Fi ruining your stream? We walk you through settings to eliminate buffering for good.", points: ["Router and Wi-Fi settings", "Bandwidth prioritization", "4K-ready network tuning"] },
  { icon: Users2, img: bundleImg, title: "Cord Cutting Consultation", desc: "We help you identify free and paid streaming options to replace your cable and start saving.", points: ["App recommendations", "Subscription audit", "Channel lineup planning"] },
];

const steps = [
  { n: "01", t: "Call Us", d: "A live expert picks up — no menus, no hold music." },
  { n: "02", t: "Diagnose", d: "We ask a few questions to understand your device and setup." },
  { n: "03", t: "Set Up", d: "We walk you through everything step by step until it works." },
  { n: "04", t: "Stream", d: "You hang up watching exactly what you want. We follow up to make sure." },
];

function ServicesPage() {
  return (
    <>
      <Section
        eyebrow="Services"
        title={<>Expert help for <span className="text-gradient">every device</span></>}
        subtitle="Setup, troubleshooting, and 24/7 support — we handle it all so you can just press play."
      />

      <div className="container mx-auto px-6 -mt-12">
        <div className="space-y-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`grid md:grid-cols-2 gap-8 glass-strong rounded-3xl p-8 md:p-12 items-center ${
                i % 2 ? "md:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div>
                <div className="h-14 w-14 rounded-2xl bg-brand grid place-items-center glow-purple">
                  <s.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-6 text-3xl md:text-4xl font-bold">{s.title}</h3>
                <p className="mt-3 text-muted-foreground text-lg">{s.desc}</p>
                <ul className="mt-6 space-y-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-3">
                      <Check className="h-4 w-4 text-neon-pink" />
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
                <a href={PHONE_TEL} className="mt-8 inline-flex items-center gap-2 bg-cta px-6 py-3 rounded-xl font-semibold glow-pink">
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
              </div>
              <div className="relative aspect-video rounded-2xl ring-gradient overflow-hidden">
                <img src={s.img} alt={s.title} loading="lazy" width={1024} height={576} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-tr from-background/60 via-transparent to-transparent" />
                <div className="absolute -bottom-10 -right-10 h-48 w-48 bg-brand opacity-30 blur-3xl rounded-full" />
              </div>
            </div>
          ))}
        </div>
      </div>

      <Section eyebrow="Process" title={<>How it <span className="text-gradient">works</span></>}>        <div className="grid md:grid-cols-4 gap-5 relative">
          {steps.map((s) => (
            <div key={s.n} className="glass rounded-2xl p-6">
              <div className="text-4xl font-bold text-gradient">{s.n}</div>
              <div className="mt-4 text-xl font-bold">{s.t}</div>
              <div className="mt-2 text-sm text-muted-foreground">{s.d}</div>
            </div>
          ))}
        </div>
      </Section>

      <FAQ />
      <FinalCTA />
    </>
  );
}
