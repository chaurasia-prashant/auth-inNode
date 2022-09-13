import React, { Component } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";


export default class UserRegistration extends Component {

    constructor(props) {
        super(props);

        this.onChangeUsername = this.onChangeUsername.bind(this);
        this.onChangeAge = this.onChangeAge.bind(this);
        this.onChangeGender = this.onChangeGender.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            username: '',
            gender: '',
            age: 0,
            dob: new Date(),
            email: "",
            password: "",
            genderList: []
        }
    }

    componentDidMount() {
        this.setState({
            genderList: ["Male", "Female"]
        })
    }

    onChangeUsername(e) {
        this.setState({
            username: e.target.value
        });
    }

    onChangeGender(e) {
        this.setState({
            gender: e.target.value
        });
    }

    onChangeEmail(e) {
        this.setState({
            email: e.target.value
        });
    }

    onChangeAge(e) {
        this.setState({
            age: e.target.value
        });
    }

    onChangeDate(dob) {
        this.setState({
            dob: dob
        });
    }
    onChangePassword(e) {
        this.setState({
            password: e.target.value
        });
    }


    onSubmit(e) {
        e.preventDefault();

        const user = {
            username: this.state.username,
            gender: this.state.gender,
            age: this.state.duration,
            dob: this.state.dob,
            email: this.state.email,
            password: this.state.password,
        }

        console.log(user);

        axios.post('http://localhost:5000/auth/user/register', user)
        .then(res => console.log(res.data));
     

        window.location = '/';


    }

    render() {
        return (
            <div>
                <h3>Register User</h3>
                <div className="form-group">
                        <label>Username: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.username}
                        onChange={this.onChangeUsername}
                        />
                    </div>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Gender: </label>
                        <select ref="userInput"
                            required
                            className="form-control"
                            value='Male'
                            onChange={this.onChangeGender}
                        >
                            {
                                this.state.users.map(function(genderList) {
                                    return <option
                                        key={genderList}
                                        value={genderList}>{genderList}
                                        </option>;
                                })
                            }
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Email: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.email}
                        onChange={this.onChangeEmail}
                        />
                    </div>
                    <div className="form-group">
                        <label>Age: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.age}
                        onChange={this.onChangeAge}
                        />
                    </div>
                    <div className="form-group">
                        <label>Date Of Birth: </label>
                        <div>
                            <DatePicker 
                            selected={this.state.dob}
                            onChange={this.onChangeDate}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Password: </label>
                        <input 
                        type="text"
                        className="form-control"
                        value={this.state.password}
                        onChange={this.onChangePassword}
                        />
                    </div>
                    <div>
                        <input type="submit" value="Register User" className="btn btn-primary"  />
                    </div>

                </form>
            </div>
        )
    }
}