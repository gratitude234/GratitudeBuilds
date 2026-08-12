import Link from "next/link";

export default function NotFound() {
  return (
    <section className="not-found blueprint-grid">
      <span className="eyebrow">ERROR / 404</span>
      <h1>This part hasn&apos;t<br />been built yet.</h1>
      <p>The page you followed does not exist or has moved somewhere quieter.</p>
      <Link className="button button-primary" href="/">Return to the index <span aria-hidden="true">→</span></Link>
    </section>
  );
}
