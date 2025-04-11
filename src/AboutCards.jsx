import React from 'react';

const AboutCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
      {/* Card 1: Skills Summary */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">🛠 Skills Summary</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Frontend:</strong> HTML, CSS, Tailwind CSS, React.js </li>
          <li><strong>Backend:</strong> PHP, MySQL</li>
          <li><strong>Tools:</strong> Git, VS Code, WordPress (exploring), Kodular (for app prototypes), Flutter</li>
        </ul>
      </div>

      {/* Card 2: Why Work With Me */}
      <div className="bg-white shadow-md rounded-2xl p-6 border border-gray-200">
        <h2 className="text-xl font-bold mb-4">🔍 Why Work With Me?</h2>
        <ul className="list-disc list-inside space-y-2 text-gray-700">
          <li>I pay attention to <strong>clean, maintainable code</strong></li>
          <li>I have a <strong>problem-solving mindset</strong></li>
          <li>I'm driven by <strong>curiosity</strong> and love building things that help people</li>
        </ul>
      </div>
    </div>
  );
};

export default AboutCards;
