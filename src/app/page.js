
export default function Home() {
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

      {/* ================= HERO SECTION ================= */}
    <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 pt-20 text-center">
      {/* ================= HERO BACKGROUND GLOW ================= */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#6D8B74]/30 blur-3xl" />

        <div className="absolute right-10 top-24 h-[550px] w-[550px] rounded-full bg-[#9CAF88]/25 blur-3xl" />

        <div className="absolute bottom-10 left-10 h-[500px] w-[500px] rounded-full bg-[#2F4F3E]/15 blur-3xl" />
      </div>

      {/* ================= HERO CONTENT ================= */}
      <div className="relative z-10 flex flex-col items-center">
        <p className="mb-4 text-sm uppercase tracking-[0.35em] text-[#5F6B63]">
          Software Engineer
        </p>

        <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-7xl">
          Isabella Valentino
        </h1>

        <p className="max-w-2xl text-lg leading-relaxed text-[#4D5A52] md:text-xl">
          Full-stack and mobile developer building modern applications focused
          on usability, thoughtful design, and real-world impact.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="/projects"
            className="rounded-2xl bg-[#2F4F3E] px-7 py-3 text-white shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#3D664F]"
          >
            View Projects
          </a>

          <a
            href="/websites"
            className="rounded-2xl border border-[#2F4F3E] px-7 py-3 text-[#2F4F3E] transition duration-300 ease-out hover:bg-[#2F4F3E] hover:text-white"
          >
            Need A Website?
          </a>
        </div>
      </div>
    </section>
      {/* ================= SKILLS SECTION ================= */}
      <section id="skills" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-6xl rounded-3xl bg-[#2F4F3E] p-8 text-white md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#C9D6C7]">
            Technical Skills
          </p>

          <h2 className="mb-8 text-4xl font-bold">What I work with.</h2>

          <div className="grid gap-10 md:grid-cols-3 lg:grid-cols-6">
            <div>
              <h3 className="mb-3 font-semibold">Frontend</h3>
              <p className="leading-8 text-[#DCE7DA]">
                React<br />
                Next.js<br />
                React Native<br />
                Expo<br />
                JavaScript<br />
                Tailwind CSS
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Backend</h3>
              <p className="leading-8 text-[#DCE7DA]">
                Node.js<br />
                Express.js<br />
                Flask<br />
                REST APIs<br />
                API Integration<br />
                Authentication
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Databases</h3>
              <p className="leading-8 text-[#DCE7DA]">
                PostgreSQL<br />
                Prisma ORM<br />
                Firebase<br />
                SQL<br />
                AsyncStorage<br />
                Database Design
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">AI / ML</h3>
              <p className="leading-8 text-[#DCE7DA]">
                NLP<br />
                Sentiment Analysis<br />
                Machine Learning<br />
                Text Classification<br />
                Data Processing<br />
                Model Pipelines
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Tools</h3>
              <p className="leading-8 text-[#DCE7DA]">
                Git / GitHub<br />
                VS Code<br />
                IntelliJ<br />
                Postman<br />
                Jira<br />
                Vercel
              </p>
            </div>

            <div>
              <h3 className="mb-3 font-semibold">Other</h3>
              <p className="leading-8 text-[#DCE7DA]">
                Mobile UI/UX<br />
                Responsive Design<br />
                Technical Writing<br />
                Agile Workflows<br />
                System Troubleshooting<br />
                Technical Support
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section id="about" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5F6B63]">
            About
          </p>

          <h2 className="mb-6 text-4xl font-bold tracking-tight md:text-5xl">
            Thoughtful software. Modern experiences. Real-world impact.
          </h2>

          <p className="text-lg leading-relaxed text-[#4D5A52]">
            My background combines over five years of technical experience,
            military service, and a focus in computer science, AI, and machine
            learning. I enjoy building modern applications that are intuitive,
            impactful, and designed with real users in mind.
          </p>
        </div>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section id="contact" className="px-6 py-24 md:px-12">
        <div className="mx-auto max-w-4xl rounded-3xl border border-[#DDE3DA] bg-white/70 p-8 text-center shadow-sm md:p-12">
          <p className="mb-3 text-sm uppercase tracking-[0.3em] text-[#5F6B63]">
            Contact
          </p>

          <h2 className="mb-4 text-4xl font-bold">Let’s connect.</h2>

          <p className="mb-8 text-[#4D5A52]">
            I’m open to software development roles, freelance web projects, and
            mission-driven technical work.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-4">
            <a
              href="https://github.com/Bellasaurusx"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#DDE3DA] bg-white px-5 py-3 text-sm font-medium text-[#2F4F3E] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#B7C7B3] hover:shadow-lg"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/isabellavalentino/"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-[#DDE3DA] bg-white px-5 py-3 text-sm font-medium text-[#2F4F3E] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#B7C7B3] hover:shadow-lg"
            >
              LinkedIn
            </a>
          </div>

          <a
            href="mailto:isabella_valentino@ymail.com"
            className="inline-block rounded-2xl bg-[#2F4F3E] px-7 py-3 text-white shadow-md transition duration-300 ease-out hover:-translate-y-1 hover:bg-[#3D664F]"
          >
            Email Me
          </a>
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