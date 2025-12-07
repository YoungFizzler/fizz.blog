import { ActivitySection } from "@/components/activity-section";
import { Hero } from "@/components/hero";
import { ProjectsSection } from "@/components/projects-section";
import { Footer } from "@/components/footer";
export default function Home() {
  return (
    <div className="page">
      <Hero />
      <ProjectsSection />
      <ActivitySection />
      <Footer />
    </div>
  );
}
