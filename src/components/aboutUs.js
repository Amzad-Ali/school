import React from "react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100 p-6 pt-8">
      <div className="bg-white shadow-xl rounded-lg flex flex-col md:flex-row h-auto md:h-[500px] overflow-hidden">
        {/* Content Section */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-between overflow-auto">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-6">ABOUT US</h2>
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">History</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                Founded in 1985, Springdale Public School has been dedicated to
                providing quality education and holistic development to students.
              </p>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Vision</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To create a learning environment that fosters academic excellence,
                critical thinking, and ethical values.
              </p>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">Mission</h3>
              <p className="text-gray-600 text-base leading-relaxed">
                To empower students with the knowledge, skills, and values needed
                to thrive in a dynamic world.
              </p>
            </section>
            <section className="mb-8">
              <h3 className="text-2xl font-semibold text-gray-700 mb-4">
                Message from the Principal
              </h3>
              <p className="text-gray-600 text-base leading-relaxed">
                At Springdale, we believe in nurturing the potential of every
                student and guiding them towards a successful future.
              </p>
            </section>
          </div>
          <section>
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">
              Infrastructure and Facilities
            </h3>
            <ul className="list-disc list-inside text-gray-600 text-base leading-relaxed">
              <li>State-of-the-art science and computer labs</li>
              <li>Spacious and well-equipped classrooms</li>
              <li>
                Library with a vast collection of books and digital resources
              </li>
              <li>
                Sports facilities including a playground, gymnasium, and
                swimming pool
              </li>
            </ul>
          </section>
        </div>
        {/* Image Section */}
        <div className="w-full md:w-1/2">
          <img
            src="https://cdn.pixabay.com/photo/2024/03/27/15/19/ai-generated-8659303_640.jpg"
            alt="School"
            className="object-cover w-full h-full"
          />
        </div>
      </div>
    </div>
  );
}
