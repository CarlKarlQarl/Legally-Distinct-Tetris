import React, { Component } from 'react'

export default class Stats extends Component {

    state = {
        signUsername: "",
        signPassword: "",
        loginUsername: "",
        loginPassword: "",
        currentUser: "None",
        currentID: null
    }

    handleTyping = (event) => {
        let { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    signUpSubmission = (event) => {
        event.preventDefault()
        let { signUsername, signPassword } = event.target
        // console.log(signUsername.value)
        // console.log(signPassword.value)
        fetch("http://localhost:9000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: signUsername.value,
                password: signPassword.value
            })
        })
        .then(response => response.json())
        .then(user => {
            console.log("Created new user", user.id, user.username)
        })
        .catch(error => console.log(error))

    }
    
    logInSubmission = (event) => {
        event.preventDefault()
        let { loginUsername, loginPassword } = event.target
        // console.log(loginUsername.value)
        // console.log(loginPassword.value)
        fetch("http://localhost:9000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: loginUsername.value,
                password: loginPassword.value
            })
        })
        .then(response => response.json())
        .then(user => {
            localStorage.setItem("token", user.token)
            console.log("Logged in, and got token: ", user.token)
        })
        .then(this.verifyUser)
    }

    logUserOut = () => {
        if (localStorage.token){
            localStorage.removeItem("token")
            this.setState({
                currentUser: "None",
                currentID: null
            })
        }
    }

    componentDidMount = () => {
        this.verifyUser()
    }

    verifyUser = () => {
        if (localStorage.token){
            fetch("http://localhost:9000/verify", {
                headers: {
                    authorization: `Bearer ${localStorage.token}`
                }
            })
            .then(response => response.json())
            .then(decodedToken => {
                this.setState({
                    currentUser: decodedToken.username,
                    currentID: decodedToken.id
                })
            })
            .catch(error => console.log(error))
        }
    }

    render() {
        const { createSPiece, createRandomPiece, startGame, level, score, lines } = this.props

        return (
            <div>
                <button
                    onClick={createSPiece}
                >Add S piece</button>
                <button
                    onClick={createRandomPiece}
                >Add random piece</button>
                <button
                    onClick={startGame}
                >Start</button>
                <p>Level: {level}</p>
                <p>Score: {score}</p>
                <p>Lines: {lines}</p>
    
                <form
                    onSubmit={this.signUpSubmission}
                >
                    <p>Sign-up</p>
                    <input 
                        type="text" 
                        name="signUsername" 
                        placeholder="Enter username" 
                        value={this.state.signUsername}
                        onChange={this.handleTyping}
                    ></input>
                    <input 
                        type="text" 
                        name="signPassword" 
                        placeholder="Enter password" 
                        value={this.state.signPassword}
                        onChange={this.handleTyping}
                    ></input>
                    <input type="submit" value="Sign-up"></input>
                </form>
    
                <form
                    onSubmit={this.logInSubmission}
                >
                    <p>Log in</p>
                    <input 
                        type="text" 
                        name="loginUsername" 
                        placeholder="Enter username" 
                        value={this.state.loginUsername}
                        onChange={this.handleTyping}
                    ></input>
                    <input 
                        type="text" 
                        name="loginPassword" 
                        placeholder="Enter password" 
                        value={this.state.loginPassword}
                        onChange={this.handleTyping}
                    ></input>
                    <input type="submit" value="Log in"></input>
                </form>
                <button
                    onClick={this.logUserOut}
                >Log-out</button>
                <p>Currently logged in: {this.state.currentUser}</p>
            </div>
        )
    }
}
