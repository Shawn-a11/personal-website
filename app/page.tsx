import Sidebar from '@/components/Sidebar'
import ProjectCard from '@/components/ProjectCard'
import PublicationCard from '@/components/PublicationCard'
import { MessageCircle } from 'lucide-react'

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
                <span className="shrink-0 whitespace-nowrap font-medium text-slate-900 dark:text-slate-100">Builder & Sharer:</span>
                <span>Self-motivated researcher who builds complete frameworks from scratch and shares knowledge through publications and open-source contributions</span>
              </li>
            </ul>
          </div>
        </section>

        {/* AI Works — technical implementation focus */}
        <section id="projects" className="mt-16 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
            AI Works Collection
          </h2>
          <p className="mb-6 text-sm text-slate-500 dark:text-slate-400">
            Technical projects: frameworks, pipelines, and implementations.
          </p>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Fin Whale Vocalization Detection"
              description="Built supervised baseline (Transformer encoder, STFT front-end) and SSL pipeline (CPC + SincNet + BRN). Ablation across LN, GN, BIN, RMSNorm. Data loading and preprocessing for Seglvik & Mediterranean datasets."
              highlight="NeurIPS 2025 Workshop"
              href="https://hal.science/hal-05493363v1/file/CHAREYRE_NeurIPS_2025_SSL_for_finwhale_paper.pdf"
            />
            <ProjectCard
              title="Sem-DPO: Semantic Alignment via DPO"
              description="Implemented semantic-weighted DPO loss with offline embedding. Integrated CLIP encoder for cosine-distance weighting. Fine-tuned Qwen-1.5B and GPT-2 on DiffusionDB, Lexica, COCO."
              highlight="ACL ARR 2026 · arXiv"
              href="https://arxiv.org/pdf/2507.20133"
            />
            <ProjectCard
              title="Open-Unmix Audio Separation"
              description="Reproduced Open-Unmix, enhanced with XLSTM/SLSTM/MLSTM. Deployed OpenJMLA and Audiocaps. Built Python scripts for FID, KLD, FAD. WSL + multi-GPU training pipeline."
              highlight="University of Rochester"
            />
          </div>
        </section>

        {/* Publications */}
        <section id="publications" className="mt-16 scroll-mt-24">
          <h2 className="mb-6 text-2xl font-bold text-slate-900 dark:text-slate-100">
            Publications
          </h2>
          <div className="grid gap-6 sm:grid-cols-2">
            <PublicationCard
              title="Supervised vs SSL for Fin Whale Vocalization Detection"
              venue="NeurIPS 2025 Workshop"
              description="First SSL study for fin whale detection. SincNet front-end increased AUROC from 0.868 to 0.914 and F1 from 0.784 to 0.856. SSL outperforms supervised in low-label and low-SNR regimes."
              href="https://hal.science/hal-05493363v1/file/CHAREYRE_NeurIPS_2025_SSL_for_finwhale_paper.pdf"
            />
            <PublicationCard
              title="Sem-DPO: Mitigating Semantic Inconsistency in Preference Optimization for Prompt Engineering"
              venue="ACL Rolling Review (ARR), Jan 2026"
              description="8–12% higher CLIP similarity and 95.8% human preference over DPO baseline. Semantically-weighted DPO for text-to-image prompt optimization."
              href="https://arxiv.org/pdf/2507.20133"
            />
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
          © 2026 Shuwen Ge
        </footer>
      </main>
    </div>
  )
}
