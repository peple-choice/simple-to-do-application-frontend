import React, { Component } from 'react';
import LoginForm from '../layouts/LoginForm';
import { Redirect } from "react-router-dom";

class Login extends Component {

    constructor(props) {
        super(props);
        console.log(props.title);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
            redirect: null
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        console.log(this.state);
        console.log('A name was submitted: ' + this.state.username);
        console.log('A name was submitted: ' + this.state.password);
        event.preventDefault();
        const loginCredentials = {
            "username": this.state.username,
            "password": this.state.password
        };
        this.postData('http://localhost:9010/aws/rest/api/v1/userSignOn', loginCredentials)
            .then((result) => {
                console.log(result);
                if (result.length > 0) {
                    window.sessionStorage.setItem('userdetails', JSON.stringify(result[0]));
                    this.setState({
                        isLoaded: true,
                        items: result[0],
                        redirect: "/createproject"
                    });
                    console.log("Redirecting to createproject");
                    window.location.href = '/createproject';
                } else {
                    this.setState({
                        isLoaded: true,
                        error: "Invalid login credentials!"
                    });
                }
            },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                })
    }

    async postData(url = '', data = {}) {
        const postBody = {
            headers: { "Content-Type": "application/json; charset=utf-8" },
            method: 'POST',
            body: JSON.stringify(data)
        };
        const response = await fetch(url, postBody);
        return await response.json();
    }

    componentDidMount() {
        console.log("[Login.js] didMount called");
    }


    render() {
        const { error, isLoaded } = this.state;
        if (this.state.redirect) {
            return <Redirect to={this.state.redirect} />
        }
        if (error && isLoaded) {
            return (
                <LoginForm submit={this.handleSubmit} changed={this.handleChange} error={error} isLoaded={isLoaded} />
            )
        } else {
            return (
                <LoginForm submit={this.handleSubmit} changed={this.handleChange} error={error} isLoaded={isLoaded} />
            )
        }
    }

}

export default Login;