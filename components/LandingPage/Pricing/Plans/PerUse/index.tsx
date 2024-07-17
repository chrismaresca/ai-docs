// Plans.tsx
import React from "react";
import PlanCard from "@/components/LandingPage/Pricing/PlanCard";

const plans = [
  {
    num: 1,
    name: "Essential",
    price: "29",
    description: "There are many variations available, but the majority have suffered.",
    features: ["Unlimited placeholder texts", "Consectetur adipiscing elit", "Excepteur sint occaecat cupidatat", "Officia deserunt mollit anim"],
  },
  {
    num: 2,
    name: "Perform",
    price: "49",
    description: "There are many variations available, but the majority have suffered.",
    features: ["Unlimited placeholder texts", "Consectetur adipiscing elit", "Excepteur sint occaecat cupidatat", "Officia deserunt mollit anim", "Predefined chunks as necessary"],
    isPopular: true,
  },
  {
    num: 3,
    name: "Enterprise",
    price: "79",
    description: "There are many variations available, but the majority have suffered.",
    features: ["Unlimited placeholder texts", "Consectetur adipiscing elit", "Excepteur sint occaecat cupidatat", "Officia deserunt mollit anim", "Predefined chunks as necessary", "Free from repetition"],
  },
];

const PerUsePlans: React.FC = () => {
  return (
    <div className="mt-14 grid gap-6 lg:grid-cols-3 sm:grid-cols-2 lg:items-center">
      hey
      {plans.map((plan, index) => (
        <PlanCard key={index} plan={plan} />
      ))}
    </div>
  );
};

export default PerUsePlans;
