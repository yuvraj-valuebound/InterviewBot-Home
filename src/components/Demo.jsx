import React from "react";

const Demo = () => {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                className="w-full h-full rounded-lg shadow-lg"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="AI Interview Assistant Demo"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
          <div className="w-full md:w-1/2 md:pl-12">
            <h2 className="text-4xl font-bold mb-6">See It in Action</h2>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Intelligent question generation
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Real-time performance analysis
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-primary mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clipRule="evenodd"
                  />
                </svg>
                Comprehensive candidate evaluation
              </li>
            </ul>
            <button className="btn-primary">Schedule Demo</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Demo;
