import React from 'react';
import { Link } from 'react-router-dom';

const AdmissionsPage = () => {
    return (
        <div className="relative min-h-screen bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100">
            {/* Main Content */}
            <main className="absolute top-0 left-0 right-0 bottom-0 z-10 w-full max-w-6xl p-8 mx-auto bg-white bg-opacity-90 rounded-lg shadow-lg mt-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Admission Process and Criteria */}
                    <div className="lg:pr-4">
                        <h2 className="text-2xl font-bold mb-4">Admission Process and Criteria</h2>
                        <p className="mb-4">Admission forms are available for download. Submit the completed form along with required documents at the school office.</p>
                        <p className="mb-4">Admission is based on merit and availability of seats. Entrance tests may be conducted for certain grades.</p>
                        
                        {/* Important Dates and Deadlines */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Important Dates and Deadlines for Admission</h2>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>Admission Form Availability: March 1st</li>
                                <li>Last Date for Submission: March 31st</li>
                                <li>Entrance Test: April 15th</li>
                                <li>Announcement of Results: April 30th</li>
                            </ul>
                        </div>
                    </div>

                    {/* Downloadable Admission Forms */}
                    <div className="lg:pl-4">
                        <h2 className="text-2xl font-bold mb-4">Downloadable Admission Forms</h2>
                        <Link to="/path-to-formA.pdf" className="text-blue-500 underline mb-4 inline-block" download>Download Form </Link>
                        
                        {/* Admission Form */}
                        <div className="mt-8">
                            <h2 className="text-2xl font-bold mb-4">Admission Form</h2>
                            <form className="bg-gray-100 p-6 rounded-lg shadow-md">
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">Name</label>
                                    <input id="name" type="text" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">Email</label>
                                    <input id="email" type="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                                </div>
                                <div className="mb-4">
                                    <label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">Phone</label>
                                    <input id="phone" type="tel" className="w-full px-3 py-2 border border-gray-300 rounded-lg" />
                                </div>
                                <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-lg">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default AdmissionsPage;
