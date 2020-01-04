import React from 'react';
import {connect} from 'react-redux'

function Display(props){
    return(
        <React.Fragment>
            <div class="container">
                <div class="row">
                    <div class="col-10">
                        <h1>All Students Details</h1>
                        <p>First Name: {props.allStudents.userFirstName}</p>
                        <p>Last Name: {props.allStudents.userLastName}</p>
                        <p>Phone: {props.allStudents.userPhoneNumber}</p>
                        <p>Email: {props.allStudents.userEmailID}</p>
                        <p>age: {props.allStudents.userAge}</p>
                        <img src={props.allStudents.userImage} />
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        allStudents: state.students
    }
}

export default connect (mapStateToProps)(Display)