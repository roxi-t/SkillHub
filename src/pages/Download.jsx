import DownloadSection from "components/download/DownloadSection";
import PromoBanner from "components/download/PromoBanner";
import StatsSection from "components/download/StatsSection";

function Download() {
  return (
    <div className="bg-[#EDF2F6] text-[#494953]">
      <DownloadSection />
      <StatsSection />
      <PromoBanner />
    </div>
  );
}

export default Download;
