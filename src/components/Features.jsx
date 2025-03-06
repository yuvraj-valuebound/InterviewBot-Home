import React from "react";
import { useInView } from "react-intersection-observer";

const features = [
  { title: "Smart Domain Detection", icon: "🧠" },
  { title: "Real-time Performance Analysis", icon: "📊" },
  { title: "Custom Question Generation", icon: "❓" },
  { title: "Behavioral Assessment", icon: "🧑‍🤝‍🧑" },
  { title: "Technical Skill Evaluation", icon: "💻" },
  { title: "Personality Insights", icon: "🔍" },
  { title: "Automated Scoring", icon: "🏆" },
  { title: "Interview Recording", icon: "🎥" },
  { title: "Detailed Reports", icon: "📝" },
];

const FeatureCard = ({ title, icon }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div
      ref={ref}
      className={`bg-white p-6 rounded-lg shadow-md transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
};

const Features = () => {
  return (
    <section id="features" className="py-20 bg-accent">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
