import Reveal from "@/components/Reveal";

export default function PageHeader({ eyebrow, title, intro }) {
  return (
    <header className="mx-auto max-w-6xl px-6 md:px-10 pt-20 md:pt-28 pb-10">
      <Reveal>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{eyebrow}</p>
      </Reveal>
      <Reveal delay={0.08}>
        <h1 className="mt-5 font-display text-5xl font-light leading-[1.02] md:text-7xl">{title}</h1>
      </Reveal>
      {intro &&
      <Reveal delay={0.16}>
          
        </Reveal>
      }
    </header>);

}