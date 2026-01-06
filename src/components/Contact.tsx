import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";
import { Button } from "@/components/ui/button";

const Contact = () => {
  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      label: t.contact.phone,
      value: "+41 78 218 03 38",
      href: "tel:+41782180338",
    },
    {
      icon: Mail,
      label: t.contact.email,
      value: "antohii@internet.ru",
      href: "mailto:antohii@internet.ru",
    },
    {
      icon: MapPin,
      label: t.contact.address,
      value: "Rosenstrasse 2, 9430 St. Margrethen SG, CH",
      href: "https://maps.google.com/?q=Rosenstrasse+2+9430+St.+Margrethen",
    },
  ];

  return (
    <section id="kontakt" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.contact.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4">
            {t.contact.title1}
            <br />
            <span className="text-primary">{t.contact.title2}</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-6">
            {t.contact.description}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {contactInfo.map((info, i) => {
              const Icon = info.icon;
              return (
                <a
                  key={i}
                  href={info.href}
                  target={info.label === t.contact.address ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  className="flex gap-4 p-6 bg-background rounded-xl border hover:border-primary hover:bg-primary/5 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center group-hover:bg-accent/30 transition-colors">
                    <Icon className="h-6 w-6 text-accent" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground font-medium">
                      {info.label}
                    </div>
                    <div className="text-lg font-semibold text-foreground">
                      {info.value}
                    </div>
                  </div>
                </a>
              );
            })}

            <Button asChild size="lg" className="w-full mt-8">
              <a href="tel:+41782180338">
                <Phone className="mr-2 h-5 w-5" />
                {t.contact.callNow}
              </a>
            </Button>
          </motion.div>

          {/* Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="rounded-xl overflow-hidden border h-full min-h-[400px]"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2705.5573649999996!2d9.586841!3d47.4853!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479b2f3e5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sRosenstrasse%202%2C%209430%20St.%20Margrethen!5e0!3m2!1sde!2sch!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: "400px" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
