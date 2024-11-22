import OnboardingStepper from "@/components/onboarding-stepper";

export default function OnboardingPage() {
  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-semibold">Get Started with EngineDock</h1>
          <p className="text-sm text-muted-foreground">
            Complete these steps to start using our API services.
          </p>
        </div>
      </div>

      <div className="rounded-lg border bg-card">
        <OnboardingStepper />
      </div>
    </div>
  );
}
