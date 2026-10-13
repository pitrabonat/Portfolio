import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Skills() {
  return (
    <div>
      <PageHeader eyebrow="03 — Skills" title="What I can do" intro={profile.skillsIntro} />

      <section className="mx-auto max-w-6xl space-y-16 px-6 pb-20 md:px-10">
        {profile.skills.groups.map((g) => (
          <div key={g.title} className="grid gap-6 border-t border-border pt-8 md:grid-cols-12">
            <div className="md:col-span-3">
              <Reveal>
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{g.title}</p>
              </Reveal>
            </div>
            <div className="flex flex-wrap gap-3 md:col-span-9">
              {g.items.map((item, i) => (
                <Reveal key={item} delay={i * 0.03}>
                  <span className="inline-block rounded-full border border-border bg-secondary/30 px-5 py-2.5 backdrop-blur-sm transition-colors hover:border-accent hover:text-accent">
                    {item}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        ))}

        <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-12">
          <div className="md:col-span-3">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">Languages</p>
            </Reveal>
          </div>
          <div className="space-y-4 md:col-span-9">
            {profile.skills.languages.map((l, i) => (
              <Reveal key={l.name} delay={i * 0.05}>
                <div className="flex items-baseline justify-between gap-6 border-b border-border pb-3">
                  <span className="text-lg">{l.name}</span>
                  <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{l.level}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent"
          >
            Next — contact
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}