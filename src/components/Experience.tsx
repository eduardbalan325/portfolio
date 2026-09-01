import { experience } from '../data/portfolio';

export function Experience() {
  return (
    <section id="experience" className="px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">Experience</h2>
          <div className="h-1 w-16 rounded-full bg-sky-500" />
        </div>

        <div className="space-y-8">
          {experience.map((job, index) => (
            <article
              key={`${job.company}-${job.period}`}
              className="relative rounded-2xl border border-slate-800 bg-slate-900/30 p-6 sm:p-8 transition-colors hover:border-slate-700"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-white sm:text-2xl">{job.role}</h3>
                  <p className="mt-1 text-lg font-medium text-sky-400">{job.company}</p>
                  <p className="mt-1 text-sm text-slate-500">{job.location}</p>
                </div>
                <div className="text-right">
                  <span className="inline-block rounded-full bg-slate-800 px-3 py-1 text-sm font-medium text-slate-300">
                    {job.period}
                  </span>
                </div>
              </div>

              <p className="mb-4 text-sm font-medium text-slate-400">{job.tag}</p>

              <ul className="space-y-2">
                {job.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-3 text-sm text-slate-400">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sky-500" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>

              {index < experience.length - 1 && (
                <div className="absolute -bottom-4 left-8 hidden h-8 w-px bg-slate-700 sm:block" />
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
