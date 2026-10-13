import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/Reveal";
import RotatingWord from "@/components/RotatingWord";
import ChapterList from "@/components/ChapterList";
import { profile } from "@/data/profile";

export default function Home() {
  return (
    <div>
      <section className="mx-auto max-w-6xl px-6 pb-16 pt-20 md:px-10 md:pt-28">
        <div className="grid items-end gap-14 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <p className="font-mono text-xs uppercase tracking-[0.35em] text-accent">{profile.eyebrow}</p>
            </Reveal>
            <Reveal delay={0.08}>
              <h1 className="text-cosmic mt-6 font-display text-6xl font-light leading-[0.95] sm:text-7xl md:text-8xl">
                {profile.name}
              </h1>
            </Reveal>
            <Reveal delay={0.16}>
              <p className="mt-6 font-display text-3xl md:text-5xl">
                Trying <RotatingWord words={profile.heroWords} />
              </p>
            </Reveal>
            <Reveal delay={0.24}>
              <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">{profile.heroIntro}</p>
            </Reveal>
            <Reveal delay={0.32}>
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] text-background transition-colors hover:bg-accent">
                  
                  Get in touch
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
                <Link
                  to="/experience"
                  className="inline-flex items-center gap-2 rounded-full border border-border px-6 py-3 font-mono text-xs uppercase tracking-[0.2em] transition-colors hover:border-accent hover:text-accent">
                  
                  Résumé
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-4">
            <Reveal delay={0.2}>
              <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                    "radial-gradient(55% 50% at 50% 42%, hsl(var(--accent) / 0.3), transparent 70%), radial-gradient(50% 45% at 50% 96%, hsl(var(--accent-2) / 0.24), transparent 72%)"
                  }} />
                
                <img
                  src={profile.photo}
                  alt={profile.name}
                  className="relative z-10 h-full w-full object-cover object-top shadow-[0_18px_50px_hsl(var(--accent)/0.35)] ring-1 ring-border rounded-[28px_28px_48px_48px]" />
                
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-border bg-secondary/20 backdrop-blur-sm">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4 md:px-10">
          {profile.facts.map((f, i) =>
          <Reveal key={f.label} delay={i * 0.05}>
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{f.label}</p>
              <p className="mt-2 text-lg">{f.value}</p>
            </Reveal>
          )}
        </div>
      </section>

      <ChapterList />
    </div>);

}