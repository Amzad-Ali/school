import React from 'react';

const ContactUsPage = () => {
    return (
        <main className="p-6 bg-gradient-to-r from-green-100 via-white to-gray-100 min-h-screen">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white">Contact Us</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">We’d love to hear from you!</p>
            </div>

            {/* Contact Information and Form */}
            <section className="flex flex-col lg:flex-row lg:justify-between lg:space-x-6 mb-8">
                {/* Contact Information */}
                <div className="lg:w-1/2 mb-8 lg:mb-0">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
                    <div className="bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 p-6 transition-transform transform hover:scale-105">
                        <p className="text-lg font-semibold text-gray-800 dark:text-gray-200">Address:</p>
                        <p className="text-gray-600 dark:text-gray-400">Springdale Public School, 123 Education Lane, Cityville, State, ZIP Code</p>
                        <p className="text-lg font-semibold mt-4 text-gray-800 dark:text-gray-200">Phone:</p>
                        <p className="text-gray-600 dark:text-gray-400">+1 (123) 456-7890</p>
                        <p className="text-lg font-semibold mt-4 text-gray-800 dark:text-gray-200">Email:</p>
                        <p className="text-gray-600 dark:text-gray-400">info@springdale.edu</p>
                    </div>
                </div>

                {/* Contact Form */}
                <div className="lg:w-1/2">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Form</h2>
                    <form className="bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700 p-6 transition-transform transform hover:scale-105">
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Name</label>
                            <input
                                type="text"
                                id="name"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                placeholder="Your Name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                placeholder="Your Email"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 text-sm font-medium mb-2">Message</label>
                            <textarea
                                id="message"
                                rows="4"
                                className="block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-300"
                                placeholder="Your Message"
                                required
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full px-4 py-2 bg-green-600 text-white font-semibold rounded-md shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 transition-transform transform hover:scale-105"
                        >
                            Send Message
                        </button>
                    </form>
                </div>
            </section>

            {/* Google Maps Integration */}
            <section>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Our Location</h2>
                <div className="bg-white border border-gray-200 rounded-lg shadow-xl dark:bg-gray-800 dark:border-gray-700">
                    <iframe
                        width="100%"
                        height="400"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.040304133328!2d-122.4194154846807!3d37.7749292797591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808e394e1c79%3A0x7e9a72a5ff6ff9b5!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1602178720158!5m2!1sen!2sus"
                        title="Google Maps Location"
                        frameBorder="0"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex="0"
                        className="rounded-b-lg"
                    ></iframe>
                </div>
            </section>
        </main>
    );
};

export default ContactUsPage;
