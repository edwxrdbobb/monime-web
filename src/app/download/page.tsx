import type { Metadata } from "next";

import { SiteFrame } from "@/components/sections/site-frame";
import { DownloadApp } from "@/components/sections/download-app";

export const metadata: Metadata = {
  title: "Download Monime Space",
  description:
    "Download the Monime app and experience modern payments for growing businesses. Available on iOS and Android.",
};

export default function DownloadPage() {
  return (
    <SiteFrame cta={false}>
      <DownloadApp />
    </SiteFrame>
  );
}
