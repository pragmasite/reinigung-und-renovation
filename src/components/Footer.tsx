import { useLanguage } from "@/hooks/useLanguage";
import { Heart } from "lucide-react";

const Footer = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-serif text-2xl font-bold mb-3">Antohi</h3>
            <p className="text-background/80 text-sm leading-relaxed">
              {t.footer.description}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-semibold mb-4">{t.footer.navigation}</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#ueber-uns"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {t.nav.about}
                </a>
              </li>
              <li>
                <a
                  href="#dienstleistungen"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {t.nav.services}
                </a>
              </li>
              <li>
                <a
                  href="#galerie"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {t.nav.gallery}
                </a>
              </li>
              <li>
                <a
                  href="#kontakt"
                  className="text-background/80 hover:text-background transition-colors"
                >
                  {t.nav.contact}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-4">{t.contact.label}</h4>
            <div className="space-y-2 text-sm">
              <p className="text-background/80">
                <a
                  href="tel:+41782180338"
                  className="hover:text-background transition-colors"
                >
                  +41 78 218 03 38
                </a>
              </p>
              <p className="text-background/80">
                <a
                  href="mailto:antohii@internet.ru"
                  className="hover:text-background transition-colors"
                >
                  antohii@internet.ru
                </a>
              </p>
              <p className="text-background/80 text-xs mt-3">
                Rosenstrasse 2<br />
                9430 St. Margrethen, CH
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center text-sm text-background/80">
            <p>
              &copy; {currentYear} Antohi. {t.footer.copyright}
            </p>
            <div className="flex items-center gap-1 mt-4 md:mt-0">
              Made with <Heart className="h-4 w-4 fill-accent text-accent" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
