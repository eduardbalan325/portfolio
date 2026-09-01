import { skills } from '../data/portfolio';

export function Skills() {
  return (
    <section id="skills" className="px-6 py-24 bg-slate-900/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">Skills</h2>
          <div className="h-1 w-16 rounded-full bg-sky-500" />
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.category}
              className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 transition-colors hover:border-slate-700"
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-sky-400">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-slate-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
