import { useState } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Sun, Moon, Download } from "lucide-react";

export default function App() {
  const [dark, setDark] = useState(true);

  const bg = dark ? "bg-black text-white" : "bg-white text-gray-900";
  const card = dark
    ? "bg-zinc-900 border border-zinc-800 hover:border-zinc-700"
    : "bg-gray-50 border border-gray-200 hover:border-gray-300";

  return (
    <div className={`min-h-screen transition-colors duration-300 ${bg}`}>
      
      {/* NAVBAR */}
      <nav className="max-w-6xl mx-auto px-6 py-6 flex justify-between items-center">
        <h1 className="text-3xl font-semibold tracking-tight">
          Ritwik Singh
        </h1>

        <div className="flex items-center gap-6">
          <button
            onClick={() => setDark(!dark)}
            className="opacity-80 hover:opacity-100 transition"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>

          <a
            href="/ritwik_resume_sde_2.pdf"
            download
            className="flex items-center gap-2 font-medium opacity-80 hover:opacity-100 transition"
          >
            <Download size={18} />
            Resume
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-6 pt-12 pb-16">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-[1.08]"
        >
          Backend Engineer
          <br />
          Scaling High-Throughput Systems
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="mt-8 max-w-lg text-lg leading-relaxed opacity-80"
        >
          Backend owner of the PayU Payment Links platform, operating at{" "}
          <span className="font-semibold">140K+ links/day</span>{" "}
          and sustaining{" "}
          <span className="font-semibold">500+ TPS</span>.{" "}
          Building production-scale backend systems with strong reliability,
          performance, and consistency guarantees.
        </motion.p>

        <div className="flex gap-6 mt-8 opacity-80">
          <a href="mailto:ritwiksinghofficial@gmail.com" className="hover:opacity-100 transition">
            <Mail />
          </a>
          <a
            href="https://linkedin.com/in/ritwik-singh-0aa436191"
            target="_blank"
            className="hover:opacity-100 transition"
          >
            <Linkedin />
          </a>
          <a
            href="https://github.com/RitwikSGit"
            target="_blank"
            className="hover:opacity-100 transition"
          >
            <Github />
          </a>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-6xl mx-auto px-6">
        <div className="h-px bg-zinc-800 dark:bg-zinc-800 bg-gray-200 opacity-40" />
      </div>

      {/* ENGINEERING APPROACH */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-20">
        <h3 className="text-2xl font-semibold mb-10">
          Engineering Approach
        </h3>

        <div className="grid md:grid-cols-3 gap-6">
          <div className={`p-6 rounded-xl transition ${card}`}>
            <h4 className="font-semibold mb-3">Scalable System Design</h4>
            <p className="text-sm opacity-70">
              Designed backend systems handling high-volume traffic using
              horizontal scaling, read replicas, and asynchronous processing.
            </p>
          </div>

          <div className={`p-6 rounded-xl transition ${card}`}>
            <h4 className="font-semibold mb-3">Reliability & Idempotency</h4>
            <p className="text-sm opacity-70">
              Architected lifecycle-driven flows ensuring consistency across
              retries, concurrent requests, and failure scenarios.
            </p>
          </div>

          <div className={`p-6 rounded-xl transition ${card}`}>
            <h4 className="font-semibold mb-3">Performance Engineering</h4>
            <p className="text-sm opacity-70">
              Achieved sub-200ms latency through Redis caching layers,
              optimized SQL queries, and efficient batching strategies.
            </p>
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold mb-14">Experience</h3>

        <div className="space-y-16">

          <div>
            <h4 className="text-xl font-semibold">
              PayU Payments — Software Engineer
            </h4>
            <p className="opacity-60 mt-1 mb-4">
              July 2025 – Present
            </p>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li>Led architectural redesign consolidating multiple services into a unified scalable backend.</li>
              <li>Built read-heavy system (80–90%) leveraging MySQL replicas for horizontal scaling.</li>
              <li>Reduced latency to sub-200ms using Redis + in-memory caching.</li>
              <li>Developed asynchronous bulk engine processing 2,000 records per batch.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold">
              PayU Payments — Associate Software Engineer
            </h4>
            <p className="opacity-60 mt-1 mb-4">
              July 2023 – June 2025
            </p>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li>Implemented idempotent lifecycle logic across 6 payment states.</li>
              <li>Published 20M+ Kafka lifecycle events monthly.</li>
              <li>Reduced high-volume SQL read latency by 20% under peak load.</li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold">
              PayU Payments — Software Engineer Intern
            </h4>
            <p className="opacity-60 mt-1 mb-4">
              January 2023 – June 2023
            </p>
            <ul className="list-disc pl-6 space-y-2 opacity-80">
              <li>Contributed to 3 production lending modules.</li>
              <li>Improved pre-production bug detection by 15% via API automation.</li>
              <li>Reduced regression effort by 40% and achieved 90%+ test coverage.</li>
              <li>Improved debugging efficiency through correlation ID propagation.</li>
            </ul>
          </div>

        </div>
      </section>

      {/* TECHNICAL EXPERTISE */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h3 className="text-3xl font-bold mb-14">Technical Expertise</h3>

        <div className="grid md:grid-cols-2 gap-8">

          <div className={`p-6 rounded-xl transition ${card}`}>
            <h4 className="font-semibold mb-3">Languages</h4>
            <p className="opacity-80">Java, SQL</p>
          </div>

          <div className={`p-6 rounded-xl transition ${card}`}>
            <h4 className="font-semibold mb-3">Backend Systems</h4>
            <p className="opacity-80">
              Spring Boot, REST APIs, Microservices Architecture
            </p>
          </div>

          <div className={`p-6 rounded-xl transition ${card}`}>
            <h4 className="font-semibold mb-3">Databases & Messaging</h4>
            <p className="opacity-80">
              MySQL, Redis, Kafka
            </p>
          </div>

          <div className={`p-6 rounded-xl transition ${card}`}>
            <h4 className="font-semibold mb-3">Cloud & DevOps</h4>
            <p className="opacity-80">
              AWS (EC2, RDS), Docker, CI/CD, Grafana, Git
            </p>
          </div>

        </div>
      </section>

      <footer className="text-center py-12 opacity-40 text-sm">
        © {new Date().getFullYear()} Ritwik Singh
      </footer>
    </div>
  );
}
