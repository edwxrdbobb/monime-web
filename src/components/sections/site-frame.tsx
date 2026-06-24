import { Navbar } from "@/components/sections/navbar";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export function SiteFrame({
  children,
  cta = true,
}: {
  children: React.ReactNode;
  cta?: boolean;
}) {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        {children}
        {cta && <Cta />}
      </main>
      <Footer />
    </div>
  );
}
