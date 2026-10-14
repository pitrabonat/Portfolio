import { Link } from "react-router-dom";
import { chapters, profile } from "@/data/profile";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-24 border-t border-border">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 md:grid-cols-3 md:px-10">
        <div>
          <p className="font-display text-3xl">{profile.name}</p>
          <p className="mt-2 text-sm text-muted-foreground">{profile.role}</p>
          <p className="mt-1 text-xs text-muted-foreground/70">Ігор Борисенко · Игорь Борисенко</p>
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Sections</p>
          {chapters.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="font-mono text-xs uppercase tracking-[0.15em] text-muted-foreground transition-colors hover:text-foreground"
            >
              {c.title}
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-2">
          <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-muted-foreground">Contacts</p>
          {profile.contacts.slice(0, 3).map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="text-sm text-muted-foreground transition-colors hover:text-accent"
            >
              {c.value}
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-6xl px-6 py-6 font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground md:px-10">
          © {year} {profile.name}
        </p>
      </div>
    </footer>
  );
}