import React from 'react';
import {CourseService} from "../service/CourseService";
import CourseTable from "../components/CourseTable";

export default function EnrolledCourses() {
    // 模拟setState
    const [courses, setCourses] = React.useState([]);
    // 模拟componentDidMount
    React.useEffect(getEnrolledCourses, []);

    function getEnrolledCourses() {
        CourseService.getStudentCourses()
            .then(response => {
                setCourses(response.data);
            }).catch(error => {
                console.error(error);
        })
    }

    return (
        <div>
            <CourseTable courses={courses}
                         buttonText="Drop"
                         buttonColor="error"
                         handleButtonClick={dropCourse}/>
        </div>
    )

    function dropCourse(courseName) {
        CourseService.dropCourse(courseName)
            .then(response => {
                alert(`${courseName} dropped successfully!`);
                // window.location.reload();
                // 不用load整个页面，可以只刷新CourseTable Component.
                getEnrolledCourses();
            }).catch(error => {
                console.error(error);
                alert(`${courseName} dropped failed due to ${error}`);
        })
    }
}