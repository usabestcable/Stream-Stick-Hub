import { Section } from "./Section";
import { Star } from "lucide-react";

const reviews = [
  { name: "Marcus L.", role: "Retired · Phoenix, AZ", text: "I had no idea how to set up my Fire Stick. The tech walked me through every step and I was watching my shows within 20 minutes. Outstanding service.", rating: 5 },
  { name: "Sandra & Tom B.", role: "Homeowners · Tampa, FL", text: "We cut the cable and were worried about the switch. Stream Stick Hub set up three TVs in our house and we haven't looked back. Saving over $100 a month.", rating: 5 },
  { name: "James P.", role: "Sports fan · Houston, TX", text: "I was missing games because of buffering. They fixed my network settings in one call and the picture has been perfect ever since. Best money I've spent.", rating: 5 },
  { name: "Deborah N.", role: "Work from home · Atlanta, GA", text: "Called at 11pm because my Roku stopped working. Someone picked up immediately, fixed the issue remotely, and I was back watching in 15 minutes. Incredible.", rating: 5 },
];

export function Testimonials() {
  return (
    <Section
      eyebrow="Trusted by customers nationwide"
      title={<>Real people, <span className="text-gradient">real results</span></>}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {reviews.map((r) => (
          <div key={r.name} className="glass-strong rounded-3xl p-8 ring-gradient relative">
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: r.rating }).map((_, i) => (
                <Star key={i} className="h-4 w-4 text-neon-orange" fill="currentColor" />
              ))}
            </div>
            <p className="text-lg leading-relaxed">"{r.text}"</p>
            <div className="mt-6 flex items-center gap-3">
              <div className="h-11 w-11 rounded-full bg-brand grid place-items-center font-bold">
                {r.name[0]}
              </div>
              <div>
                <div className="font-semibold">{r.name}</div>
                <div className="text-xs text-muted-foreground">{r.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
