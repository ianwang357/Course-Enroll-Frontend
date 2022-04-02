import axios from "../axios" //using customized axios

export const CourseService = {
    getAllCourses: function() {
        return axios.get('/api/courses')
    },
    getStudentCourses: function () {
        return axios.get('/api/student/courses')
    },
    enrollCourse: function (courseName) {
        courseName = encodeURI(courseName);
        return axios.post(`/api/student/course/${courseName}`)
    },
    dropCourse: function(courseName) {
        courseName = encodeURI(courseName);
        return axios.delete(`/api/student/course/${courseName}`)
    }
}