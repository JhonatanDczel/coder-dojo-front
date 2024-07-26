
import { useEffect, useState } from 'react';
import React from 'react';
import { useParams } from 'react-router-dom';
import Sidebar from '../components/common/Sidebar';
import Navbar from '../components/common/Navbar';
import CourseInfo from '../components/course/CourseInfo';

const CourseDetail = ({data}) => {

    // const [course, setCourse] = useState(null);

    // useEffect(() => {
    //     course
    // } , [data])

    return (
        <div className="flex">
            <Sidebar />
            <div className="ml-64 w-full">
                <Navbar />
                <div className="pt-16">
                    <CourseInfo data={data} />
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
