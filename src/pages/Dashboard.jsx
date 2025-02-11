import AppDemoSection from "components/dashboard/AppDemoSection";
import FeaturesSection from "components/dashboard/FeaturesSection";
import HeroSection from "components/dashboard/HeroSection";
import HowItWorks from "components/dashboard/HowItWorks";
import StartHereSection from "components/dashboard/StartHereSection";
import StatsSection from "components/dashboard/StatsSection.";
import UsersComments from "components/dashboard/UsersComments";
import PromoBanner from "components/download/PromoBanner";

function Dashboard() {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      <AppDemoSection />
      <HowItWorks />
      <FeaturesSection />
      <StartHereSection />
      <UsersComments />
      <PromoBanner />
    </div>
  );
}

export default Dashboard;
