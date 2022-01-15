import React from 'react'
import courses from './courses.json'
import {Link} from 'react-router-dom'


const Courses = () => {
    console.log(courses)
    return (
        <div className="courses">
            <h1>COURSES</h1>
            <div className="course-ads">
                {Object.keys(courses).map(keyName => {
                    const course = courses[keyName];
                    return (
                        <Link style={{ textDecoration: 'none', color: 'black' }} key={keyName}
                            className="link"
                            to={`/courses/${keyName}`}>
                            <img src={course.image} height={250} width={380} alt="shoe" />
                            <h1 className="courseName">{course.title}</h1>

                            <div class="courseDesc">
                                <h3>Duration : {course.duration}</h3>
                                <h3>Eligibility : {course.eligibility}</h3>
                                <h3>Level : {course.level}</h3>
                                <h3>Fees : {course.fees}</h3>
                            </div>
                        </Link>)
                })}
            </div>
        </div>
    )

}

export default Courses;