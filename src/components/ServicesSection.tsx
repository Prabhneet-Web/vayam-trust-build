import { 
  Compass, 
  HardHat, 
  PaintBucket, 
  Calculator, 
  Building2, 
  Key 
} from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Compass,
      title: "MDDA Approved Maps",
      description: "Official map approvals and documentation compliant with MDDA regulations.",
    },
    {
      icon: Building2,
      title: "Vastu-Based Planning",
      description: "Traditional Vastu principles integrated with modern architectural design.",
    },
    {
      icon: HardHat,
      title: "Civil & Architectural Works",
      description: "Complete civil construction services with qualified architects & engineers.",
    },
    {
      icon: PaintBucket,
      title: "Interior & Exterior",
      description: "Modern interiors and stunning facades that reflect your style and personality.",
    },
    {
      icon: Key,
      title: "Construction",
      description: "End-to-end construction services from foundation to finishing with quality materials.",
    },
    {
      icon: Calculator,
      title: "Estimation & Costing",
      description: "Accurate project estimates and budgeting to ensure no surprises along the way.",
    },
  ];

  return (
    <section id="services" className="section-padding bg-card">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-accent font-semibold text-sm uppercase tracking-wider">
            Our Services
          </span>
          <h2 className="heading-lg text-foreground mt-2 mb-4">
            Comprehensive Construction Solutions
          </h2>
          <p className="text-muted-foreground text-lg">
            From blueprint to reality, we offer end-to-end services for your dream project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-background rounded-xl border border-border hover:border-primary/30 hover:shadow-elevated transition-all duration-300"
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-primary rounded-lg flex items-center justify-center mb-6 group-hover:bg-accent transition-colors duration-300">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
