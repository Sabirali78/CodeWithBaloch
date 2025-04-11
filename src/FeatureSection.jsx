import { FaMobileAlt, FaUserAlt, FaFlask, FaPuzzlePiece, FaAtom, FaEnvelope, FaFileAlt, FaCloudUploadAlt, FaBullhorn } from "react-icons/fa";

const features = [
  {
    icon: <FaMobileAlt className="text-3xl text-red-400" />,
    title: "Responsive Design",
    desc: "responsive & works perfectly in all devices."
  },
  {
    icon: <FaUserAlt className="text-3xl text-red-400" />,
    title: "User Friendly",
    desc: "It is easy to use for any technical & nontechnical People."
  },
  {
    icon: <FaFlask className="text-3xl text-red-400" />,
    title: "Creative Design",
    desc: "It comes with creative & smart design layout."
  },
  {
    icon: <FaPuzzlePiece className="text-3xl text-red-400" />,
    title: "Icon Font",
    desc: "It comes with most popular FontAwesome."
  },
  {
    icon: <FaAtom className="text-3xl text-red-400" />,
    title: "Google Font",
    desc: "600 Google Fonts. You can change font for all elements easily."
  },
  {
    icon: <FaEnvelope className="text-3xl text-red-400" />,
    title: "Ajax Contact Form",
    desc: "It comes with ajax contact form which makes messaging much more quicker."
  },
  {
    icon: <FaFileAlt className="text-3xl text-red-400" />,
    title: "Clean Markup",
    desc: "We developed it followed by W3C Markup."
  },
  {
    icon: <FaCloudUploadAlt className="text-3xl text-red-400" />,
    title: "Free Updates",
    desc: "Purchase once & get life-time free updates."
  },
  {
    icon: <FaBullhorn className="text-3xl text-red-400" />,
    title: "Real Support",
    desc: "We provide 7 days a week one by one real support."
  }
];

export default function FeatureSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-12"> Features</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10 text-left">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              {feature.icon}
              <div>
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
