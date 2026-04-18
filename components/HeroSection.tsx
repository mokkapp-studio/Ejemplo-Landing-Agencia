export default function HeroSection() {
  return (
    <section className="pt-40 pb-24 md:pt-52 md:pb-32">
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-xs font-bold tracking-widest uppercase text-[#666666] mb-8">
          Agencia de Marketing Digital
        </p>
        <h1 className="text-5xl md:text-7xl font-extralight tracking-tight text-[#111111] max-w-4xl mb-8">
          Hacemos crecer marcas que importan
        </h1>
        <p className="text-base font-normal leading-relaxed text-[#666666] max-w-xl mb-12">
          Estrategia, contenido y performance al servicio de tu negocio.
          Trabajamos contigo para construir presencia digital con propósito.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#cta"
            className="inline-flex items-center justify-center px-8 py-3 bg-black text-white text-sm transition-colors hover:bg-[#111111]"
          >
            Hablemos de tu proyecto
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center px-8 py-3 border border-black text-black bg-transparent text-sm transition-colors hover:bg-[#F9F9F9]"
          >
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}
