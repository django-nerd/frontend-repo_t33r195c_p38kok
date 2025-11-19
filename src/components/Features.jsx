import { Sparkles, Leaf, Droplets, ShieldCheck } from 'lucide-react'

const features = [
  { icon: Sparkles, title: 'Bold Flavours', desc: 'Punchy taste combos crafted with real fruit and spices.' },
  { icon: Leaf, title: 'Better Ingredients', desc: 'No artificial colours. Nothing weird. Just good stuff.' },
  { icon: Droplets, title: 'Light & Refreshing', desc: 'Crisp sips, lower sugar—perfect everyday pick‑me‑ups.' },
  { icon: ShieldCheck, title: 'Trusted Quality', desc: 'Made in small batches with strict quality checks.' },
]

export default function Features(){
  return (
    <section id="benefits" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Why snack with us</h2>
          <p className="mt-3 text-white/70">Designed to delight—balanced, bright and feel‑good.</p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-white/10 bg-white/5 p-6 hover:bg-white/10 transition">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white text-slate-900">
                <Icon className="h-5 w-5" />
              </div>
              <h3 className="text-white font-semibold">{title}</h3>
              <p className="text-white/70 text-sm mt-1">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
