interface FooterLink {
  label: string;
  href: string;
}

interface FooterColumn {
  title: string;
  links: FooterLink[];
}

const COLUMNS: FooterColumn[] = [
  {
    title: "Servicios",
    links: [
      { label: "Estrategia de marca", href: "#services" },
      { label: "Contenido & Social Media", href: "#services" },
      { label: "Performance & Paid Media", href: "#services" },
      { label: "SEO & Posicionamiento", href: "#services" },
    ],
  },
  {
    title: "Agencia",
    links: [
      { label: "Proceso", href: "#process" },
      { label: "Testimonios", href: "#testimonials" },
      { label: "Contacto", href: "#cta" },
    ],
  },
  {
    title: "Contacto",
    links: [
      { label: "hola@nexusagency.com", href: "mailto:hola@nexusagency.com" },
      { label: "+34 600 000 000", href: "tel:+34600000000" },
      { label: "Madrid, España", href: "#" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-6 py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_auto_auto] gap-12 md:gap-16">
          <div className="flex flex-col gap-4 max-w-xs">
            <span className="text-sm font-medium tracking-widest uppercase text-[#111111]">
              Nexus
            </span>
            <p className="text-sm leading-relaxed text-[#666666]">
              Agencia de marketing digital. Hacemos crecer marcas que importan.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title} className="flex flex-col gap-4">
              <p className="text-xs font-medium tracking-widest uppercase text-[#111111]">
                {col.title}
              </p>
              <ul className="flex flex-col gap-3">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-[#666666] hover:text-[#111111] transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-[#E5E5E5] flex flex-col sm:flex-row justify-between gap-4">
          <p className="text-xs text-[#666666]">
            © {new Date().getFullYear()} Nexus Agency. Todos los derechos reservados.
          </p>
          <p className="text-xs text-[#666666]">Hecho con propósito.</p>
        </div>
      </div>
    </footer>
  );
}
