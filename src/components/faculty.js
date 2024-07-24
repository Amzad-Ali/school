import React from "react";
import { Link } from "react-router-dom";
export default function Faculty() {

    const teacher = [
        { name: 'Sophia Davis', work: 'Science Teacher, M.Sc. in Chemistry, 12 years of teaching experience.', Image: 'https://akm-img-a-in.tosshub.com/indiatoday/images/story/201709/yt-story_647_090517015649.jpg?VersionId=wIQL131pthcasFzFyaoG5zYUwtLu961c' },
        { name: 'John Doe', work: 'Principal, M.Ed, 20 years of experience in educational administration', Image: 'https://cdn.elearningindustry.com/wp-content/uploads/2019/10/professional-development-tools-for-teachers.jpg' },
        { name: 'Jane Smith', work: 'Vice Principal, M.Sc. in Physics, 15 years of teaching experience.', Image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSR36q3w1Rr3dgfeGohbpcEWzKc_g-ChZrROg&s' },
        { name: 'Emily Johnson', work: 'English Teacher, M.A. in English, 10 years of teaching experience.', Image: 'https://media.istockphoto.com/id/1330255704/photo/confident-smiling-indian-school-teacher-with-students-in-background.jpg?s=612x612&w=0&k=20&c=jYxM1L_vZrAIQi7KmZ3zl7vhg8kltqo5vZOlXJoiNBk=' },
        { name: 'Michael Brown', work: 'Mathematics Teacher, M.Sc. in Mathematics, 8 years of teaching experience.', Image: 'https://img.freepik.com/free-vector/teacher-standing-near-blackboard-holding-stick-isolated-flat-vector-illustration-cartoon-woman-character-near-chalkboard-pointing-alphabet_74855-8600.jpg' },
        { name: 'David Wilson', work: ' Computer Science Teacher, B.Tech in Computer Science, 5 years of teaching experience.', Image: 'https://img.freepik.com/premium-vector/woman-teacher-with-chalkboard-classroom_24877-68418.jpg' }
    ]

    return (
        <main className="p-4 bg-gradient-to-r from-teal-100 via-blue-100 to-indigo-100">
        <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">Faculty</h1>
            <p className="text-lg text-gray-600 dark:text-gray-300">Meet our dedicated and experienced faculty members</p>
        </div>
        <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-screen-lg">
                {teacher.map((data, index) => (
                    <div key={index} className="bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800 dark:border-gray-700 transition transform hover:scale-105">
                        <Link to="#">
                            <img className="rounded-t-lg w-full h-48 object-cover" src={data.Image} alt="" />
                        </Link>
                        <div className="p-5">
                            <Link to="#">
                                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{data.name}</h5>
                            </Link>
                            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{data.work}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </main>
    )
}