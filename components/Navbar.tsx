"use client";

interface NavLink {
  label: string;
  href: string;
}

const NAV_LINKS: NavLink[] = [
  { label: "Servicios", href: "#services" },
  { label: "Proceso", href: "#process" },
  { label: "Testimonios", href: "#testimonials" },
  { label: "Contacto", href: "#cta" },
];

function handleScroll(e: React.MouseEvent<HTMLAnchorElement>, href: string) {
  e.preventDefault();
  const target = document.querySelector(href);
  if (target) {
    target.scrollIntoView({ behavior: "smooth" });
  }
}

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-[#E5E5E5]">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="/"
          className="text-sm font-medium tracking-widest uppercase text-[#111111]"
        >
          Nexus
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleScroll(e, link.href)}
              className="text-sm text-[#666666] hover:text-[#111111] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="#cta"
          onClick={(e) => handleScroll(e, "#cta")}
          className="text-sm px-5 py-2 bg-black text-white hover:bg-[#111111] transition-colors"
        >
          Hablemos
        </a>
      </div>
    </header>
  );
}
