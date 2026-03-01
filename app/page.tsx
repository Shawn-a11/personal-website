import Sidebar from '@/components/Sidebar'
import ProjectCard from '@/components/ProjectCard'
import PublicationCard from '@/components/PublicationCard'
import {
  Bot,
  Palette,
  BarChart3,
  MessageCircle,
  Zap,
  Video,
  BookOpen,
} from 'lucide-react'

export default function Home() {
  return (
    <div className="min-h-screen lg:pl-72">
      <Sidebar />

      <main className="mx-auto max-w-4xl px-6 py-12 lg:px-12">
        {/* About Section */}
        <section id="about" className="scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
            About Me
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li className="flex gap-2">
                <span className="font-medium text-slate-900 dark:text-slate-100">Education:</span>
                Xi&apos;an University of Technology (2023–2027), B.Tech in Electronic and Information Engineering, GPA 3.53/4.00
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-slate-900 dark:text-slate-100">Research:</span>
                Audio Research Assistant at University of Rochester; LLM Research Assistant at University of Minnesota; Research Assistant at Brown University
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-slate-900 dark:text-slate-100">Skills:</span>
                WSL/Ubuntu, SSH multi-GPU training, PyTorch, audio source separation, LLM reasoning & alignment, Transformer architectures
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-slate-900 dark:text-slate-100">Languages:</span>
                English (fluent), Japanese (intermediate), French (basic)
              </li>
              <li className="flex gap-2">
                <span className="font-medium text-slate-900 dark:text-slate-100">Builder & Sharer:</span>
                <Zap className="inline h-4 w-4 shrink-0 text-amber-500" />
                Self-motivated researcher who builds complete frameworks from scratch and shares knowledge through publications and open-source contributions
              </li>
            </ul>
          </div>
        </section>

        {/* AI Works / Research Projects */}
        <section id="projects" className="mt-16 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
            AI Works Collection
          </h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Fin Whale Vocalization Detection"
              description="First study applying Self-Supervised Learning (SSL) to fin whale detection. Built complete supervised baseline with lightweight Transformer encoder, data pipeline, and ablation studies across normalization schemes."
              icon={Bot}
              highlight="NeurIPS 2025 Workshop · AUROC 0.914"
            />
            <ProjectCard
              title="Semantic Alignment via DPO"
              description="Mitigating semantic misalignment in text-to-image models via Direct Preference Optimization. Achieved 8–12% higher CLIP scores and 95.8% human preference in evaluation (n=57)."
              icon={Palette}
              highlight="ACL ARR 2026 Submission"
            />
            <ProjectCard
              title="Open-Unmix Audio Separation"
              description="Reproduced and enhanced Open-Unmix with XLSTM, SLSTM, MLSTM. Deployed OpenJMLA and Audiocaps for interactive separation. Built Python scripts for FID, KLD, FAD metrics."
              icon={BarChart3}
              highlight="University of Rochester"
            />
          </div>
        </section>

        {/* Publications & Sharing */}
        <section id="publications" className="mt-16 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Publications & Sharing
          </h2>
          <div className="space-y-6">
            <div className="grid gap-6 sm:grid-cols-2">
              <PublicationCard
                title="Supervised vs SSL for Fin Whale Vocalization Detection"
                venue="NeurIPS 2025 Workshop"
                description="Co-authored first SSL study for fin whale detection. SincNet front-end increased AUROC from 0.868 to 0.914 and F1 from 0.784 to 0.856. Extended with wav2vec 2.0 and data2vec."
              />
              <PublicationCard
                title="Mitigating Semantic Misalignment via Direct Preference Optimization"
                venue="ACL Rolling Review (ARR), Jan 2026"
                description="DPO-based approach for semantic faithfulness. Superior CLIP similarity and human preference across three benchmarks. Co-authored with University of Minnesota team."
              />
            </div>
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
              <h3 className="mb-4 font-semibold text-slate-900 dark:text-slate-100">Sharing</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex cursor-default items-center gap-3 rounded-lg border border-slate-200 p-3 opacity-75 dark:border-slate-700">
                  <Video size={24} className="text-accent" />
                  <div>
                    <p className="font-medium">Video / B站 / YouTube</p>
                    <p className="text-sm text-slate-500">Add your channel link in page.tsx</p>
                  </div>
                </div>
                <div className="flex cursor-default items-center gap-3 rounded-lg border border-slate-200 p-3 opacity-75 dark:border-slate-700">
                  <BookOpen size={24} className="text-accent" />
                  <div>
                    <p className="font-medium">Tech Blog / 掘金 / Medium</p>
                    <p className="text-sm text-slate-500">Add your blog link in page.tsx</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="mt-16 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Contact
          </h2>
          <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700 dark:bg-slate-900">
            <p className="text-slate-600 dark:text-slate-400">
              Open to academic collaboration, research opportunities, and industry roles in AI/ML.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:shuwen8681@gmail.com"
                className="inline-flex items-center gap-2 rounded-lg bg-accent px-4 py-2 text-white transition hover:bg-accent-hover"
              >
                <MessageCircle size={18} />
                Get in Touch
              </a>
              <a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg border border-slate-300 px-4 py-2 text-slate-700 transition hover:bg-slate-100 dark:border-slate-600 dark:text-slate-300 dark:hover:bg-slate-800"
              >
                Download Resume (PDF)
              </a>
            </div>
          </div>
        </section>

        <footer className="mt-20 border-t border-slate-200 py-8 text-center text-sm text-slate-500 dark:border-slate-700 dark:text-slate-400">
          © {new Date().getFullYear()} Shuwen Ge · Built with Next.js
        </footer>
      </main>
    </div>
  )
}
