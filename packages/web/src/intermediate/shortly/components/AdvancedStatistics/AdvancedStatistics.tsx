import { AdvancedStatisticsCard } from "../AdvancedStatisticsCard/AdvancedStatisticsCard";
import BrandRecognition from "../../assets/icon-brand-recognition.svg?react";
import DetailedRecords from "../../assets/icon-detailed-records.svg?react";
import FullyCustomizable from "../../assets/icon-fully-customizable.svg?react";

export interface AdvancedStatisticsProps {}

export const AdvancedStatistics = () => {
  return (
    <section className="bg-gray-200 px-4 flex flex-col items-center pt-32 lg:pt-40 pb-20">
      <h2 className="text-gray-800 font-bold text-3xl mb-4 text-center">
        Advanced Statistics
      </h2>
      <p className="text-gray-400 font-medium text-center text-sm px-10 lg:max-w-md lg:px-4">
        Track how your links are performing across the web with our advanced
        statistics dashboard
      </p>
      <div className="w-full mt-20 flex flex-col lg:flex-row lg:gap-4 lg:items-start gap-20 items-center relative lg:px-24">
        <AdvancedStatisticsCard
          icon={<BrandRecognition />}
          title="Brand Recognition"
          description="Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content."
        />
        <hr className="lg:w-24 lg:h-2 lg:mt-36 lg:-mb-0 lg:-mx-4 w-2 h-12 border-none bg-teal-400 -mt-20 -mb-10" />
        <AdvancedStatisticsCard
          className="lg:mt-10"
          icon={<DetailedRecords />}
          title="Detailed Records"
          description="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
        />
        <hr className="lg:w-24 lg:h-2 lg:mt-36 lg:-mb-0 lg:-mx-4 w-2 h-12 border-none bg-teal-400 -mt-20 -mb-10" />
        <AdvancedStatisticsCard
          className="lg:mt-20"
          icon={<FullyCustomizable />}
          title="Fully Customizable"
          description="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
        />
      </div>
    </section>
  );
};
