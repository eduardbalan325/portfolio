import { personal } from '../data/portfolio';

export function About() {
  return (
    <section id="about" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">About Me</h2>
          <div className="h-1 w-16 rounded-full bg-sky-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <p className="text-lg leading-relaxed text-slate-400">
              {personal.bio}
            </p>
            <p className="mt-4 text-lg leading-relaxed text-slate-400">
              Experienced in building cloud-native and microservices-based architectures using
              PostgreSQL, MongoDB, Redis, AWS, Docker, Kubernetes, and CI/CD. Hands-on experience
              integrating LLMs, OpenAI APIs, RAG pipelines, vector databases, and AI-driven
              automation into production applications.
            </p>
          </div>

          <div className="lg:col-span-2">
            <div className="rounded-2xl border border-slate-800 bg-slate-900/50 p-6">
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-slate-500">
                Focus Areas
              </h3>
              <ul className="space-y-3">
                {[
                  'System Design & Architecture',
                  'Performance Optimization',
                  'Secure API Development',
                  'Automated Testing',
                  'Scalable Architecture',
                  'Production Reliability',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-300">
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-sky-500/10 text-sky-400">
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
