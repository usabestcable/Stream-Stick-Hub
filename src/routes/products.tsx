import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/FinalCTA";
import { Check, X, Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import box from "@/assets/device-box.jpg";
import stick from "@/assets/device-stick.jpg";
import hub from "@/assets/device-hub.jpg";
import cinema from "@/assets/device-cinema.jpg";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Setup Services. Stream Stick Hub" },
      { name: "description", content: "Expert setup for streaming boxes, sticks, smart TVs, and home theaters. We handle every device." },
      { property: "og:title", content: "Stream Stick Hub Setup Services" },
      { property: "og:description", content: "Every device. Expert setup. Same day streaming." },
    ],
  }),
  component: ProductsPage,
});

const products = [
  { name: "Streaming Box Setup", slug: "streambox-ultra", img: box, tag: "Most Popular", glow: "glow-purple",
    desc: "We configure your streaming box from scratch — apps, accounts, remote, and picture settings — so you are watching the same day.",
    specs: { Devices: "All major brands", Resolution: "Up to 4K HDR", Apps: "All major platforms", "Avg. Time": "Under 30 min", Support: "24/7 follow-up" },
    has: { "Device Setup": true, "App Install": true, "Account Login": true, "Network Fix": true, "24/7 Support": true } },
  { name: "Streaming Stick Setup", slug: "streamstick-pro", img: stick, tag: "Quick Setup", glow: "glow-pink",
    desc: "Plug in your streaming stick and let us do the rest. We install apps, sign in to your accounts, and make sure everything works.",
    specs: { Devices: "Fire Stick, Roku & more", Resolution: "Up to 4K", Apps: "All major platforms", "Avg. Time": "15–20 min", Support: "24/7 follow-up" },
    has: { "Device Setup": true, "App Install": true, "Account Login": true, "Network Fix": true, "24/7 Support": true } },
  { name: "Smart TV Integration", slug: "smartbeam-hub", img: hub, tag: "All-in-One", glow: "glow-blue",
    desc: "We connect your smart TV, streaming stick, speakers, and apps into one seamless, easy-to-use entertainment system.",
    specs: { Devices: "All smart TV brands", Apps: "Full app library", "Voice Setup": "Included", "Avg. Time": "30–45 min", Support: "24/7 follow-up" },
    has: { "Device Setup": true, "App Install": true, "Account Login": true, "Network Fix": true, "24/7 Support": true } },
  { name: "Home Theater Setup", slug: "homecinema-max", img: cinema, tag: "Premium", glow: "",
    desc: "Full audio and video setup for your home theater — every input, speaker, and streaming source configured for the best experience.",
    specs: { Devices: "TV, soundbar, streamer", Resolution: "Up to 4K HDR", Audio: "Surround sound", "Avg. Time": "45–60 min", Support: "24/7 follow-up" },
    has: { "Device Setup": true, "App Install": true, "Account Login": true, "Network Fix": true, "24/7 Support": true } },
];

const compareKeys = ["Device Setup", "App Install", "Account Login", "Network Fix", "24/7 Support"] as const;

function ProductsPage() {
  return (
    <>
      <Section
        eyebrow="Setup Services"
        title={<>We handle <span className="text-gradient">every device</span></>}
        subtitle="From streaming sticks to full home theaters — our experts set up every type of device, same day."
      />

      <div className="container mx-auto px-6 space-y-24">
        {products.map((p, i) => (
          <div key={p.name} id={p.slug} className={`scroll-mt-28 grid lg:grid-cols-2 gap-12 items-center ${i % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            <div className={`relative aspect-square rounded-3xl overflow-hidden glass-strong ${p.glow}`}>
              <img src={p.img} alt={p.name} width={1024} height={1024} loading="lazy" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-xs font-semibold tracking-[0.2em] uppercase text-gradient">{p.tag}</span>
              <h2 className="mt-3 text-4xl md:text-6xl font-bold">{p.name}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{p.desc}</p>
              <div className="mt-8 grid grid-cols-2 gap-4">
                {Object.entries(p.specs).map(([k, v]) => (
                  <div key={k} className="glass rounded-xl p-4">
                    <div className="text-xs text-muted-foreground">{k}</div>
                    <div className="font-semibold">{v}</div>
                  </div>
                ))}
              </div>
              <div className="mt-8 flex flex-wrap items-center gap-4">
                <a href={PHONE_TEL} className="bg-cta px-6 py-3 rounded-xl font-semibold glow-pink flex items-center gap-2">
                  <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
                </a>
                <a href={PHONE_TEL} className="glass-strong px-6 py-3 rounded-xl font-semibold">Talk to an expert</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Section eyebrow="Compare" title={<>What's <span className="text-gradient">included</span></>}>
        <div className="overflow-x-auto">
          <table className="w-full glass-strong rounded-2xl overflow-hidden">
            <thead>
              <tr className="border-b border-white/10">
                <th className="text-left p-5 text-sm font-medium text-muted-foreground">Feature</th>
                {products.map((p) => (
                  <th key={p.name} className="p-5 text-sm font-semibold">{p.name}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {compareKeys.map((k) => (
                <tr key={k} className="border-b border-white/5 last:border-0">
                  <td className="p-5 font-medium">{k}</td>
                  {products.map((p) => (
                    <td key={p.name} className="p-5 text-center">
                      {p.has[k] ? <Check className="h-5 w-5 text-neon-pink mx-auto" /> : <X className="h-5 w-5 text-muted-foreground mx-auto" />}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
