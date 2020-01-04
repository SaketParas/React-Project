const AddStudents = studentData => {
    // console.log(studentData)
    return{
        type: "ADD_STUDENT",
        studentData
    }
}

export {AddStudents}