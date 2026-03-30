import { motion } from "framer-motion";
import { HiMail } from "react-icons/hi";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const links = [
  {
    label: "GitHub",
    href: "https://github.com/StrawbunnySunny",
    icon: FaGithub,
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/yourprofile",
    icon: FaLinkedin,
  },
  {
    label: "Email",
    href: "mailto:your.email@example.com",
    icon: HiMail,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-sm font-medium tracking-widest text-accent uppercase">
            Contact
          </h2>
          <h3 className="mb-6 text-3xl font-bold text-text-primary sm:text-4xl">
            Let's connect
          </h3>
          <p className="mb-10 text-text-secondary leading-relaxed">
            I'm always open to discussing new opportunities, interesting
            projects, or just chatting about finance and tech. Feel free to reach
            out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
        >
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith("mailto") ? undefined : "_blank"}
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 rounded-xl border border-navy-lighter/50 bg-navy-light/40 px-6 py-3.5 text-sm font-medium text-text-secondary transition-all hover:border-accent/40 hover:text-accent hover:bg-navy-light/70"
            >
              <link.icon className="h-5 w-5" />
              {link.label}
            </a>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12"
        >
          <a
            href="mailto:your.email@example.com"
            className="inline-block rounded-lg bg-accent px-8 py-3 text-sm font-semibold text-navy transition-all hover:bg-accent-hover hover:shadow-lg hover:shadow-accent/20"
          >
            Say Hello
          </a>
        </motion.div>
      </div>
    </section>
  );
}
