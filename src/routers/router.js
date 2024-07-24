import React from "react";
import { Route, Routes } from 'react-router-dom';
import Home from "../components/home";
import ContactUsPage from "../components/contact";
import About from "../components/aboutUs";
import Faculty from "../components/faculty";
import AdmissionsPage from "../components/admissions";
import StudentsPage from "../components/students";
import Academic from "../components/academics";
import GalleryPage from "../components/gallery";

export default function Pagerouter() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact" element={<ContactUsPage />} />
                <Route path="/about" element={<About />} />
                <Route path="/faculty" element={<Faculty />} />
                <Route path="/admission" element={<AdmissionsPage />} />
                <Route path="/student" element={<StudentsPage />} />
                <Route path="/academic" element={< Academic />} />
                <Route path="/gallery" element={< GalleryPage />} />
            </Routes>
        </>

    )
}