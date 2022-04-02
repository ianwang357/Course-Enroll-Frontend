import React from 'react';
import CourseTable from '../components/CourseTable';
import { CourseService } from '../service/CourseService';

export default class AllCourses extends React.Component {
    state = {
        courses: []
    }

    componentDidMount() {
        CourseService.getAllCourses().then(response => {
            this.setState({
                courses: response.data
            })
        }).catch(error => {
            console.log(error);
        });
    }

    render() {
        return (
            <div>
                <CourseTable courses={this.state.courses}
                             buttonText="Enroll"
                             buttonColor="success"
                             handleButtonClick={this.enrollCourse}/>
            </div>
        )
    }

    enrollCourse(courseName) {
        CourseService.enrollCourse(courseName)
            .then(response => {
                alert(`${courseName} enrolled successfully!`);
            }).catch(error => {
                alert(`${courseName} enrolled failed due to ${error}!`);
        });
    }
}