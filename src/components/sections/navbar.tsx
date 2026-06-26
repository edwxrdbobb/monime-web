"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronDown, Menu } from "lucide-react";
import { useGSAP } from "@gsap/react";

import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { companyLinks, productLinks } from "@/lib/content";
import { Logo } from "@/components/sections/logo";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { gsap, ScrollTrigger, prefersReducedMotion } from "@/lib/gsap";

const navLinks = [
  { title: "Developers", href: "https://docs.monime.io/get-started" },
  { title: "Pricing", href: "/pricing" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openMenu, setOpenMenu] = useState<"products" | "company" | null>(null);
  const headerRef = useRef<HTMLElement>(null);
  const keepVisibleRef = useRef(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    keepVisibleRef.current = openMenu !== null;
  }, [openMenu]);

  useGSAP(
    () => {
      if (!headerRef.current || prefersReducedMotion()) return;

      const trigger = ScrollTrigger.create({
        start: "top top",
        end: "max",
        onUpdate(self) {
          const hide = self.direction === 1 && self.scroll() > 120 && !keepVisibleRef.current;
          gsap.to(headerRef.current, {
            yPercent: hide ? -130 : 0,
            duration: 0.4,
            ease: "power3.out",
            overwrite: true,
          });
        },
      });

      return () => trigger.kill();
    },
    { scope: headerRef },
  );

  return (
    <header
      ref={headerRef}
      className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 pt-4"
    >
      <nav
        onMouseLeave={() => setOpenMenu(null)}
        className={cn(
          "flex w-full max-w-6xl items-center justify-between gap-4 rounded-2xl px-4 py-2.5 transition-all duration-300 backdrop-blur-sm",
          scrolled
            ? "glass-strong shadow-3d"
            : "border border-transparent bg-background/30 backdrop-blur-md",
        )}
      >
        <Logo />

        <div className="hidden items-center gap-1 lg:flex">
          <NavDropdown
            label="Products"
            isOpen={openMenu === "products"}
            onOpen={() => setOpenMenu("products")}
          >
            <div className="grid w-[420px] grid-cols-2 gap-1 p-2">
              {productLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="rounded-xl p-3 transition-colors hover:bg-muted"
                >
                  <p className="text-sm font-medium text-foreground">{link.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{link.description}</p>
                </a>
              ))}
            </div>
          </NavDropdown>

          <NavDropdown
            label="Company"
            isOpen={openMenu === "company"}
            onOpen={() => setOpenMenu("company")}
          >
            <div className="flex w-44 flex-col gap-0.5 p-2">
              {companyLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className="rounded-lg px-3 py-2 text-sm text-foreground/90 transition-colors hover:bg-muted"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </NavDropdown>

          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground"
            >
              {link.title}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-2 lg:flex">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="lg"
            className="rounded-xl px-3.5"
            nativeButton={false}
            render={<a href="/download" />}
          >
            Download App
          </Button>
          <Button
            size="lg"
            className="group rounded-full bg-gradient-to-r from-primary to-violet-600 px-4 glow-primary transition-transform hover:scale-[1.03] hover:from-primary hover:to-violet-500"
            nativeButton={false}
            render={<a href="#cta" />}
          >
            Get Started
            <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}

function NavDropdown({
  label,
  isOpen,
  onOpen,
  children,
}: {
  label: string;
  isOpen: boolean;
  onOpen: () => void;
  children: React.ReactNode;
}) {
  return (
    <div className="relative" onMouseEnter={onOpen}>
      <button
        type="button"
        className={cn(
          "flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-muted hover:text-foreground",
          isOpen && "bg-muted text-foreground",
        )}
      >
        {label}
        <ChevronDown className={cn("size-3.5 transition-transform", isOpen && "rotate-180")} />
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.15 }}
            className="glass-strong absolute top-full left-0 mt-2 overflow-hidden rounded-2xl shadow-3d-lg"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MobileMenu() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        render={
          <button
            type="button"
            className="flex size-9 items-center justify-center rounded-xl border border-border lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-4" />
          </button>
        }
      />
      <SheetContent side="right" className="flex flex-col gap-1 px-5 py-6">
        <SheetHeader className="px-0 pb-4">
          <SheetTitle>
            <Logo />
          </SheetTitle>
        </SheetHeader>

        <p className="px-1 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Products
        </p>
        {productLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-muted"
          >
            {link.title}
          </a>
        ))}

        <p className="px-1 pt-3 pb-1 text-xs font-medium tracking-wide text-muted-foreground uppercase">
          Company
        </p>
        {companyLinks.map((link) => (
          <a
            key={link.title}
            href={link.href}
            onClick={() => setOpen(false)}
            className="rounded-lg px-3 py-2.5 text-sm font-medium text-foreground/90 transition-colors hover:bg-muted"
          >
            {link.title}
          </a>
        ))}

        <div className="mt-auto flex flex-col gap-2 pt-6">
          <Button
            variant="outline"
            size="lg"
            className="rounded-xl"
            nativeButton={false}
            render={<a href="/download" onClick={() => setOpen(false)} />}
          >
            Download App
          </Button>
          <Button
            size="lg"
            className="rounded-xl"
            nativeButton={false}
            render={<a href="#cta" onClick={() => setOpen(false)} />}
          >
            Get Started
          </Button>
        </div>
      </SheetContent>
    </Sheet>
  );
}
