const initState = {
    students: null
}

export default (state = initState, action) => {
    switch (action.type) {
        case "ADD_STUDENT":
            return action.studentData
        default:
            return state;
    }
}