'use client';

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <section className="min-h-screen flex items-center justify-center bg-black text-white px-4">
      <div className="text-center max-w-md">
        <h1 className="text-5xl font-bold tracking-tight mb-4">Something went wrong.</h1>
        <p className="text-apple-gray text-lg mb-8">
          An unexpected error occurred. Please try again.
        </p>
        <button
          onClick={reset}
          className="pill-button pill-button-primary"
        >
          Try again
        </button>
      </div>
    </section>
  );
}
