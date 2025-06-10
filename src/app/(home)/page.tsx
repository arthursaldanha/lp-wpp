"use client";

import {
  Hero,
  Benefits,
  HowItWorks,
  ToolDemonstration,
  Steps,
  PricingPlans,
  Form,
  FAQ,
} from "@/app/(home)/layout";
import { ExperienceDialog } from "@/app/(home)/components/ExperienceDialog";

import { useDisclosure } from "@/hooks/useDisclosure";

export default function Home() {
  const experience = useDisclosure({ defaultIsOpen: false });

  return (
    <div className="max-w-[1440px] w-full mx-auto">
      <Hero experience={experience} />
      <Benefits experience={experience} />
      <HowItWorks experience={experience} />
      {/* Tem alo errado aqui com as animações */}
      <ToolDemonstration />
      <Steps experience={experience} />
      <PricingPlans experience={experience} />
      <Form />
      <FAQ experience={experience} />

      <ExperienceDialog
        open={experience.isOpen}
        onOpenChange={experience.onToggle}
      />
    </div>
  );
}
