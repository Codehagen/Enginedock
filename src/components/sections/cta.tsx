import { Section } from "@/components/section";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <Section id="cta">
      <div className="border overflow-hidden relative text-center py-16 mx-auto">
        <p className="max-w-3xl text-foreground mb-6 text-balance mx-auto font-medium text-3xl">
          Ready to streamline your financial operations?
        </p>
        <p className="max-w-2xl text-muted-foreground mb-8 text-balance mx-auto">
          Join hundreds of businesses using EngineDock to simplify their banking
          integrations and automate financial workflows.
        </p>

        <div className="flex justify-center gap-4">
          <Button className="flex items-center gap-2">Get Started</Button>
          <Button variant="outline" className="flex items-center gap-2">
            Contact Sales
          </Button>
        </div>
      </div>
    </Section>
  );
}
