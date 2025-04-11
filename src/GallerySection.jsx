import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  "/images/1.jpg",
  "/images/2.jpg",
  "/images/3.jpg",
  "/images/4.jpg",
  "/images/5.jpg",
  "/images/6.jpg",
];

export default function GallerySection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="gallery" className="py-5 bg-gray-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12 " data-aos="fade-up">My Projects</h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-aos="fade-up"
        >
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden shadow-lg">
              <img
                src={src}
                alt={`Gallery ${index + 1}`}
                className="w-full bg-contain h-60 transform hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
