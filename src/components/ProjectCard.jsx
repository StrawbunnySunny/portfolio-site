import { useState } from "react";
import { motion } from "framer-motion";
import { HiExternalLink, HiChevronDown } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, delay: index * 0.15 }}
      className="group relative rounded-2xl border border-navy-lighter/50 bg-navy-light/40 transition-all hover:border-accent/30 hover:bg-navy-light/70"
    >
      {/* Image placeholder */}
      <div className="relative h-48 overflow-hidden rounded-t-2xl bg-navy-lighter/30 sm:h-56">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-full items-center justify-center">
            <div className="text-center">
              <div className="mx-auto mb-3 flex h-16 w-16 items-center justify-center rounded-2xl bg-accent/10">
                <span className="text-2xl font-bold text-accent">
                  {project.title.charAt(0)}
                </span>
              </div>
              <p className="text-xs text-text-muted">Preview coming soon</p>
            </div>
          </div>
        )}
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-light/80 to-transparent" />
      </div>

      <div className="p-6">
        {/* Title + links */}
        <div className="mb-3 flex items-start justify-between gap-3">
          <h3 className="text-lg font-bold text-text-primary">
            {project.title}
          </h3>
          <div className="flex shrink-0 gap-2">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`GitHub repo for ${project.title}`}
                className="rounded-lg p-2 text-text-muted transition-colors hover:bg-navy-lighter/50 hover:text-accent"
              >
                <FaGithub className="h-5 w-5" />
              </a>
            )}
            {project.live && (
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Live demo for ${project.title}`}
                className="rounded-lg p-2 text-text-muted transition-colors hover:bg-navy-lighter/50 hover:text-accent"
              >
                <HiExternalLink className="h-5 w-5" />
              </a>
            )}
          </div>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>

        {/* Tags */}
        <div className="mb-4 flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-md bg-accent/8 px-2.5 py-1 text-xs font-medium text-accent"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Commentary toggle */}
        {project.commentary && (
          <div className="border-t border-navy-lighter/40 pt-3">
            <button
              onClick={() => setExpanded(!expanded)}
              className="flex w-full items-center gap-1.5 text-sm font-medium text-text-muted transition-colors hover:text-accent"
            >
              <HiChevronDown
                className={`h-4 w-4 transition-transform duration-200 ${
                  expanded ? "rotate-180" : ""
                }`}
              />
              {expanded ? "Hide" : "Read"} my commentary
            </button>
            <motion.div
              initial={false}
              animate={{
                height: expanded ? "auto" : 0,
                opacity: expanded ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <p className="mt-3 text-sm leading-relaxed text-text-muted italic">
                "{project.commentary}"
              </p>
            </motion.div>
          </div>
        )}
      </div>
    </motion.article>
  );
}
