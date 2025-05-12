import { FaWhatsapp, FaEnvelope, FaLinkedin } from "react-icons/fa";

export default function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-8">Contact Me</h2>
        <p className="text-gray-600 mb-12">Let’s work together! Reach out to me anytime.</p>
        
        <div className="flex justify-center gap-8 flex-wrap text-red-400 text-2xl">
          <a href="https://wa.me/923311343511" target="_blank" rel="noopener noreferrer" className="hover:text-green-500 transition">
            <FaWhatsapp /> <span className="text-base ml-2">WhatsApp</span>
          </a>
          <a href="mailto:codewithbaloch7@gmail.com" className="hover:text-red-500 transition">
            <FaEnvelope /> <span className="text-base ml-2">Email</span>
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-800 transition">
            <FaLinkedin /> <span className="text-base ml-2">LinkedIn</span>
          </a>
        </div>
      </div>
    </section>
  );
}
