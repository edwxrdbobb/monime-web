import { cn } from "@/lib/utils";

type MarqueeProps = {
  children: React.ReactNode;
  className?: string;
  reverse?: boolean;
  pauseOnHover?: boolean;
  duration?: number;
  gap?: number;
};

export function Marquee({
  children,
  className,
  reverse = false,
  pauseOnHover = true,
  duration = 32,
  gap = 40,
}: MarqueeProps) {
  const groupClassName = cn(
    "flex shrink-0 items-center animate-marquee",
    reverse && "[animation-direction:reverse]",
    pauseOnHover && "group-hover:[animation-play-state:paused]",
    className,
  );

  return (
    <div
      className="group flex w-full overflow-hidden mask-fade-x"
      style={
        {
          "--gap": `${gap}px`,
          "--marquee-duration": `${duration}s`,
        } as React.CSSProperties
      }
    >
      <div className={groupClassName} style={{ gap: "var(--gap)" }}>
        {children}
      </div>
      <div
        aria-hidden
        className={groupClassName}
        style={{ gap: "var(--gap)", marginLeft: "var(--gap)" }}
      >
        {children}
      </div>
    </div>
  );
}
