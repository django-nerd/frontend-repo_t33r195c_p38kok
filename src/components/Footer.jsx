export default function Footer(){
  return (
    <footer className="relative bg-slate-950 py-12">
      <div className="mx-auto max-w-7xl px-6 sm:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-white/70 text-sm">© 2025 CrunchCo Foods. All rights reserved.</div>
          <div className="flex items-center gap-6 text-white/70 text-sm">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
