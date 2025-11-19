import { Star } from 'lucide-react'

const products = [
  {
    name: 'Citrus Pop Can',
    type: 'Sparkling drink',
    price: '$2.49',
    badge: 'Bestseller',
    img: 'https://images.unsplash.com/photo-1600271886742-f049cd451bba?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Chili Lime Chips',
    type: 'Snack bag',
    price: '$1.99',
    badge: 'New',
    img: 'https://images.unsplash.com/photo-1604909052743-91bb3830f4f1?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Berry Burst Can',
    type: 'Sparkling drink',
    price: '$2.49',
    badge: 'Low sugar',
    img: 'https://images.unsplash.com/photo-1598514982372-9f42dc4d22bc?q=80&w=1200&auto=format&fit=crop',
  },
]

export default function Products(){
  return (
    <section id="products" className="relative py-24 bg-slate-950">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex items-end justify-between gap-6">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Fan favourites</h2>
            <p className="mt-2 text-white/70">Small-batch snacks and sips that sell out fast.</p>
          </div>
          <a href="#buy" className="hidden sm:inline-flex rounded-xl bg-white px-4 py-2 font-semibold text-slate-900">View all</a>
        </div>

        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((p) => (
            <div key={p.name} className="group overflow-hidden rounded-2xl border border-white/10 bg-white/5">
              <div className="relative aspect-[4/3] overflow-hidden">
                <img src={p.img} alt={p.name} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" />
                <div className="absolute left-3 top-3 rounded-full bg-white px-3 py-1 text-xs font-semibold text-slate-900">{p.badge}</div>
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="text-white font-semibold">{p.name}</div>
                    <div className="text-white/60 text-sm">{p.type}</div>
                  </div>
                  <div className="inline-flex items-center gap-1 text-amber-300">
                    <Star className="h-4 w-4 fill-amber-300" />
                    <span className="text-sm">4.8</span>
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between">
                  <div className="text-white font-semibold">{p.price}</div>
                  <button className="rounded-lg bg-white px-3 py-2 text-sm font-semibold text-slate-900 hover:bg-white/90">Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
