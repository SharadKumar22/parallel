export default function Logo() {
  return (
    <div className="flex items-center gap-2 select-none">
      <div className="flex gap-1">
        <span className="h-5 w-1 rounded-full bg-current opacity-80" />
        <span className="h-5 w-1 rounded-full bg-current" />
      </div>

      <span className="text-sm font-semibold tracking-[0.35em] uppercase">
        Parallel
      </span>
    </div>
  );
}