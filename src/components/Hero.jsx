import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative min-h-[88vh] w-full overflow-hidden">
      {/* 3D cover */}
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* gradient vignettes - don't block clicks */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-950/60 via-slate-950/10 to-slate-950/90" />
        <div className="absolute -inset-x-10 -bottom-24 h-64 rounded-[100%] blur-3xl opacity-50 bg-[radial-gradient(60%_60%_at_50%_0%,rgba(255,255,255,0.3),transparent_70%)]" />
      </div>

      {/* content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-40 pb-24 sm:px-8">
        <div className="max-w-2xl">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium text-white/80 backdrop-blur">
            New • Summer flavours 2025
          </span>
          <h1 className="mt-5 text-4xl sm:text-6xl font-black tracking-tight text-white">
            Snacks that spark joy. Drinks that chill.
          </h1>
          <p className="mt-4 text-lg text-white/80">
            We’re a playful FMCG brand crafting bold, better-for-you snacks and beverages. Crunch into real ingredients, sip on sparkling refreshment.
          </p>
          <div className="mt-8 flex items-center gap-3">
            <a href="#buy" className="inline-flex items-center justify-center rounded-xl bg-white px-5 py-3 text-slate-900 font-semibold shadow-sm hover:bg-white/90">
              Shop the range
            </a>
            <a href="#products" className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/5 px-5 py-3 text-white font-semibold hover:bg-white/10">
              Explore products
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
