import type { Metadata } from "next";
import BBR3DExperience from "@/components/3d/BBR3DExperience";

export const metadata: Metadata = {
  title: "Blood Bank Refrigerator — 3D Interactive Experience",
  description:
    "Explore the MarKEN Blood Bank Refrigerator in full 3D. Rotate, zoom, and click hotspots to discover key features, specifications, and engineering details.",
};

export default function BBR3DExperiencePage() {
  return <BBR3DExperience />;
}
