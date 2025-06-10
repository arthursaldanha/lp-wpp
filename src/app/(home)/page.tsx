import { Hero } from "./layout/1-Hero";
import { Benefits } from "./layout/2-Benefits";
import { WppEcomm } from "./layout/3-WppEcomm";
import { WhoIsItFor } from "./layout/5-WhoIsItFor";
import { PricingPlans } from "./layout/6-PricingPlans";
import { FAQ } from "./layout/7-FAQ";

export default function Home() {
  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Hero />
      {/* <Benefits /> */}
      <WppEcomm />
      <WhoIsItFor />
      <PricingPlans />
      <FAQ />
    </div>
  );
}
