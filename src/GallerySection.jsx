import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import one from "./assets/one.jpg";
import two from "./assets/two.jpg";
import three from "./assets/three.jpg";
import four from "./assets/four.jpg";
import five from "./assets/five.jpg";
import six from "./assets/six.jpg";

const images = [one, two, three, four, five, six];

export default function GallerySection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="gallery" className="py-5 bg-gray-300">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12" data-aos="fade-up">
          My Projects
        </h2>
        <div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4"
          data-aos="fade-up"
        >
          {images.map((src, index) => (
            <div key={index} className="overflow-hidden shadow-lg">
              {index === 0 ? (
                <a href="https://fatimakashida.com/" target="_blank" rel="noopener noreferrer">
                  <img
                    src={src}
                    alt={`Gallery ${index + 1}`}
                    className="w-full bg-contain h-60 transform hover:scale-105 transition-transform duration-300"
                  />
                </a>
              ) : (
                <img
                  src={src}
                  alt={`Gallery ${index + 1}`}
                  className="w-full bg-contain h-60 transform hover:scale-105 transition-transform duration-300"
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
