const websites = [
  {
    title: "Demo Landscaping",
    type: "Local Service Website",
    description:
      "A clean, modern website concept for a lawn care or landscaping business with service sections, contact CTA, and mobile-friendly layout.",
    tech: ["Next.js", "Tailwind CSS", "Responsive Design"],
    demo: "https://landscaping-demo-drab.vercel.app/",
    image: "/images/demo-landscaping-card.png",
  },
  {
    title: "Demo Studio",
    type: "Creative Business Website",
    description:
      "A polished landing page concept for a creative studio, photographer, florist, or boutique service provider.",
    tech: ["Next.js", "Tailwind CSS", "Landing Page Design"],
    demo: "https://demo-studio-ruby.vercel.app/",
    image: "/images/demo-studio-card.png",
  },
  {
    title: "Demo Coffee Co.",
    type: "Small Business Website",
    description:
      "A warm, scrollable website concept for a local cafe or restaurant with menu highlights, location details, and call-to-action sections.",
    tech: ["Next.js", "Tailwind CSS", "Mobile-First Design"],
    demo: "https://demo-coffee-co.vercel.app/",
    image: "/images/demo-coffee-card.png",
  },
];

export default function Websites() {
  return (
    <main className="min-h-screen bg-[#F4F6F3] text-[#1E1E1E]">
      {/* ================= NAVIGATION ================= */}
      <nav className="fixed top-0 z-50 w-full border-b border-[#DDE3DA]/70 bg-[#F4F6F3]/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-12">
          {/* Logo / Name */}
          <a
            href="/"
            className="text-lg font-semibold tracking-tight text-[#1E1E1E] transition duration-300 ease-out hover:text-[#2F4F3E]"
          >
            Isabella Valentino
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-10 text-sm font-medium text-[#4D5A52] md:flex">
            <a
              href="/"
              className="transition-all duration-300 hover:text-[#2F4F3E]"
            >
              Home
            </a>

            <a
              href="/projects"
              className="transition-all duration-300 ease-out hover:text-[#2F4F3E]"
            >
              Projects
            </a>

            <a
              href="/websites"
              className="transition-all duration-300 ease-out hover:text-[#2F4F3E]"
            >
              Web Design
            </a>

            <a
              href="/#contact"
              className="transition-all duration-300 ease-out hover:text-[#2F4F3E]"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ================= WEBSITE BUILDING HERO ================= */}
      <section className="px-6 pb-16 pt-40 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#5F6B63]">
            Web Design
          </p>

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Modern websites for your business.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4D5A52]">
            Clean, modern websites designed to help businesses build trust,
            stand out online, and make a stronger first impression.
          </p>
        </div>
      </section>

      {/* ================= WEBSITE SAMPLE CARDS ================= */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-3">
          {websites.map((site) => (
            <article
              key={site.title}
              className="overflow-hidden rounded-3xl border border-[#DDE3DA] bg-white/75 shadow-sm backdrop-blur transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
            >
              {/* ================= WEBSITE IMAGE ================= */}
              <div className="overflow-hidden border-b border-[#DDE3DA]">
                <img
                  src={site.image}
                  alt={`${site.title} website preview`}
                  className="h-52 w-full object-cover transition duration-500 ease-out hover:scale-105"
                />
              </div>

              {/* ================= CARD CONTENT ================= */}
              <div className="p-6">
                <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#5F6B63]">
                  {site.type}
                </p>

                <h2 className="mb-4 text-2xl font-bold">{site.title}</h2>

                <p className="mb-6 leading-relaxed text-[#4D5A52]">
                  {site.description}
                </p>

                {/* ================= TECH TAGS ================= */}
                <div className="mb-8 flex flex-wrap gap-2">
                  {site.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#E4EBE2] px-3 py-1 text-xs text-[#2F4F3E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* ================= DEMO BUTTON ================= */}
                <a
                  href={site.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-block rounded-2xl border border-[#2F4F3E] px-6 py-3 text-[#2F4F3E] transition duration-300 ease-out hover:bg-[#2F4F3E] hover:text-white"
                >
                  View Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FREELANCE CTA SECTION ================= */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#2F4F3E] p-8 text-center text-white md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C9D6C7]">
            Need a Website?
          </p>

          <h2 className="mb-4 text-4xl font-bold">
            Simple, polished, and built to work for your business.
          </h2>

          <p className="mb-8 text-[#DCE7DA]">
            Modern websites designed to feel polished, intuitive, and aligned
            with the quality of your business.
          </p>

          <a
            href="mailto:isabella_valentino@ymail.com"
            className="inline-block rounded-2xl bg-white px-7 py-3 text-[#2F4F3E] shadow-md transition duration-300 ease-out hover:-translate-y-1"
          >
            Start a Website Project
          </a>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t border-[#DDE3DA] px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#4D5A52] md:flex-row">
          <p>© 2026 Isabella Valentino. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="/"
              className="transition-all duration-300 ease-out hover:text-[#2F4F3E]"
            >
              Home
            </a>

            <a
              href="/projects"
              className="transition-all duration-300 ease-out hover:text-[#2F4F3E]"
            >
              Projects
            </a>

            <a
              href="/websites"
              className="transition-all duration-300 ease-out hover:text-[#2F4F3E]"
            >
              Web Design
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}