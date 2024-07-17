import React, { useState } from "react";
import TabsComponent from "../../../Preline/Tabs";

interface PricingTitleAndSwitchProps {
  labels: string[];
  isMonthly: boolean;
  toggleSwitch: (label: string) => void;
}

const PricingTitleAndSwitch: React.FC<PricingTitleAndSwitchProps> = ({ labels, isMonthly, toggleSwitch }) => {
  return (
    <div>
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-14 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Pricing</h2>
        <p className="hidden md:block mt-1 text-gray-600 dark:text-neutral-400">Whatever your status, our offers evolve according to your needs.</p>
      </div>
      {/* End Title */}

      <TabsComponent labels={labels} activeTab={isMonthly ? "Monthly" : "Per Use"} onTabChange={toggleSwitch} />

      {/* End Switch */}
    </div>
  );
};

export default PricingTitleAndSwitch;
