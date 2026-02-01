import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-construction.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Modern construction site"
          className="w-full h-full object-cover"
        />
        <div 
          className="absolute inset-0"
          style={{ background: "var(--gradient-overlay)" }}
        />
        {/* Geometric Pattern Overlay */}
        <div className="absolute inset-0 pattern-diagonal opacity-30" />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom pt-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8 animate-fade-in-up">
            <span className="w-2 h-2 bg-accent rounded-full animate-pulse" />
            <span className="text-white/90 text-sm font-medium">MDDA Approved • Vastu Compliant</span>
          </div>

          {/* Headline */}
          <h1 
            className="heading-xl text-white mb-6 animate-fade-in-up text-balance"
            style={{ animationDelay: "0.1s" }}
          >
            Designing Foundations.
            <br />
            <span className="text-accent">Building Trust.</span>
          </h1>

          {/* Subheadline */}
          <p 
            className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Premium architecture, civil construction, and innovative design solutions 
            for residential & commercial projects in Dehradun.
          </p>

          {/* CTA Buttons */}
          <div 
            className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            <Button variant="cta" size="xl" asChild>
              <a href="tel:+918445351415">
                <Phone className="w-5 h-5" />
                Call Now
              </a>
            </Button>
            <Button variant="ctaOutline" size="xl" asChild>
              <a 
                href="https://wa.me/918445351415?text=Hello%2C%20I%27m%20interested%20in%20your%20construction%20services."
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Us
              </a>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div 
            className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">100+</p>
              <p className="text-white/60 text-sm">Projects</p>
            </div>
            <div className="text-center border-x border-white/20">
              <p className="text-3xl md:text-4xl font-bold text-white">4+</p>
              <p className="text-white/60 text-sm">Years Exp</p>
            </div>
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-white">95%</p>
              <p className="text-white/60 text-sm">Satisfaction</p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a 
        href="#about"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/60 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="w-8 h-8" />
      </a>
    </section>
  );
};

export default HeroSection;
