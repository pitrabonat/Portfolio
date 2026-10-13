import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <div className="w-full max-w-md space-y-6 text-center">
        <h1 className="font-display text-7xl font-light text-muted-foreground">404</h1>
        <div className="mx-auto h-px w-16 bg-border" />
        <h2 className="text-2xl">Page not found</h2>
        <p className="text-muted-foreground">
          The page <span className="font-mono text-foreground">{pathname}</span> doesn't exist.
        </p>
        <Link
          to="/"
          className="inline-flex items-center rounded-lg border border-border px-4 py-2 text-sm transition-colors hover:bg-secondary"
        >
          Go home
        </Link>
      </div>
    </div>
  );
}
