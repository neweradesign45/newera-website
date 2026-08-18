import { MetadataRoute } from "next";
import { BRAND_NAME } from "@/lib/constants";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NewEra Automations — AI Agents & Workflow Agency",
    short_name: "NewEra AI",
    description:
      "We build AI agents, smart workflows, and automation systems that help businesses scale operations.",
    start_url: "/",
    display: "standalone",
    background_color: "#0c0d0e",
    theme_color: "#0c0d0e",
    icons: [
      {
        src: "/icon",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  };
}
