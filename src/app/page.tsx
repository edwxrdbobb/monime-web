import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { TrustLogos } from "@/components/sections/trust-logos";
import { Features } from "@/components/sections/features";
import { InPerson } from "@/components/sections/in-person";
import { PaymentMethods } from "@/components/sections/payment-methods";
import { OnlinePayments } from "@/components/sections/online-payments";
import { PciBanner } from "@/components/sections/pci-banner";
import { Faq } from "@/components/sections/faq";
import { Cta } from "@/components/sections/cta";
import { Footer } from "@/components/sections/footer";

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <TrustLogos />
        <Features />
        <InPerson />
        <PaymentMethods />
        <OnlinePayments />
        <PciBanner />
        <Faq />
        <Cta />
      </main>
      <Footer />
    </div>
  );
}
