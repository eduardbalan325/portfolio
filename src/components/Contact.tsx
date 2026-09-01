import { personal } from '../data/portfolio';

export function Contact() {
  return (
    <section id="contact" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900/80 to-slate-950 p-8 sm:p-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-white sm:text-4xl">
            Let&apos;s Work Together
          </h2>
          <p className="mx-auto mb-8 max-w-2xl text-lg text-slate-400">
            Interested in collaborating on scalable SaaS, enterprise, or AI-powered applications?
            I&apos;d love to hear from you.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={personal.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-sky-500 px-6 py-3 text-sm font-semibold text-white transition-all hover:bg-sky-400 hover:shadow-lg hover:shadow-sky-500/25"
            >
              Connect on LinkedIn
            </a>
            <a
              href={personal.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-slate-700 px-6 py-3 text-sm font-semibold text-white transition-all hover:border-slate-600 hover:bg-slate-800"
            >
              View GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
