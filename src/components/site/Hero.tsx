import { site } from "@/data/site";
import { CTAButton } from "./CTAButton";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-end overflow-hidden pb-20 pt-40 md:pt-52">
      {/* Ambient background */}
      <div aria-hidden className="absolute inset-0 gradient-radial" />
      <div aria-hidden className="absolute inset-0 mesh-lines opacity-40" />
      <div
        aria-hidden
        className="absolute -top-40 left-1/2 -translate-x-1/2 h-[600px] w-[900px] rounded-full blur-3xl opacity-30 animate-pulse-slow"
        style={{ background: "radial-gradient(closest-side, var(--glow), transparent)" }}
      />

      <div className="container-x relative">
        <div className="max-w-5xl">
          <Reveal>
            <div className="flex items-center gap-3 mb-10">
              <span className="h-px w-8 bg-primary/60" />
              <span className="eyebrow text-primary/80">
                JDI · Version 01 · Field build
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="font-display text-[clamp(3rem,9vw,9.5rem)] leading-[0.94] tracking-[-0.04em] text-balance">
              <span className="gradient-text">Infrastructure</span>
              <br />
              <span className="text-foreground/80">for the</span>{" "}
              <em className="italic text-primary font-normal">intelligence</em>
              <br />
              <span className="text-foreground/80">era.</span>
            </h1>
          </Reveal>

          <Reveal delay={0.25}>
            <p className="mt-12 max-w-xl text-lg md:text-xl text-muted-foreground leading-relaxed">
              {site.brand.description}
            </p>
          </Reveal>

          <Reveal delay={0.35}>
            <div className="mt-12 flex flex-wrap items-center gap-4">
              <CTAButton to="/ai-infrastructure">Explore AI Infrastructure</CTAButton>
              <CTAButton to="/about" variant="outline">
                Read our thesis
              </CTAButton>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.5} className="mt-24 md:mt-32">
          <div className="flex items-end justify-between gap-8 border-t border-hairline pt-8">
            <div className="max-w-sm">
              <p className="eyebrow mb-3">Now shipping</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                220 MW of contracted capacity across six metros. Liquid-cooled halls, GPU-ready
                from day one.
              </p>
            </div>
            <div className="hidden md:flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
              <span>Systems nominal · IN-BOM-04</span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
