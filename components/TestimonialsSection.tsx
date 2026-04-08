interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    quote:
      "Nexus transformó completamente nuestra presencia digital. En seis meses triplicamos el tráfico orgánico y duplicamos las conversiones.",
    name: "Laura Sánchez",
    role: "CEO",
    company: "Forma Studio",
  },
  {
    quote:
      "Lo que más valoro es su forma de trabajar: transparencia total, datos reales y sin promesas vacías. Los resultados hablan solos.",
    name: "Marc Puig",
    role: "Director de Marketing",
    company: "Elevate Commerce",
  },
  {
    quote:
      "Llevábamos años sin una estrategia clara. Nexus nos ayudó a definirla y ejecutarla. Hoy tenemos una marca sólida y reconocible.",
    name: "Elena Torres",
    role: "Fundadora",
    company: "Raíz Cosmetics",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest uppercase text-[#666666] mb-6">
          Testimonios
        </p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#111111] max-w-2xl mb-16 md:mb-24">
          Lo que dicen nuestros clientes
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-[#E5E5E5]">
          {TESTIMONIALS.map((t) => (
            <div key={t.name} className="bg-[#F9F9F9] p-8 flex flex-col gap-8">
              <p className="text-base font-normal leading-relaxed text-[#111111]">
                &ldquo;{t.quote}&rdquo;
              </p>
              <div className="mt-auto">
                <p className="text-sm font-medium text-[#111111]">{t.name}</p>
                <p className="text-sm text-[#666666]">
                  {t.role}, {t.company}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
