import Image from "next/image";

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
        <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-6 md:px-12">
          {/* Logo */}
          <a href="/" className="flex items-center">
            <Image
              src="/images/valentino-web-design-logo.png"
              alt="Valentino Web Design"
              width={320}
              height={80}
              priority
              className="h-auto w-64 md:w-72"
            />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-12 text-base font-medium text-[#4D5A52] md:flex">
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

            <a
              href="/#contact"
              className="transition-all duration-300 ease-out hover:text-[#2F4F3E]"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      {/* ================= PAGE INTRO ================= */}
      <section className="px-6 pb-14 pt-40 md:px-12">
        <div className="mx-auto max-w-6xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5F6B63]">
            Web Design
          </p>

          <h1 className="mb-5 max-w-3xl text-4xl font-bold tracking-tight md:text-6xl">
            Websites built for real businesses.
          </h1>

          <p className="max-w-2xl text-lg leading-relaxed text-[#4D5A52]">
            A selection of website concepts designed around clear messaging,
            thoughtful layouts, and a smooth experience on every device.
          </p>
        </div>
      </section>

      {/* ================= WEBSITE SAMPLE CARDS ================= */}
      <section className="px-6 pb-28 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {websites.map((site) => (
            <article
              key={site.title}
              className="flex h-full flex-col overflow-hidden rounded-2xl border border-[#DDE3DA] bg-white shadow-sm transition duration-300 ease-out hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Website Image */}
              <div className="overflow-hidden border-b border-[#DDE3DA]">
                <Image
                  src={site.image}
                  alt={`${site.title} website preview`}
                  width={700}
                  height={420}
                  className="h-48 w-full object-cover transition duration-500 ease-out hover:scale-105"
                />
              </div>

              {/* Card Content */}
              <div className="flex flex-1 flex-col p-7">
                <p className="mb-3 text-xs font-medium uppercase tracking-[0.22em] text-[#5F6B63]">
                  {site.type}
                </p>

                <h2 className="mb-3 text-2xl font-bold">{site.title}</h2>

                <p className="mb-6 leading-relaxed text-[#4D5A52]">
                  {site.description}
                </p>

                {/* Tech Tags */}
                <div className="mb-7 flex flex-wrap gap-2">
                  {site.tech.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-[#E4EBE2] px-3 py-1 text-xs text-[#2F4F3E]"
                    >
                      {item}
                    </span>
                  ))}
                </div>

                {/* Demo Button */}
                <a
                  href={site.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto inline-flex w-fit rounded-xl border border-[#2F4F3E] px-5 py-2.5 text-sm font-medium text-[#2F4F3E] transition duration-300 ease-out hover:bg-[#2F4F3E] hover:text-white"
                >
                  View Live Demo
                </a>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FREELANCE CTA SECTION ================= */}
      <section className="px-6 pb-28 md:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl bg-[#2F4F3E] px-8 py-14 text-center text-white md:px-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C9D6C7]">
            Need a Website?
          </p>

          <h2 className="mb-4 text-3xl font-bold md:text-4xl">
            Simple, polished, and built to work for your business.
          </h2>

          <p className="mx-auto mb-8 max-w-2xl text-[#DCE7DA]">
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