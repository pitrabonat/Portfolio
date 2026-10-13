import { useState } from "react";
import { ArrowUpRight, Copy, Check } from "lucide-react";
import PageHeader from "@/components/PageHeader";
import Reveal from "@/components/Reveal";
import { profile } from "@/data/profile";

export default function Contact() {
  const [hover, setHover] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = profile.contacts.find((c) => c.type === "email");
  const others = profile.contacts.filter((c) => c.type !== "email");
  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(email.value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      /* буфер обмена недоступен — ничего страшного */
    }
  };
  const btn =
    "inline-flex items-center gap-2 rounded-sm border border-current px-4 py-2 text-sm transition-opacity hover:opacity-70";

  return (
    <div>
      <PageHeader eyebrow="04 — Contact" title="Let's connect" intro={profile.contactIntro} />

      <section
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        className={`mt-6 transition-colors duration-500 ${
          hover ? "bg-accent text-accent-foreground" : "bg-secondary/30 backdrop-blur-sm"
        }`}
      >
        <div className="mx-auto max-w-6xl px-6 py-16 md:px-10 md:py-24">
          <p className="font-mono text-xs uppercase tracking-[0.3em] opacity-70">Email</p>
          <a
            href={email.href}
            className="mt-4 block break-all font-display text-4xl font-light transition-opacity hover:opacity-80 sm:text-5xl md:text-7xl"
          >
            {email.value}
          </a>

          <div className="mt-8 flex flex-wrap gap-3">
            <a href={email.href} className={btn}>
              Write an email <ArrowUpRight className="h-4 w-4" />
            </a>
            <a
              href={`https://mail.google.com/mail/?view=cm&to=${email.value}`}
              target="_blank"
              rel="noreferrer"
              className={btn}
            >
              Open in Gmail <ArrowUpRight className="h-4 w-4" />
            </a>
            <button type="button" onClick={copyEmail} className={btn}>
              {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copied" : "Copy"}
            </button>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10">
        <div className="grid gap-4 md:grid-cols-2">
          {others.map((c, i) => (
            <Reveal key={c.label} delay={i * 0.05}>
              <a
                href={c.href}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center justify-between rounded-sm border border-border bg-secondary/30 px-6 py-5 backdrop-blur-sm transition-colors hover:border-accent"
              >
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">{c.label}</p>
                  <p className="mt-1 text-lg transition-colors group-hover:text-accent">{c.value}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-accent" />
              </a>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <div className="mt-14 rounded-sm border border-border bg-secondary/40 p-8 backdrop-blur-md md:p-10">
            <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent">Status</p>
            <p className="mt-3 font-display text-2xl md:text-3xl">{profile.status}</p>
            <p className="mt-3 max-w-xl text-muted-foreground">{profile.contactNote}</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}