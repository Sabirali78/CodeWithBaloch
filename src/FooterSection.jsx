import { FaTwitter, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center md:items-start">
        
        {/* Left Side: Copyright & Social */}
        <div className="text-center md:text-left mb-6 md:mb-0">
          <p>© {new Date().getFullYear()} CodeWithBaloch. All rights reserved.</p>
          <div className="flex justify-center md:justify-start space-x-4 mt-4 text-xl">
            <a href="https://wa.me/923001234567" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-green-400" aria-label="WhatsApp">
              <FaWhatsapp />
            </a>
            <a href="mailto:youremail@example.com" className="text-gray-400 hover:text-red-400" aria-label="Email">
              <FaEnvelope />
            </a>
            <a href="https://github.com/yourgithub" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-white" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/yourlinkedin" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-400" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://twitter.com/yourtwitter" target="_blank" rel="noreferrer" className="text-gray-400 hover:text-blue-300" aria-label="Twitter">
              <FaTwitter />
            </a>
          </div>
        </div>

        {/* Right Side: Newsletter */}
        <div className="w-full md:w-auto text-center md:text-right">
          <h4 className="text-lg font-semibold mb-2">Stay Updated</h4>
          <form className="flex items-center justify-center md:justify-end space-x-2">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 rounded-md text-black text-sm w-52 focus:outline-none"
            />
            <button
              type="submit"
              className="bg-red-400 hover:bg-blue-600 px-4 py-2 text-sm rounded-md"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </footer>
  );
}
