import { motion } from "framer-motion";
import {
  SiPython,
  SiReact,
  SiJavascript,
  SiPandas,
  SiNumpy,
  SiTailwindcss,
  SiGit,
} from "react-icons/si";
import { HiChartBar, HiCode, HiDatabase } from "react-icons/hi";

const techStack = [
  { name: "Python", icon: SiPython },
  { name: "React", icon: SiReact },
  { name: "JavaScript", icon: SiJavascript },
  { name: "pandas", icon: SiPandas },
  { name: "NumPy", icon: SiNumpy },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
];

const interests = [
  {
    icon: HiChartBar,
    title: "Quantitative Finance",
    text: "Portfolio construction, backtesting, and market data analysis",
  },
  {
    icon: HiCode,
    title: "Software Engineering",
    text: "Building clean, performant tools with modern web and data stacks",
  },
  {
    icon: HiDatabase,
    title: "Data Analysis",
    text: "Transforming raw financial data into actionable insights",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1 },
  }),
};

export default function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeUp}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            About
          </h2>
          <h3 className="mb-12 text-3xl font-bold text-text-primary sm:text-4xl">
            A bit about me
          </h3>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Bio */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeUp}
            custom={1}
          >
            <p className="mb-4 leading-relaxed text-text-secondary">
              I'm a developer with a strong interest in quantitative finance and
              data-driven decision making. I enjoy building software that bridges
              the gap between financial theory and practical tooling — whether
              that's a portfolio backtesting engine, an interactive charting
              dashboard, or a machine learning experiment.
            </p>
            <p className="leading-relaxed text-text-secondary">
              When I'm not coding, you'll find me reading about market
              microstructure, experimenting with new datasets, or writing about
              what I've learned. I believe the best way to understand something
              deeply is to build it from scratch.
            </p>
          </motion.div>

          {/* Interest cards */}
          <div className="grid gap-4 sm:grid-cols-1">
            {interests.map((item, i) => (
              <motion.div
                key={item.title}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.2 }}
                variants={fadeUp}
                custom={i + 2}
                className="flex gap-4 rounded-xl border border-navy-lighter/50 bg-navy-light/50 p-5 transition-colors hover:border-accent/30"
              >
                <item.icon className="mt-0.5 h-6 w-6 shrink-0 text-accent" />
                <div>
                  <h4 className="mb-1 text-sm font-semibold text-text-primary">
                    {item.title}
                  </h4>
                  <p className="text-sm text-text-muted">{item.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Tech stack */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp}
          custom={5}
          className="mt-16"
        >
          <h4 className="mb-6 text-sm font-medium text-text-muted">
            Technologies I work with
          </h4>
          <div className="flex flex-wrap gap-3">
            {techStack.map((tech) => (
              <span
                key={tech.name}
                className="inline-flex items-center gap-2 rounded-full border border-navy-lighter/50 bg-navy-light/40 px-4 py-2 text-sm text-text-secondary transition-colors hover:border-accent/40 hover:text-accent"
              >
                <tech.icon className="h-4 w-4" />
                {tech.name}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
