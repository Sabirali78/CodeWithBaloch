import './App.css';
import AboutCards from './AboutCards';  // Import the AboutCards component
import React from 'react';
import FeatureSection from './FeatureSection'; // make sure the path matches
import GallerySection from "./GallerySection";
import ContactSection from "./ContactSection";
import FooterSection from "./FooterSection"; // make sure the path matches



function App() {
  return (
    <div className="min-h-screen bg-gray-300">
      {/* Navigation */}
      <nav className="bg-white shadow-lg">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex justify-between">
            <div className="flex space-x-7">
              <a href="#" className="flex items-center py-4 px-2">
              <img
          src="/images/logo.png"
          alt="Logo"
          className="w-20 h-10 mr-2"
        />                <span className="font-semibold text-gray-500 text-lg">CodeWithBaloch</span>
              </a>
            </div>
            <div className="hidden md:flex items-center space-x-1">
              <a href="#home" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Home</a>
              <a href="#about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</a>
              <a href="#projects" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Projects</a>
              <a href="#contact" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              Hi, I'm Sabir Baloch
            </h1>
            <p className="mt-4 text-lg">
                 CREATIVE <span className='text-red-400 text-6xl'>WEB DEVELOPER</span>
            </p>
          </div>
        </div>
      </section>

{/* About Section */}
<section id="about" className="py-32 bg-white">
  <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="bg-gray-50 p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-12 min-h-[400px]">
    
      {/* About Text */}
      <div className="flex-1">
        <h2 className="text-4xl font-extrabold text-gray-900 mb-6">About Me</h2>
        <p className="text-gray-700 text-lg mb-4">
          I'm a passionate and self-taught Web Developer with a solid background in HTML, CSS, PHP, and MySQL —
          and currently diving into the world of React.js and modern web technologies.
        </p>
        <p className="text-gray-700 text-lg">
          I love solving real-world problems and building responsive, user-friendly websites.
          My backend knowledge allows me to work across the full stack with confidence.
        </p>
      </div>
        
      {/* Profile Image */}
      <div className="flex-shrink-0">
        <img
          src="/images/profile.jpg"
          alt="Profile"
          className="w-64 h-64 rounded-2xl object-cover shadow-md"
        />
      </div>

    </div>
  </div>
  <AboutCards />

</section>





      {/* Projects Section */}
      <section id="projects" className="py-20">
      <GallerySection />
      </section>

      <FeatureSection />



      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-200">
      <ContactSection />

      </section>

      {/* Footer */}
      <FooterSection />

    </div>
  );
}
export default App;