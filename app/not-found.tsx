import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-7xl font-bold tracking-tight mb-2">404</h1>
        <p className="text-2xl font-semibold text-apple-light mb-4">Page not found.</p>
        <p className="text-apple-gray text-lg mb-8">
          The page you are looking for does not exist or has been moved.
        </p>
        <Link href="/" className="pill-button pill-button-primary">
          Back to home
        </Link>
      </div>
    </section>
  );
}
