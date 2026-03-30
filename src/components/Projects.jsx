import { motion } from "framer-motion";
import { projects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            Projects
          </h2>
          <h3 className="mb-4 text-3xl font-bold text-text-primary sm:text-4xl">
            What I've been building
          </h3>
          <p className="mb-12 max-w-2xl text-text-secondary">
            A selection of recent projects spanning quantitative finance, data
            visualization, and machine learning. Click the commentary toggle on
            each card to read my thoughts on the project.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
