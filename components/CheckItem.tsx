export default function CheckItem({
  children,
  className = 'text-apple-light/80 text-lg',
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className="flex items-start gap-3">
      <div className="w-5 h-5 mt-0.5 rounded-full bg-apple-blue/20 flex items-center justify-center flex-shrink-0">
        <svg
          className="w-3 h-3 text-apple-blue"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={3}
          aria-hidden="true"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className={className}>{children}</span>
    </div>
  );
}
