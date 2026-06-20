import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center text-center gap-4">
      <h1 className="text-4xl font-semibold">404</h1>
      <p className="text-muted">Page not found</p>
      <Link
        href="/"
        className="text-sm text-muted border border-border rounded-md px-4 py-2 hover:text-foreground hover:border-foreground transition duration-200"
      >
        Back to home
      </Link>
    </div>
  );
}
