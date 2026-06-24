import { cn } from "@/lib/utils";

export function BentoGrid({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:grid-cols-3", className)}>
      {children}
    </div>
  );
}

export function BentoItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "group flex flex-col items-center justify-center gap-3 rounded-2xl glass p-6 text-center shadow-3d transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-3d-lg",
        className,
      )}
    >
      {children}
    </div>
  );
}
