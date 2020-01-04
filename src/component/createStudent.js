import React from 'react';
import {AddStudents} from '../redux/AllActions';
import {connect} from 'react-redux';
import Display from './Display';

class CreateStudent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            userFirstName: '',
            userLastName: '',
            userPhoneNumber: '',
            userEmailID: '',
            userAge: '',
            userImage: ''
        }
    }

    userInputChange = (userData) => {
        this.setState({[userData.target.name]:userData.target.value})
    }

    userSubmit = (inputSubmit) => {
        inputSubmit.preventDefault();
        this.props.AddStudents(this.state)
        // console.log(this.state)
    }

    render(){
        return(
            <React.Fragment>
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-5">
                            <div>
                                <h1>Add New Masai Student</h1>
                            </div>
                            <form className="mt-5" onSubmit={this.userSubmit}>
                                <div className="form-row form-group">
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="First name" name="userFirstName" value={this.state.userFirstName} onChange={this.userInputChange} />
                                    </div>
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Last name" name="userLastName" value={this.state.userLastName} onChange={this.userInputChange} />
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col">
                                    <input className="number" className="form-control" placeholder="Phone Number" name="userPhoneNumber" value={this.state.userPhoneNumber} onChange={this.userInputChange} />
                                    </div>
                                    <div className="col">
                                    <input type="email" className="form-control" placeholder="Email Id" name="userEmailID" value={this.state.userEmailID} onChange={this.userInputChange} />
                                    </div>
                                </div>
                                <div className="form-row form-group">
                                    <div className="col">
                                    <input type="number" className="form-control" placeholder="Age" name="userAge" value={this.state.userAge} onChange={this.userInputChange} />
                                    </div>
                                    <div className="col">
                                    <input type="text" className="form-control" placeholder="Profile Picture" name="userImage" value={this.state.userImage} onChange={this.userInputChange} />
                                    </div>
                                </div>
                                <button type="submit" className="btn btn-danger font-weight-bolder btn-lg">Add New Student</button>
                            </form>
                        </div>
                    </div>
                </div>
                <Display />
            </React.Fragment>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddStudents: studentInfo => dispatch(AddStudents(studentInfo))
    }
}

export default connect(null, mapDispatchToProps)(CreateStudent)