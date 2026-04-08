interface Step {
  number: string;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: "01",
    title: "Diagnóstico",
    description:
      "Analizamos tu situación actual, competencia y objetivos para entender dónde estás y adónde quieres llegar.",
  },
  {
    number: "02",
    title: "Estrategia",
    description:
      "Diseñamos un plan a medida con acciones concretas, plazos realistas y métricas claras de éxito.",
  },
  {
    number: "03",
    title: "Ejecución",
    description:
      "Ponemos en marcha cada acción con precisión, manteniendo la coherencia de marca en todos los canales.",
  },
  {
    number: "04",
    title: "Optimización",
    description:
      "Medimos resultados continuamente y ajustamos lo que sea necesario para mejorar el rendimiento.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest uppercase text-[#666666] mb-6">
          Proceso
        </p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#111111] max-w-2xl mb-16 md:mb-24">
          Cómo trabajamos contigo
        </h2>

        <div className="flex flex-col gap-0 divide-y divide-[#E5E5E5]">
          {STEPS.map((step) => (
            <div
              key={step.number}
              className="grid grid-cols-1 md:grid-cols-[120px_1fr_1fr] gap-6 md:gap-12 py-10"
            >
              <span className="text-xs font-medium tracking-widest text-[#666666]">
                {step.number}
              </span>
              <h3 className="text-lg font-medium text-[#111111]">
                {step.title}
              </h3>
              <p className="text-base font-normal leading-relaxed text-[#666666]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
