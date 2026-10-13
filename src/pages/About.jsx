import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function About() {
  return (
    <div>
      <PageHeader eyebrow="01 — About" title="A little about me" intro={profile.aboutIntro} />

      <section className="mx-auto grid max-w-6xl gap-14 px-6 pb-20 md:grid-cols-12 md:px-10">
        <div className="space-y-6 text-lg leading-relaxed md:col-span-7">
          {profile.about.map((p, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <p>{p}</p>
            </Reveal>
          ))}
        </div>

        <div className="md:col-span-5">
          <Reveal>
            <div className="rounded-sm border border-border bg-secondary/40 p-8 backdrop-blur-md">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">In short</p>
              <dl className="mt-6 space-y-5">
                {profile.facts.map((f) => (
                  <div
                    key={f.label}
                    className="flex justify-between gap-6 border-b border-border pb-4 last:border-0 last:pb-0"
                  >
                    <dt className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground">{f.label}</dt>
                    <dd className="text-right">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 pb-24 md:px-10">
        <Reveal>
          <div className="rounded-sm border border-border bg-secondary/40 p-10 backdrop-blur-md md:p-16">
            <div className="space-y-4">
              {profile.quote.map((line, i) => (
                <p key={i} className="text-cosmic font-display text-3xl font-light leading-tight md:text-5xl">
                  {line}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <Link
            to="/experience"
            className="mt-10 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:text-accent"
          >
            Next — experience & education
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </section>
    </div>
  );
}