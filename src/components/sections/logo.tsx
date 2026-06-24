import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";

export function Logo({
  className,
  alwaysWhite = false,
}: {
  className?: string;
  /** Force the white logo regardless of theme (for fixed dark backgrounds). */
  alwaysWhite?: boolean;
}) {
  if (alwaysWhite) {
    return (
      <Link href="/" className={cn("flex items-center", className)} aria-label="Monime">
        <Image
          src="/monime-logo-white.webp"
          alt="Monime"
          width={512}
          height={133}
          className="h-7 w-auto object-contain"
        />
      </Link>
    );
  }

  return (
    <Link href="/" className={cn("flex items-center", className)} aria-label="Monime">
      {/* Dark text logo for light backgrounds */}
      <Image
        src="/monime-logo.webp"
        alt="Monime"
        width={512}
        height={106}
        priority
        className="h-7 w-auto object-contain dark:hidden"
      />
      {/* White logo for dark backgrounds */}
      <Image
        src="/monime-logo-white.webp"
        alt="Monime"
        width={512}
        height={133}
        priority
        className="hidden h-7 w-auto object-contain dark:block"
      />
    </Link>
  );
}
