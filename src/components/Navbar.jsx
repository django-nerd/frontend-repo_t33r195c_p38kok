import { Menu, ShoppingBag } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { label: "Products", href: "#products" },
    { label: "Why Us", href: "#benefits" },
    { label: "About", href: "#about" },
  ];

  return (
    <header className="fixed top-0 inset-x-0 z-30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur supports-[backdrop-filter]:bg-white/5">
          <div className="flex items-center justify-between px-4 py-3 md:px-6">
            <a href="#" className="flex items-center gap-2">
              <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-amber-400 to-red-500 shadow-lg shadow-red-500/30" />
              <div className="text-white font-semibold tracking-tight">CrunchCo</div>
            </a>

            <nav className="hidden md:flex items-center gap-8">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="text-sm text-white/80 hover:text-white transition-colors">
                  {l.label}
                </a>
              ))}
              <a href="#buy" className="inline-flex items-center gap-2 rounded-xl bg-white text-slate-900 px-4 py-2 text-sm font-semibold shadow-sm hover:bg-white/90 transition">
                <ShoppingBag className="h-4 w-4" /> Buy now
              </a>
            </nav>

            <button
              className="md:hidden inline-flex items-center justify-center rounded-xl border border-white/15 bg-white/10 p-2 text-white/90"
              onClick={() => setOpen((v) => !v)}
              aria-label="Toggle menu"
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>

          {open && (
            <div className="md:hidden px-4 pb-4 space-y-3">
              {links.map((l) => (
                <a key={l.href} href={l.href} className="block rounded-lg px-3 py-2 text-white/90 hover:bg-white/10">
                  {l.label}
                </a>
              ))}
              <a href="#buy" className="block rounded-lg bg-white px-3 py-2 text-center font-semibold text-slate-900">
                Buy now
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}
