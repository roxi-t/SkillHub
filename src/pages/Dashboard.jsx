import AppDemoSection from "components/dashboard/AppDemoSection";
import HeroSection from "components/dashboard/HeroSection";
import HowItWorks from "components/dashboard/HowItWorks";
import StatsSection from "components/dashboard/StatsSection.";
import PromoBanner from "components/download/PromoBanner";

function Dashboard() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AppDemoSection />
      <HowItWorks />
      <PromoBanner />
    </div>
  );
}

export default Dashboard;
