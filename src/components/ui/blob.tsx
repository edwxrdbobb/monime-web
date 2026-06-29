import { cn } from "@/lib/utils";

type BlobProps = {
  className?: string;
  /** Tailwind gradient color stops, e.g. "from-primary via-blue-500 to-sky-400" */
  colors?: string;
  /** Animation variant */
  variant?: "default" | "slow";
};

/**
 * An organic, animated, heavily-blurred gradient blob — the immersive hero
 * backdrop seen across the reference designs. Purely decorative.
 */
export function Blob({
  className,
  colors = "from-primary via-blue-500 to-sky-400",
  variant = "default",
}: BlobProps) {
  return (
    <div
      aria-hidden
      className={cn(
        "pointer-events-none absolute -z-10 bg-gradient-to-br opacity-60 blur-3xl",
        variant === "slow" ? "animate-blob-slow" : "animate-blob",
        colors,
        className,
      )}
    />
  );
}
