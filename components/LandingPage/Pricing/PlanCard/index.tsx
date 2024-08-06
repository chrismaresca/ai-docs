// PlanCard.tsx
import React from "react";
import Link from "next/link";
import PrelineSlider from "@/components/Preline/Slider";

interface Plan {
  num: number;
  name: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

interface PlanCardProps {
  plan: Plan;
}

const PlanCard: React.FC<PlanCardProps> = ({ plan }) => {
  return (
    <div className={`h-full ${plan.num === 3 ? "sm:col-span-2 lg:col-span-1" : ""} ${plan.isPopular ? "dark" : ""}`}>
      <div className="relative flex flex-col h-full p-6 rounded-2xl bg-white bg-primary dark:bg-slate-900 border border-slate-200 dark:border-slate-900 shadow shadow-slate-950/5">
        {plan.isPopular && (
          <div className="absolute top-0 right-0 mr-6 -mt-4">
            <div className="inline-flex items-center text-xs font-semibold py-1.5 px-3 bg-emerald-500 text-white rounded-full shadow-sm shadow-slate-950/5">Most Popular</div>
          </div>
        )}
        <div className="mb-5">
          <div className="text-slate-900 dark:text-slate-200 font-semibold mb-1">{plan.name}</div>
          <div className="inline-flex items-baseline mb-2">
            <span className="text-slate-900 dark:text-slate-200 font-bold text-3xl">$</span>
            <span className="text-slate-900 dark:text-slate-200 font-bold text-4xl">{plan.price}</span>
            <span className="text-slate-500 font-medium">/mo</span>
          </div>
          <div className="text-sm text-slate-500 mb-5">{plan.description}</div>
          <Link className="w-full inline-flex justify-center whitespace-nowrap rounded-lg bg-primary text-primary-foreground dark:text-primary-foreground px-3.5 py-2.5 text-sm font-medium text-white shadow-sm shadow-indigo-950/10 hover:bg-indigo-600 focus-visible:outline-none focus-visible:ring focus-visible:ring-indigo-300 dark:focus-visible:ring-slate-600 transition-colors duration-150" href={{ pathname: "/auth/register", query: { plan: plan.name.toLowerCase() } }}>
            Get Started
          </Link>
          {plan.num === 3 && (
            <div className="mt-3 text-center text-slate-900 dark:text-slate-200">
              <PrelineSlider id="123" min={3} max={49} step={1} />
            </div>
          )}
        </div>
        <div className="text-slate-900 dark:text-slate-200 font-medium mb-3">Includes:</div>
        <ul className="text-slate-600 dark:text-slate-400 text-sm space-y-3 grow">
          {plan.features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg className="w-3 h-3 fill-emerald-500 mr-3 shrink-0" viewBox="0 0 12 12" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z"></path>
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PlanCard;
