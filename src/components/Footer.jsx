import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export default function Footer() {
  return (
    <footer className="border-t border-navy-lighter/30 py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 sm:flex-row sm:justify-between">
        <p className="text-sm text-text-muted">
          &copy; {new Date().getFullYear()} Sunny Ni. Built with React &
          Tailwind CSS.
        </p>
        <div className="flex gap-4">
          <a
            href="https://github.com/StrawbunnySunny"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <FaGithub className="h-5 w-5" />
          </a>
          <a
            href="https://linkedin.com/in/yourprofile"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <FaLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:your.email@example.com"
            aria-label="Email"
            className="text-text-muted transition-colors hover:text-accent"
          >
            <HiMail className="h-5 w-5" />
          </a>
        </div>
      </div>
    </footer>
  );
}
