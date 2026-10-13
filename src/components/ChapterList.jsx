import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import { chapters } from "@/data/profile";

export default function ChapterList() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-20 md:px-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">Sections</p>
      </Reveal>
      <div className="mt-8 divide-y divide-border border-y border-border">
        {chapters.map((c, i) => (
          <Reveal key={c.to} delay={i * 0.06}>
            <Link to={c.to} className="group flex items-center justify-between gap-6 py-7">
              <div className="flex items-baseline gap-6">
                <span className="font-mono text-xs text-accent">{c.n}</span>
                <div>
                  <p className="font-display text-3xl transition-colors group-hover:text-accent md:text-4xl">
                    {c.title}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">{c.desc}</p>
                </div>
              </div>
              <ArrowUpRight className="h-6 w-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-accent" />
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}