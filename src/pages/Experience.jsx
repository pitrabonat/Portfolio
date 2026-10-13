import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Experience() {
  return (
    <div>
      <PageHeader eyebrow="02 — Experience & education" title="My path" intro={profile.experienceIntro} />

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <div className="relative space-y-14 border-l border-border pl-8 md:pl-14">
          {profile.experience.map((e, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="relative">
                <span className="glow-soft absolute -left-[37px] top-2 h-2.5 w-2.5 rounded-full bg-gradient-to-br from-accent to-accent2 md:-left-[61px]" />
                <p className="font-mono text-xs uppercase tracking-[0.25em] text-accent">{e.period}</p>
                <h3 className="mt-3 font-display text-3xl md:text-4xl">{e.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{e.place}</p>
                <p className="mt-4 max-w-2xl leading-relaxed">{e.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.1}>
          <Link
            to="/skills"
            className="mt-16 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent"
          >
            Next — skills
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}