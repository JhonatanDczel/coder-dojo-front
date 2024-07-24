import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import CourseInfo from '../components/course/CourseInfo';

const CourseDetail = () => {
    const { id } = useParams();

    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 w-full">
                <Navbar />
                <div className="pt-16">
                    <CourseInfo courseId={id} />
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
