interface Service {
  number: string;
  title: string;
  description: string;
}

const SERVICES: Service[] = [
  {
    number: "01",
    title: "Estrategia de marca",
    description:
      "Definimos tu posicionamiento, tono de voz y propuesta de valor para diferenciarte en un mercado saturado.",
  },
  {
    number: "02",
    title: "Contenido & Social Media",
    description:
      "Creamos contenido que conecta con tu audiencia y construye comunidad alrededor de tu marca.",
  },
  {
    number: "03",
    title: "Performance & Paid Media",
    description:
      "Campañas de pago optimizadas para maximizar el retorno de inversión en Google, Meta y más.",
  },
  {
    number: "04",
    title: "SEO & Posicionamiento",
    description:
      "Mejoramos tu visibilidad orgánica para que tus clientes te encuentren cuando te buscan.",
  },
  {
    number: "05",
    title: "Analítica & Reporting",
    description:
      "Medimos lo que importa y tomamos decisiones basadas en datos reales, no en suposiciones.",
  },
  {
    number: "06",
    title: "Email Marketing",
    description:
      "Secuencias y newsletters que nutren tu base de contactos y convierten suscriptores en clientes.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 md:py-32 bg-[#F9F9F9]">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-medium tracking-widest uppercase text-[#666666] mb-6">
          Servicios
        </p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#111111] max-w-2xl mb-16 md:mb-24">
          Todo lo que necesitas para crecer online
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-[#E5E5E5]">
          {SERVICES.map((service) => (
            <div
              key={service.number}
              className="bg-[#F9F9F9] p-8 flex flex-col gap-4"
            >
              <span className="text-xs font-medium tracking-widest text-[#666666]">
                {service.number}
              </span>
              <h3 className="text-lg font-medium text-[#111111]">
                {service.title}
              </h3>
              <p className="text-base font-normal leading-relaxed text-[#666666]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
