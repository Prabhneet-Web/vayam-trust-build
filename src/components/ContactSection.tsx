import { Button } from "@/components/ui/button";
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle,
  ExternalLink
} from "lucide-react";

const ContactSection = () => {
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone / WhatsApp",
      value: "+91 84453 51415",
      href: "tel:+918445351415",
    },
    {
      icon: Mail,
      label: "Email",
      value: "vvdiprivatelimited@gmail.com",
      href: "mailto:vvdiprivatelimited@gmail.com",
    },
    {
      icon: MapPin,
      label: "Office Location",
      value: "Dehradun, Uttarakhand",
      href: "https://www.google.com/maps?q=30.28833770751953,78.08148956298828&z=17&hl=en",
    },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://www.instagram.com/vishwakarma._designs?igsh=MWdhOHNjaDZmbnFlZQ%3D%3D&utm_source=qr",
    },
    {
      name: "Google Business",
      href: "https://www.google.com/search?sca_esv=151c323f417ae83f&rlz=1CDGOYI_enIN1114IN1114&hl=en-GB&sxsrf=ANbL-n6hq9hg_aljT_TSeZKPw95OZMZcJg%3A1768986506702&kgmid=%2Fg%2F11x0chz6sw&q=V.Gautam%20%26%20associates",
    },
    {
      name: "Falconebiz",
      href: "https://www.falconebiz.com/company/VAYAM-VISHWAKARMA-DESIGNS-AND-INNOVATIONS-PRIVATE-LIMITED-U41001UT2025PTC020462",
    },
    {
      name: "Tracxn",
      href: "https://tracxn.com/d/legal-entities/india/vayam-vishwakarma-designs-and-innovations-private-limited/__6x-IYRnDNVVPd8ir_zKhFmBtHdYTHcigwQkrUDf6hfM",
    },
  ];

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left - Contact Info */}
          <div>
            <span className="text-accent font-semibold text-sm uppercase tracking-wider">
              Get In Touch
            </span>
            <h2 className="heading-lg text-foreground mt-2 mb-6">
              Let's Discuss Your Project
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Ready to start your construction journey? Reach out to us for a free consultation 
              and let's bring your vision to life.
            </p>

            {/* Contact Cards */}
            <div className="space-y-4 mb-8">
              {contactInfo.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="flex items-center gap-4 p-4 bg-card rounded-lg border border-border hover:border-primary/30 hover:shadow-soft transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">{item.label}</p>
                    <p className="font-semibold text-foreground">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="cta" size="lg" asChild>
                <a href="tel:+918445351415">
                  <Phone className="w-5 h-5" />
                  Call Now
                </a>
              </Button>
              <Button variant="navyOutline" size="lg" asChild>
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

            {/* Social Links */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-4">Find us on:</p>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary text-secondary-foreground rounded-lg text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                  >
                    {link.name}
                    <ExternalLink className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right - Map */}
          <div className="rounded-xl overflow-hidden border border-border shadow-elevated h-[400px] lg:h-auto lg:min-h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3442.8!2d78.08148956298828!3d30.28833770751953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDE3JzE4LjAiTiA3OMKwMDQnNTMuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Office Location"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
