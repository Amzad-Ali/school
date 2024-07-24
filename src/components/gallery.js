import React from 'react';

const GalleryPage = () => {
    const photos = [
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcStqvqj_Q7NGKkad_tsthc6mSw4KRwjECFsag&s', description: 'Students participating in various sports events.' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNqZMpomQ0KJGiNZ0CU0KnI_cpqzB-yYnu0w&s', description: 'Students presenting their science projects.' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuMeB7c8x5lSPs0_D_nTJjgt-1crgmMfF8gQ&s', description: 'Students performing in the cultural fest.' },
        { src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhH9yDii_FgurtCqx48rw34W5RCbGQV3QPng&s', description: 'A glimpse of our interactive classrooms.' },
        { src: 'https://png.pngtree.com/thumb_back/fw800/background/20220209/pngtree-students-reading-book-at-library-in-school-knowledge-learning-concentration-photo-image_29242264.jpg', description: 'Students reading and studying in the school library.' },
    ];

    const videos = [
        { src: 'https://www.youtube.com/embed/pmvr2D-0Km0', description: 'Virtual tour of Springdale Public School.' },
        { src: 'https://www.youtube.com/embed/WUeBb1ZxAz0?si=bflqOnIo65k8aU0R', description: 'Highlights from the Annual Function 2023.' },
    ];

    return (
        <main className="p-4 bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100">
            {/* Header */}
            <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Gallery</h1>
                <p className="text-lg text-gray-600 dark:text-gray-300">Explore our vibrant school life through photos and videos.</p>
            </div>

            {/* Photos Section */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Photos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {photos.map((photo, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <img src={photo.src} alt={photo.description} className="rounded-t-lg w-full h-48 object-cover" />
                            <div className="p-4">
                                <p className="font-normal text-gray-700 dark:text-gray-400">{photo.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Videos Section */}
            <div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Videos</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {videos.map((video, index) => (
                        <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700">
                            <iframe
                                width="100%"
                                height="200"
                                src={video.src}
                                title={video.description}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                className="rounded-t-lg"
                            ></iframe>
                            <div className="p-4">
                                <p className="font-normal text-gray-700 dark:text-gray-400">{video.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default GalleryPage;
