import {
  ArrowRight,
  Mail,
  Code2,
  Database,
  Layout,
  Server,
  Terminal,
} from 'lucide-react'

const techIcons = [
  { Icon: Code2, label: 'React', delay: '0s' },
  { Icon: Layout, label: 'Tailwind', delay: '0.5s' },
  { Icon: Server, label: 'Node.js', delay: '1s' },
  { Icon: Database, label: 'MongoDB', delay: '1.5s' },
  { Icon: Terminal, label: 'TypeScript', delay: '2s' },
]

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-slate-950 pt-24 pb-16 sm:pt-28 lg:pt-32"
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-cyan-500/20 blur-3xl" />
        <div className="absolute -right-32 bottom-20 h-96 w-96 rounded-full bg-blue-500/15 blur-3xl" />
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/5 blur-3xl" />
      </div>

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 sm:px-6 lg:flex-row lg:gap-16 lg:px-8">
        <div className="flex-1 text-center lg:text-left animate-fade-in-up">
          <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-sm font-medium text-cyan-400">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-500" />
            </span>
            Available for freelance & full-time
          </p>

          <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Hi, I am{' '}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            Akmal 👋
            </span>
          </h1>

          <h2 className="mt-4 text-2xl font-bold text-slate-200 sm:text-3xl lg:text-4xl">
          Full Stack Developer | React & Node Specialist
          </h2>

          <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg lg:mx-0">
            I craft fast, accessible, and beautiful web experiences — from pixel-perfect
            interfaces to scalable APIs. Passionate about clean code, modern tooling, and
            turning ideas into production-ready products.
          </p>

          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#projects"
              className="group inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/25 transition-all hover:scale-105 hover:shadow-cyan-500/40 sm:w-auto"
            >
              Explore Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-slate-600 bg-slate-900/50 px-8 py-3.5 text-sm font-semibold text-slate-200 backdrop-blur-md transition-all hover:border-cyan-500/50 hover:bg-slate-800/50 hover:text-cyan-400 sm:w-auto"
            >
              <Mail className="h-4 w-4" />
              Contact Me
            </a>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center animate-fade-in-up animation-delay-200">
          <div className="relative h-72 w-72 sm:h-80 sm:w-80 lg:h-96 lg:w-96">
            <div className="absolute inset-0 rounded-2xl border border-slate-700/50 bg-slate-900/50 p-6 backdrop-blur-md shadow-2xl shadow-cyan-500/10">
              <div className="flex items-center gap-2 border-b border-slate-700/50 pb-4">
                <span className="h-3 w-3 rounded-full bg-red-500/80" />
                <span className="h-3 w-3 rounded-full bg-yellow-500/80" />
                <span className="h-3 w-3 rounded-full bg-green-500/80" />
                <span className="ml-2 font-mono text-xs text-slate-500">portfolio.tsx</span>
              </div>
              <pre className="mt-4 overflow-hidden font-mono text-xs leading-relaxed text-slate-400 sm:text-sm">
                <code>
                  <span className="text-purple-400">const</span>{' '}
                  <span className="text-cyan-400">developer</span> = {'{'}
                  {'\n'}  <span className="text-blue-300">name</span>:{' '}
                  <span className="text-green-400">&quot;Akmal&quot;</span>,{'\n'}  <span className="text-blue-300">role</span>:{' '}
                  <span className="text-green-400">&quot;Full Stack&quot;</span>,{'\n'}  <span className="text-blue-300">skills</span>: [
                  {'\n'}    <span className="text-green-400">&quot;React&quot;</span>,{'\n'}    <span className="text-green-400">&quot;Node&quot;</span>,{'\n'}    <span className="text-green-400">&quot;Tailwind&quot;</span>
                  {'\n'}  ],{'\n'}  <span className="text-blue-300">passion</span>:{' '}
                  <span className="text-green-400">&quot;∞&quot;</span>
                  {'\n'}
                  {'}'};
                </code>
              </pre>
            </div>

            {techIcons.map(({ Icon, label, delay }, index) => {
              const positions = [
                'top-0 left-0 -translate-x-1/4 -translate-y-1/4',
                'top-0 right-0 translate-x-1/4 -translate-y-1/4',
                'bottom-0 left-0 -translate-x-1/4 translate-y-1/4',
                'bottom-0 right-0 translate-x-1/4 translate-y-1/4',
                'left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 lg:top-auto lg:bottom-0 lg:translate-y-full',
              ]
              return (
                <div
                  key={label}
                  className={`absolute ${positions[index]} animate-float`}
                  style={{ animationDelay: delay }}
                >
                  <div
                    className="flex flex-col items-center gap-1 rounded-xl border border-slate-700/60 bg-slate-900/80 p-3 backdrop-blur-md shadow-lg transition-transform hover:scale-110 hover:border-cyan-500/40"
                    title={label}
                  >
                    <Icon className="h-6 w-6 text-cyan-400" />
                    <span className="text-[10px] font-medium text-slate-400">{label}</span>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
