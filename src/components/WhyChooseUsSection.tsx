import { 
  Shield, 
  Settings, 
  BadgeDollarSign, 
  Sparkles, 
  FileCheck 
} from "lucide-react";

const WhyChooseUsSection = () => {
  const reasons = [
    {
      icon: Shield,
      title: "Trusted Builder",
      description: "Proven track record with satisfied clients across Dehradun.",
    },
    {
      icon: Settings,
      title: "Customized Solutions",
      description: "Every project is tailored to your unique needs and vision.",
    },
    {
      icon: BadgeDollarSign,
      title: "Affordable Pricing",
      description: "Quality construction that fits your budget without compromise.",
    },
    {
      icon: Sparkles,
      title: "Modern Designs",
      description: "Contemporary aesthetics blended with timeless functionality.",
    },
    {
      icon: FileCheck,
      title: "Transparent Process",
      description: "Clear communication and updates at every project stage.",
    },
  ];

  return (
    <section id="why-us" className="section-padding bg-primary pattern-diagonal">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Why Choose Us
          </span>
          <h2 className="heading-lg text-primary-foreground mt-2 mb-4">
            The Vayam Vishwakarma Difference
          </h2>
          <p className="text-primary-foreground/70 text-lg">
            We don't just build structures—we build relationships based on trust and excellence.
          </p>
        </div>

        {/* Reasons Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:bg-white/10 transition-colors duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                <reason.icon className="w-7 h-7 text-accent-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-lg font-semibold text-primary-foreground mb-2">
                {reason.title}
              </h3>
              <p className="text-primary-foreground/70 text-sm leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsSection;
