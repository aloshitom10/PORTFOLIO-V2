import Link from "next/link";

export default function NotFound() {
  return (
    <main className="section-shell not-found">
      <p className="mono">404</p>
      <h1>Page not found</h1>
      <p>That route doesn’t exist on this issue.</p>
      <Link href="/" className="button button--primary">
        Return home
      </Link>
    </main>
  );
}
