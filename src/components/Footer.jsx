const LINK_GROUPS = [
  {
    title: "Product",
    links: ["Technologies", "Your Stack", "Changelog", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Blog", "Contact", "Careers"],
  },
  {
    title: "Legal",
    links: ["Privacy Policy", "Terms of Service"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="mt-24 border-t border-base-border">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.3fr,2fr]">
          <div>
            <a href="#home" className="flex items-center gap-2">
              <span className="flex h-8 w-8 flex-col justify-center gap-[3px] rounded-md brand-fill p-1.5">
                <span className="h-[3px] w-full rounded-full bg-white/90" />
                <span className="h-[3px] w-3/4 rounded-full bg-white/90" />
                <span className="h-[3px] w-1/2 rounded-full bg-white/90" />
              </span>
              <span className="font-display text-lg font-semibold">
                Dev <span className="brand-text">Stack</span>
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-base-muted">
              A place to browse modern web technologies and put together the
              stack you'd actually build with.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <SocialLink label="GitHub" href="https://github.com">
                <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.93c.58.1.79-.25.79-.56v-2c-3.2.7-3.88-1.36-3.88-1.36-.53-1.34-1.29-1.7-1.29-1.7-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.68 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11 11 0 0 1 5.79 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.8 1.18 1.82 1.18 3.08 0 4.41-2.69 5.38-5.25 5.67.41.36.78 1.08.78 2.18v3.23c0 .32.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
              </SocialLink>
              <SocialLink label="Twitter" href="https://twitter.com">
                <path d="M23 4.9c-.8.36-1.66.6-2.57.71a4.5 4.5 0 0 0 1.96-2.48c-.87.51-1.82.89-2.84 1.09a4.48 4.48 0 0 0-7.63 4.08A12.7 12.7 0 0 1 2.9 3.67a4.48 4.48 0 0 0 1.39 5.98c-.72-.02-1.4-.22-2-.55v.06a4.48 4.48 0 0 0 3.6 4.4 4.5 4.5 0 0 1-2.02.08 4.49 4.49 0 0 0 4.19 3.12A9 9 0 0 1 1 19.54a12.7 12.7 0 0 0 6.88 2.02c8.26 0 12.78-6.84 12.78-12.78 0-.2 0-.39-.01-.58A9.1 9.1 0 0 0 23 4.9z" />
              </SocialLink>
              <SocialLink label="LinkedIn" href="https://linkedin.com">
                <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.03-1.85-3.03-1.86 0-2.14 1.45-2.14 2.94v5.66H9.36V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z" />
              </SocialLink>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
            {LINK_GROUPS.map((group) => (
              <div key={group.title}>
                <h4 className="text-sm font-semibold text-base-text">
                  {group.title}
                </h4>
                <ul className="mt-4 flex flex-col gap-3">
                  {group.links.map((link) => (
                    <li key={link}>
                      <a
                        href="#"
                        className="text-sm text-base-muted transition-colors hover:text-base-text"
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-base-border">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-6 text-xs text-base-muted sm:flex-row sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} Dev Stack. All rights reserved.</p>
          <div className="flex items-center gap-5">
            <a href="#" className="hover:text-base-text">
              Privacy
            </a>
            <a href="#" className="hover:text-base-text">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

function SocialLink({ label, href, children }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-9 w-9 items-center justify-center rounded-full border border-base-border text-base-muted transition-colors hover:border-brand-pink/50 hover:text-base-text"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
        {children}
      </svg>
    </a>
  );
}
