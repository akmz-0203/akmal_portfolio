import {
  Code2,
  Layers,
  Server,
  GitBranch,
  Cloud,
  Palette,
  Box,
  Wrench,
} from 'lucide-react'

const skillCategories = [
  {
    title: 'Frontend',
    icon: Palette,
    color: 'cyan',
    skills: [
      { name: 'React', icon: Code2 },
      { name: 'Redux', icon: Layers },
      { name: 'Tailwind CSS', icon: Palette },
    ],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'blue',
    skills: [
      { name: 'Node.js', icon: Server },
      { name: 'Express', icon: Box },
    ],
  },
  {
    title: 'Tools',
    icon: Wrench,
    color: 'violet',
    skills: [
      { name: 'Git', icon: GitBranch },
      { name: 'Vercel', icon: Cloud },
    ],
  },
]

const colorMap = {
  cyan: 'border-cyan-500/30 bg-cyan-500/10 text-cyan-400 hover:border-cyan-500/50 hover:bg-cyan-500/15',
  blue: 'border-blue-500/30 bg-blue-500/10 text-blue-400 hover:border-blue-500/50 hover:bg-blue-500/15',
  violet:
    'border-violet-500/30 bg-violet-500/10 text-violet-400 hover:border-violet-500/50 hover:bg-violet-500/15',
}

export default function About() {
  return (
    <section id="about" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900/20 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
        </div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="animate-fade-in-up">
            <div className="rounded-2xl border border-slate-800/60 bg-slate-900/50 p-8 backdrop-blur-md">
              <p className="text-base leading-relaxed text-slate-300 sm:text-lg">
                I&apos;m a passionate full-stack developer with a love for building things that
                live on the web. My journey started with curiosity about how websites work — and
                grew into a career crafting responsive, performant applications that users enjoy.
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                I specialize in the React ecosystem and modern JavaScript, with solid experience
                in Node.js backends and cloud deployment. Whether it&apos;s a sleek landing page or
                a complex SaaS product, I bring attention to detail, clean architecture, and a
                user-first mindset to every project.
              </p>
              <p className="mt-6 text-base leading-relaxed text-slate-300 sm:text-lg">
                When I&apos;m not coding, you&apos;ll find me exploring new frameworks, contributing
                to open source, or refining my craft one commit at a time.
              </p>
            </div>
          </div>

          <div className="space-y-8 animate-fade-in-up animation-delay-200">
            {skillCategories.map((category) => {
              const CategoryIcon = category.icon
              return (
                <div key={category.title}>
                  <div className="mb-4 flex items-center gap-3">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-lg border ${colorMap[category.color].split(' ').slice(0, 2).join(' ')}`}
                    >
                      <CategoryIcon className={`h-5 w-5 ${colorMap[category.color].split(' ')[2]}`} />
                    </div>
                    <h3 className="text-lg font-semibold text-white">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {category.skills.map((skill) => {
                      const SkillIcon = skill.icon
                      return (
                        <span
                          key={skill.name}
                          className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition-all ${colorMap[category.color]}`}
                        >
                          <SkillIcon className="h-4 w-4" />
                          {skill.name}
                        </span>
                      )
                    })}
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
