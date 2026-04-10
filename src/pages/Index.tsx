import StorySection from '@/components/sections/StorySection';
import ThreeTouchesSection from '@/components/sections/ThreeTouchesSection';
import KpiAndRegulationSection from '@/components/sections/KpiAndRegulationSection';
import ConclusionSection from '@/components/sections/ConclusionSection';

export default function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <StorySection />
      <ThreeTouchesSection />
      <KpiAndRegulationSection />
      <ConclusionSection />
    </div>
  );
}
