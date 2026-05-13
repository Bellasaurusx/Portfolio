/* ================= PROJECT DATA ================= */
const projects = [
  {
    title: "BeeLine",
    type: "Mobile App / Full-Stack",
    description:
      "A pollinator conservation app that helps users identify plants, save observations, and map pollinator-friendly habitats.",
    tech: [
      "React Native",
      "Expo",
      "Node.js",
      "Express",
      "PostgreSQL",
      "Prisma",
      "Firebase",
    ],
    github: "https://github.com/Bellasaurusx/BeeLine.git",
  },
  {
    title: "PoliScope",
    type: "AI / NLP Web App",
    description:
      "A news analysis tool that uses sentiment and bias detection to help users compare coverage through a calmer, more transparent interface.",
    tech: [
      "Python",
      "Flask",
      "NLP",
      "Sentiment Analysis",
      "JavaScript",
      "Data Visualization",
    ],
    github: "https://github.com/Bellasaurusx/PoliScope.git",
  },
  {
    title: "House Heroes",
    type: "Android App / Educational Platform",
    description:
      "An educational mobile application designed to help children build everyday life skills through guided tutorials, structured learning flows, and parent-focused accessibility features.",
    tech: [
      "Kotlin",
      "Android Studio",
      "Firebase",
      "Jetpack Navigation",
      "UI/UX Design",
      "Mobile Development",
    ],
    github: "https://github.com/Bellasaurusx/HouseHeroesV2.git",
  },
];

export default function Projects() {
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

      {/* ================= PROJECTS HERO ================= */}
      <section className="px-6 pb-16 pt-40 md:px-12">
        <div className="mx-auto max-w-6xl">

          <h1 className="max-w-4xl text-5xl font-bold tracking-tight md:text-7xl">
            Projects built with purpose.
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#4D5A52]">
            A collection of full-stack, mobile, and AI-focused applications that
            showcase my work across frontend development, backend systems, APIs,
            databases, and user-focused design.
          </p>
        </div>
      </section>

      {/* ================= PROJECT CARDS ================= */}
      <section className="px-6 pb-24 md:px-12">
        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.title}
              className="rounded-3xl border border-[#DDE3DA] bg-white/75 p-8 shadow-sm backdrop-blur transition duration-300 ease-out hover:-translate-y-2 hover:shadow-xl"
            >
              {/* Project Type */}
              <p className="mb-3 text-sm font-medium uppercase tracking-[0.2em] text-[#5F6B63]">
                {project.type}
              </p>

              {/* Project Title */}
              <h2 className="mb-4 text-3xl font-bold">{project.title}</h2>

              {/* Project Description */}
              <p className="mb-6 leading-relaxed text-[#4D5A52]">
                {project.description}
              </p>

              {/* Tech Stack Pills */}
              <div className="mb-8 flex flex-wrap gap-2">
                {project.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-[#E4EBE2] px-3 py-1 text-xs text-[#2F4F3E]"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* GitHub Button */}
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-block rounded-2xl bg-[#2F4F3E] px-6 py-3 text-white shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#3D664F]"
              >
                View on GitHub
              </a>
            </article>
          ))}
        </div>
      </section>

      {/* ================= FOOTER ================= */}
        <footer className="border-t border-[#DDE3DA] px-6 py-8 md:px-12">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 text-sm text-[#4D5A52] md:flex-row">
            <p>© 2026 Isabella Valentino. All rights reserved.</p>

            <div className="flex gap-6">
            <a href="/" className="transition-all duration-300 ease-out hover:text-[#2F4F3E]">
                Home
            </a>

            <a href="/projects" className="transition-all duration-300 ease-out hover:text-[#2F4F3E]">
                Projects
            </a>

            <a href="/websites" className="transition-all duration-300 ease-out hover:text-[#2F4F3E]">
                Web Design
            </a>
            </div>
        </div>
        </footer>
    </main>
  );
}