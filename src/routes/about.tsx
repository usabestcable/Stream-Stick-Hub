import { createFileRoute } from "@tanstack/react-router";
import { Section } from "@/components/site/Section";
import { FinalCTA } from "@/components/site/FinalCTA";
import family from "@/assets/family.jpg";
import { BUSINESS_NAME, BUSINESS_ADDRESS, SUPPORT_EMAIL } from "@/lib/contact";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Stream Stick Hub" },
      { name: "description", content: "Stream Stick Hub is an independent service provider offering paid streaming assistance services. Learn about our mission and business identity." },
      { property: "og:title", content: "About Stream Stick Hub" },
      { property: "og:description", content: "Independent service provider. Paid streaming assistance. Not affiliated with any ISP." },
    ],
  }),
  component: AboutPage,
});

const values = [
  { t: "Independent", d: "We are not affiliated with any internet service provider, cable company, or device manufacturer." },
  { t: "Transparent", d: "Fees are clearly disclosed before any charge is made. No surprises, no fine print." },
  { t: "Real Support", d: "Every call is answered by a live human expert — no bots, no automated menus." },
  { t: "Any Device", d: "We support every major streaming stick, box, and smart TV platform on the market." },
];

function AboutPage() {
  return (
    <>
      <Section
        eyebrow="About us"
        title={<>Independent streaming <span className="text-gradient">experts</span></>}
        subtitle="We help people set up, fix, and get the most out of their streaming devices. We are not affiliated with any ISP or device brand."
      />

      <div className="container mx-auto px-6">
        <div className="relative rounded-3xl overflow-hidden ring-gradient">
          <img src={family} alt="Family streaming" width={1280} height={896} loading="lazy" className="w-full h-[480px] object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
        </div>
      </div>

      {/* Disclosure Banner */}
      <Section className="!py-10">
        <div className="glass-strong rounded-3xl p-8 border border-white/10 max-w-3xl mx-auto text-center">
          <p className="text-lg font-semibold mb-2">Service Disclosure</p>
          <p className="text-muted-foreground">
            Stream Stick Hub provides <strong>paid assistance services</strong> and is <strong>not affiliated with any ISP or carrier</strong>.
            We are an independent third-party service provider.
          </p>
        </div>
      </Section>

      <Section align="left" eyebrow="Our mission" title={<>Streaming help, <span className="text-gradient">done right</span></>}>
        <div className="grid md:grid-cols-2 gap-12">
          <p className="text-lg text-muted-foreground">
              Streaming should be simple. Plug in, press play, enjoy. But for millions of people it is anything but — confusing remotes, apps that won't load, networks that buffer. That is the problem we solve every day.
            </p>
            <p className="text-lg text-muted-foreground">
              Stream Stick Hub was built to give everyone access to a real streaming expert, any time they need one. We are independent, honest, and focused entirely on getting you watching what you love.
          </p>
        </div>
      </Section>

      <Section className="!py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {values.map((v) => (
            <div key={v.t} className="glass rounded-2xl p-6">
              <div className="font-bold text-gradient mb-2">{v.t}</div>
              <div className="text-sm text-muted-foreground">{v.d}</div>
            </div>
          ))}
        </div>
      </Section>

      {/* Business Identity */}
      <Section eyebrow="Business Identity" title={<>Who <span className="text-gradient">we are</span></>}>
        <div className="glass-strong rounded-3xl p-8 md:p-12 max-w-2xl mx-auto">
          <div className="space-y-4 text-base text-muted-foreground">
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Business Owner</span>
              <span className="text-foreground font-semibold text-lg">{BUSINESS_NAME}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Address</span>
              <span className="text-foreground">{BUSINESS_ADDRESS}</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Email</span>
              <a href={`mailto:${SUPPORT_EMAIL}`} className="text-foreground hover:text-brand transition">{SUPPORT_EMAIL}</a>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Service Type</span>
              <span className="text-foreground">Independent Paid Assistance Provider — Not affiliated with any ISP</span>
            </div>
            <div>
              <span className="block text-xs font-semibold uppercase tracking-widest text-foreground/60 mb-1">Pricing</span>
              <span className="text-foreground">Fees disclosed before any charge is made</span>
            </div>
          </div>
        </div>
      </Section>

      <FinalCTA />
    </>
  );
}
