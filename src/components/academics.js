import React from "react";

export default function Academic() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100">
      {/* Header */}
      <div className="bg-gradient-to-r from-teal-500 via-blue-500 to-indigo-600 text-white shadow-lg rounded-lg w-full max-w-6xl mb-6 p-6">
        <h2 className="text-3xl font-bold mb-4">ACADEMICS</h2>
        <section className="mb-4">
          <h3 className="text-xl font-semibold mb-2">Curriculum Overview</h3>
          <p>
            Explore our comprehensive curriculum designed to provide students with a well-rounded education.
          </p>
        </section>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 w-full max-w-6xl bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Image */}
        <div className="lg:w-1/2 p-4">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTugFZUQfrpwnxEyxu-2a5bYTu2Gz7_rLjqqA&s"
            alt="Education"
            className="w-full h-full object-cover rounded-lg shadow-md transition-transform transform hover:scale-105"
          />
        </div>
        {/* Content */}
        <div className="lg:w-1/2 p-6 flex flex-col space-y-6">
          <section className="bg-gradient-to-r from-blue-100 to-blue-300 p-4 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Primary (Grades 1-5)</h3>
            <p className="text-gray-700">
              English, Mathematics, Science, Social Studies, Art, Physical Education
            </p>
          </section>
          <section className="bg-gradient-to-r from-blue-100 to-blue-300 p-4 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Secondary (Grades 6-10)</h3>
            <p className="text-gray-700">
              English, Mathematics, Science (Physics, Chemistry, Biology), Social Studies, Computer Science, Physical Education, Art
            </p>
          </section>
          <section className="bg-gradient-to-r from-blue-100 to-blue-300 p-4 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Senior Secondary (Grades 11-12)</h3>
            <p className="text-gray-700">
              English, Mathematics, Science, Social Studies, Art, Physical Education
            </p>
          </section>
          <section className="bg-gradient-to-r from-blue-100 to-blue-300 p-4 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Teaching Methodologies</h3>
            <p className="text-gray-700">
              We use a blend of traditional and modern teaching techniques to cater to different learning styles.
            </p>
          </section>
          <section className="bg-gradient-to-r from-blue-100 to-blue-300 p-4 rounded-lg shadow-md flex flex-col">
            <h3 className="text-2xl font-semibold text-blue-800 mb-2">Educational Resources</h3>
            <p className="text-gray-700">
              Digital classrooms, interactive learning modules, and access to online educational platforms.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
