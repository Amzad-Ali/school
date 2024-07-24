import React from "react";

export default function Home() {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://www.naperville203.org/cms/lib/IL01904881/Centricity/Domain/9/20221110_085746.jpg')`,
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative p-4 flex items-center justify-center h-full">
        <section className="p-8 rounded-lg shadow-lg max-w-lg text-white backdrop-blur-md bg-black bg-opacity-60">
          <h2 className="text-6xl font-bold mb-4 animate-fadeIn">
            Welcome to Springdale Public School
          </h2>
          <p className="text-lg text-gray-300 mb-6 animate-fadeIn animation-delay-2">
            Where we nurture young minds for a brighter future.
          </p>
          <button className="px-6 py-2 bg-green-600 text-white rounded-full hover:bg-green-700 transition-transform transform hover:scale-105 duration-300 animate-fadeIn animation-delay-4 shadow-lg">
            Learn More
          </button>
        </section>
      </div>
    </main>
  );
}

// Additional styles for animations and enhancements
const styles = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(20px); }
    to { opacity: 1; transform: translateY(0); }
  }
  .animate-fadeIn {
    animation: fadeIn 1s ease-out forwards;
  }
  .animation-delay-2 {
    animation-delay: 0.5s;
  }
  .animation-delay-4 {
    animation-delay: 1s;
  }
  .shadow-lg {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.3);
  }
`;

const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = styles;
document.head.appendChild(styleSheet);
