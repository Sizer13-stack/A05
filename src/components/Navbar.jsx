import { useState } from "react";

const NAV_LINKS = ["Home", "Technologies", "Projects", "About", "Contact"];

function BrandMark() {
  return (
    <span className="flex h-8 w-8 flex-col justify-center gap-[3px] rounded-md brand-fill p-1.5">
      <span className="h-[3px] w-full rounded-full bg-white/90" />
      <span className="h-[3px] w-3/4 rounded-full bg-white/90" />
      <span className="h-[3px] w-1/2 rounded-full bg-white/90" />
    </span>
  );
}

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-base-border/70 bg-base-bg/80 backdrop-blur-md">
      {/* Desktop / tablet row: logo — nav links — auth buttons */}
      <div className="mx-auto hidden h-16 max-w-7xl items-center justify-between px-6 md:flex lg:px-8">
        <a href="#home" className="flex items-center gap-2">
          <BrandMark />
          <span className="font-display text-lg font-semibold tracking-tight">
            Dev <span className="brand-text">Stack</span>
          </span>
        </a>

        <nav className="flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm text-base-muted transition-colors hover:text-base-text"
            >
              {link}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button className="text-sm font-medium text-base-muted transition-colors hover:text-base-text">
            Sign In
          </button>
          <button className="rounded-full brand-fill px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-brand-violet/20 transition-transform hover:scale-[1.03]">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile row: hamburger — logo — sign in / sign up */}
      <div className="flex h-16 items-center justify-between px-4 md:hidden">
        <button
          className="flex h-9 w-9 flex-col items-center justify-center gap-[5px]"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span
            className={`h-[2px] w-5 bg-base-text transition-transform ${
              isMenuOpen ? "translate-y-[6px] rotate-45" : ""
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-base-text transition-opacity ${
              isMenuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`h-[2px] w-5 bg-base-text transition-transform ${
              isMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
            }`}
          />
        </button>

        <a href="#home" className="flex items-center gap-2">
          <BrandMark />
        </a>

        <div className="flex items-center gap-2">
          <button className="text-xs font-medium text-base-muted">Sign In</button>
          <button className="rounded-full brand-fill px-3 py-1.5 text-xs font-semibold text-white">
            Sign Up
          </button>
        </div>
      </div>

      {/* Mobile dropdown drawer */}
      {isMenuOpen && (
        <div className="border-t border-base-border/70 bg-base-bg/95 px-4 pb-6 pt-4 md:hidden">
          <nav className="flex flex-col gap-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="text-sm text-base-muted hover:text-base-text"
                onClick={() => setIsMenuOpen(false)}
              >
                {link}
              </a>
            ))}
          </nav>
          <div className="mt-5 flex items-center gap-3">
            <button className="flex-1 rounded-full border border-base-border py-2 text-sm font-medium text-base-text">
              Sign In
            </button>
            <button className="flex-1 rounded-full brand-fill py-2 text-sm font-semibold text-white">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
