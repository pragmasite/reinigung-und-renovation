import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useLanguage } from "@/hooks/useLanguage";

const Gallery = () => {
  const { t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);

  const galleryImages = [
    { src: "/images/gallery-1.jpg", alt: "Transportfahrzeug" },
    { src: "/images/gallery-2.jpg", alt: "Umzugsvorbereitung" },
    { src: "/images/gallery-4.jpg", alt: "Wandrenovierung" },
    { src: "/images/gallery-5.jpg", alt: "Außenfassade" },
    { src: "/images/gallery-6.jpg", alt: "Bodenverlegung" },
    { src: "/images/gallery-7.jpg", alt: "Küchenmaterialien" },
    { src: "/images/gallery-8.jpg", alt: "Flurrenovierung" },
    { src: "/images/gallery-9.jpg", alt: "Raumrenovierung" },
    { src: "/images/gallery-10.jpg", alt: "Fertiggestellter Raum" },
    { src: "/images/gallery-11.jpg", alt: "Polierter Boden" },
    { src: "/images/gallery-12.jpg", alt: "Abrissarbeiten" },
    { src: "/images/gallery-13.jpg", alt: "Demontage" },
    { src: "/images/gallery-14.jpg", alt: "Rahmenbau" },
  ];

  const galleryImagesEn = [
    { src: "/images/gallery-1.jpg", alt: "Transport Vehicle" },
    { src: "/images/gallery-2.jpg", alt: "Moving Preparation" },
    { src: "/images/gallery-4.jpg", alt: "Wall Renovation" },
    { src: "/images/gallery-5.jpg", alt: "Exterior Facade" },
    { src: "/images/gallery-6.jpg", alt: "Floor Installation" },
    { src: "/images/gallery-7.jpg", alt: "Kitchen Materials" },
    { src: "/images/gallery-8.jpg", alt: "Hallway Renovation" },
    { src: "/images/gallery-9.jpg", alt: "Room Renovation" },
    { src: "/images/gallery-10.jpg", alt: "Finished Room" },
    { src: "/images/gallery-11.jpg", alt: "Polished Floor" },
    { src: "/images/gallery-12.jpg", alt: "Demolition Work" },
    { src: "/images/gallery-13.jpg", alt: "Demolition" },
    { src: "/images/gallery-14.jpg", alt: "Frame Building" },
  ];

  const images = t.nav.profession.includes("REINIGUNG")
    ? galleryImages
    : galleryImagesEn;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="galerie" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <span className="text-sm uppercase tracking-widest text-primary">
            {t.gallery.label}
          </span>
          <h2 className="font-serif text-4xl md:text-5xl mt-4 mb-6">
            {t.gallery.title}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t.gallery.description}
          </p>
        </motion.div>

        {/* Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-2xl aspect-video">
            <AnimatePresence mode="wait">
              <motion.img
                key={currentIndex}
                src={images[currentIndex].src}
                alt={images[currentIndex].alt}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-full object-cover"
              />
            </AnimatePresence>

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <ChevronLeft className="h-6 w-6" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-2 rounded-full bg-white/20 hover:bg-white/30 text-white transition-colors"
            >
              <ChevronRight className="h-6 w-6" />
            </button>

            {/* Image Counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/40 text-white px-4 py-2 rounded-full text-sm">
              {currentIndex + 1} / {images.length}
            </div>
          </div>

          {/* Image Description */}
          <div className="text-center mt-6">
            <p className="text-lg font-medium text-foreground">
              {images[currentIndex].alt}
            </p>
          </div>

          {/* Thumbnail Navigation */}
          <div className="flex gap-2 mt-6 overflow-x-auto pb-2">
            {images.map((image, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border-2 transition-all ${
                  currentIndex === index
                    ? "border-primary"
                    : "border-border hover:border-primary/50"
                }`}
              >
                <img
                  src={image.src}
                  alt={`Thumbnail ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;
