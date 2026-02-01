import { Phone, Mail, MapPin, Instagram, ExternalLink } from "lucide-react";

const Footer = () => {
  const services = [
    "Architectural Planning",
    "Civil Construction",
    "Interior Design",
    "Estimation & Costing",
    "Structural Design",
    "Turnkey Projects",
  ];

  const quickLinks = [
    { label: "About Us", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Why Choose Us", href: "#why-us" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Main Footer */}
      <div className="container-custom section-padding pb-12">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-accent rounded-lg flex items-center justify-center">
                <span className="text-accent-foreground font-bold text-lg">VV</span>
              </div>
              <div>
                <p className="font-bold text-sm leading-tight">Vayam Vishwakarma</p>
                <p className="text-primary-foreground/70 text-xs">Designs & Innovations</p>
              </div>
            </div>
            <p className="text-primary-foreground/70 text-sm leading-relaxed mb-4">
              Building trust through quality construction and innovative architectural solutions in Dehradun.
            </p>
            <p className="text-primary-foreground/50 text-xs">
              CIN: U41001UT2025PTC020462
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Services</h4>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a 
                  href="tel:+918445351415"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors"
                >
                  +91 84453 51415
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <a 
                  href="mailto:vvdiprivatelimited@gmail.com"
                  className="text-primary-foreground/70 hover:text-primary-foreground text-sm transition-colors break-all"
                >
                  vvdiprivatelimited@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent mt-1 flex-shrink-0" />
                <span className="text-primary-foreground/70 text-sm">
                  Dehradun, Uttarakhand
                </span>
              </li>
            </ul>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.instagram.com/vishwakarma._designs?igsh=MWdhOHNjaDZmbnFlZQ%3D%3D&utm_source=qr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://www.google.com/search?sca_esv=151c323f417ae83f&rlz=1CDGOYI_enIN1114IN1114&hl=en-GB&sxsrf=ANbL-n6hq9hg_aljT_TSeZKPw95OZMZcJg%3A1768986506702&kgmid=%2Fg%2F11x0chz6sw&q=V.Gautam%20%26%20associates"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                aria-label="Google Business"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container-custom py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
            <p className="text-primary-foreground/60 text-sm">
              © {new Date().getFullYear()} Vayam Vishwakarma Designs & Innovations Pvt Ltd. All rights reserved.
            </p>
            <p className="text-primary-foreground/40 text-xs">
              Designing Foundations. Building Trust.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
