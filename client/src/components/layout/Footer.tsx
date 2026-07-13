import Link from "next/link";
import { FiGithub, FiLinkedin, FiTwitter, FiYoutube } from "react-icons/fi";

const cols = [
  {
    title: "Platform",
    links: [
      { label: "Courses", href: "/#courses" },
      { label: "Projects", href: "/#projects" },
      { label: "Daily Quiz", href: "/#quiz" },
      { label: "Notes", href: "/#notes" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About", href: "/#about" },
      { label: "Contact", href: "/#contact" },
      { label: "Apply Now", href: "/apply" },
      { label: "Login", href: "/login" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Privacy", href: "/#contact" },
      { label: "Terms", href: "/#contact" },
      { label: "Refund", href: "/#contact" },
    ],
  },
];

const socials = [
  { Icon: FiGithub, label: "github", href: "https://github.com" },
  { Icon: FiLinkedin, label: "linkedin", href: "https://linkedin.com" },
  { Icon: FiTwitter, label: "twitter", href: "https://twitter.com" },
  { Icon: FiYoutube, label: "youtube", href: "https://youtube.com" },
];

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 bg-ink-800/60">
      <div className="section grid grid-cols-1 md:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="I AM CODER logo" className="h-9 w-9 rounded-lg" />
            <h3 className="font-display text-2xl font-bold text-gradient">I AM CODER</h3>
          </div>
          <p className="mt-3 text-sm text-white/60 max-w-xs">
            Learn coding completely FREE. Become industry ready with beginner-to-advanced tracks in
            Programming, AI, ML and more.
          </p>
        </div>
        {cols.map((c) => (
          <div key={c.title}>
            <h4 className="font-semibold mb-3">{c.title}</h4>
            <ul className="space-y-2 text-sm text-white/60">
              {c.links.map((l) => (
                <li key={l.label}>
                  <Link href={l.href} className="hover:text-white transition-colors">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-white/10 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 px-6 max-w-7xl mx-auto text-sm text-white/50">
        <span>© {new Date().getFullYear()} I AM CODER. All rights reserved.</span>
        <div className="flex gap-4 text-lg">
          {socials.map(({ Icon, label, href }) => (
            <a key={label} href={href} target="_blank" rel="noopener noreferrer" aria-label={label}>
              <Icon />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
