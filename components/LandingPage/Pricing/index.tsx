"use client";
import React, { useState } from "react";
import PricingTitleAndSwitch from "./PricingTitleAndSwitch";
import MonthlyPlans from "./Plans/Monthly";
import PerUsePlans from "./Plans/PerUse";

const Pricing: React.FC = () => {
  const labels = ["Per Use", "Monthly"];
  const [isMonthly, setIsMonthly] = useState(true);

  const toggleSwitch = (label: string) => {
    setIsMonthly(label.toLowerCase() === "monthly");
    console.log("Is Monthly:", label.toLowerCase() === "monthly");
  };

  return (
    // <!-- Pricing -->
    <div className="px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      <PricingTitleAndSwitch labels={labels} isMonthly={isMonthly} toggleSwitch={toggleSwitch} />
      <div className="transition-opacity duration-700 ease-in-out">{isMonthly ? <MonthlyPlans /> : <PerUsePlans />}</div>{" "}
    </div>
  );
};

export default Pricing;
