import { education, languages } from '../data/portfolio';

export function Education() {
  return (
    <section id="education" className="px-6 py-24 bg-slate-900/30">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="mb-2 text-3xl font-bold text-white sm:text-4xl">Education</h2>
          <div className="h-1 w-16 rounded-full bg-sky-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">{education.degree}</h3>
            <p className="mt-2 text-lg font-medium text-sky-400">{education.school}</p>
            <p className="mt-1 text-sm text-slate-500">{education.location}</p>
            <p className="mt-2 text-sm text-slate-400">{education.period}</p>
          </div>

          <div className="rounded-2xl border border-slate-800 bg-slate-950/50 p-6 sm:p-8">
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/10 text-sky-400">
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-white">Languages</h3>
            <ul className="mt-4 space-y-3">
              {languages.map((lang) => (
                <li key={lang.name} className="flex items-center justify-between rounded-lg bg-slate-800/50 px-4 py-3">
                  <span className="font-medium text-white">{lang.name}</span>
                  <span className="text-sm text-slate-400">{lang.level}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
