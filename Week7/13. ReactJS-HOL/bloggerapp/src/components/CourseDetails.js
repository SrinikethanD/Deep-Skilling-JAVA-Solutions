import React, { useState } from 'react';
import { courses } from '../data';

const CourseDetails = () => {
    const [viewMode, setViewMode] = useState('all');
    const [isVisible, setIsVisible] = useState(true);

    const renderCourseList = () => {
        switch(viewMode) {
            case 'recent':
                return courses
                    .filter(course => new Date(course.date) > new Date('2021-05-01'))
                    .map(course => (
                        <div key={course.id}>
                            <h3>{course.name}</h3>
                            <p>{course.date}</p>
                        </div>
                    ));
            case 'all':
                return courses.map(course => (
                    <div key={course.id}>
                        <h3>{course.name}</h3>
                        <p>{course.date}</p>
                    </div>
                ));
            default:
                return <p>Invalid view mode</p>;
        }
    };

    const coursedet = {
        true: renderCourseList(),
        false: <p>Course list is hidden</p>
    }[isVisible];

    return (
        <div className="mystyle1">
            <h1>Course Details</h1>
            <div>
                <button onClick={() => setViewMode(viewMode === 'all' ? 'recent' : 'all')}>
                    Toggle View ({viewMode})
                </button>
                <button onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? 'Hide' : 'Show'} Courses
                </button>
            </div>
            {coursedet}
        </div>
    );
};

export default CourseDetails;
