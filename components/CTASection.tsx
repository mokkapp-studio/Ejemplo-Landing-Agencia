export default function CTASection() {
  return (
    <section id="cta" className="py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-6">
        <div className="border border-[#E5E5E5] p-12 md:p-20 flex flex-col md:flex-row md:items-end md:justify-between gap-12">
          <div className="flex flex-col gap-6 max-w-xl">
            <p className="text-xs font-medium tracking-widest uppercase text-[#666666]">
              Contacto
            </p>
            <h2 className="text-3xl md:text-5xl font-light tracking-tight text-[#111111]">
              ¿Listo para hacer crecer tu marca?
            </h2>
            <p className="text-base font-normal leading-relaxed text-[#666666]">
              Cuéntanos tu proyecto. Sin compromisos, sin formularios
              interminables. Solo una conversación honesta sobre cómo podemos
              ayudarte.
            </p>
          </div>

          <div className="flex flex-col gap-4 shrink-0">
            <a
              href="mailto:hola@nexusagency.com"
              className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm transition-colors hover:bg-[#111111]"
            >
              hola@nexusagency.com
            </a>
            <a
              href="tel:+34600000000"
              className="inline-flex items-center justify-center px-8 py-3 border border-black text-black bg-transparent text-sm transition-colors hover:bg-[#F9F9F9]"
            >
              +34 600 000 000
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
