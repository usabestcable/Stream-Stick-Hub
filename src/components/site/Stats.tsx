import { Section } from "./Section";

const stats = [
  { k: "50K+", v: "Devices set up" },
  { k: "24/7", v: "Expert support" },
  { k: "4.9★", v: "Customer rating" },
  { k: "100+", v: "Device models supported" },
];

export function Stats() {
  return (
    <Section className="!py-16">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div key={s.v} className="glass rounded-2xl p-6 text-center">
            <div className="text-4xl md:text-5xl font-bold text-gradient">{s.k}</div>
            <div className="mt-2 text-sm text-muted-foreground">{s.v}</div>
          </div>
        ))}
      </div>
    </Section>
  );
}
