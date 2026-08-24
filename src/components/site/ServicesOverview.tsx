import { Section } from "./Section";
import { Phone } from "lucide-react";
import { PHONE_DISPLAY, PHONE_TEL } from "@/lib/contact";
import setup from "@/assets/srv-setup.jpg";
import smart from "@/assets/srv-smart.jpg";
import install from "@/assets/srv-install.jpg";
import support from "@/assets/srv-support.jpg";
import optimize from "@/assets/srv-optimize.jpg";
import bundle from "@/assets/srv-bundle.jpg";

const services = [
  { img: setup, title: "Device Setup", desc: "New device? We configure everything — apps, accounts, and settings — so you are streaming right away." },
  { img: smart, title: "Smart TV Integration", desc: "We connect your streaming stick, smart TV, and apps into one seamless, easy-to-use system." },
  { img: install, title: "Troubleshooting & Repair", desc: "Buffering, freezing, or black screen? Our experts diagnose and fix streaming issues fast." },
  { img: bundle, title: "App & Account Setup", desc: "We install and sign you into all your streaming apps so you never have to hunt for a password again." },
  { img: support, title: "24/7 Live Support", desc: "Real humans available around the clock. Call any time and a streaming expert picks up immediately." },
  { img: optimize, title: "Network & Speed Boost", desc: "Slow Wi-Fi killing your stream? We tune your network settings for buffer-free 4K playback." },
];

export function ServicesOverview() {
  return (
    <Section
      eyebrow="Services"
      title={<>Everything you need to <span className="text-gradient">stream better</span></>}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {services.map((s) => (
          <div
            key={s.title}
            className="group rounded-2xl overflow-hidden glass-strong hover:bg-white/[0.06] transition flex flex-col"
          >
            <div className="aspect-[16/10] overflow-hidden">
              <img src={s.img} alt={s.title} loading="lazy" width={1024} height={640}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground flex-1">{s.desc}</p>
              <a href={PHONE_TEL} className="mt-5 inline-flex items-center justify-center gap-2 bg-cta px-4 py-3 rounded-xl font-semibold glow-pink text-sm">
                <Phone className="h-4 w-4" /> {PHONE_DISPLAY}
              </a>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
