import { ExternalLink, GitBranch } from 'lucide-react'

const projects = [
  {
    title: 'ShopWave E-Commerce',
    description:
      'A full-featured online store with cart, checkout, product filtering, and admin dashboard. Built for performance with optimized images and lazy loading.',
    image:
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&q=80&auto=format&fit=crop',
    tags: ['React', 'Redux', 'Tailwind', 'Stripe'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'NeuralChat AI Assistant',
    description:
      'An intelligent chatbot interface powered by modern AI APIs. Features conversation history, markdown rendering, and a sleek dark-mode UI.',
    image:
      'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80&auto=format&fit=crop',
    tags: ['React', 'Node.js', 'OpenAI', 'Tailwind'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
  {
    title: 'FlowTask Manager',
    description:
      'A Kanban-style task management app with drag-and-drop boards, real-time sync, team collaboration, and deadline reminders.',
    image:
      'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&q=80&auto=format&fit=crop',
    tags: ['React', 'Firebase', 'Tailwind', 'DnD Kit'],
    github: 'https://github.com',
    live: 'https://example.com',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="relative bg-slate-950 py-20 sm:py-28">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-cyan-950/10 to-slate-950" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-16 text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Featured <span className="text-cyan-400">Projects</span>
          </h2>
          <div className="mx-auto mt-4 h-1 w-20 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
          <p className="mx-auto mt-6 max-w-2xl text-slate-300">
            A selection of recent work showcasing full-stack development, modern UI, and
            production-ready deployments.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <article
              key={project.title}
              className="group flex flex-col overflow-hidden rounded-2xl border border-slate-800/60 bg-slate-900/50 backdrop-blur-md transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/10 animate-fade-in-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60" />
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="text-xl font-bold text-white transition-colors group-hover:text-cyan-400">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-300">
                  {project.description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md bg-slate-800/80 px-2.5 py-1 text-xs font-medium text-cyan-400"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                <div className="mt-6 flex items-center gap-4 border-t border-slate-800/60 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
                    aria-label={`${project.title} GitHub repository`}
                  >
                    <GitBranch className="h-5 w-5" />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm font-medium text-slate-400 transition-colors hover:text-cyan-400"
                    aria-label={`${project.title} live demo`}
                  >
                    <ExternalLink className="h-5 w-5" />
                    Live Demo
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
