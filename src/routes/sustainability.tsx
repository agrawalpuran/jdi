import { createFileRoute } from "@tanstack/react-router";
import { PageHero } from "@/components/site/PageHero";
import { Section, SectionHeader } from "@/components/site/Section";
import { MetricsGrid } from "@/components/site/MetricsGrid";
import { CTASection } from "@/components/site/CTASection";
import { Split } from "@/components/site/Split";
import { InfraDiagram } from "@/components/site/InfraDiagram";

const susMetrics = [
  { value: "1.18", label: "Target PUE across new-build" },
  { value: "92", suffix: "%", label: "Free-cooling hours per year" },
  { value: "100", suffix: "%", label: "Renewable-matched by 2028" },
  { value: "0", label: "Potable water in new cooling loops" },
] as const;

export const Route = createFileRoute("/sustainability")({
  head: () => ({
    meta: [
      { title: "Sustainability — JDI" },
      { name: "description", content: "Density, efficiency, and renewables — engineered into every facility from day one." },
      { property: "og:title", content: "Sustainability — JDI" },
      { property: "og:description", content: "Lower carbon per token." },
    ],
  }),
  component: Sustainability,
});

function Sustainability() {
  return (
    <>
      <PageHero
        eyebrow="Sustainability"
        title={<>Lower carbon per <em className="italic text-primary/90">token</em>.</>}
        kicker="Efficiency isn't a report we publish once a year. It's a design constraint on every single component."
      />

      <Section className="border-t border-hairline">
        <MetricsGrid data={susMetrics} columns={2} />
      </Section>

      <Section className="border-t border-hairline">
        <Split
          eyebrow="Approach"
          title={<>Density is the cleanest kilowatt.</>}
          body={
            <>
              <p>
                A watt spent moving heat is a watt not spent on compute. Higher rack density
                shortens fibre runs, reduces conversion losses, and — done properly — lowers the
                embodied carbon of every model trained on the floor.
              </p>
              <p>
                Our new-build standard is 60 kW liquid-cooled, PPA-backed renewables, and zero
                potable water in the primary cooling loop.
              </p>
            </>
          }
          aside={<InfraDiagram />}
        />
      </Section>

      <CTASection title="Read the full sustainability framework." primaryLabel="Request the report" />
    </>
  );
}
