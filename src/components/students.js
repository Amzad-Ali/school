import React from 'react';

const StudentsPage = () => {
    const lifeAtSpringdaleImage = "https://nie-images.s3.amazonaws.com/gall_content/2017/4/2017_4$ugcphoto106_Thursday_2017_192449979.jpg";
    const achievementsImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT3JuFnVslX2C7HeGLwE1xpyI0Tlpf99M6StQ&s";
    const studentCouncilImage = "https://www.shutterstock.com/image-vector/student-council-design-layout-editable-260nw-2308172037.jpg";

    return (
        <main className="p-4 bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Students</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">Discover the vibrant student life, achievements, and leadership opportunities at our institution.</p>
            </div>

            {/* Content Sections */}
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg">
                    {/* Life at Springdale */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition transform hover:scale-105 flex flex-col justify-between">
                        <img src={lifeAtSpringdaleImage} alt="Life at Springdale" className="rounded-t-lg w-full h-48 object-cover" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Life at Springdale</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Extracurricular Activities: Music, Dance, Drama, Art, Sports, Robotics, Debate Club, Science Club
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Clubs and Societies: Literary Society, Environmental Club, Astronomy Club, Coding Club
                            </p>
                        </div>
                    </div>

                    {/* Achievements */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition transform hover:scale-105 flex flex-col justify-between">
                        <img src={achievementsImage} alt="Achievements" className="rounded-t-lg w-full h-48 object-cover" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Achievements</h5>
                            <ul className="list-disc pl-5 space-y-2">
                                <li className="font-normal text-gray-700 dark:text-gray-400">
                                    John Smith - National Level Math Olympiad Winner
                                </li>
                                <li className="font-normal text-gray-700 dark:text-gray-400">
                                    Sarah Lee - Gold Medalist in State Swimming Championship
                                </li>
                                <li className="font-normal text-gray-700 dark:text-gray-400">
                                    Tech Innovators Club - Winners of Inter-School Robotics Competition
                                </li>
                            </ul>
                        </div>
                    </div>

                    {/* Student Council */}
                    <div className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition transform hover:scale-105 flex flex-col justify-between">
                        <img src={studentCouncilImage} alt="Student Council" className="rounded-t-lg w-full h-48 object-cover" />
                        <div className="p-5">
                            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Student Council</h5>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                President: Amy Parker, Grade 12
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Vice President: Rajiv Mehta, Grade 11
                            </p>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                Secretary: Lisa Wong, Grade 10
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default StudentsPage;
