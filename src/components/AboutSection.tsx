import { CheckCircle, Award, Users, Building } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    {
      icon: Award,
      title: "MDDA Approved",
      description: "Fully compliant with municipal regulations",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Qualified architects & engineers",
    },
    {
      icon: Building,
      title: "End-to-End Solutions",
      description: "Complete civil & architectural services",
    },
  ];

  const credentials = [
    "Vastu-based planning & design",
    "Licensed & insured contractors",
    "Modern construction techniques",
    "Quality materials & craftsmanship",
    "Transparent pricing & timelines",
    "Post-construction support",
  ];

  return (
    <section id="about" className="section-padding bg-background pattern-grid">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              About Us
            </span>
            <h2 className="heading-lg text-foreground mt-2 mb-6">
              Building Excellence Since Day One
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              <strong className="text-foreground">Vayam Vishwakarma Designs & Innovations Pvt Ltd</strong>, led by 
              <strong className="text-foreground"> Ar. Akshay Raturi</strong>, is a trusted name in architecture 
              and construction in Dehradun. We combine traditional Vastu principles with modern design 
              innovation to create spaces that inspire.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-8">
              Our team of well-qualified architects and engineers work together to deliver 
              projects that exceed expectations—on time and within budget. From initial concept 
              to final handover, we're with you every step of the way.
            </p>

            {/* Credentials Grid */}
            <div className="grid sm:grid-cols-2 gap-3">
              {credentials.map((item, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                  <span className="text-foreground text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Highlight Cards */}
          <div className="space-y-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="flex items-start gap-5 p-6 bg-card rounded-xl border border-border shadow-soft hover:shadow-elevated transition-shadow duration-300"
              >
                <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground text-lg mb-1">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}

            {/* CIN Badge */}
            <div className="p-4 bg-secondary rounded-lg border border-border">
              <p className="text-xs text-muted-foreground">
                <span className="font-semibold text-foreground">CIN:</span> U41001UT2025PTC020462
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Registered under the Companies Act, 2013
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
