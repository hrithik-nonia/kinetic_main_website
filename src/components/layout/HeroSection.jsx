// built in imports
import { NavLink } from "react-router-dom";

// custom imports
import hero_banner from "../../assets/banner_imgs/hero_banner.png";

export default function HeroSection() {
  return (
    <section className="h-[480px] overflow-hidden relative">
      {/* background image */}
      <img
        src={hero_banner}
        alt="banner-image"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* bark bg for text readable */}
      <div className="absolute inset-0 bg-black/40 z-10" />

      {/* Content */}
      <div className="relative z-20 h-full flex flex-col justify-center px-10 md:px-16 max-w-xl ">
        <span className="inline-block w-fit bg-blue-600 text-white text-xs font-semibold px-3 py-1.5 rounded-full mb-4">
          Next-Gen Shopping
        </span>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Shop the Future
        </h1>

        <p className="text-slate-200/90 text-sm md:text-base mb-8 leading-relaxed">
          Experience the world's first curated ecosystem for high-performance
          gadgets, luxury fashion, and sustainable living.
        </p>

        <div className="flex items-center gap-4">
          <NavLink
            to="/dealPage"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-3 rounded-full transition-colors"
          >
            Explore Deals
          </NavLink>
          <NavLink
            to="/newArivalsPage"
            className="bg-white/15 hover:bg-white/25 backdrop-blur text-white text-sm font-semibold px-6 py-3 rounded-full border border-white/20 transition-colors"
          >
            New Arrivals
          </NavLink>
        </div>
      </div>
    </section>
  );
}
